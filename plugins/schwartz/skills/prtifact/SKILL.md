---
name: prtifact
description: Turn a pull request, merge request, a stack of them, a branch or a diff into a PRtifact, a one-screen review app drawn the way Jacob Schwartz drew on his whiteboard, with the changes that matter down the left and, for each one, a diagram that builds step by step, the code walked one edit at a time, the screen before and after, a replay of the real request, and the pending decisions as buttons. Use when asked to review, explain, walk through or visualize a PR, MR, diff or code change, or to make a PRtifact. The skill carries its own page design and template, so use it in place of any general page-design guidance.
---

# PRtifact: a code change explained on a whiteboard

Jacob Schwartz tutored for about 3,000 hours on a shared whiteboard. A PRtifact explains a code change to a reviewer the way he explained a problem to a student: start from a real case, keep what was already there in black, draw the one new thing in one color, and write the conclusion in words at the end.

The whiteboard explanation is the point. Everything else on the page is there to support it. A reviewer takes in one idea at a time, so the page shows one idea at a time.

The drawing rules here are measured, not remembered. They come from a study of 4,726 of his drawings on 2,000 board pages, 970 of them from recorded sessions where the order things went on the board is known. [references/board-habits.md](references/board-habits.md) has the counts.

**How to use this skill**

- **This file (always):** what goes on the page, the steps, the rules.
- **Before you draw anything,** read [references/board-habits.md](references/board-habits.md): his habits ranked by how often he used them, and which drawing fits which kind of code change.
- **Before you write the page,** read [references/page.md](references/page.md): how to fill the template and how to write a drawing in SVG.
- **The page itself** starts from [assets/template.html](assets/template.html). Copy it and replace the content. The style and the script in it are the design.
- **Line numbers:** [scripts/line-numbers.py](scripts/line-numbers.py) reads each excerpt's file from git and writes its real line numbers into the page.

## 1. What a PRtifact is

One screen that works like an app. Nothing to scroll through from top to bottom; the reviewer clicks around.

- **Top bar:** the name of the change and one arrow button that opens it. Nothing else.
- **Down the left:** the things to understand, numbered, six at most. For one pull request, that is one entry per change that matters. For a stack of pull requests, it is one entry per pull request, each with its own arrow to open it. The list folds away.
- **In the panel:** the entry you picked, at one level at a time. The options sit on top (the level, then Before, Now or Both, then Play). The explanation appears under them, one step at a time, starting from a blank board. The one-line conclusion appears last.

| Level | What it shows | When |
|---|---|---|
| Idea | A whiteboard drawing of what happens, built one step at a time | When there is something to draw |
| Code | The code in an editor view, with the file's real line numbers, starting from how it was. Each step types in one edit, with a sentence that says what you are doing and why, as if thinking aloud | Always |
| Screen | The interface before on the left and after on the right | When the change has an interface |
| Replay | The real request run through the old code and the new code, with the log lines that matter | When you captured one |

Under the list, two entries for the whole change:

- **Cases:** a chart with a row per case and the columns Before and After.
- **Decisions:** each pending decision as a question with options to click, then the limits of the change (what is tested, what was never run).

## 2. Steps

1. **Read the whole change first.** The diff against its target branch, the tests, the description, the ticket or bug report behind it. Run the tests if that is safe and read-only. Do not merge, push or change the branch.
2. **Find the real case.** The customer, the order, the number from the bug report. The page uses real numbers, never placeholders. If the page will leave the team, ask before putting a real person's name on it.
3. **Pick the entries, six at most.** For a stack, one per pull request. For one pull request, the changes that matter: for each candidate ask what goes back to wrong if this statement were wrong or missing. If the answer is nothing, leave it out.
4. **Write each entry** in this order: a name of two to four words, the drawing with one sentence per step, the code before and after with one sentence per edit, written in the first person as if you were making the change and thinking aloud, and a conclusion of one short sentence. The real case will not reach every change (a race, a retry, an outage). For those, use the numbers from the test that covers the change, or a small concrete setup, and say so in the step. Never invent a number and present it as real.
5. **Make every drawing stand alone.** A reviewer who has never seen this code has to follow it. Say what each thing in the drawing is before it does anything (what a "split" is, who "A" and "B" are, where a number comes from). If nobody has seen the failure happen and no test shows it, the last step says so.
6. **Replay the real case if you safely can.** Run the old code and the new code on the same real request, on a local copy, with stand-ins for anything that charges money, sends a message or writes to an outside service. Save both full logs in a `.prtifact/<change>/` folder beside the code and say on the page where they are. Put only the lines that matter on the Replay level. If you cannot capture a replay, leave the level out. Never write a log line you did not capture.
7. **List the cases.** Every situation where the code behaves differently after the change, and the nearby ones a reviewer will worry about that must stay the same. One row each. Write the case so it is understood without clicking anything, and say what happened before and what happens now in four words or fewer each.
8. **Write the pending decisions.** Each one is a question the reviewer has to answer, two or three sentences of what they need to know, and two to four real options, listed neutrally. Then the limits: what is tested, what is not, what was never run against the real thing.
9. **Fill the template** following [references/page.md](references/page.md), run [scripts/line-numbers.py](scripts/line-numbers.py) on it, check it against section 6, look at it once if you can render it, and hand it over the way the person asked. If they did not say, publish it when your environment can publish a page and give the link; otherwise save the .html file and give its path.
10. **When a decision comes back** (the reviewer clicked an option, or told you), record it on the pull request, make the change it calls for, and republish the page with that decision marked decided.

