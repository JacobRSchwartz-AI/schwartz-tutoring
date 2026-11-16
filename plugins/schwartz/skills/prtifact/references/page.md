# Writing the page

Start from a copy of [../assets/template.html](../assets/template.html). It is one file with three parts:

1. A `<title>`, a font link and a `<style>` block. Leave them alone, except to change the title.
2. The content, between `<!-- PRTIFACT CONTENT START -->` and `<!-- PRTIFACT CONTENT END -->`. Replace all of it.
3. A `<script>` at the bottom. Leave it alone. It builds the app from what you wrote: the top bar, the list down the left, the options row, the steps of each drawing, the marks, Play, and the decision buttons.

You write plain sections in order. The script turns them into one screen. The page opens on the first entry with a blank board.

The example content in the template is a made-up change, kept small so every part is visible. Read it once before you write your own.

## 1. Title and top bar

- `<title>`: two to four words that name this page, such as "Shipping PRtifact". Not a sentence.
- `<header>`: an `<h1>` with what the change does, as a short phrase, and one `<a>` to the change. The script shows the link as an arrow button beside the name; write its text as what it opens ("Open pull request #214"), which becomes the button's label for screen readers.
- For a stack of pull requests, add `data-list="The stack"` to `<header>` to rename the list on the left, and give each entry its own link with `data-href` (section 2).

## 2. One entry

Each entry is a `<section class="change">`. For one pull request, an entry is one change that matters. For a stack, an entry is one pull request.

```html
<section class="change" data-name="Compare what they pay" data-pen="blue">
  <p class="verdict">Free shipping looks at the total after the coupon.</p>
  <svg class="board" data-view="before" viewBox="0 0 640 190" role="img" aria-label="..."> ... </svg>
  <ol class="says"><li>...one sentence per step...</li></ol>
  <svg class="board" data-view="now" viewBox="0 0 640 190" role="img" aria-label="..."> ... </svg>
  <ol class="says"><li>...</li></ol>
</section>
```

| Attribute | Meaning |
|---|---|
| `data-name` | The label in the list on the left, two to four words. |
| `data-pen` | This entry's color: `blue`, `purple` or `brown`. Give neighbors different pens. Red and green are never a pen. |
| `data-labels` | The names of the two drawings, as `Without it\|With it`. Leave it out to get `Before\|Now`. Use Before and Now when the old code handled this situation and got it wrong. Use "Without it" and "With it" when the old code never reached the situation, for whatever reason (it stopped earlier, or the path did not exist), so the piece only matters because of the rest of the change. |
| `data-href` | A link to this entry's own pull request. Use it in a stack. It shows as an arrow at the end of the options row. |

Use only the parts listed here: the two boards, the sentences after each, and the verdict. There is no code on the page; the reviewer reads the code on the pull request.

The `p.verdict` is the conclusion. It stays hidden until the last step of the drawing, then appears under it.

### The drawing, in SVG

Each entry has two boards, `data-view="before"` and `data-view="now"`. They stack, and the steps run through the first board and then the second. The second board stays off the screen until its first message starts. The board starts blank. Each board has a thread of messages on its right, starting level with the top of the board. Play shows a typing mark in the thread, then the step's message, then draws the step in, waits long enough to read, and goes on; it stops at the end of this entry and offers the next one. The two small arrows go one step back or forward. Each new step is drawn in.

- Wrap what appears together in `<g data-step="1">`, `<g data-step="2">` and so on. Anything outside a step group is on the board from the start.
- In the "before" board put everything in steps, so it starts blank. In the "now" board write the base outside any group: the black ink of the finished "before" picture, without its red marks of what went wrong and without its conclusion. Put only the change in steps.
- After each board, an `<ol class="says">` with one `<li>` per step: the message that lands in the thread beside the drawing at that step. The "before" board is the steps to recreate: its first message is the question ("What would have to happen for a family to pay twice?"), and each later message is one thing that has to happen, in order. The page never numbers the first "before" message and numbers every one after it, under the title Steps to recreate. Step 1 of the "before" board draws the named parts and goes with the question. A message for a step that names the real case says so: "Here: Sep 27, 1 hour, $56.00."
- Draw the things the code acts on (sessions, hours, invoices, a timer), not the code. Name every thing before it acts. If the drawing has "A" and "B", the step that brings them in says who they are. If it uses a word from the code ("split", "held back"), an early step shows what that is.
- Give each board a `role="img"` and an `aria-label` that says what the finished drawing shows.

**The canvas.** Use `viewBox="0 0 640 H"` with H between 180 and 260. The board is at most 640 px wide on the page. On a phone it is about 360 px wide, so everything is drawn at a little over half size: the 20 px handwriting comes out near 11 px. Keep a drawing readable at that size: few, large words, no tables of more than three columns, and nothing in the small class that the reader has to read to follow the step.

