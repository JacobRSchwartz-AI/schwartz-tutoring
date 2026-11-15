# Board habits: what Jacob drew, how often, and how each one draws a code change

## Where the numbers come from

Every whiteboard page Jacob saved from December 2020 to December 2023 was read and described one drawing at a time: 4,726 drawings on 2,000 pages. 970 of those drawings come from 99 recorded sessions, where the transcript gives the order things went on the board. Each drawing was then tagged with the habits it shows. The counts below are tallied from those tags.

Two limits. Real program code is on only 17 of the pages, and none of the recorded sessions has code on the board, so the order for building a code drawing is carried over from his other subjects. And the transcripts say when the big pieces went on, but rarely when a small underline or arrow did.

## 1. Rules that hold almost everywhere

| Rule | Evidence |
|---|---|
| Black is the base and the working. Color is a link or a change. | All-black pages are plain tables and procedures with nothing to link. |
| One color follows one thing everywhere it appears. | 1,978 drawings (42%). Usually a thin underline, not colored text and not a fill. |
| Colors reset on each page. | The same role gets different colors on different boards. Only three meanings are stable: green is right, plus or up; red is wrong, minus or cancelled; the chosen answer gets a green box. |
| The old state is not grayed out. | Made quieter in 13 drawings of 4,726. It stays black and the new thing gets one color. |
| Ink goes on the given material. | 1,234 drawings (26%): underlines, boxes, labels and strikes on the pasted problem. The print is never edited. |
| The conclusion is written in words. | 547 drawings (12%), usually the last thing drawn. |
| No legend. | 61 drawings (1.3%) have one. |
| Wrong and right both kept is rare. | 27 drawings. A wrong first answer was usually corrected aloud, not left on the board. |

## 2. How he showed a change, ranked

| Habit | Drawings | How it is done |
|---|---|---|
| Same setup redrawn per case, one thing changed | 457 | The whole block is copied. One thing differs in each copy. Each copy keeps its own answer. Nothing is grayed. |
| Only the added piece in color | 305 | The line is repeated in black and only the new term is colored. The same color marks that term in the numbers line and in the conclusion. |
| Red slash through what cancels or is removed | 304 | A short red diagonal where the thing sits. It stays readable. A replacement, if any, is written small above it. |
| Small up and down arrows | 173 | One arrow beside each quantity, green up and red down. The conclusion repeats the arrows. |
| Rows of cases with a verdict word | 173 | Yes, No, Reject, Stable, Winner, in red and green. |
| New state drawn over the old picture | 171 | Old curves stay black. The new curve, its guide lines, its labels and the answer all take one color. |
| Before and after as two pictures | 159 | Stacked or side by side, each labelled ("OG" and "New", "Before" and "Now"). |
| Two near-identical cases, opposite verdicts | 132 | They differ in one element. That element is circled or underlined. |
| Table of cases | 125 | Rows are cases, columns are outcomes, cells are arrows, checks or short words. |
| Strike and replace | 98 | Old value struck, new value beside it. |
| One color per step of a multi-step change | 93 | Each step's marks and its result share a color. Earlier steps stay. |

Two of his boards are the direct models for a PRtifact:

- **The comparison chart.** A ruled table with the columns Metric, M1, M2, Winner. Before each metric, a green up arrow or a red down arrow says which direction is better. Under the table, one boxed line: "M2 is better." The case chart on the page is this table.
- **The diff.** Two boxed equations stacked, "OG:" in black and "New" in red, identical except for one added factor. Under them, the new curve drawn over the black one. The code view on the page is this pair.

## 3. Order, flow and branch

| Habit | Drawings |
|---|---|
| Arrow from a source to where it goes, head at the destination | 742 |
| Branching tree with outcomes at the ends | 132 |
| Words joined by arrows, no boxes | 117 |
| Table that tracks a value step by step | 103 |
| Numbered steps | 102 |
| Number line or sign chart with regions | 101 |
| Lines carrying a value from one panel into another | 46 |

## 4. How a drawing was built (970 recorded drawings)

| What happened | Recorded drawings |
|---|---|
| He named each piece aloud as it went on | 663 (68%) |
| He asked, the student answered, and the answer became the next mark | 524 (54%) |
| The conclusion or the answer box went on last | 123 |
| Color went on after the black working, as a second pass | 53 where the order is known, never the reverse |
| He copied an earlier drawing forward and edited the copy | 51 |
| The starting state was drawn in full before any change | 42 |

The order for a click-through follows from this: the given, the base in black, a question, the change in one color, the conclusion.

## 5. Which drawing for which change

Pick by what the change is about. If none fits, the change probably needs no drawing.

| The change is about | Draw | Built on |
|---|---|---|
| Something taking a different route (charge the card, or use the credit) | Words joined by arrows. The old route in black. In "Now" the old route is still there in black, the new route goes on in the pen color, and the old route gets a red slash. | Words and arrows, new state over old, red slash |
| Which items are touched (a filter, a scope, a permission) | The items in a row. A pen-colored box around the ones in scope, with its label. | Boxes that group, only the added piece in color |
| A condition or a branch | A black tree with the returned value at each end. One input's route traced in the pen color to a circled leaf. A second input in a second color. The answer in the route's color. | Tree with a traced route |
| A loop, a retry, state over several passes | A table with one row per pass. Only the cell that changed on that pass is colored. Losing rows get a red slash. | Step-by-step table |
| Timing: schedules, overlap, races, timeouts | A time line with ticks and times. A bar for each run. A red bracket over the overlap. The skipped run gets a red slash. | Number line |
| Two systems that must agree (a database and an outside service) | Two columns split by a vertical rule, one per system. What each holds is written in its column. What is undone gets a red slash. | His two-column ledgers |
| A quantity that is split, capped or compared with a limit | A bar cut into labelled parts, or a number line with the limit marked and the value on one side of it. | Split bar, number line |
| A requirement and the code that meets it | The phrase in the ticket and the condition in the code underlined in the same color. | One color follows one thing |
| The shape of data (a column, a field, a payload) | A small table of real rows. The new column beside the old ones in the pen color. | Only the added piece in color |
| A guard that only exists because of the rest of this change (the old code never reached that situation) | Label the two views "Without it" and "With it". "Without it" draws what the new code would do if the guard were missing. | Two near-identical cases, opposite verdicts |
| A rename, a config value, a moved file | No drawing. | |

## 6. What he did on real code

From the 17 pages with program code on them:

- Colored boxes group lines into units, such as the cases of a switch.
- A table tracks the variables pass by pass, with one colored arrow per pass from the loop to its row.
- Lines that do not matter for the question are struck out.
- An equivalent form is written beside the original (an if chain rewritten as a switch).
- A phrase in the task and the condition that implements it share an underline color.
- A code line and the value it builds share a color mark.
