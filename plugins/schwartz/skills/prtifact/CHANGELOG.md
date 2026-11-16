# Changelog

## v2.9.0 (2026-11-15)
First version. `/schwartz:prtifact` turns a pull request, merge request or diff into a one-screen review app drawn the way Jacob drew on his whiteboard.
- Built from a study of all his saved boards: 4,726 drawings on 2,000 pages, 970 of them from 99 recorded sessions where the order things went on the board is known. references/board-habits.md has the habits ranked by count and says which drawing fits which kind of code change.
- The page is one screen: the name of the change and an arrow that opens it across the top, the changes that matter down the left (or one entry per pull request for a stack), and for each one a Before and a Now whiteboard drawing that start blank and build step by step. The page shows the idea only; the code stays on the pull request.
- Before is the steps to recreate: a question, then each thing that has to happen for the bug, numbered. Now appears only when its first step starts.
- Each step lands as a message beside its drawing, like a chat. Play runs typing, message, drawing, pause, at 1x, 1.5x or 2x, and stops at the end of the entry. On a phone it shows one drawing at a time.
- Pending decisions are buttons. On a page published as a Claude artifact, picking one sends it to Claude, which records it on the pull request and updates the page. A decision that becomes its own follow-up links to that follow-up's page.
- assets/template.html is the design. It draws the marks, runs the steps of each drawing, and builds the app around what you write. references/page.md explains how to fill it.
