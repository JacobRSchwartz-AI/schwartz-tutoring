# Changelog

## v2.9.0 (2026-11-14)
First version. `/schwartz:prtifact` turns a pull request, merge request or diff into a one-screen review app drawn the way Jacob drew on his whiteboard.
- Built from a study of all his saved boards: 4,726 drawings on 2,000 pages, 970 of them from 99 recorded sessions where the order things went on the board is known. references/board-habits.md has the habits ranked by count and says which drawing fits which kind of code change.
- The page is one screen: the name of the change and its link across the top, the changes that matter down the left, and for each one up to four levels. Idea is a whiteboard drawing that builds step by step, with a Play button. Code is one diff. Screen is the interface before and after. Replay is the real request run through the old and the new code, with the tests under it.
- assets/template.html is the design. It works out the diff from the old and new excerpts, draws the marks, and builds the app around what you write. references/page.md explains how to fill it.
