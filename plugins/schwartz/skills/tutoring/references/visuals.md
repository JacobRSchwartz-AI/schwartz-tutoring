# Visuals: drawing the way Jacob does

Companion to [../SKILL.md](../SKILL.md) section 4, which covers how a board is organized and marked. This file covers how to build a visual for a student (a graph, a diagram, a small interactive, a page of notes) so it reads like Jacob's boards. It comes from a full read of all 2,345 of his whiteboard pages, 2020 to 2023. Page counts are rough; many pages hold several diagrams. Board references look like `[board: 2021-05-13T123013_p2]`.

---

## 1. When to read this, and the medium

Read this before you make a visual for a student. Pick the form that fits the moment: a quick chart, a slider, a small quiz, a table, a page of notes, a step-by-step diagram. It does not have to look like a whiteboard. What carries over to any form is his grammar: the order he builds each diagram in, his pen colors and what they mean, and his marks (sections 2 and 3).

When you do lay out a full board:

- **Medium.** One artifact page with inline SVG. The board is plain white (`#ffffff`) in light and dark mode; only the page around it follows the theme.
- **Clean, straight strokes.** Jacob drew axes, lines, fraction bars, tables and cell rules with a line tool, and curves smooth. Only the lettering is handwritten. No sketchy stroke libraries, jitter or turbulence filters.
- **Handwriting font for lettering.** Kalam from Google Fonts (`https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap`), stack `Kalam, 'Patrick Hand', 'Segoe Print', 'Bradley Hand', cursive`. Use it for everything he wrote with the pen: labels, equations, headers.
- **Plain sans for typed sentences.** He typed plain-English conclusions in Calibri or Arial under the math. Stack `system-ui, 'Segoe UI', Arial, Helvetica, sans-serif`.
- **Two-column page.** A thin black vertical rule down the middle; left column top to bottom, then right. One column below about 700 px wide.
- **One problem per cell.** A thin horizontal rule closes each problem. The problem sits at the top of its cell, the work directly beneath.
- **Size.** Work at 22 to 26 px, headers about 30 px, nothing under 15 px. The credit line from SKILL.md section 4 goes outside the board.

A skeleton:

```html
<style>
:root{--ink:#1b1b1b;--gray:#80868b;--blue:#1f63d6;--green:#188038;--red:#d93025;
--purple:#8e44ad;--brown:#8d5a2b;--orange:#f08c00;--hl:#ffe45c;}
.board{background:#fff;color:var(--ink);display:grid;grid-template-columns:1fr 1fr;}
.col + .col{border-left:2px solid var(--ink);}
.cell{padding:16px 18px 24px;border-bottom:1.5px solid var(--ink);}
.hand{font-family:Kalam,'Patrick Hand','Segoe Print','Bradley Hand',cursive;font-size:24px;}
.typed{font-family:system-ui,'Segoe UI',Arial,Helvetica,sans-serif;font-size:17px;}
.pasted{background:#f3f4f6;border:1px solid #d0d4d9;padding:10px 12px;}
.u-blue{text-decoration:underline 3px var(--blue);text-underline-offset:4px;}
@media (max-width:700px){.board{grid-template-columns:1fr}.col + .col{border-left:0}}
</style>
```

`.pasted` stands in for his pasted screenshot, so the problem reads as given material and his ink reads as his. Underline question phrases with `.u-*` classes (one per palette color): the text stays black and only the underline carries the color, as on his boards.

---

## 2. The board grammar

### Layout

SKILL.md section 4 has the basics (columns, cells, one step per line, operations under both sides). What the full read adds:

- **Cells.** 2 to 7 per column, ruled after the problem is finished. Cells in the two columns do not line up. A new topic always starts a new cell.
- **Overflow.** A part that does not fit continues at the top of the next column with the same letter.
- **Rule boxes where the rule is used,** right beside the step, not in a sidebar. A notation key ("Y = Actual / Y~ = Smoothed Value / Y^ = Prediction AKA Forecast") sits above the work it explains.
- **Diagram next to its algebra.** Supply and demand: graph first, algebra beneath. Elsewhere: algebra first, picture beside or under it. Labels sit beside what they name, with a short leader.
- **Same problem type, same sketch.** A recurring type gets the identical diagram each time (the box net drawn four times, the borrower and saver pair). The student learns one picture.
- **Plain-English conclusion last,** typed under the math: "Not independent, Are related", "Surplus of 40 units".
- **White space at the end.** 20 to 40 percent blank is normal. About one session in four ends with an underlined "HW".
- **Numbering comes from the problem,** except for procedures ("1. Assumptions 2. Hypothesis 3. Test Statistic 4. P-Value/Conclusion"), each step getting a green check.

### Color

