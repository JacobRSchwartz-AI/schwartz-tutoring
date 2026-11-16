---
name: prtifact
description: Turn a pull request, merge request, a stack of them, a branch or a diff into a PRtifact, a one-screen review app that explains the idea of each change the way Jacob Schwartz drew on his whiteboard, with the changes that matter down the left, for each one a drawing that builds step by step (or, for a change people see on a page, the real screens before and after, side by side, with a scrubber), and the pending decisions as buttons. Use when asked to review, explain, walk through or visualize a PR, MR, diff or code change, or to make a PRtifact. The skill carries its own page design and template, so use it in place of any general page-design guidance.
---

# PRtifact: a code change explained on a whiteboard

Jacob Schwartz tutored for about 3,000 hours on a shared whiteboard. A PRtifact explains a code change to a reviewer the way he explained a problem to a student: start from a real case, keep what was already there in black, draw the one new thing in one color, and write the conclusion in words at the end.

The drawing is the whole point. A PRtifact shows the idea of each change and nothing else. The code is already on the pull request, so the page does not show it. A reviewer takes in one idea at a time, so the page shows one idea at a time.

An idea is shown one of two ways. A **drawing** shows what happens: the rule, the order, the count that the code gets wrong. **Screens** show what a person sees: the real page before the change and after it, side by side, one action at a time, with a scrubber to move through them. Pick per entry. A change to a page usually wants screens; the reason behind it, if it is not obvious from the screens, wants a drawing as its own entry.

The drawing rules here are measured, not remembered. They come from a study of 4,726 of his drawings on 2,000 board pages, 970 of them from recorded sessions where the order things went on the board is known. [references/board-habits.md](references/board-habits.md) has the counts.

**How to use this skill**

- **This file (always):** what goes on the page, the steps, the rules.
- **Before you draw anything,** read [references/board-habits.md](references/board-habits.md): his habits ranked by how often he used them, and which drawing fits which kind of code change.
- **Before you write the page,** read [references/page.md](references/page.md): how to fill the template and how to write a drawing in SVG.
- **The page itself** starts from [assets/template.html](assets/template.html). Copy it and replace the content. The style and the script in it are the design.
- **For a screens entry,** [scripts/screens.mjs](scripts/screens.mjs) takes the pictures (Node 22 or newer, and Chrome or Edge; nothing to install).

## 1. What a PRtifact is

One screen that works like an app. Nothing to scroll through from top to bottom; the reviewer clicks around.

- **Top bar:** the name of the change and one arrow button that opens it. Nothing else.
- **Down the left:** the ideas to understand, numbered, six at most. For one pull request, that is one entry per change that matters. For a stack of pull requests, it is one entry per pull request, each with its own arrow to open it. The list folds away.
- **On a phone:** one drawing at a time, with its newest messages in a short strip under it. When the Now drawing starts, the Before drawing steps aside.
- **In the panel:** the entry you picked, as a whiteboard drawing. The controls sit on top: Play, one step back or forward, and the speed. The Before drawing starts blank and builds one step at a time; the Now drawing appears under it only when its first message starts, so the reader takes in one thing at a time. Beside each drawing is a thread of messages, one per step, like a chat: each message lands, then its step draws in. The one-line conclusion appears last, then a button to the next entry.
- **A screens entry** has one board instead of two: Before and Now side by side, each step one action on the real page (open it, type, click) with the result on both sides, a ring around the one thing to look at, and a scrubber under the pictures. Tapping the pictures goes one step on. The thread beside it says what the person does at each step and what they see.

Under the list, two entries for the whole change:

- **Cases:** a chart with a row per case and the columns Before and After.
- **Decisions:** each pending decision as a question with options to click, then the limits of the change (what is tested, what was never run).

## 2. Steps

