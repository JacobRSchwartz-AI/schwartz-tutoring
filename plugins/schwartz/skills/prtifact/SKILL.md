---
name: prtifact
description: Turn a pull request, merge request, branch or diff into a PRtifact, a one-screen review app drawn the way Jacob Schwartz drew on his whiteboard, with the changes that matter down the left and, for each one, a diagram that builds step by step, one clear diff, the screen before and after, and a replay of the real request through the old and new code. Use when asked to review, explain, walk through or visualize a PR, MR, diff or code change, or to make a PRtifact. The skill carries its own page design and template, so use it in place of any general page-design guidance.
---

# PRtifact: a code change explained on a whiteboard

Jacob Schwartz tutored for about 3,000 hours on a shared whiteboard. A PRtifact explains a code change to a reviewer the way he explained a problem to a student: start from a real case, keep what was already there in black, draw the one new thing in one color, and write the conclusion in words at the end.

The whiteboard explanation is the point. Everything else on the page is there to support it.

The drawing rules here are measured, not remembered. They come from a study of 4,726 of his drawings on 2,000 board pages, 970 of them from recorded sessions where the order things went on the board is known. [references/board-habits.md](references/board-habits.md) has the counts.

**How to use this skill**

- **This file (always):** what goes on the page, the steps, the rules.
- **Before you draw anything,** read [references/board-habits.md](references/board-habits.md): his habits ranked by how often he used them, and which drawing fits which kind of code change.
- **Before you write the page,** read [references/page.md](references/page.md): how to fill the template and how to write a drawing in SVG.
- **The page itself** starts from [assets/template.html](assets/template.html). Copy it and replace the content. The style and the script in it are the design.

## 1. What a PRtifact is

One screen that works like an app. Nothing to scroll through from top to bottom; the reviewer clicks around.

- **Top bar:** the name of the change and a link to it. Nothing else.
- **Down the left:** the changes that matter, numbered, six at most. The list folds away.
- **In the panel:** the change you picked, at one of four levels. Code is always there. The others appear only when they exist.

| Level | What it shows | When |
|---|---|---|
| Idea | A whiteboard drawing of what happens, built one step at a time. Play walks through it. | When there is something to draw |
| Code | One diff: what stayed is black, what was removed has a red slash, what was added is in one color | Always |
| Screen | The interface before on the left and after on the right | When the change has an interface |
| Replay | The real request run through the old code and the new code, with the log lines that matter, then the tests | When you could capture one; otherwise this level is just Tests |

Under the changes, two more entries for the whole change:

- **Cases:** a chart with a row per case and the columns Before and After.
- **Checked:** a chart of each piece and whether a test covers it, and the one question the reviewer has to answer.

The page opens on the first change at the Idea level.

## 2. Steps

1. **Read the whole change first.** The diff against its target branch, the tests, the description, the ticket or bug report behind it. Run the tests if that is safe and read-only. Do not merge, push or change the branch.
2. **Find the real case.** The customer, the order, the number from the bug report. The page uses real numbers, never placeholders. If the page will leave the team, ask before putting a real person's name on it.
3. **Pick the changes that matter, six at most.** For each candidate ask: if this statement were wrong or missing, what goes back to wrong? If the answer is nothing, it is not one of the six. Name the one or two statements each change rests on. They get a star in the code.
4. **Write each change** in this order: a name of two to four words, a verdict of one short sentence, the drawing with one sentence per step, the code before and after, the tests that cover it, and the tests that are missing. The real case will not reach every change (a race, a retry, an outage). For those, use the numbers from the test that covers the change and say in the step that it is a test case. Never invent numbers.
5. **Replay the real case if you safely can.** Run the old code and the new code on the same real request, on a local copy, with stand-ins for anything that charges money, sends a message or writes to an outside service. Save both full logs in a `.prtifact/<change>/` folder beside the code and say on the page where they are. Put only the lines that matter on the Replay level. If you cannot capture a replay, leave it out. Never write a log line you did not capture.
6. **List the cases.** Every situation where the code behaves differently after the change, and the nearby ones a reviewer will worry about that must stay the same. One row each. Name the case in about six words, and say what happened before and what happens now in four words or fewer each.
7. **Fill the template** following [references/page.md](references/page.md).
8. **Check the page** against section 6, look at it once if you can render it, then hand it over the way the person asked. If they did not say, publish it when your environment can publish a page and give the link; otherwise save the .html file and give its path.
9. **Tell the reviewer three things** in your reply, unless they asked for something else: what changed, what is not tested, and what is theirs to decide.

