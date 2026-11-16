#!/usr/bin/env node
// Take the screenshots for a PRtifact "screens" entry: drive a headless Chrome (or Edge) through a short
// plan and save one picture per step. No packages needed: Node 22 or newer has WebSocket built in.
//
//   node screens.mjs plan.json
//
// plan.json:
// {
//   "out": "shots/before",                 folder for the pictures and log.txt (made if missing)
//   "width": 1280, "height": 800,          the window; "scale": 1 (2 for sharp pictures, bigger files)
//   "browser": "C:/.../chrome.exe",        optional; otherwise the usual Chrome and Edge paths are tried
//   "now": "2026-11-16T09:00:00",          optional: the page's clock starts at this local time and runs on
//                                          (only the page's JavaScript sees it, not the server)
//   "mocks": [                             optional: answer some requests without a server
//     { "match": "/api/v3/auth/login", "status": 401, "json": { "message": "Invalid username or password" } }
//   ],
//   "steps": [
//     { "go": "http://localhost:3002/login" },
//     { "type": ["#email", "someone@example.com"] },
//     { "click": "button[type=submit]" },   a real mouse click at the middle of the element: whatever is
//                                           on top there gets it, and log.txt says what that was
//     { "clickAt": [640, 760] },             a real click at a point
//     { "select": ["#pageSize", "50"] },     set a <select> and fire its change event
//     { "key": "Enter" },
//     { "waitFor": ".alert" },               up to 10 s
//     { "wait": 800 },
//     { "eval": "document.title" },          result goes to log.txt
//     { "shot": "1-start" },                 saves 1-start.png (the window); add "clip": "selector" for one element
//   ]
// }
//
// Every picture is of a real page on a local copy. Never point a plan at a production site, and never
// put a real password in a plan file.
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { tmpdir } from 'node:os';

const planPath = process.argv[2];
if (!planPath) { console.error('usage: node screens.mjs plan.json'); process.exit(2); }
const plan = JSON.parse(readFileSync(planPath, 'utf8'));
const out = resolve(dirname(resolve(planPath)), plan.out || 'shots');
mkdirSync(out, { recursive: true });
const log = [];
const note = (line) => { log.push(line); console.log(line); };

const candidates = [plan.browser,
  'C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'];
const browserPath = candidates.find((p) => p && existsSync(p));
if (!browserPath) { console.error('No Chrome or Edge found; set "browser" in the plan.'); process.exit(2); }