## 3. The drawing rules

These hold on nearly every board. Follow them on every page.

1. **Black is the base and the working. Color means a link or a change, nothing else.** No color for decoration.
2. **The old state is not grayed out.** It stays black. In 4,726 drawings he made the old state quieter 13 times. A route or a value that no longer applies stays black and gets a red slash. Gray is only for helper lines, such as a guide or a "now" marker.
3. **One new thing, one color.** Each entry gets one pen color. Everything that change adds to the drawing is that color: the new arrow, the label, the underline on the conclusion. In the code, what is added is always the Schwartz Tutoring green, and what is removed is gray and crossed off.
4. **One color follows one thing** from where it first appears to everywhere it lands. This is his most common habit (42% of drawings).
5. **Green is right, red is wrong or removed.** Those two never mean anything else. A removed piece gets a red slash and stays readable. Nothing is erased.
6. **Ink goes on the given material.** Mark up the real code. Do not retype it into boxes.
7. **The conclusion is written in words, and it goes on last.**
8. **No legend.** A color explains itself by repeating.
9. **Nothing moves until the reader asks.** The board starts blank. Play adds the steps of the one thing on screen, slowly enough to read each sentence, then stops and offers the next entry. The small arrows go one step at a time.

How a drawing is built, from the recorded sessions:

- The starting state goes on first, in full, in black.
- Then a question. In more than half of the recorded drawings he asked first and the answer became the next mark. So the first sentence of the first drawing is a question the reviewer can answer before they go on.
- Then the change, in its color.
- Then the conclusion, with a check or an X.
- "Now" starts as a copy of "Before", without its conclusion. He copied an earlier drawing forward and edited the copy; he did not start over. A step can only add ink, so what no longer applies is slashed, not removed.

The code is walked the same way, as if the reviewer were watching it get written: it starts as it was, each step types in one edit, and the sentence under it is what you would say aloud while making it.

## 4. Words

- **Few.** A Before or After cell is four words or fewer. A conclusion is one sentence. A step is one or two sentences. If a paragraph is needed, the drawing is wrong.
- **Plain.** Write what a person on the team would say out loud. Name things by what they do, not by what the code calls them.
- **Never** the phrase "load-bearing". No em dashes. No "robust", "seamless", "leverage", "comprehensive".
- **Say what is not tested as plainly as what is.**
- **If you, or an AI, wrote the code under review, say so on the page.** A walkthrough by the author is not a second opinion.
- **Options are listed neutrally.** Do not mark one as recommended.
- **Code excerpts carry no comments** except a note that starts with `// ...` where lines were left out. The template drops the rest.

## 5. The design is decided here

The template is the design: an app shell around a whiteboard. The shell (top bar, list, options) is plain and typed. Inside the panel it is his board: handwriting for what he would have written by hand, black rules, one pen color per entry, drawings in a column narrower than the panel. It came from his boards and from his reviews of the earlier versions.

- Do not restyle it, and do not apply a general page-design skill or a house style on top of it.
- If your environment has rules for published pages, take only the technical ones (what must be in the file, what is blocked from loading). [references/page.md](references/page.md) lists the ones the template already meets.

## 6. Before you publish

- [ ] The top bar has the name of the change and one arrow that opens it, and nothing else.
- [ ] Six entries at most. For a stack, one per pull request, each with its own link.
- [ ] Each entry has one pen color, and nothing else in its panel uses that color.
- [ ] Every drawing can be followed by someone who has never seen the code: each thing in it is named before it acts.
- [ ] No drawing grays out the old state. What no longer applies has a red slash.
- [ ] Every drawing starts with a question and ends with a check or an X and a few words.
- [ ] "Now" is a copy of "Before" with the change added.
- [ ] No number is presented as real unless it is. A failure nobody has seen says so.
- [ ] Every edit in the code has its sentence, in the order the page shows them.
- [ ] The code shows the file's real line numbers: the line number script found every line.
- [ ] Every replay line was captured from a real run, and the full logs are saved where the page says.
- [ ] Every pending decision has real options, none marked as the one to pick.
- [ ] Every Before and After cell in the case chart has a mark and at most four words.
- [ ] No em dashes, no "load-bearing".

## 7. What not to make

- A long page to scroll. It is one screen.
- Two panes of nearly identical code side by side. The reviewer cannot tell them apart.
- Anything that moves before the reader asks for it, or that runs on into the next idea by itself.
- A drawing that uses a word it never explained.
- Boxes and arrows in six colors with a legend.
- A summary section, a background section and a conclusion section. The drawing is the explanation.
- A drawing for a change that has nothing to draw (a rename, a config value). Show the code and move on.
- A replay you wrote from imagination.