**Classes.**

| Class | On | Result |
|---|---|---|
| (none) | `<text>` | Handwriting, 20 px, black. About 7.1 units per character. |
| `s` | `<text>` | Smaller handwriting, 16.5 px. About 6.0 units per character. |
| `k` | `<path>`, `<rect>`, `<line>` | A black pen stroke, no fill. |
| `pen` | text or stroke | This entry's color. Use it for everything the change adds. |
| `red`, `green` | text or stroke | Wrong or removed, and right. |
| `gray` | text or stroke | A helper line only: a guide, a reference line, a "now" marker. Never the old state. |
| `dash` | stroke | Dashed. |

**Arrows** are a line with two short strokes for the head, as on a whiteboard. End the path with the head:

| Pointing | Path |
|---|---|
| Right | `M170 38 L468 38 m-10 -6 l10 6 l-10 6` |
| Left | `M468 38 L170 38 m10 -6 l-10 6 l10 6` |
| Down | `M100 40 L100 120 m-6 -10 l6 10 l6 -10` |
| Up | `M100 120 L100 40 m-6 10 l6 -10 l6 10` |

For a slanted or curved arrow, draw the two head strokes about 11 units long, each turned about 28 degrees from the line's direction at its end. Say in the step sentence where the arrow goes, so a head that is slightly off does no harm.

**Marks.**

- Check: `<path class="k green" d="M20 190 l6 9 l13 -19"/>`
- X: `<path class="k red" d="M20 170 l14 14 m0 -14 l-14 14"/>`
- Red slash through a word or an arrow: a `k red` line from just below its left end to just above its right end. Size it from the character widths above, so it does not run past the word. This is how a step takes something away: a step can add ink but cannot hide or recolor what is already drawn.
- The conclusion of a board sits at the bottom left: the mark at x 20, its words at x 46.

**Keep it to words and lines.** Names joined by arrows, a ruled table, a time line with ticks, a bar cut in parts, two columns split by a rule. No rounded boxes around every word, no icons, no fills, no gradients.

**Check the layout.** Estimate where each text ends from the character widths above, and keep 12 units clear between any two pieces. To see every step at once, open the page with `#change-2-all` at the end of the address (the 2 is the number of the entry). `#cases` and `#decisions` open the two whole-change panels.

### Screens, in place of the two drawings

A screens entry has one `div.screens` and its `ol.says`, instead of the two boards.

```html
<section class="change" data-name="One alert, then gone" data-pen="blue">
  <p class="verdict">A wrong password shows one alert, and Sign in still works.</p>
  <div class="screens" data-caption="Sign-in page">
    <div class="shot" data-step="1">
      <div class="pane"><img src="screens/before/1-open.png" alt="Before: the empty sign-in form"></div>
      <div class="pane"><img src="screens/now/1-open.png" alt="Now: the same form"></div>
    </div>
    <div class="shot" data-step="2">
      <div class="pane"><img src="screens/before/2-wrong.png" alt="Before: two red alerts cover the button">
        <span class="ring red" style="left:8%; top:70%; width:84%; height:24%"></span></div>
      <div class="pane"><img src="screens/now/2-wrong.png" alt="Now: one alert, the button clear">
        <span class="ring" style="left:8%; top:78%; width:84%; height:12%"></span></div>
    </div>
    <div class="shot" data-step="3">
      <div class="pane"><div class="gone">the click lands on the alert strip; nothing happens</div></div>
      <div class="pane"><img src="screens/now/3-click.png" alt="Now: signing in"></div>
    </div>
  </div>
  <ol class="says"><li>What does a parent see after typing a wrong password twice?</li><li>...</li><li>...</li></ol>
</section>
```

