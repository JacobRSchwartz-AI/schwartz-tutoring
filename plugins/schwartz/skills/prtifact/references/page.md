# Writing the page

Start from a copy of [../assets/template.html](../assets/template.html). It is one file with three parts:

1. A `<title>`, a font link and a `<style>` block. Leave them alone, except to change the title.
2. The content, between `<!-- PRTIFACT CONTENT START -->` and `<!-- PRTIFACT CONTENT END -->`. Replace all of it.
3. A `<script>` at the bottom. Leave it alone. It builds the tabs, the diff, the marks and the step buttons from what you wrote.

The example content in the template is a made-up change, kept small so every part is visible. Read it once before you write your own.

## 1. Title and header

- `<title>`: two to four words that name this page, such as "Autopay PRtifact". Not a sentence.
- `.kicker`: where the change lives and its state ("Merge request !307, open, not merged").
- `<h1>`: what the change does, as a short phrase.
- `.lede`: one or two sentences. What was wrong, what happens now.
- `.facts`: at most four label and value pairs. Target branch, size, tests, and what the change was never run against.
- A link to the change.

## 2. The case chart

```html
<table class="chart">
  <thead><tr><th>Case</th><th>Before</th><th>After</th></tr></thead>
  <tbody>
    <tr class="changed" data-example="Order 88213. Cart $60.00, coupon $15.00 ..."><td>$60 cart, $15 coupon</td><td class="no">free shipping</td><td class="yes">pays $5.99</td></tr>
    <tr class="same"><td>$60 cart, no coupon</td><td class="yes">free shipping</td><td class="yes">free shipping</td></tr>
  </tbody>
</table>
<div class="boxed">2 fixed, 2 the same, 1 for you to decide</div>
```

- Row class: `changed` when the behavior differs after the change, `same` when it does not. Changed rows show their marks in red and green. Same rows stay gray-black, because black means unchanged. An open row is a `changed` row whose After cell is `ask`; if the situation could not happen before, its Before cell is `none`.
- Cell class: `yes` (right, a check), `no` (wrong, an X), `ask` (open, a question mark), `none` (does not apply, a dash). The script draws the mark. Write only the words, four or fewer.
- `data-example` on a row makes the case name clickable and opens the worked example under the row. Use it for the real case and for any row whose few words need one sentence more.
- Put changed rows first, then the rows that stay the same, then the open ones.
- The `.boxed` line under the chart is the conclusion. Its numbers add up to the number of rows: "fixed" counts rows that went from an X to a check, "the same" counts `same` rows, and open rows are "for you to decide".

## 3. One change

```html
<section class="change" data-name="Compare what they pay" data-pen="blue" data-key="afterCoupon >=">
  <p class="verdict">Free shipping looks at the total after the coupon.</p>
  <script type="text/plain" class="before" data-ref="src/cart/shipping.js:12 on main"> ...old code... </script>
  <script type="text/plain" class="after" data-ref="src/cart/shipping.js:12"> ...new code... </script>
  <svg class="board" data-view="before" viewBox="0 0 640 190" role="img" aria-label="..."> ... </svg>
  <ol class="says"><li>...</li></ol>
  <svg class="board" data-view="now" viewBox="0 0 640 190" role="img" aria-label="..."> ... </svg>
  <ol class="says"><li>...</li></ol>
  <ul class="tests"><li class="yes">...</li><li class="no">...</li></ul>
  <details class="edges"><summary>Edges</summary><ul><li>...</li></ul></details>
</section>
```

| Attribute | Meaning |
|---|---|
| `data-name` | The tab label, two to four words. |
| `data-pen` | This change's color: `blue`, `purple` or `brown`. Give neighboring changes different pens. Red and green are never a pen. |
| `data-key` | A regular expression. Lines of the new code that match it get a star. Use it for the one or two statements the change rests on. |
| `data-labels` | The names of the two views, as `Without it\|With it`. Leave it out to get `Before\|Now`. Use Before and Now when the old code handled this situation and got it wrong. Use "Without it" and "With it" when the old code never reached the situation, so the piece only matters because of the rest of the change. |

Everything inside is optional except the verdict and at least one code block. Use only the parts listed here. The script moves them into a fixed order (verdict, switch, screen, code, idea, tests, edges), and anything else you add is left stranded above the verdict.

### The code

Put the old excerpt in `script.before` and the new one in `script.after`, as plain text. `data-ref` is the file and line.

