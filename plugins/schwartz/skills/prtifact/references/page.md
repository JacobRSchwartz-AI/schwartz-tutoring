# Writing the page

Start from a copy of [../assets/template.html](../assets/template.html). It is one file with three parts:

1. A `<title>`, a font link and a `<style>` block. Leave them alone, except to change the title.
2. The content, between `<!-- PRTIFACT CONTENT START -->` and `<!-- PRTIFACT CONTENT END -->`. Replace all of it.
3. A `<script>` at the bottom. Leave it alone. It builds the app from what you wrote: the top bar, the list down the left, the options row, the code walk, the marks, Play, and the decision buttons.

You write plain sections in order. The script turns them into one screen. The page opens on the first entry at the Idea level with a blank board.

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
  <script type="text/plain" class="before" data-ref="src/cart/shipping.js:12 on main"> ...old code... </script>
  <script type="text/plain" class="after" data-ref="src/cart/shipping.js:12"> ...new code... </script>
  <ol class="edits"><li>...one sentence per edit...</li></ol>
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
| `data-labels` | The names of the two views, as `Without it\|With it`. Leave it out to get `Before\|Now`. Use Before and Now when the old code handled this situation and got it wrong. Use "Without it" and "With it" when the old code never reached the situation, so the piece only matters because of the rest of the change. |
| `data-href` | A link to this entry's own pull request. Use it in a stack. It shows as an arrow at the end of the options row. |

Use only the parts listed here. The script sorts them into the levels:

| Level | Made from | Shown when |
|---|---|---|
| Idea | the `svg.board` drawings and their `ol.says` | there is a board |
| Code | `script.before`, `script.after` and `ol.edits` | always |
| Screen | `div.screens` | it is there |
| Replay | `div.replay` | it is there |

The `p.verdict` is the conclusion. It stays hidden until the last step of the drawing or of the code walk, then appears under it.

### The idea: a drawing in SVG

Each entry can have two boards, `data-view="before"` and `data-view="now"`. In the Both view they stack, and the steps run through the first board and then the second. The board starts blank. Play adds a step, waits long enough to read its sentence, and adds the next; it stops at the end of this entry and offers the next one. The two small arrows go one step back or forward. Each new step is drawn in.

- Wrap what appears together in `<g data-step="1">`, `<g data-step="2">` and so on. Anything outside a step group is on the board from the start.
- In the "before" board put everything in steps, so it starts blank. In the "now" board write the base (a copy of the finished "before" picture, without its conclusion) outside any group, and put only the change in steps.
- After each board, an `<ol class="says">` with one `<li>` per step: the sentence shown under the drawing at that step. The first sentence of the first board is a question.
- Name every thing before it acts. If the drawing has "A" and "B", the step that brings them in says who they are. If it uses a word from the code ("split", "held back"), an early step shows what that is.
- Give each board a `role="img"` and an `aria-label` that says what the finished drawing shows.

**The canvas.** Use `viewBox="0 0 640 H"` with H between 180 and 260. The board is at most 640 px wide on the page.

**Classes.**

| Class | On | Result |
|---|---|---|
| (none) | `<text>` | Handwriting, 20 px, black. About 7.6 units per character. |
| `s` | `<text>` | Smaller handwriting, 16.5 px. About 6.3 units per character. |
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

**Check the layout.** Estimate where each text ends from the character widths above, and keep 12 units clear between any two pieces. To see every step at once, open the page with `#change-2-all` at the end of the address (the 2 is the number of the entry). `#change-2-code` opens the code at its start, `#change-2-codeall` at its last edit, `#change-2-replay` the replay, and `#cases` and `#decisions` the two whole-change panels.

### The code

Put the old excerpt in `script.before` and the new one in `script.after`, as plain text. `data-ref` is the file and line.