const width = plan.width || 1280, height = plan.height || 800, scale = plan.scale || 1;
const profile = mkdtempSync(join(tmpdir(), 'prtifact-screens-'));
const browser = spawn(browserPath, ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`,
  `--window-size=${width},${height}`, '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', 'about:blank'],
  { stdio: ['ignore', 'ignore', 'pipe'] });

const port = await new Promise((done, fail) => {
  let text = '';
  const timer = setTimeout(() => fail(new Error('browser did not start')), 20000);
  browser.stderr.on('data', (chunk) => {
    text += chunk;
    const m = text.match(/DevTools listening on ws:\/\/[^:]+:(\d+)\//);
    if (m) { clearTimeout(timer); done(+m[1]); }
  });
});
const pages = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
const ws = new WebSocket(pages.find((p) => p.type === 'page').webSocketDebuggerUrl);
await new Promise((done) => ws.addEventListener('open', done, { once: true }));

let nextId = 1;
const waiting = new Map(), listeners = [];
ws.addEventListener('message', (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && waiting.has(msg.id)) {
    const { done, fail } = waiting.get(msg.id); waiting.delete(msg.id);
    if (msg.error) { fail(new Error(msg.error.message)); } else { done(msg.result); }
  } else if (msg.method) { listeners.forEach((fn) => fn(msg)); }
});
const send = (method, params = {}) => new Promise((done, fail) => {
  const id = nextId++; waiting.set(id, { done, fail }); ws.send(JSON.stringify({ id, method, params }));
});
const once = (method, ms = 15000) => new Promise((done) => {
  const fn = (msg) => { if (msg.method === method) { cleanup(); done(true); } };
  const timer = setTimeout(() => { cleanup(); done(false); }, ms);
  const cleanup = () => { clearTimeout(timer); const i = listeners.indexOf(fn); if (i >= 0) { listeners.splice(i, 1); } };
  listeners.push(fn);
});
const sleep = (ms) => new Promise((done) => setTimeout(done, ms));
const js = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) { throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text); }
  return r.result.value;
};
const q = (s) => JSON.stringify(s);

await send('Page.enable'); await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: scale, mobile: false });
if (plan.now) {
  const start = new Date(plan.now).getTime();
  if (Number.isNaN(start)) { throw new Error(`"now" is not a date: ${plan.now}`); }
  note(`page clock starts at ${plan.now}`);
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `(() => {
    const Real = Date, shift = ${start} - Real.now();
    function FakeDate(...a) { if (!new.target) { return new Real(Real.now() + shift).toString(); }
      return a.length ? new Real(...a) : new Real(Real.now() + shift); }
    FakeDate.prototype = Real.prototype; FakeDate.now = () => Real.now() + shift; FakeDate.parse = Real.parse; FakeDate.UTC = Real.UTC;
    window.Date = FakeDate; })();` });
}
listeners.push((msg) => {
  if (msg.method === 'Runtime.consoleAPICalled') {
    note(`  console.${msg.params.type}: ${msg.params.args.map((a) => a.value ?? a.description ?? '').join(' ')}`.slice(0, 400));
  }
});
const mocks = plan.mocks || [];
if (mocks.length) {
  await send('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
  listeners.push(async (msg) => {
    if (msg.method !== 'Fetch.requestPaused') { return; }
    const { requestId, request } = msg.params;
    const mock = mocks.find((m) => request.url.includes(m.match) && (!m.method || m.method === request.method));
    if (!mock) { send('Fetch.continueRequest', { requestId }).catch(() => {}); return; }
    const body = mock.json !== undefined ? JSON.stringify(mock.json) : (mock.body || '');
    note(`  mock: ${request.method} ${request.url} -> ${mock.status || 200}`);
    send('Fetch.fulfillRequest', { requestId, responseCode: mock.status || 200,
      responseHeaders: [{ name: 'Content-Type', value: mock.json !== undefined ? 'application/json' : (mock.contentType || 'text/html') },
        { name: 'Access-Control-Allow-Origin', value: '*' }],
      body: Buffer.from(body).toString('base64') }).catch(() => {});
  });
}

// what sits on top at a point, as a short description
const topAt = (x, y) => js(`(() => { const e = document.elementFromPoint(${x}, ${y}); if (!e) return 'nothing';
  const t = (e.innerText || e.value || '').trim().replace(/\\s+/g, ' ').slice(0, 40);
  return e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (typeof e.className === 'string' && e.className.trim() ? '.' + e.className.trim().split(/\\s+/).slice(0, 3).join('.') : '') + (t ? ' "' + t + '"' : ''); })()`);
async function clickAt(x, y) {
  note(`  on top at (${Math.round(x)}, ${Math.round(y)}): ${await topAt(x, y)}`);
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y });
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 });
}
async function waitFor(selector, ms = 10000) {
  for (const end = Date.now() + ms; Date.now() < end; await sleep(150)) {
    if (await js(`!!document.querySelector(${q(selector)})`)) { return true; }
  }
  throw new Error(`never appeared: ${selector}`);
}

let failed = false;
try {
  for (const [i, step] of (plan.steps || []).entries()) {
    const [verb] = Object.keys(step).filter((k) => k !== 'clip');
    note(`${i + 1}. ${verb} ${JSON.stringify(step[verb])}`);
    if (verb === 'go') {
      const loaded = once('Page.loadEventFired');
      await send('Page.navigate', { url: step.go });
      if (!(await loaded)) { note('  (no load event in 15 s; going on)'); }
      await sleep(600);
    } else if (verb === 'type') {
      const [selector, text] = step.type;
      await waitFor(selector);
      await js(`(() => { const e = document.querySelector(${q(selector)}); e.focus(); if (e.select) e.select(); })()`);
      await send('Input.insertText', { text });
    } else if (verb === 'click') {
      await waitFor(step.click);
      const r = await js(`(() => { const e = document.querySelector(${q(step.click)}); e.scrollIntoView({ block: 'center' });
        const b = e.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; })()`);
      await clickAt(r.x, r.y);
      await sleep(300);
    } else if (verb === 'clickAt') {
      await clickAt(step.clickAt[0], step.clickAt[1]); await sleep(300);
    } else if (verb === 'select') {
      const [selector, value] = step.select;
      await waitFor(selector);
      await js(`(() => { const e = document.querySelector(${q(selector)}); e.value = ${q(value)};
        e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); })()`);
      await sleep(300);
    } else if (verb === 'key') {
      const key = step.key, code = key.length === 1 ? 'Key' + key.toUpperCase() : key;
      const vk = { Enter: 13, Tab: 9, Escape: 27 }[key] || key.toUpperCase().charCodeAt(0);
      await send('Input.dispatchKeyEvent', { type: 'keyDown', key, code, windowsVirtualKeyCode: vk, text: key === 'Enter' ? '\r' : undefined });
      await send('Input.dispatchKeyEvent', { type: 'keyUp', key, code, windowsVirtualKeyCode: vk });
      await sleep(200);
    } else if (verb === 'waitFor') {
      await waitFor(step.waitFor);
    } else if (verb === 'wait') {
      await sleep(step.wait);
    } else if (verb === 'eval') {
      note(`  = ${JSON.stringify(await js(step.eval))}`.slice(0, 600));
    } else if (verb === 'shot') {
      const params = { format: 'png' };
      if (step.clip) {
        const b = await js(`(() => { const r = document.querySelector(${q(step.clip)}).getBoundingClientRect();
          return { x: r.left + scrollX, y: r.top + scrollY, width: r.width, height: r.height }; })()`);
        params.clip = { ...b, scale: 1 }; params.captureBeyondViewport = true;
      }
      const { data } = await send('Page.captureScreenshot', params);
      writeFileSync(join(out, `${step.shot}.png`), Buffer.from(data, 'base64'));
      note(`  saved ${step.shot}.png`);
    } else {
      throw new Error(`unknown step: ${JSON.stringify(step)}`);
    }
  }
} catch (error) {
  failed = true; note(`FAILED: ${error.message}`);
} finally {
  writeFileSync(join(out, 'log.txt'), log.join('\n') + '\n');
  ws.close(); browser.kill();
  await sleep(500);
  try { rmSync(profile, { recursive: true, force: true }); } catch { /* the browser may still hold it for a moment */ }
}
process.exit(failed ? 1 : 0);
