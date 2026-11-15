# Changelog

## v2.9.0 (2026-11-14)
First version. `/schwartz:prtifact` turns a pull request, merge request or diff into a one-screen review app drawn the way Jacob drew on his whiteboard.
- Built from a study of all his saved boards: 4,726 drawings on 2,000 pages, 970 of them from 99 recorded sessions where the order things went on the board is known. references/board-habits.md has the habits ranked by count and says which drawing fits which kind of code change.
- The page is one screen: the name of the change and an arrow that opens it across the top, the changes that matter down the left (or one entry per pull request for a stack), and for each one up to four levels. Idea is a whiteboard drawing that starts blank and builds step by step, with a Play button. Code starts as it was and applies one edit at a time. Screen is the interface before and after. Replay is the real request run through the old and the new code.
- Pending decisions are buttons. On a page published as a Claude artifact, picking one sends it to Claude, which records it on the pull request and updates the page.
- assets/template.html is the design. It works out the diff from the old and new excerpts, draws the marks, and builds the app around what you write. references/page.md explains how to fill it.