- Give both excerpts the same region of the file, with the same lines around the change. The script works out the diff. Unchanged lines print once in black. A changed line prints twice, "was" above "now", with only the removed pieces struck in red and only the added pieces in the pen color. A wholly new line is in the pen color.
- Two lines count as one line edited only when the names in them overlap. Lines that merely look alike (`const a = await b(` and `const c = await d(`) print as one removed and one added.
- When the two excerpts share almost nothing (the code was rewritten or moved), the script prints them as two labelled blocks instead. That is the right result. Do not pad them to force a diff.
- When there is no old code, leave `script.before` out. The new code prints in black with its starred lines, and the first view says there was no code here before.
- Comment-only lines are dropped. To mark lines you left out, write a comment that starts with three dots: `// ... joins, select`. It prints as a gray note.
- Keep an excerpt under about 25 lines. Cut with `// ...` notes.

### The screen

Only when the change has an interface. Put this inside the change, and embed the images as data URIs:

```html
<div class="screens">
  <figure data-view="before"><figcaption>Before</figcaption><img alt="..." src="data:image/png;base64,..."></figure>
  <figure data-view="now"><figcaption>Now</figcaption><img alt="..." src="data:image/png;base64,..."></figure>
</div>
```

Crop both shots to the same region so the eye can compare them. Before on the left, now on the right.

### The idea: a drawing in SVG

Each change can have two boards, `data-view="before"` and `data-view="now"`. In the Both view they stack, and the step buttons walk through the first board and then the second.

- Wrap what appears together in `<g data-step="1">`, `<g data-step="2">` and so on. Anything outside a step group is on the board from the start.
- In the "before" board put everything in steps. In the "now" board write the base (a copy of the finished "before" picture, without its verdict) outside any group, and put only the change in steps.
- After each board, an `<ol class="says">` with one `<li>` per step: the sentence shown under the drawing at that step. The first sentence of the first board is a question.
- Give each board a `role="img"` and an `aria-label` that says what the finished drawing shows.

**The canvas.** Use `viewBox="0 0 640 H"` with H between 180 and 240. The board is at most 700 px wide on the page.

**Classes.**

| Class | On | Result |
|---|---|---|
| (none) | `<text>` | Handwriting, 20 px, black. About 7.6 units per character. |
| `s` | `<text>` | Smaller handwriting, 16.5 px. About 6.3 units per character. |
| `k` | `<path>`, `<rect>`, `<line>` | A black pen stroke, no fill. |
| `pen` | text or stroke | This change's color. Use it for everything the change adds. |
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
- The conclusion sits at the bottom left: the mark at x 20, its words at x 46.

**Keep it to words and lines.** Names joined by arrows, a ruled table, a time line with ticks, a bar cut in parts, two columns split by a rule. No rounded boxes around every word, no icons, no fills, no gradients.

**Check the layout.** Estimate where each text ends from the character widths above, and keep 12 units clear between any two pieces. To see every step at once, open the page with `#change-2-all` at the end of the address (the 2 is the tab number). The boards sit below the chart and the code, so a screenshot needs a tall window, about 3,400 px.

### Tests and edges

- `ul.tests`: one `<li class="yes">` per test that covers this change, in the test's own words, and one `<li class="no">` for each thing no test covers.
- `details.edges`: the two or three facts a careful reviewer would ask about. It is closed by default. If you want a fourth, one of them is not worth keeping.

## 4. What is checked, and what is theirs to decide

The last section is a second chart with the columns Piece and Tested, one row per change plus one row for each thing the tests never touched (the real payment provider, the rest of the test suite). Beside it, a `.decide` box with the one question the reviewer has to answer, in a sentence, and one short paragraph of what they need to know to answer it. If the author of the code made the page, say so under the box.

## 5. The technical rules the template already meets

These are requirements for a page published as a Claude artifact. The template meets them. Keep it that way when you edit the content.

- The file has no `<!doctype>`, `<html>`, `<head>` or `<body>` tags. It starts with `<title>`.
- Fonts load from Google Fonts only. Nothing else loads from another site: no script, no image, no stylesheet. Embed images as data URIs.
- Every color is a variable defined on `:root`, with a dark set under `prefers-color-scheme: dark` and `[data-theme="dark"]`. Do not write a literal color in the content.
- The page keeps a 16 px gutter and never scrolls sideways. Code wraps. Tables sit inside `.scroll`.
- Nothing is animated and nothing plays by itself.

Outside Claude, the file opens in any browser as it is.
