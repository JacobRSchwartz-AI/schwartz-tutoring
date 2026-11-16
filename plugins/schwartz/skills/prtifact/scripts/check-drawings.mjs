#!/usr/bin/env node
// Check a PRtifact page's drawings: opens every entry with all its steps showing, then reports
//   - text that overlaps other text,
//   - text that runs past the edge of its board,
//   - a black or pen-colored line that runs through a word (red slashes are meant to, so they are skipped),
// and saves a picture of each entry's boards so you can look at them.
//
//   node check-drawings.mjs page.html [out-folder]
//
// Needs Node 22 or newer and Chrome or Edge; it drives them through screens.mjs, next to this file.
// Fix what it reports, run it again, then look at the pictures: it catches collisions, not meaning.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const page = process.argv[2];
if (!page) { console.error('usage: node check-drawings.mjs page.html [out-folder]'); process.exit(2); }
const pagePath = resolve(page);
const out = resolve(process.argv[3] || join(dirname(pagePath), 'check'));
mkdirSync(out, { recursive: true });
const entries = (readFileSync(pagePath, 'utf8').match(/<section class="change"/g) || []).length;
if (!entries) { console.error('No <section class="change"> entries in ' + pagePath); process.exit(2); }

// runs inside the page: every visible board, every problem as one line
const probe = `(() => {
  const problems = [], pad = 2;
  const boxOf = (n) => { const r = n.getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: r.bottom }; };
  const hit = (a, b) => Math.min(a.r, b.r) - Math.max(a.l, b.l) > pad && Math.min(a.b, b.b) - Math.max(a.t, b.t) > pad;
  document.querySelectorAll('section.change:not([hidden]) svg.board').forEach((svg) => {
    const view = svg.getAttribute('data-view') || 'board', edge = boxOf(svg);
    const texts = [...svg.querySelectorAll('text')].filter((t) => t.getClientRects().length && t.textContent.trim());
    const word = (t) => '"' + t.textContent.trim().slice(0, 40) + '"';
    // the glyphs sit in the middle of the text box; trim the empty band above and below
    const inner = (t) => { const b = boxOf(t), h = b.b - b.t; return { l: b.l, r: b.r, t: b.t + h * 0.22, b: b.b - h * 0.18 }; };
    texts.forEach((t, i) => {
      const a = inner(t);
      if (a.l < edge.l - 1 || a.r > edge.r + 1 || a.t < edge.t - 1 || a.b > edge.b + 1) problems.push(view + ': ' + word(t) + ' runs past the edge of the board');
      texts.slice(i + 1).forEach((u) => { if (hit(a, inner(u))) problems.push(view + ': ' + word(t) + ' overlaps ' + word(u)); });
    });
    svg.querySelectorAll('.k:not(.red):not(.gray)').forEach((line) => {
      if (!line.getTotalLength || !line.getScreenCTM()) return;
      const m = line.getScreenCTM(), len = line.getTotalLength(), seen = new Set();
      for (let d = 0; d <= len; d += 3) {
        const p = line.getPointAtLength(d), x = m.a * p.x + m.c * p.y + m.e, y = m.b * p.x + m.d * p.y + m.f;
        texts.forEach((t) => { const a = inner(t); if (x > a.l + 2 && x < a.r - 2 && y > a.t + 1 && y < a.b - 1) seen.add(t); });
      }
      seen.forEach((t) => problems.push(view + ': a line runs through ' + word(t)));
    });
  });
  return problems;
})()`;

const steps = [];
for (let n = 1; n <= entries; n++) {
  steps.push({ go: pathToFileURL(pagePath).href + '#change-' + n + '-all' });
  steps.push({ eval: probe });
  steps.push({ shot: 'entry-' + n, clip: 'section.change:not([hidden]) .boards' });
}
const plan = join(out, 'check-plan.json');
writeFileSync(plan, JSON.stringify({ out: '.', width: 1440, height: 1600, steps }, null, 1));
const screens = join(dirname(fileURLToPath(import.meta.url)), 'screens.mjs');
const run = spawnSync(process.execPath, [screens, plan], { encoding: 'utf8' });
let n = 0, total = 0;
for (const line of (run.stdout || '').split('\n')) {
  if (/^\d+\. go /.test(line)) { n++; continue; }
  const m = line.match(/^ {2}= (\[.*\])$/);
  if (!m) { if (/FAILED/.test(line)) console.log(line); continue; }
  const problems = JSON.parse(m[1]);
  total += problems.length;
  console.log(`Entry ${n}: ${problems.length ? problems.length + ' to fix' : 'clear'}`);
  problems.forEach((p) => console.log('  - ' + p));
}
console.log(`\n${total} problem${total === 1 ? '' : 's'}. Pictures: ${out}`);
process.exit(total ? 1 : 0);