1. **Read the whole change first.** The diff against its target branch, the tests, the description, the ticket or bug report behind it. Run the tests if that is safe and read-only. Do not merge, push or change the branch.
2. **Find the real case.** The customer, the order, the number from the bug report. The drawings use real numbers, never placeholders. If the page will leave the team, ask before putting a real person's name on it.
3. **Pick the entries, six at most.** For a stack, one per pull request. For one pull request, the changes that matter: for each candidate ask what goes back to wrong if this statement were wrong or missing. If the answer is nothing, leave it out. A change with no idea to draw (a rename, a config value) is not an entry. For each entry, decide drawing or screens: screens when the reviewer would understand it by watching someone use the page (a button that does nothing, alerts piling up, a list that does not grow), a drawing when the reason is a rule, an order or a count that no screen shows (which two weeks a pay period covers, which payment goes first).
4. **Write each entry** in this order: a name of two to four words, the Before drawing as steps to recreate, the Now drawing with one sentence per step, and a conclusion of one short sentence. The Before drawing opens with a question: what would have to happen for this to go wrong? Then each step is one thing that has to happen, in order, from the real case to the wrong result, the way a bug report's steps to reproduce read ("A session goes unpaid. Here: the 1-hour session on Sep 27."). The page numbers them under the title Steps to recreate. The real case will not reach every change (a race, a retry, an outage). For those, use the numbers from the test that covers the change, or a small concrete setup, and say so in the step. Never invent a number and present it as real.
5. **Make every drawing stand alone.** A reviewer who has never seen this code has to follow it. Say what each thing in the drawing is before it does anything (what a "split" is, who "A" and "B" are, where a number comes from). Name things by what they do, never by what the code calls them: "taken back out", not `removeJournalEntry`. If nobody has seen the failure happen and no test shows it, the last step says so. Draw the reason, not only the result: if the change works because of an order or a timing window (something marked first, a lock, a run that waits), the window goes on the board, and an arrow connects the new piece to what it changes. A Now drawing that is mostly words in the pen color is not done.
6. **Get the real numbers by running the real case, if you safely can.** Run the old code and the new code on the same real request, on a local copy, with stand-ins for anything that charges money, sends a message or writes to an outside service. Use what it prints in the drawings. Save both full logs in a `.prtifact/<change>/` folder beside the code and say in the limits where they are. Never put a number in a drawing that you did not see.

   **For a screens entry, capture the real screens.** Run the app on a local copy twice: once at the commit before the change (the target branch, or the merge's first parent) and once at the change itself, each in its own throwaway worktree, against the same data. Write one plan for [scripts/screens.mjs](scripts/screens.mjs) and run it on both, changing only the address, so the two sides show the same actions. The script drives a headless Chrome or Edge, clicks with a real mouse (so whatever covers a button gets the click, as it would for a person), and writes a `log.txt` that says what each click actually landed on. Rules:
   - Only a local copy. Never point the plan at a production site. If starting the app also starts background jobs that charge cards, send email or post messages, switch them off in the throwaway copy first; never commit that.
   - A request the page makes that you cannot or should not serve (a sign-in, a payment) can be answered by the plan's `mocks`. Say in the limits which ones were.
   - Sign in only with a test account or the local copy's shared test password. Never a real person's password.
   - Crop each picture to the part that changes (`clip`) and take it at `scale` 2. A whole window shrunk to half a panel cannot be read.
   - The pictures show real data from the copy. If the page will leave the team, use a test account's data or crop out other people's names.
   - Keep the plans, the pictures and both logs in `.prtifact/<change>/screens/`.
7. **List the cases.** Every situation where the code behaves differently after the change, and the nearby ones a reviewer will worry about that must stay the same. One row each. Write the case so it is understood without clicking anything, and say what happened before and what happens now in four words or fewer each.
8. **Write the pending decisions.** Each one is a question the reviewer has to answer, two or three sentences of what they need to know, and two to four real options, listed neutrally. Then the limits: what is tested, what is not, what was never run against the real thing.
9. **Fill the template** following [references/page.md](references/page.md), check it against section 6, look at it once if you can render it, and hand it over the way the person asked. If they did not say, publish it when your environment can publish a page and give the link; otherwise save the .html file and give its path.
10. **When a decision comes back** (the reviewer clicked an option, or told you), record it on the pull request as a comment (on a merged one too: its decisions are follow-ups), make the change it calls for, and republish the page with that decision marked decided. If the decision becomes its own follow-up pull request, do not grow this page into a stack: make the follow-up its own PRtifact (often a single entry) and link it from the decided decision.

## 3. The drawing rules

These hold on nearly every board. Follow them on every page.

1. **Black is the base and the working. Color means a link or a change, nothing else.** No color for decoration.
2. **The old state is not grayed out.** It stays black. In 4,726 drawings he made the old state quieter 13 times. A route or a value that no longer applies stays black and gets a red slash. Gray is only for helper lines, such as a guide or a "now" marker.
3. **One new thing, one color.** Each entry gets one pen color. Everything that change adds to the drawing is that color: the new arrow, the label, the underline on the conclusion.
4. **One color follows one thing** from where it first appears to everywhere it lands. This is his most common habit (42% of drawings).
5. **Green is right, red is wrong or removed.** Those two never mean anything else. A removed piece gets a red slash and stays readable. Nothing is erased.
6. **Draw the situation, not the code.** Sessions, hours, invoices, a timer, two runs at once: the things the code acts on, with their real values. A word from the code goes on the board only after a step has said what it is. A quantity is drawn as one: hours left as a meter with the threshold line on it, a session as a bar, an hour as a block that moves. A label that only names the quantity ("balance: 0 hours") is not a drawing.
7. **The conclusion is written in words, and it goes on last.**
8. **No legend.** A color explains itself by repeating.
9. **Nothing moves until the reader asks.** The board starts blank. Play runs the steps of the one entry on screen: a typing mark, the message, the step drawn in, a pause long enough to read, then the next. It stops at the end and offers the next entry. The small arrows go one step at a time.

How a drawing is built, from the recorded sessions:

- The starting state goes on first, in black: the parts, each named.
- Then a question. In more than half of the recorded drawings he asked first and the answer became the next mark. So the first step of the Before drawing puts the named parts on the board, and its message is the question.
- Then the change, in its color.
- Then the conclusion, with a check or an X.
- "Now" starts as a copy of the black ink of "Before": the situation, without the red marks of what went wrong and without the conclusion. He copied an earlier drawing forward and edited the copy; he did not start over. A step can only add ink, so what no longer applies is slashed, not removed.

### Screens

The same habits, applied to pictures of the real page.

- **Real pictures only.** Every picture is a screenshot of the app running at that commit. Never rebuild a screen in HTML or draw one to look like the app.
- **One action per step, the same action on both sides.** Step 1 is the page as the person finds it. Each later step is one thing they do (type a wrong password, press Sign in, pick 50) and what each side shows right after. If one side has nothing to show for a step (the click went nowhere), say so in its place instead of leaving it blank.
- **The first message is the question,** as in a drawing: "What does a parent see after a wrong password?" Then the steps, numbered.
- **One ring per picture,** around the one thing to look at: the pen color for what the change made, red for what is wrong. A picture with no ring has nothing to look at.
- **The thread says what you could not see in a picture:** what the log says the click landed on, that ten seconds passed, that the request was answered by a mock.
- **Time is a step.** If the change is about something that happens later (an alert that goes away after 10 seconds), take a picture after the wait and say how long it was.

## 4. Words

- **Few.** A Before or After cell is four words or fewer. A conclusion is one sentence. A step's message is one or two short sentences. Aim for a drawing's messages to fit beside it; the thread scrolls when they don't, but then the reader loses the earlier steps. If a paragraph is needed, the drawing is wrong.
- **Plain.** Write what a person on the team would say out loud. Name things by what they do, not by what the code calls them.
- **Never** the phrase "load-bearing". No em dashes. No "robust", "seamless", "leverage", "comprehensive".
- **Say what is not tested as plainly as what is.**
- **If you, or an AI, wrote the code under review, say so on the page.** A walkthrough by the author is not a second opinion.
- **Options are listed neutrally.** Do not mark one as recommended.

## 5. The design is decided here

The template is the design: an app shell around a whiteboard. The shell (top bar, list, options) is plain and typed. Inside the panel it is his board: handwriting for what he would have written by hand, black rules, one pen color per entry, drawings in a column narrower than the panel. It came from his boards and from his reviews of the earlier versions.

- Do not restyle it, and do not apply a general page-design skill or a house style on top of it.
- If your environment has rules for published pages, take only the technical ones (what must be in the file, what is blocked from loading). [references/page.md](references/page.md) lists the ones the template already meets.

## 6. Before you publish

- [ ] The top bar has the name of the change and one arrow that opens it, and nothing else.
- [ ] Six entries at most, each with a Before and a Now drawing, or one screens board. For a stack, one per pull request, each with its own link.
- [ ] Every screen picture was taken from the app at that commit on a local copy, with the same plan on both sides, cropped to what changes, with one ring.
- [ ] Each entry has one pen color, and nothing else in its panel uses that color.
- [ ] Every drawing can be followed by someone who has never seen the code: each thing in it is named before it acts, and no code name appears unexplained.
- [ ] No drawing grays out the old state. What no longer applies has a red slash.
- [ ] Every drawing starts with a question and ends with a check or an X and a few words.
- [ ] "Now" is a copy of "Before" with the change added.
- [ ] No number is presented as real unless it is. A failure nobody has seen says so.
- [ ] Every pending decision has real options, none marked as the one to pick.
- [ ] Every Before and After cell in the case chart has a mark and at most four words.
- [ ] No em dashes, no "load-bearing".

## 7. What not to make

- A long page to scroll. It is one screen.
- A code view, a diff or code excerpts. The code is on the pull request.
- A screen made up in HTML, or a picture of anything other than the app running on a local copy.
- Anything that moves before the reader asks for it, or that runs on into the next idea by itself.
- A drawing that uses a word it never explained.
- Boxes and arrows in six colors with a legend.
- A summary section, a background section and a conclusion section. The drawing is the explanation.
