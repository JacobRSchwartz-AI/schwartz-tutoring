# Changelog

## v2.11.0 (2026-11-15)
Drawings, and no decision buttons.
- Now is drawn fresh: the same picture as Before, in the same layout, showing what happens now, with the new piece in the pen color. What went away is simply not drawn (a short pen note marks an absence that matters). Before can show a wrong result in red where it happens. This follows his most common board habit, the same picture redrawn per case (457 drawings), instead of marking up the old picture.
- scripts/check-drawings.mjs opens every entry with all steps showing and lists overlapping words, words off the board and lines through words, and saves a picture of each entry.
- board-habits.md has three new drawings: swimlanes (one event reaching several systems over time), what counts as one (a join that turns one session into several rows), and the boundary of a range (midnight, time zones, a week cut short).
- Rules for saying a result was worked out rather than seen, for numbers moved by two fixes at once, for reports checked with read-only queries, and for keeping Before to four or five messages. Wider character widths, formulas for curved arrowheads, and fewer, larger tick labels on time lines.
- Decisions are gone. A PRtifact is for an open pull request; anything still open is an open row in the case chart and is taken up on the pull request. The last section is Limits.
- The template declares its character set, so it reads right when opened from disk, and #change-N-all shows every message.

## v2.10.0 (2026-11-15)
Screens. An entry can now show the real page instead of a drawing, for changes a reviewer understands by watching someone use the page.
- A screens entry puts the page before and after side by side, one action per step (open it, type, click), with one scrubber moving both sides, a ring in the entry's color on the one thing to look at, and the step's message in the thread. Tapping the pictures steps on; Bigger fills the window with them. A page can mix drawings and screens.
- scripts/screens.mjs takes the pictures: it drives a headless Chrome or Edge through a short plan (go, type, click, hover, select, wait, shot), clicks with a real mouse and logs what each click landed on, answers chosen requests itself (`mocks`), sets the page's clock (`now`) and prints ring positions (`rect`). Node 22 or newer; nothing to install.
- SKILL.md says when to pick screens, how to run the old and the new commit safely on a local copy (switch off timers and outside services first, never a production site, test sign-ins only), and the rules for the pictures: real screenshots only, the same plan on both sides, cropped to about 500 pixels, one message per picture pair.
- A decision option that needs no work (leave it as it is) is marked `data-nothing`: picking it shows Done right away, lowers the open count and still tells Claude so the choice is noted on the pull request. Other options still say the choice was sent and wait for Claude.
- Tried on three merged changes before release (a sign-in alert fix, an admin page-size fix, a payroll window with a pay-period drawing); their notes shaped the Bigger view, the box crops and the safety rules.

## v2.9.0 (2026-11-15)
First version. `/schwartz:prtifact` turns a pull request, merge request or diff into a one-screen review app drawn the way Jacob drew on his whiteboard.
- Built from a study of all his saved boards: 4,726 drawings on 2,000 pages, 970 of them from 99 recorded sessions where the order things went on the board is known. references/board-habits.md has the habits ranked by count and says which drawing fits which kind of code change.
- The page is one screen: the name of the change and an arrow that opens it across the top, the changes that matter down the left (or one entry per pull request for a stack), and for each one a Before and a Now whiteboard drawing that start blank and build step by step. The page shows the idea only; the code stays on the pull request.
- Before is the steps to recreate: a question, then each thing that has to happen for the bug, numbered. Now appears only when its first step starts.
- Each step lands as a message beside its drawing, like a chat. Play runs typing, message, drawing, pause, at 1x, 1.5x or 2x, and stops at the end of the entry. On a phone it shows one drawing at a time.
- Pending decisions are buttons. On a page published as a Claude artifact, picking one sends it to Claude, which records it on the pull request and updates the page. A decision that becomes its own follow-up links to that follow-up's page.
- assets/template.html is the design. It draws the marks, runs the steps of each drawing, and builds the app around what you write. references/page.md explains how to fill it.