## 3. The drawing rules

These hold on nearly every board. Follow them on every page.

1. **Black is the base and the working. Color means a link or a change, nothing else.** No color for decoration.
2. **The old state is not grayed out.** It stays black. In 4,726 drawings he made the old state quieter 13 times. A route or a value that no longer applies stays black and gets a red slash. Gray is only for helper lines, such as a guide or a "now" marker.
3. **One new thing, one color.** Each change on the page gets one pen color. Everything that change adds is that color everywhere: the added code, the new arrow in the drawing, the label, the underline on the verdict.
4. **One color follows one thing** from where it first appears to everywhere it lands. This is his most common habit (42% of drawings).
5. **Green is right, red is wrong or removed.** Those two never mean anything else. A removed piece gets a red slash and stays readable. Nothing is erased.
6. **Ink goes on the given material.** Mark up the real code. Do not retype it into boxes.
7. **The conclusion is written in words, and it goes on last.**
8. **No legend.** A color explains itself by repeating.
9. **Nothing moves until the reader asks.** Next adds one step. Play walks every step of every change so the reader does not have to keep clicking, and stops when they touch anything.

How a drawing is built, from the recorded sessions:

- The starting state goes on first, in full, in black.
- Then a question. In more than half of the recorded drawings he asked first and the answer became the next mark. So the first sentence under the first drawing is a question the reviewer can answer before they go on.
- Then the change, in its color.
- Then the conclusion, with a check or an X.
- "Now" starts as a copy of "Before", without its conclusion. He copied an earlier drawing forward and edited the copy; he did not start over. A step can only add ink, so what no longer applies is slashed, not removed.

## 4. Words

- **Few.** A Before or After cell is four words or fewer. A verdict is one sentence. A step is one sentence. If a paragraph is needed, the drawing is wrong.
- **Plain.** Write what a person on the team would say out loud. Name things by what they do, not by what the code calls them.
- **Never** the phrase "load-bearing". No em dashes. No "robust", "seamless", "leverage", "comprehensive".
- **Say what is not tested as plainly as what is.** A red X next to "no test" is part of the page, not an admission to bury.
- **If you, or an AI, wrote the code under review, say so on the page.** A walkthrough by the author is not a second opinion.
- **Code excerpts carry no comments** except a note that starts with `// ...` where lines were left out. The template drops the rest.

## 5. The design is decided here

The template is the design: an app shell around a whiteboard. The shell (top bar, list of changes, level tabs) is plain and typed. Inside the panel it is his board: handwriting for what he would have written by hand, black rules, one pen color per change, drawings in a column narrower than the panel. It came from his boards and from his reviews of the earlier versions.

- Do not restyle it, and do not apply a general page-design skill or a house style on top of it.
- If your environment has rules for published pages, take only the technical ones (what must be in the file, what is blocked from loading). [references/page.md](references/page.md) lists the ones the template already meets.
- One switch per change shows Before, Now or Both, and it moves the drawing, the code, the screen and the replay together.

## 6. Before you publish

- [ ] The top bar has the name of the change and its link, and nothing else.
- [ ] Six changes at most. For each one you can say what goes wrong without it.
- [ ] Each change has one pen color, and nothing else in its panel uses that color.
- [ ] No drawing grays out the old state. What no longer applies has a red slash.
- [ ] Every drawing starts with a question and ends with a check or an X and a few words.
- [ ] "Now" is a copy of "Before" with the change added.
- [ ] The numbers in the drawings are the real case's, or a named test's. None are made up.
- [ ] Every replay line was captured from a real run, and the full logs are saved where the page says.
- [ ] Missing tests are listed with a red X.
- [ ] Every Before and After cell in the case chart has a mark and at most four words, and the box under the chart adds up to the number of rows.
- [ ] Nothing moves before the reader presses Play or Next.
- [ ] No em dashes, no "load-bearing".

## 7. What not to make

- A long page to scroll. It is one screen.
- Two panes of nearly identical code side by side. The reviewer cannot tell them apart. Use the one diff.
- Anything that moves before the reader asks for it.
- Boxes and arrows in six colors with a legend.
- A summary section, a background section and a conclusion section. The drawing is the explanation.
- A drawing for a change that has nothing to draw (a rename, a config value). Show the code and move on.
- A replay you wrote from imagination.