- Give both excerpts the same region of the file, with the same lines around the change. The script works out the edits. An edit is one run of changed lines. In the Both view the code starts as it was; each step applies one edit: the removed pieces turn gray and are crossed off, and the added pieces are typed in, in the Schwartz Tutoring orange. Edits already applied turn plain. It is drawn as an editor, with the file name on a tab and line numbers counted within the excerpt. The Before and Now views show each version whole.
- Write one `<li>` in `ol.edits` for each edit, top to bottom: what you are doing and why, in the first person, as if thinking aloud while making the change ("I look up the invoices first, so a missing one fails with nothing to undo."). To see how the script groups your excerpts into edits, step through the Code level once and count; a line that is the same on both sides between two changes splits them into two edits.
- Two lines count as one line edited only when the names in them overlap. Lines that merely look alike (`const a = await b(` and `const c = await d(`) count as one removed and one added.
- When the two excerpts share almost nothing (the code was rewritten or moved), the walk has one step: the old code, then the new code. Write one `<li>` that says, in order, what the new code does.
- When there is no old code, leave `script.before` out. The walk starts by saying there was no code here, then types the new code in.
- Comment-only lines are dropped. To mark lines you left out, write a comment that starts with three dots: `// ... joins, select`. It prints as a gray note.
- Keep an excerpt under about 25 lines. Cut with `// ...` notes.

### The screen

Only when the change has an interface. Put this inside the entry, and embed the images as data URIs:

```html
<div class="screens">
  <figure data-view="before"><figcaption>Before</figcaption><img alt="..." src="data:image/png;base64,..."></figure>
  <figure data-view="now"><figcaption>Now</figcaption><img alt="..." src="data:image/png;base64,..."></figure>
</div>
```

Crop both shots to the same region so the eye can compare them. Before on the left, now on the right.

### The replay

Only when you ran the real request through the old code and the new code and saved the logs (SKILL.md, step 6). Put this inside the entry:

```html
<div class="replay" data-note="Order 88213, replayed through both versions on a local copy. The payment provider was a stand-in. The full logs are saved in .prtifact/pull-214.">
  <ol data-view="before" data-title="Code on main">
    <li data-tag="start">cart $60.00, coupon $15.00</li>
    <li data-tag="log">shipping: subtotal 60.00 >= 50.00, free</li>
    <li data-tag="order" class="no">shipping $0.00, total $45.00</li>
  </ol>
  <ol data-view="now" data-title="This pull request"> ... </ol>
</div>
```

- One `<li>` per line that matters, in the order it happened, five to eight a side. `data-tag` is a short word for where the line comes from: start, log, database, the name of an outside service, card, end.
- Copy log lines as they were printed. Leave out a person's name by writing `[student]` or `[customer]` in its place.
- Class `no` for the wrong outcome, `yes` for the right one, `pen` for the lines that exist only because of the change. Leave the rest black.
- `data-note` says what was replayed, on what, what was a stand-in, and where the full logs are.

## 3. The case chart

This goes in `<section id="cases" data-name="Cases">`, after the entries.

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
- Under the decisions, the limits: a chart of each piece and whether a test covers it (`yes` with the number of tests, `no` with "no test"), and a short list of what the change was never run against and what is still to do by hand. If the author of the code made the page, say so here.

## 5. The technical rules the template already meets

These are requirements for a page published as a Claude artifact. The template meets them. Keep it that way when you edit the content.

- The file has no `<!doctype>`, `<html>`, `<head>` or `<body>` tags. It starts with `<title>`.
- Fonts load from Google Fonts only. Nothing else loads from another site: no script, no image, no stylesheet. Embed images as data URIs.
- Every color is a variable defined on `:root`, with a dark set under `prefers-color-scheme: dark` and `[data-theme="dark"]`. Do not write a literal color in the content.
- The page is one screen high. The list on the left and the panel each scroll by themselves if they need to; the page does not, and nothing scrolls sideways.
- Nothing moves until the reader presses Play or an arrow.

Outside Claude, the file opens in any browser as it is.