- One `div.shot` per step, `data-step` from 1. Each has two `div.pane`, Before on the left and Now on the right. The page shows only the current step's pair, with a scrubber under it that moves both sides together. Tapping the pictures goes one step on.
- `data-caption` on `div.screens` names the page shown ("Sign-in page"). `data-labels="Before|Now"` renames the two columns; it defaults to the entry's labels.
- A `span.ring` marks the one thing to look at. Place it in percent of the picture: `left` and `top` of its corner, `width` and `height`. It takes the entry's pen color; add `red` for what is wrong or `green` for what is right. Measure from the picture's size in pixels (the script's crop), not by eye.
- `div.gone` stands in for a picture when one side has nothing to show at that step. Say in a few words why.
- Every `<img>` has an `alt` that says what it shows.
- Pictures are files next to the page. When publishing as a Claude artifact, send them as the artifact's supporting files at the same relative paths (`screens/before/1-open.png`). Where the page must be a single file, embed each picture as a data URI instead; keep the whole page under 16 MB.

The screens come from [../scripts/screens.mjs](../scripts/screens.mjs). Its header lists every step a plan can use. A plan for the example above:

```json
{ "out": "screens/before", "width": 1280, "height": 800, "scale": 2,
  "mocks": [{ "match": "/auth/login", "status": 401, "json": { "message": "Invalid username or password" } }],
  "steps": [
    { "go": "http://localhost:3001/login" }, { "shot": "1-open", "clip": "form" },
    { "type": ["#email", "test@example.com"] }, { "type": ["#password", "wrong"] },
    { "click": "button[type=submit]" }, { "click": "button[type=submit]" }, { "wait": 500 }, { "shot": "2-wrong", "clip": "main" },
    { "click": "button[type=submit]" }, { "shot": "3-click", "clip": "main" } ] }
```

Run it once with `"out": "screens/before"` against the old commit and once with `"out": "screens/now"` against the new one. Read both `log.txt` files: they say what each click landed on, which is often the whole story.

## 3. The case chart

This goes in `<section id="cases" data-name="Cases">`. In the template the order is: the header, the cases, then `<section id="changes">` holding the entries, then the decisions. The list on the left always shows the entries first and the cases and decisions under them, whatever the order in the file.

```html
<table class="chart">
  <thead><tr><th>Case</th><th>Before</th><th>After</th></tr></thead>
  <tbody>
    <tr class="changed"><td>$60 cart with a $15 coupon (order 88213)</td><td class="no">free shipping</td><td class="yes">pays $5.99</td></tr>
    <tr class="same"><td>$60 cart, no coupon</td><td class="yes">free shipping</td><td class="yes">free shipping</td></tr>
  </tbody>
</table>
```

- Row class: `changed` when the behavior differs after the change, `same` when it does not. Changed rows show their marks in red and green. Same rows stay gray-black, because black means unchanged.
- Cell class: `yes` (right, a check), `no` (wrong, an X), `ask` (open, a question mark), `none` (does not apply, a dash). The script draws the mark. Write only the words, four or fewer.
- Write the case itself in full, including the real numbers, so the row is understood by reading it. Nothing in the chart is clickable.
- Put changed rows first, then the rows that stay the same, then the open ones. An open row is a `changed` row whose After cell is `ask`.

## 4. Decisions and limits

This goes in `<section id="decisions" data-name="Decisions">`, last. The number of open decisions shows beside its name in the list.

```html
<h2>Pending decisions</h2>
<div class="decision" data-id="exactly-fifty">
  <p class="hand">At exactly $50 after the coupon, is shipping free?</p>
  <p>The code says yes. The help page says "orders over $50". One of them should change.</p>
  <div class="options">
    <button>Free at exactly $50</button>
    <button>Free only above $50</button>
    <button data-other>Something else</button>
  </div>
</div>
<h2>Limits</h2>
... a chart with the columns Piece and Tested, and a short list ...
```

- `data-id` is a short name for the decision, unique on the page.
- Two to four options, each a real choice, in a few words. List them neutrally. A `data-other` button opens a comment box for an answer that is not on the list.
- When the reviewer clicks an option on a page published as a Claude artifact, the page posts it as a comment to Claude. That is the signal to act on it (SKILL.md, step 10). Publish the page with the `comments` capability so this works. Anywhere else, the button tells the reviewer to pass the answer on in the chat.
- When a decision is made, republish with `data-decided="the option's exact words"` on that decision. It then shows as decided, with its buttons off.
- When the decision became its own follow-up pull request with its own PRtifact, also add `data-follow="the follow-up page's link"`. A "Follow-up page" link shows beside "Decided".
- Under the decisions, the limits: a chart of each piece and how it was checked: `yes` with the number of tests, or with "run by hand" or "seen in real data" when that is what happened; `no` with "not checked". and a short list of what the change was never run against and what is still to do by hand. If the author of the code made the page, say so here.

## 5. The technical rules the template already meets

These are requirements for a page published as a Claude artifact. The template meets them. Keep it that way when you edit the content.

- The file has no `<!doctype>`, `<html>`, `<head>` or `<body>` tags. It starts with `<title>`.
- Fonts load from Google Fonts only. Nothing else loads from another site: no script, no image, no stylesheet. Screen pictures are the page's own supporting files or data URIs, never links to another site.
- Every color is a variable defined on `:root`, with a dark set under `prefers-color-scheme: dark` and `[data-theme="dark"]`. Do not write a literal color in the content.
- The page is one screen high. The list on the left and the panel each scroll by themselves if they need to; the page does not, and nothing scrolls sideways.
- Nothing moves until the reader presses Play or an arrow.

Outside Claude, the file opens in any browser as it is.