**Palette (Jacob's pens):**

| Pen | Hex | Typical use |
|---|---|---|
| Black | `#1b1b1b` | Main writing, axes, the original picture, rules, answer boxes |
| Gray | `#80868b` | The old state after a change, y = x and 45-degree lines, unused cells, complements |
| Blue | `#1f63d6` | First accent: the new curve, the cutoff, the given, the fitted line |
| Green | `#188038` | Correct, check, add, positive, increase |
| Red | `#d93025` | Wrong, cancel, subtract, negative, decrease, DWL, rejection region |
| Purple | `#8e44ad` | Second accent: the mean, marginal totals, multiply, a second curve |
| Brown | `#8d5a2b` | Third or fourth thing, guide lines to an axis, brackets |
| Orange | `#f08c00` | Extra pairing color for shapes and arcs (too light for small text) |
| Yellow highlight | `#ffe45c` | Attention only: highlighter, stars, "move this" arrows. Never text |

**Rules, in priority order:**

1. **The same thing keeps the same color everywhere it appears.** This held on every page in every year. When a quantity first appears, give it a color, then reuse it for the phrase in the question, the symbol in the formula, the line or region in the picture, the number when plugged in, and every later line. Color is a lookup key, not decoration. [board: 2021-11-09T154755_p3] [board: 2023-12-13T182928_p1]
2. **The meanings that held across years.**
   - Red: wrong, cancel, subtract, negative, decrease.
   - Green: correct, check, add, positive, increase.
   - Black: the original picture and the main writing.
   - Gray: old or background. When something changes, the old version goes gray or stays black. It is never deleted.
   - A new color for each new thing: each shift, each new curve, each new case.
3. **Operation code for equation solving.** Written small under both sides with a rule in the same color:
   - Red: subtract.
   - Green: add.
   - Blue: divide.
   - Purple: multiply, clear fractions, or undo (square root, inverse trig).
   - Yellow curved arrows for distributing, and purple underlines on like terms before combining.
   Some pages colored by position instead (first move red, second green); pick one scheme per page. [board: 2021-02-17T171318_p1]
4. **Every other assignment is per page, declared by use.** Which curve is demand, which color is the intercept: these changed page to page. Never add a legend box. Declare a color where it is first used: a label in that color at the end of its curve, a phrase underlined in it, or a colored dot written in front of an equation (his own legend habit).
5. **Pair red and green with a symbol:** check or X, + or -, Yes or No.

### Marks

| Mark | Meaning |
|---|---|
| Black rectangle | Final answer, or a rule to remember |
| Green rectangle | The correct choice; the student's confirmed pick |
| Red box with a red X | The tempting wrong answer, "Common Error" |
| Circle or oval | Look here: a prime, a pivot, a sign, a whole row or column |
| Same-color underline | Ties a phrase in the problem to its symbol and number |
| Underbrace with a word | Names part of a formula ("SE", "Slope") |
| Green check / red X | Met, verified, correct / fails, wrong, cannot be computed |
| Red slash; slashed equals | Cancelled or eliminated; not equal |
| "?" over an equals sign | Check whether these are equal |
| Yellow curved arrow | Distribute, move a term, substitute |
| Double up or down arrow | Rises or falls |
| Star | Key line; on a symbol, the optimum (P*, x*, k*) |
| Colored dot | Legend in front of an equation; filled = included, open = excluded |
| Hatching | The area asked about; crosshatch where regions overlap |
| Dashed line | Drop line to an axis; strict-inequality boundary |
| Ticks, arcs, small square | Equal sides, equal angles, right angle |
| "1" shape around k/k | Multiply by 1 |
| Smiley or frown | A verdict ("Profit :)", "Loss :(") |

### Lettering habits

- **Subscripts 0 and 1 for before and after:** P0, Q0, D0, IC0, then P1, Q1, D1, IC1. Lowered and smaller.
- **Stars on equilibrium and optimal values:** P*, Q*, C*_t, k*, x*.
- **Direction arrows beside labels.** A small arrow next to P1* and Q1* shows which way each moved; an arrow under the Q axis shows the change in quantity.
- **Plain-word summaries with double arrows,** in the color of the change: "Price ⇑ Quantity ⇑", "As C_t ⇑ U'(C_t) ⇓".
- **"Let" and "Goal" lines** before the math: "Let x = # of books", "Goal: Find slope of green line".
- **Typed plain-English conclusion under the math. Boxed answers and boxed rules.**
- **"?" for an unknown** cutoff or an ambiguous direction.

---

## 3. Diagram recipes

Ordered by how often he drew them. The **draw order** is his order; use it as the step order for an animated or interactive version. The first eight include a working SVG.

### 3.1 Geometry figure, marked up (about 215 pages)

**When.** Congruence, similarity, angle pairs, parallel lines, circles, polygons, composite area, solids, right-triangle trig.

**Draw order.**
1. The figure in black (pasted, or a clean redraw beside a hard-to-read one).
2. Givens: ticks (1, 2, 3) on equal sides, arcs on equal angles, a small square at right angles, arrowheads on parallel sides.
3. Corresponding sides traced in matching colors; matching angle arcs in one color.
4. Vertex capitals outside the corners; lengths beside the sides in the side's color.
5. Auxiliary lines (altitude dashed with its square, diagonal, radius) in a contrasting color.
6. The equation or similarity statement below in the same colors, answer boxed, reasons listed.

**Variants.**
- Circles: chord blue, diameter green, secant purple, each name beside it in its color. An inscribed angle, its arc, and the arc's term in the equation share one color.
- Composite area: a colored segment splits it into A1, A2, A3, then "A = A1 + A2 + A3".
- Solids: each face hatched in its own color, its surface-area term the same color.

**His touches.** Two compared triangles side by side, the small one on the left.

[board: 2021-02-16T222744_p1] [board: 2023-02-04T230051_p1] [board: 2023-05-14T145810_p1] [board: 2021-04-14T170329_p1]

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 340" font-family="Kalam, 'Patrick Hand', 'Segoe Print', cursive" font-size="20" fill="#1b1b1b">
  <rect width="520" height="340" fill="#ffffff"/>
  <!-- 1. both triangles in black -->
  <polygon points="40,200 160,200 40,110" fill="none" stroke="#1b1b1b" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="250,250 490,250 250,70" fill="none" stroke="#1b1b1b" stroke-width="2" stroke-linejoin="round"/>
  <!-- 2. right-angle squares -->
  <path d="M40,186 H54 V200" fill="none" stroke="#1b1b1b" stroke-width="1.5"/>
  <path d="M250,234 H266 V250" fill="none" stroke="#1b1b1b" stroke-width="1.5"/>
  <!-- 3. matching angle arcs, one color per pair -->
  <path d="M136,200 A24,24 0 0 1 140.8,185.6" fill="none" stroke="#8e44ad" stroke-width="2.5"/>
  <path d="M460,250 A30,30 0 0 1 466,232" fill="none" stroke="#8e44ad" stroke-width="2.5"/>
  <path d="M40,132 A22,22 0 0 0 57.6,123.2" fill="none" stroke="#f08c00" stroke-width="2.5"/>
  <path d="M250,98 A28,28 0 0 0 272.4,86.8" fill="none" stroke="#f08c00" stroke-width="2.5"/>
  <!-- 4. corresponding sides traced in matching colors -->
  <line x1="40" y1="200" x2="160" y2="200" stroke="#1f63d6" stroke-width="4" stroke-linecap="round"/>
  <line x1="250" y1="250" x2="490" y2="250" stroke="#1f63d6" stroke-width="4" stroke-linecap="round"/>
  <line x1="40" y1="200" x2="40" y2="110" stroke="#188038" stroke-width="4" stroke-linecap="round"/>
  <line x1="250" y1="250" x2="250" y2="70" stroke="#188038" stroke-width="4" stroke-linecap="round"/>
  <!-- 5. vertex letters outside corners; lengths in the side's color -->
  <text x="20" y="220">A</text><text x="24" y="104">B</text><text x="164" y="220">C</text>
  <text x="230" y="272">D</text><text x="232" y="66">E</text><text x="494" y="272">F</text>
  <text x="92" y="224" fill="#1f63d6">4</text><text x="16" y="162" fill="#188038">3</text>
  <text x="362" y="276" fill="#1f63d6">8</text><text x="226" y="166" fill="#188038">x</text>
  <!-- 6. proportion in the same colors, answer boxed -->
  <text x="58" y="282" fill="#188038">3</text>
  <line x1="50" y1="290" x2="76" y2="290" stroke="#1b1b1b" stroke-width="2"/>
  <text x="57" y="316" fill="#1f63d6">4</text>
  <text x="86" y="298">=</text>
  <text x="114" y="282" fill="#188038">x</text>
  <line x1="106" y1="290" x2="132" y2="290" stroke="#1b1b1b" stroke-width="2"/>
  <text x="113" y="316" fill="#1f63d6">8</text>
  <rect x="146" y="278" width="74" height="32" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <text x="156" y="301">x = 6</text>
</svg>
```

### 3.2 Normal curve with shaded area (about 155 pages, plus about 25 population-vs-sampling overlays)

**When.** Normal probabilities, z or t, percentiles, the empirical rule, p-values, critical regions, sampling distributions.

**Draw order.**
1. N(μ, σ) above the curve, μ in one color and σ in another.
2. A flat baseline (no y-axis, no arrowheads), then one smooth bell.
3. A tall center line in the mean's color; short black ticks at ±1, ±2, ±3 SD.
4. Raw values under the ticks; a second row of z-scores with a small "z" at the left.
5. A short σ arrow from the mean to the first tick, in σ's color.
6. The cutoff: a vertical line in a new color, its value above it in that color (a "?" if unknown).
7. Hatch the asked area in the cutoff's color; any complement in gray. The area value beside it with a curved leader.
8. Below: the formula in the picture's colors, the table or calculator line, the boxed answer, a typed sentence.

**Variants.**
- Empirical rule: stacked brackets above (68% green, 95% blue, 99.7% purple), slice percentages in matching colors.
- Tests: "Reject H0" over red tails, "Fail to Reject H0" over the middle, the test statistic flagged by an arrow under the axis.
- Population vs sampling: a wide black population and a narrow, taller colored curve on one mean line, "N(μ, σ/√n)" in that color.
- Complement as dots: "blue dot + brown dot = 1". Area arithmetic: a green circle minus a red circle equals a blue circle.

**His touches.** He predicts the answer from the picture before computing, and writes the calculator call beside the tail it computes.

[board: 2021-10-19T125751_p2] [board: 2021-09-24T123106_p1] [board: 2021-12-10T142013_p1] [board: 2023-11-04T153250_p2]

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 330" font-family="Kalam, 'Patrick Hand', 'Segoe Print', cursive" font-size="18" fill="#1b1b1b">
  <defs>
    <pattern id="hatchBlue" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="#1f63d6" stroke-width="2.5"/>
    </pattern>
  </defs>
  <rect width="520" height="330" fill="#ffffff"/>
  <!-- 1. N(mean, SD): mean purple, SD green -->
  <text x="20" y="34" font-size="22">N(<tspan fill="#8e44ad">70</tspan>, <tspan fill="#188038">5</tspan>)</text>
  <!-- 2-3. baseline, then one smooth bell -->
  <line x1="30" y1="218" x2="490" y2="218" stroke="#1b1b1b" stroke-width="2"/>
  <path d="M50,218 C140,218 180,60 260,60 C340,60 380,218 470,218" fill="none" stroke="#1b1b1b" stroke-width="3"/>
  <!-- 4. tall mean line, short SD ticks -->
  <line x1="260" y1="60" x2="260" y2="218" stroke="#8e44ad" stroke-width="2.5"/>
  <path d="M80,210 V226 M140,210 V226 M200,210 V226 M320,210 V226 M380,210 V226 M440,210 V226" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <!-- 5. raw values, then z row -->
  <text y="246" font-size="16" text-anchor="middle"><tspan x="80">55</tspan><tspan x="140">60</tspan><tspan x="200">65</tspan><tspan x="260" fill="#8e44ad">70</tspan><tspan x="320">75</tspan><tspan x="380">80</tspan><tspan x="440">85</tspan></text>
  <text y="270" font-size="16" text-anchor="middle"><tspan x="40">z</tspan><tspan x="80">-3</tspan><tspan x="140">-2</tspan><tspan x="200">-1</tspan><tspan x="260">0</tspan><tspan x="320">1</tspan><tspan x="380">2</tspan><tspan x="440">3</tspan></text>
  <!-- 6. sigma arrow from the mean to the first tick -->
  <line x1="262" y1="200" x2="316" y2="200" stroke="#188038" stroke-width="2.5"/>
  <polyline points="308,195 317,200 308,205" fill="none" stroke="#188038" stroke-width="2.5"/>
  <text x="280" y="194" font-size="18" fill="#188038">σ</text>
  <!-- 7. cutoff in blue, value above it -->
  <line x1="344" y1="218" x2="344" y2="100" stroke="#1f63d6" stroke-width="2.5"/>
  <text x="331" y="94" font-size="20" fill="#1f63d6">77</text>
  <!-- 8. hatch the asked area in the cutoff's color -->
  <path d="M344.4,117.9 C381.2,163 416.9,218 470,218 L344.4,218 Z" fill="url(#hatchBlue)" stroke="none"/>
  <!-- 9. area value with a curved leader -->
  <text x="420" y="128" font-size="18" fill="#1f63d6">0.0808</text>
  <path d="M446,134 Q452,170 412,196" fill="none" stroke="#1f63d6" stroke-width="1.5"/>
  <!-- 10. formula in the picture's colors; answer boxed -->
  <text x="20" y="312" font-size="22">z = (<tspan fill="#1f63d6">77</tspan> - <tspan fill="#8e44ad">70</tspan>) / <tspan fill="#188038">5</tspan> = 1.4</text>
  <rect x="290" y="12" width="210" height="32" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <text x="300" y="35" font-size="20">P(X &gt; 77) = 0.0808</text>
</svg>
```

### 3.3 Scatter plot with regression line and residuals (about 145 pages)

**When.** Correlation, slope and intercept, prediction, residuals, least squares, CI vs PI, assumptions.

**Draw order.**
1. L-shaped axes, no arrowheads, variable names in words at the ends.
2. Small black dots.
3. The fitted line last, in blue.
4. The intercept as a dot on the y-axis; a small slope triangle on the line.
5. The equation below, b0 and b1 underlined in two colors that return in the interpretation sentences.
6. A residual: a vertical segment from dot to line, dashed brown guides to the y-axis with the actual and predicted values, then "e = Actual - Predicted".

**Variants.**
- Residual segments green above the line, red below; a residual plot beside the scatter, linked by a curved arrow.
- Least squares: small squares drawn on the residuals.
- CI vs PI at one x: a short green bracket (mean ŷ) nested in a tall brown one (one individual).
- Slope-sign trio: β1 < 0 red "Negative Relationship", β1 = 0 "No Relationship", β1 > 0 green.
- Assumptions as good/bad pairs with a check or an X: curved data "NOT Linear", a fan "No fanning".

**His touches.** "Over or Under Predict?" as a prompt with the student's answer boxed green. The intercept read in context.

[board: 2021-11-12T161154_p1] [board: 2021-10-12T222212_p1] [board: 2022-10-18T130143_p1] [board: 2021-09-14T130001_p2]

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 340" font-family="Kalam, 'Patrick Hand', 'Segoe Print', cursive" font-size="18" fill="#1b1b1b">
  <rect width="520" height="340" fill="#ffffff"/>
  <!-- 1. L axes, names in words -->
  <path d="M50,30 V250 H470" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <text x="58" y="30">Score</text>
  <text x="420" y="276">Hours</text>
  <!-- 2. dots -->
  <g fill="#1b1b1b" stroke="none">
    <circle cx="80" cy="205" r="3.5"/><circle cx="110" cy="215" r="3.5"/><circle cx="140" cy="180" r="3.5"/>
    <circle cx="175" cy="190" r="3.5"/><circle cx="210" cy="150" r="3.5"/><circle cx="245" cy="160" r="3.5"/>
    <circle cx="280" cy="118" r="3.5"/><circle cx="320" cy="128" r="3.5"/><circle cx="360" cy="90" r="3.5"/>
    <circle cx="400" cy="98" r="3.5"/><circle cx="430" cy="64" r="3.5"/>
  </g>
  <!-- 3. fitted line last -->
  <line x1="60" y1="225" x2="440" y2="70" stroke="#1f63d6" stroke-width="3" stroke-linecap="round"/>
  <!-- 6. residual: brown guides, green gap (point above the line) -->
  <path d="M50,118 H276 M50,135.3 H276" fill="none" stroke="#8d5a2b" stroke-width="1.5" stroke-dasharray="6 5"/>
  <line x1="280" y1="118" x2="280" y2="135.3" stroke="#188038" stroke-width="4"/>
  <circle cx="280" cy="135.3" r="4" fill="#1f63d6"/>
  <text x="16" y="123" font-size="16">82</text>
  <text x="16" y="146" font-size="16" fill="#1f63d6">78</text>
  <text x="266" y="132" font-size="16" fill="#188038">e</text>
  <!-- prompt, with the student's answer boxed green -->
  <text x="130" y="44">Over or Under Predict?</text>
  <rect x="164" y="54" width="66" height="28" rx="3" fill="none" stroke="#188038" stroke-width="2.5"/>
  <text x="174" y="75" fill="#188038">Under</text>
  <!-- 5. equation in the line's color; residual sentence in matching colors -->
  <text x="60" y="302" font-size="20" fill="#1f63d6">ŷ = 40 + 2.1x</text>
  <text x="60" y="330" font-size="20">e = Actual - Predicted = 82 - <tspan fill="#1f63d6">78</tspan> = <tspan fill="#188038">4</tspan></text>
</svg>
```

### 3.4 Function graph with key points (about 130 pages, plus about 60 line, parabola and half-plane pages)

**When.** Key features, asymptotes and holes, transformations, tangent and secant, inverses, lines and inequalities.

**Draw order.**
1. The function, with a checklist beside it for the student: Domain, Range, x-int "Set f(x)=0", y-int "Plug in f(0)", End Behavior.
2. Axes as a plain black cross, ticks only at key values.
3. Asymptotes first, labeled off the plot ("x = -2" at the top, "y = 1" at the left), each its own color.
4. Key points as dots, coordinates in the point's color (zeros blue, y-intercept purple, vertex green). Open circle for a hole.
5. The curve in one smooth stroke, arrowheads at both ends.
6. Answers in a column beside the graph, in the points' colors.

**Variants.**
- Transformations: parent in gray, each step a new color on the same axes with its equation at the tip, and an English caption ("Right 4 units, Up 9 units").
- Increasing traced green, decreasing red, with "Pos:" and "Neg:" intervals in matching colors.
- Tangent green, secant purple, "Goal: Find slope of green line. (HARD)". Inverse: gray y = x, (a, b) blue, (b, a) green.
- Inequalities: dashed boundary for < and >, solid for ≤ and ≥; test a point (check or X); hatch each in its own color so the overlap reads as a crosshatch.

**His touches.** Sketch from the stated conditions, then refine.

[board: 2022-03-30T160810_p2] [board: 2023-10-05T201008_p1] [board: 2023-09-16T163139_p1] [board: 2021-02-09T210545_p2]

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" font-family="Kalam, 'Patrick Hand', 'Segoe Print', cursive" font-size="18" fill="#1b1b1b">
  <rect width="560" height="320" fill="#ffffff"/>
  <!-- 1. the function -->
  <text x="20" y="30" font-size="22">f(x) = (x - 1)² - 4</text>
  <!-- 2. axes with arrowheads, ticks at key values -->
  <path d="M90,170 H400 M200,300 V40" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <path d="M392,165 L400,170 L392,175 M195,48 L200,40 L205,48" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <path d="M240,165 V175 M280,165 V175 M120,165 V175" fill="none" stroke="#1b1b1b" stroke-width="1.5"/>
  <!-- axis of symmetry, gray dashed -->
  <line x1="240" y1="44" x2="240" y2="300" stroke="#80868b" stroke-width="1.5" stroke-dasharray="6 5"/>
  <text x="246" y="58" fill="#80868b" font-size="16">x = 1</text>
  <!-- 5. one smooth curve, arrowheads at both ends -->
  <path d="M120,45 Q240,495 360,45" fill="none" stroke="#1b1b1b" stroke-width="3"/>
  <path d="M117.9,56.8 L120,45 L127.7,54.2 M362.1,56.8 L360,45 L352.3,54.2" fill="none" stroke="#1b1b1b" stroke-width="2.5"/>
  <!-- 4. key points in their colors -->
  <circle cx="160" cy="170" r="5" fill="#1f63d6"/><circle cx="320" cy="170" r="5" fill="#1f63d6"/>
  <text x="96" y="194" fill="#1f63d6" font-size="16">(-1, 0)</text>
  <text x="322" y="194" fill="#1f63d6" font-size="16">(3, 0)</text>
  <circle cx="200" cy="245" r="5" fill="#8e44ad"/>
  <text x="118" y="264" fill="#8e44ad" font-size="16">(0, -3)</text>
  <circle cx="240" cy="270" r="5" fill="#188038"/>
  <text x="250" y="294" fill="#188038" font-size="16">(1, -4)</text>
  <!-- 6. answer column in matching colors -->
  <text x="410" y="90" fill="#188038">Vertex: (1, -4)</text>
  <text x="410" y="120">AOS: x = 1</text>
  <text x="410" y="150" fill="#1f63d6">Zeros: -1, 3</text>
  <text x="410" y="180" fill="#8e44ad">y-int: (0, -3)</text>
  <text x="410" y="210">Range: y ≥ -4</text>
  <rect x="402" y="68" width="140" height="30" fill="none" stroke="#188038" stroke-width="2"/>
</svg>
```

### 3.5 Contingency table: joint, marginal, conditional (about 95 pages)

**When.** Probability from a two-way table, independence, Bayes from counts, chi-square.

**Draw order.**
1. Header, then the grid: plus-sign rules not closed at the edges, row variable at the left, column variable on top.
2. The counts, then the Total row and column last, grand total at the bottom right.
3. The color boxes that recur across years: a blue loop around the given row or column, green around the joint cells, purple around the marginal totals.
4. Definitions beside the table in the same three colors.
5. The formula: numerator green (the joint cell), denominator in the given's color.
6. For independence: "?" over the equals sign, then ≠ and "Not independent, Are related".

**Variants.**
- Chi-square: observed large, expected small at the cell's upper right, the expected-count rule boxed, a red mark on any expected count under 5.
- Bayes: the product written in each cell, the conditioning column circled.

[board: 2022-04-21T153424_p2] [board: 2021-11-16T162903_p2] [board: 2022-04-25T170103_p1] [board: 2021-02-19T125757_p2]

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 320" font-family="Kalam, 'Patrick Hand', 'Segoe Print', cursive" font-size="20" fill="#1b1b1b">
  <rect width="620" height="320" fill="#ffffff"/>
  <!-- 1. header, then plus-sign grid not closed at the edges -->
  <text x="20" y="32" font-size="24">Contingency Table</text>
  <line x1="20" y1="40" x2="214" y2="40" stroke="#1b1b1b" stroke-width="2"/>
  <path d="M130,52 V214 M210,52 V214 M290,52 V214 M20,90 H372 M20,130 H372 M20,170 H372" fill="none" stroke="#1b1b1b" stroke-width="1.5"/>
  <!-- 2-3. headers, counts, totals -->
  <g text-anchor="middle">
    <text x="170" y="78">Pass</text><text x="250" y="78">Fail</text><text x="330" y="78">Total</text>
    <text x="170" y="118">40</text><text x="250" y="118">10</text><text x="330" y="118">50</text>
    <text x="170" y="158">20</text><text x="250" y="158">30</text><text x="330" y="158">50</text>
    <text x="170" y="198">60</text><text x="250" y="198">40</text><text x="330" y="198">100</text>
  </g>
  <text x="28" y="118">Studied</text><text x="28" y="158">Didn't</text><text x="28" y="198">Total</text>
  <!-- 4. given row blue, joint cell green, marginals purple -->
  <rect x="294" y="94" width="72" height="114" fill="none" stroke="#8e44ad" stroke-width="2"/>
  <rect x="24" y="174" width="342" height="34" fill="none" stroke="#8e44ad" stroke-width="2"/>
  <rect x="22" y="95" width="350" height="31" rx="14" fill="none" stroke="#1f63d6" stroke-width="2.5"/>
  <ellipse cx="170" cy="111" rx="24" ry="14" fill="none" stroke="#188038" stroke-width="2.5"/>
  <!-- 5. definitions in the same colors -->
  <text x="392" y="112" fill="#188038">joint = Two conditions</text>
  <text x="392" y="144" fill="#8e44ad">marginal = One condition</text>
  <text x="392" y="176" fill="#1f63d6">Conditional - One</text>
  <text x="392" y="200" fill="#1f63d6">condition given, one</text>
  <text x="392" y="224" fill="#1f63d6">specified</text>
  <!-- 6. formula: joint over the given total -->
  <text x="20" y="276">P(Pass | <tspan fill="#1f63d6">Studied</tspan>) =</text>
  <text x="212" y="262" fill="#188038">40</text>
  <line x1="206" y1="270" x2="242" y2="270" stroke="#1b1b1b" stroke-width="2"/>
  <text x="212" y="294" fill="#1f63d6">50</text>
  <text x="252" y="276">=</text>
  <rect x="274" y="254" width="52" height="30" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <text x="284" y="276">0.8</text>
</svg>
```

Put the question above it in HTML: "Given a student <span class="u-blue">studied</span>, what is the probability they <span class="u-green">passed</span>?"

### 3.6 Supply and demand: shifts, surplus, tax, price controls (about 87 pages)

**When.** Any market change, CS and PS, DWL, taxes and incidence, floors and ceilings, quotas, externalities.

**Draw order.**
1. A title: "Market for ___".
2. Axes, P at the top, Q at the right end.
3. D and S as straight black lines (the original picture), "D" at the low end and "S" at the top end.
4. The equilibrium dot, dashed drop lines, P0* and Q0*.
5. The change: a parallel new curve in a new color with subscript 1 and a short shift arrow.
6. The new equilibrium and drop lines in that color, and P1*, Q1* in that color, each with a small arrow for its direction. An arrow under the Q axis shows the change in quantity.
7. The original drop lines and labels go gray.
8. Beside the graph, a summary in the new color: "Price ⇑ Quantity ⇑".
9. The scenario typed under the graph.

**Variants.**
- Surplus: CS hatched blue, PS green, DWL a red triangle with a leader to "DWL", tax revenue an outlined rectangle.
- Tax: a red S^T above S with P_c and P_s on the axis.
- Controls: a horizontal "PF" or "PC" line and a bracket "Shortage of 70 units".
- Pasted graph: letter the regions and answer as a letter sum ("A + B + F"). An ambiguous change gets "?".
- Several area questions on one graph: redraw it per question, shading only that question's area.

**His touches.** Each area's result written under the graph in that area's color.

[board: 2023-11-30T210132_p1] [board: 2023-12-07T185839_p1] [board: 2022-05-10T190408_p2] [board: 2021-09-20T120223_p1]

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 350" font-family="Kalam, 'Patrick Hand', 'Segoe Print', cursive" font-size="20" fill="#1b1b1b">
  <rect width="540" height="350" fill="#ffffff"/>
  <!-- 1. title -->
  <text x="236" y="30" font-size="22">Market for Football Cleats</text>
  <line x1="236" y1="38" x2="500" y2="38" stroke="#1b1b1b" stroke-width="2"/>
  <!-- 2. axes -->
  <path d="M60,44 V260 H366" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <text x="54" y="38">P</text><text x="372" y="266">Q</text>
  <!-- 3. original S and D in black -->
  <line x1="90" y1="240" x2="300" y2="60" stroke="#1b1b1b" stroke-width="3"/>
  <text x="304" y="60">S</text>
  <line x1="80" y1="70" x2="280" y2="250" stroke="#1b1b1b" stroke-width="3"/>
  <text x="254" y="252" font-size="18">D<tspan font-size="13" dy="5">0</tspan></text>
  <!-- 4. original equilibrium, gray drop lines and labels -->
  <path d="M60,161.5 H181.6 V260" fill="none" stroke="#80868b" stroke-width="1.5" stroke-dasharray="6 5"/>
  <circle cx="181.6" cy="161.5" r="5" fill="#1b1b1b"/>
  <text x="16" y="168" fill="#80868b" font-size="18">P<tspan font-size="13" dy="5">0</tspan><tspan dy="-11">*</tspan></text>
  <text x="166" y="284" fill="#80868b" font-size="18">Q<tspan font-size="13" dy="5">0</tspan><tspan dy="-11">*</tspan></text>
  <!-- 5. new demand in blue with a shift arrow -->
  <line x1="140" y1="70" x2="340" y2="250" stroke="#1f63d6" stroke-width="3"/>
  <text x="344" y="248" fill="#1f63d6" font-size="18">D<tspan font-size="13" dy="5">1</tspan></text>
  <path d="M134,110 H174 M167,105 L175,110 L167,115" fill="none" stroke="#1f63d6" stroke-width="2.5"/>
  <!-- 6. new equilibrium, blue drop lines, labels with direction arrows -->
  <path d="M60,135.2 H212.4 V260" fill="none" stroke="#1f63d6" stroke-width="1.5" stroke-dasharray="6 5"/>
  <circle cx="212.4" cy="135.2" r="5" fill="#1f63d6"/>
  <text x="8" y="140" fill="#1f63d6" font-size="18">P<tspan font-size="13" dy="5">1</tspan><tspan dy="-11">*</tspan></text>
  <path d="M48,148 V128 M44,134 L48,127 L52,134" fill="none" stroke="#1f63d6" stroke-width="2"/>
  <text x="204" y="284" fill="#1f63d6" font-size="18">Q<tspan font-size="13" dy="5">1</tspan><tspan dy="-11">*</tspan></text>
  <path d="M238,278 H256 M250,274 L257,278 L250,282" fill="none" stroke="#1f63d6" stroke-width="2"/>
  <path d="M182,298 H210 M203,293 L211,298 L203,303" fill="none" stroke="#1f63d6" stroke-width="2.5"/>
  <!-- 8. summary in the new color -->
  <text x="396" y="130" fill="#1f63d6" font-size="22">Price ⇑</text>
  <text x="396" y="162" fill="#1f63d6" font-size="22">Quantity ⇑</text>
  <!-- 9. scenario, typed -->
  <text x="20" y="334" font-family="system-ui, 'Segoe UI', Arial, sans-serif" font-size="15">A pro team starts wearing these cleats, so more people want them.</text>
</svg>
```

### 3.7 Number line and sign chart (about 75 pages)

**When.** Inequalities, intervals, integers, absolute value, domain, sign analysis.

**Draw order (sign chart).**
1. The factored expression on top.
2. A line with arrowheads at both ends, ticks at the critical values, numbers under them.
3. Under the line, one row per factor with its sign in each interval (green +, red -).
4. Above each interval, the product sign circled, green + or red -.
5. Under each tick, a blue up-arrow with "max" or "min".
6. The answer intervals in matching colors.

**Variants.**
- Inequality: open circle for < and >, filled for ≤ and ≥, the solution as a thick colored ray; inequality above, interval notation below.
- Hops: semicircular arcs above the line, one per unit. Times a negative: a red arrow flipping across 0 ("Direction and Scale").
- Absolute value: a brown V splits it into two branches, each drawn, then union or intersection.
- Domain: one colored arrow per condition, stacked; the overlap is the answer.

**His touches.** Four identical charts for four related questions. The graph drawn right after, rising parts green and falling parts red.

[board: 2021-03-18T181000_p1] [board: 2021-10-27T190143_p2] [board: 2023-08-17T145728_p2] [board: 2023-08-30T230506_p2]

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 340" font-family="Kalam, 'Patrick Hand', 'Segoe Print', cursive" font-size="20" fill="#1b1b1b">
  <rect width="520" height="340" fill="#ffffff"/>
  <!-- 1. the factored derivative -->
  <text x="20" y="32" font-size="22">f'(x) = (x + 2)(x - 3)</text>
  <!-- 2-3. line with arrowheads, ticks at critical values -->
  <path d="M30,120 H490 M40,114 L30,120 L40,126 M480,114 L490,120 L480,126" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <path d="M170,110 V130 M340,110 V130" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <text x="160" y="150">-2</text><text x="335" y="150">3</text>
  <!-- 5. overall sign circled over each interval -->
  <circle cx="100" cy="78" r="17" fill="none" stroke="#188038" stroke-width="2.5"/>
  <circle cx="255" cy="78" r="17" fill="none" stroke="#d93025" stroke-width="2.5"/>
  <circle cx="415" cy="78" r="17" fill="none" stroke="#188038" stroke-width="2.5"/>
  <g text-anchor="middle" font-size="24">
    <text x="100" y="86" fill="#188038">+</text><text x="255" y="86" fill="#d93025">-</text><text x="415" y="86" fill="#188038">+</text>
  </g>
  <!-- 4. one row per factor -->
  <text x="20" y="186" font-size="17">(x + 2)</text><text x="20" y="214" font-size="17">(x - 3)</text>
  <g text-anchor="middle" font-size="22">
    <text x="100" y="186" fill="#d93025">-</text><text x="255" y="186" fill="#188038">+</text><text x="415" y="186" fill="#188038">+</text>
    <text x="100" y="214" fill="#d93025">-</text><text x="255" y="214" fill="#d93025">-</text><text x="415" y="214" fill="#188038">+</text>
  </g>
  <!-- 6. blue up-arrows with max and min under the ticks -->
  <path d="M170,256 V230 M164,238 L170,229 L176,238 M340,256 V230 M334,238 L340,229 L346,238" fill="none" stroke="#1f63d6" stroke-width="2"/>
  <text x="154" y="278" fill="#1f63d6">max</text><text x="326" y="278" fill="#1f63d6">min</text>
  <!-- 7. answer in matching colors -->
  <text x="20" y="312" fill="#188038">Increasing: (-∞, -2) ∪ (3, ∞)</text>
  <text x="20" y="336" fill="#d93025">Decreasing: (-2, 3)</text>
</svg>
```

### 3.8 Factor tree (about 50 pages)

**When.** Prime factorization, GCF and LCM, simplifying radicals, logs of a number.

**Draw order.**
1. The number on top, two short slanted strokes to a factor pair, repeat until every leaf is prime.
2. Circle the primes.
3. With two trees, each prime they share gets the same circle color on both (first 2 blue, second 2 purple, the 3 green). Unshared primes stay black.
4. The answer line reuses those colors. The LCM reuses the boxed GCF: "LCM = (12) · 3 · 5".

**Variants.**
- Radicals: pairs of equal primes circled in one color and joined by a line; one copy comes out of the root, leftovers underlined.
- Logs: the prime colors reappear on log_b(2), log_b(3) and the given decimals.
- Factor-pair lists get a green U-shaped bracket, down the left numbers and up the right.

[board: 2021-05-21T193051_p1] [board: 2021-03-26T170344_p1] [board: 2023-12-06T172920_p2] [board: 2022-10-18T195749_p1]

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" font-family="Kalam, 'Patrick Hand', 'Segoe Print', cursive" font-size="22" fill="#1b1b1b">
  <rect width="480" height="300" fill="#ffffff"/>
  <!-- 1-3. two trees, black strokes -->
  <g text-anchor="middle">
    <text x="110" y="40">36</text><text x="70" y="100">4</text><text x="150" y="100">9</text>
    <text x="45" y="160">2</text><text x="95" y="160">2</text><text x="130" y="160">3</text><text x="175" y="160">3</text>
    <text x="330" y="40">60</text><text x="290" y="100">6</text><text x="370" y="100">10</text>
    <text x="265" y="160">2</text><text x="315" y="160">3</text><text x="350" y="160">2</text><text x="395" y="160">5</text>
  </g>
  <path d="M102,48 L76,82 M118,48 L144,82 M64,108 L50,140 M76,108 L90,140 M144,108 L134,140 M156,108 L170,140" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <path d="M322,48 L296,82 M338,48 L364,82 M284,108 L270,140 M296,108 L310,140 M364,108 L354,140 M376,108 L390,140" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <!-- 4-5. circle primes; shared primes share a color on both trees -->
  <g fill="none" stroke-width="2.5">
    <circle cx="45" cy="153" r="15" stroke="#1f63d6"/><circle cx="265" cy="153" r="15" stroke="#1f63d6"/>
    <circle cx="95" cy="153" r="15" stroke="#8e44ad"/><circle cx="350" cy="153" r="15" stroke="#8e44ad"/>
    <circle cx="130" cy="153" r="15" stroke="#188038"/><circle cx="315" cy="153" r="15" stroke="#188038"/>
    <circle cx="175" cy="153" r="15" stroke="#1b1b1b"/><circle cx="395" cy="153" r="15" stroke="#1b1b1b"/>
  </g>
  <!-- 6. answer lines reuse the colors -->
  <text x="20" y="226">GCF = <tspan fill="#1f63d6">2</tspan> · <tspan fill="#8e44ad">2</tspan> · <tspan fill="#188038">3</tspan> =</text>
  <rect x="206" y="203" width="40" height="32" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <text x="213" y="226">12</text>
  <text x="20" y="274">LCM = (12) · 3 · 5 =</text>
  <rect x="232" y="251" width="54" height="32" fill="none" stroke="#1b1b1b" stroke-width="2"/>
  <text x="239" y="274">180</text>
</svg>
```

### 3.9 Riemann sums and area sketches (about 50 pages)

**When.** Approximating integrals, area between curves, net vs total area, solids of revolution.

**Draw order.**
1. "w = (b-a)/n" first.
2. The curve in blue.
3. Rectangles, one color per rule: right purple, left green, midpoint orange with a dot on the curve.
4. Each height inside its rectangle in that color, and the sum listed in the same order and colors.
5. Legend dots: green "Exact Area" beside the integral, purple "Approximate Area" beside the sum.

**Variants.**
- Area between curves: two curves in two colors, intersection dots with coordinates, the region hatched green, a dx or dy strip with a "top - bottom" double arrow, and the integral's pieces underlined in each curve's color.
- Net area: green above the axis, red with a minus below; "Displacement (where you end up)" vs "Distance Traveled".
- Shells: the unrolled slab with "2πr" green, "h" red, "dx" blue, and the integral in the same colors.

**His touches.** The region between two parabolas drawn as a face called "our guy".

[board: 2020-12-06T225051_p2] [board: 2021-10-31T165531_p1] [board: 2022-04-14T135942_p1] [board: 2021-05-23T223107_p1]

### 3.10 Forecast table with arrows (about 50 pages)

**When.** Moving averages, exponential smoothing, MAD, MSE, MAPE.

**Draw order.**
1. The table (Period, Actual, Smoothed or 3MA, Prediction), with an X in every cell that cannot exist.
2. The key "Y = Actual / Y~ = Smoothed Value / Y^ = Prediction AKA Forecast".
3. The formula, α in one color and (1 - α) in another.
4. Arrows: Actual into Smoothed in α's color, the previous Smoothed in (1 - α)'s color, gray for the first copied cell.
5. A diagonal arrow from each smoothed value into the next period's Prediction.
6. The next-period column in blue, the forecast cell boxed.

[board: 2021-12-06T185737_p1] [board: 2021-12-04T123211_p1] [board: 2022-11-30T130122_p1]

### 3.11 Indifference curve and budget line (about 47 pages)

**When.** Consumer choice, two-period consumption and the Euler equation, labor and leisure, income and substitution effects.

**Draw order.**
1. Black L axes.
2. The budget line first, straight, "BC".
3. A convex IC tangent to it, "IC0" at its right end in its color.
4. The tangency as a bold dot numbered 1, guide lines to the axes labeled C*_t and C*_{t+1}, and a "More Utility" arrow up and right.
5. The slope as a small red right triangle, "-(1+r)".
6. A shock: the new BC in a new color, a new tangent IC, dot 2, small arrows under the axis, a one-line verdict.

**Variants.** Substitution effect: a dashed line parallel to the new BC, tangent to the old IC, with SE, IE and Total brackets on the x-axis. Boxed captions "Initially a Saver" / "Initially a Borrower".

[board: 2022-05-03T120202_p3] [board: 2021-11-04T132853_p3] [board: 2022-03-20T165400_p1]

### 3.12 Unit circle (about 44 pages)

**When.** Exact values, reference and coterminal angles, trig equations, radians, inverse trig.

**Draw order.**
1. A circle with crosshairs, "1" and "-1" at the crossings.
2. Spokes at 30, 45 and 60 degrees in each quadrant, one color per family (purple π/6, blue π/4, green π/3).
3. Radians inside; coordinates and tan outside in the family's color.
4. "All / Sin / Tan / Cos" in the quadrants.

**Variants.**
- sin θ = 1/2: a blue line at y = 1/2, both intersections dotted, a purple arc to θ1 and a green arc to θ2, each value in its arc's color. An impossible value is a red dot off the circle.

[board: 2021-05-14T190218_p1] [board: 2022-03-03T190141_p1] [board: 2023-05-03T230519_p1]

### 3.13 T-accounts (about 39 pages)

**When.** Journal entries, A = L + E, bank balance sheets and money creation, income statements.

**Draw order.**
1. "Assets = Liabilities + Equity" across the top.
2. Each T under its side: name above, "Dr | Cr" underlined, a tiny + or - under each (reversed for liabilities and equity).
3. Starting balances in gray.
4. Each transaction in one color on both legs (T1 green, T2 purple, T3 blue); contra accounts red.
5. The ending balance under a second rule, underlined green.

[board: 2021-09-07T112302_p1] [board: 2021-10-21T165151_p1] [board: 2023-08-11T182124_p1]

### 3.14 Monopoly MR and MC, and cost curves (about 36 pages)

**When.** Monopoly pricing, profit, DWL, price discrimination, cost curves, shutdown.

**Draw order.**
1. Axes, D, then MR steeper from the same intercept (labeled at its foot), then MC.
2. A dot where MR = MC; drop to Q*, up to D, across to P*, the drop lines in one color.
3. Regions: a CS triangle, a green profit rectangle with "Profit" in it, a red DWL triangle with a leader.
4. The competitive outcome in blue for comparison.

**Variants.**
- Comparative statics: small copies of the base picture, each changing one curve, each with "P⇑ Q⇑ π⇑".
- Cost curves: MC, ATC, AVC named at their right ends, dots at the minimums, supply traced bold red over MC above shutdown; Market and Firm panels side by side so the price line runs across both.

[board: 2022-04-30T182711_p1] [board: 2022-04-11T200640_p2] [board: 2021-10-25T122904_p1]

### 3.15 Probability tree (about 34 pages)

**When.** Sequential events, conditional probability, Bayes.

**Draw order.**
1. A root dot at the far left.
2. Branches fanning right, the event word at each tip, the probability on the branch; then a second fan of conditionals.
3. The joint probability at each leaf end, written larger.
4. A star or green dot on the leaves to add, then P(total) = the sum of the starred leaves.
5. The Bayes line in a green box with a check; the tempting reversed conditional beside it in a red box with an X.

[board: 2022-12-05T125910_p3] [board: 2021-11-16T162903_p2] [board: 2022-11-28T125721_p2]

### 3.16 Venn diagram (about 32 pages)

**When.** Inclusion-exclusion, "or" vs "and", conditional probability, classification (number sets, quadrilaterals).

**Draw order.**
1. Two overlapping circles in category colors, names above, "S" at the upper right.
2. Region labels inside ("Just A", "Both"), each region traced in its label's color.
3. The outside region written below.
4. The algebra underneath in the same colors ("A U B = A + B - A n B").

**Variants.** Hatching per circle, the overlap crosshatched. Conditional: a smaller second Venn with the given circle traced thick. Nested sets: rings, examples inside in each ring's color.

[board: 2023-09-13T144759_p1] [board: 2021-10-05T224451_p1] [board: 2021-07-09T210017_p1]

### 3.17 The "multiply by 1" shape (about 30 pages)

**When.** Equivalent fractions, common denominators, dividing fractions, complex fractions, rationalizing.

**Draw order.** The fraction; right beside it a tall outline shaped like a house or flag holding k/k (5/5, √3/√3); then the product. It means "this equals 1, nothing changes". Blue for the first multiplier, purple for the second, red when dividing fractions.

[board: 2023-08-09T175345_p2] [board: 2023-05-09T151948_p1] [board: 2021-04-16T193447_p1]

### 3.18 Confidence interval line (about 25 pages)

**When.** Building and reading intervals, margin of error, testing with an interval.

**Draw order.**
1. A line with square end brackets.
2. "Lower", the point estimate at the middle tick in purple, "Upper".
3. A red "- MoE" arrow on the left half, a green "+ MoE" arrow on the right half.
4. A brown "2 MOE" bracket below, and "Upper - Lower = 2 * MoE".

**Variants.** CI anatomy: the formula large with brackets under Crit. Value, SE, Margin of Error and Confidence Interval. Testing: a green arrow dropping onto 0 labeled "H0".

[board: 2021-12-10T142013_p2] [board: 2022-10-09T175659_p1] [board: 2021-09-19T180135_p1]

### 3.19 Color-annotated formula with leader arrows (about 24 pages as the main drawing; on most statistics pages)

**When.** Any formula with more than two pieces: sampling distributions, sample size, CAPM, future value, momentum.

**Draw order.**
1. The formula in black.
2. A colored underline or underbrace under each piece, with a leader arrow to a word label in that color.
3. Each phrase in the question underlined in the color of the symbol it feeds.
4. The same underlines reused on every later line, down to the plugged-in numbers.

**His touches.** The annotated formula comes back at the bottom of the next board as a template.

[board: 2023-03-06T113143_p3] [board: 2023-10-10T163346_p2] [board: 2021-11-09T154755_p3]

### 3.20 Smaller recipes

- **Cross-multiplication loops:** two ovals (blue, green) crossing the equals sign, products underlined to match. [board: 2021-02-24T170335_p1]
- **Cash-flow timeline:** ticks 0, 1, 2; a curved arrow from each payment to time 0, one color per payment, "x 1.10" on the arrow; the PV sum in the arrows' colors. [board: 2021-08-04T213628_p1]
- **Epsilon-delta:** blue curve and L, green band at L+ε, red at L-ε, purple ±δ, the same colors on every algebra line. [board: 2023-09-12T173019_p1]

---

## 4. Teaching patterns for interactive visuals

1. **Build the picture in his order.** Reveal the recipe's draw order one step per "Next" click, never on a timer. Ask the step's question first ("Which way does demand shift?"). Tag each SVG element with `data-step`:

   ```html
   <button id="next">Next</button>
   <script>
   const parts = [...document.querySelectorAll('[data-step]')];
   let step = 0;
   function show(n){ parts.forEach(el => { el.style.visibility = (+el.dataset.step <= n) ? 'visible' : 'hidden'; }); }
   document.getElementById('next').onclick = () => show(++step);
   show(0);
   </script>
   ```

2. **One change at a time, new color, old kept in gray.** The old curve and its labels stay; the new one appears in a new color with subscript 1. [board: 2023-11-30T210132_p1] [board: 2021-03-15T140108_p1]
3. **The same picture with one parameter changed: make it a slider.** He redrew power at 50, 60, 70 and 90 percent [board: 2022-10-09T175659_p1] and trig graphs one parameter at a time [board: 2022-04-09T120428_p1]. Keep the baseline in black; draw the moving version and its value in the parameter's color.
4. **Fill-in templates with blanks.** "(x + ?)(x + ?)", "a = , b = , c = , d = ", the CI sentence, a half-filled table, the four-step hypothesis skeleton. In an artifact the blanks are inputs, checked as they are filled (green check, or a red X with one pointer). [board: 2021-03-24T203454_p2] [board: 2021-02-09T183913_p2] [board: 2022-09-12T195950_p1]
5. **Stage the common mistake next to the right answer.** The tempting wrong line in a red box with an X, labeled "Common Error" or "(Wrong) Intuition", beside the right line in green with a check. Both stay visible. [board: 2022-12-05T125910_p3] [board: 2023-10-08T160008_p1]
6. **Underline question phrases in the color of their symbol.** On hover or tap, highlight the matching piece of the picture and formula. [board: 2021-11-09T154755_p3] [board: 2023-10-10T163346_p2]
7. **Write the student's own answer onto the board.** When they choose ("Over or Under Predict?", "Z test or T test?"), write their pick and box it: green if right; if not, keep it with a red X and the fix beside it. [board: 2021-04-07T182916_p1] [board: 2023-02-21T193646_p2]
8. **Typed plain-English conclusion.** One sans sentence with units and context. If the student writes it, keep their words and fix only what is wrong. [board: 2021-09-27T193032_p1]
9. **End with "HW" or "Your turn".** Underlined, then one to three same-type problems with new numbers and the same template, answers hidden until tried. "Bonus:" for a harder one. [board: 2022-11-30T130122_p3]

---

## 5. Words he writes on boards

Verbatim, spelling kept. These add to the list in SKILL.md section 4.

**Statistics and probability**
- "joint = Two conditions" / "marginal = One condition" / "Conditional - One condition given, one specified" [board: 2022-04-21T153424_p2]
- "Marginal = Total row or column / Overall total"; "Joint = Individual Cell / Overall total"; "Conditional = Individual Cell / Total row or column" [board: 2022-05-04T141435_p1]
- "Expected = Row Total . Column Total / Overall Total" [board: 2021-11-28T180321_p2]
- "Mean gets dragged in direction of the tail." [board: 2022-05-08T155858_p1]
- "Variances add, Std Dev don't." [board: 2021-09-08T182702_p1]
- "90% Confident => Narrower / 99% Confident => Wider" [board: 2022-09-14T135824_p2]
- "Specific X - Confidence - mean y-hat / Prediction - Individual y-hat / No Specific X - Confidence interval of slope" [board: 2022-10-18T130143_p1]
- "(Wrong) Intuition: Given Data -> Prob of Hypothesis X" next to "P-Value: Given Null Hypothesis -> Prob of Data (check)" [board: 2023-10-08T160008_p1]
- "Fail to Reject Ho / Not Strong Evidence against Ho / Ho is plausible"; "Reject Ho / Strong Evidence against Ho / Ho is NOT plausible" [board: 2023-04-03T113003_p1]

**Algebra, precalculus and calculus**
- "Your Team · Gain Yards = +" / "Your Team · Lose Yards = -" / "Other Team · Gain Yards = -" / "Other Team · Lose Yards = +" (Your Team and Gain Yards green, Other Team and Lose Yards red) [board: 2021-01-31T183630_p1]
- "> when Shading is above the line." / "< when Shading is below the line." [board: 2021-02-09T210545_p1]
- "multiply to a.c / Add to b" [board: 2022-09-28T205911_p1]
- "Domain = Allowed x-values. What isn't allowed? 1. Divide by 0 2. Square root negatives 3. Take logarithm of 0 or negative." [board: 2022-06-20T140326_p1]
- "Even : f(-x) = f(x)" / "Odd : f(-x) = - f(x)", with "Fold in half over y-axis." and "Spin 180°" beside the sketches [board: 2021-10-16T130054_p1]
- "log_b(X) = Y <=> b^Y = X" (b blue, Y purple, X green) [board: 2022-10-13T200257_p2]
- "1. Find Coterminal Angle ±2π ±360° 2. Convert csc, sec, cot → 1/sin, 1/cos, 1/tan 3. Evaluate from Unit Circle" [board: 2022-03-10T165836_p1]
- "Goal: Find slope of green line. (HARD)" / "Goal 2: Find slope of purple line (Easier)" [board: 2023-09-03T183545_p2]
- "dx ⊥ to axis V = πr^2 / dx || to axis V = 2πrh" [board: 2023-12-11T190112_p1]
- "Common Error" beside a red box "(x-6)^2 != x^2 - 36" [board: 2023-11-13T210115_p1]
- "Adding - Pushing Pie slices from other pies together"; "Multiplying - Cutting an existing slice into more pieces." [board: 2023-08-16T175639_p1]

**Economics**
- "Marginal = Additional = The Next = One more = The last" [board: 2021-01-31T144647_p1]
- "If D > ATC => Profit :)" / "If D < ATC => Loss :(" [board: 2021-11-14T155704_p2]
- "MC = MR Profit maximizing"; "MC = D Socially Optimal" [board: 2023-12-08T192853_p1]

**Templates**
- "We are __95__% confident that the true __mean__ weight loss of people that participate in the program is between 14.66 lbs and 18.14 lbs.", with small labels under the blanks: "CI", "mean/proportion", "lower", "upper" [board: 2021-09-08T182702_p2]
- "x^2 + bx + c = (x + ?)(x + ?) Sum", "x^2 - bx + c = (x - ?)(x - ?)", "x^2 + bx - c = (x + ?)(x - ?) Diff", "x^2 - bx - c = (x + ?)(x - ?)" [board: 2021-03-24T203454_p2]

---

## 6. Don'ts

- No sketchy or wobbly strokes. Lines are clean; only lettering is handwritten.
- No color legend boxes, and no color that neither binds two things nor carries a stable meaning.
- Do not change a color's meaning partway through a problem.
- Do not erase the original picture when something changes. Gray it and add the new one in a new color.
- Do not delete a wrong step. Cross it out in red and write the fix beside it.
- No gradients, shadows, 3D or decorative icons. Fills are hatching or a flat light tint.
- No yellow text, no small orange text, nothing under 15 px.
- No unlabeled curves, axes or regions.
- Do not reveal a step's answer before the student has tried it.
- Do not set long sentences in the handwriting font, or math in the sans font.
- Do not crowd a cell. More than five colors or a second diagram means a new cell.
