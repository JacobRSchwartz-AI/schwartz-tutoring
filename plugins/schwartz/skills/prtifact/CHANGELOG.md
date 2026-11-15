# Changelog

## v2.9.0 (2026-11-14)
First version. `/schwartz:prtifact` turns a pull request, merge request or diff into one review page drawn the way Jacob drew on his whiteboard.
- Built from a study of all his saved boards: 4,726 drawings on 2,000 pages, 970 of them from 99 recorded sessions where the order things went on the board is known. references/board-habits.md has the habits ranked by count and says which drawing fits which kind of code change.
- The page has a chart of what changes case by case, at most six changes with one diff each, a drawing the reader builds by clicking, and a chart of what is tested.
- assets/template.html is the design. It works out the diff from the old and new excerpts, draws the marks, and adds the Before, Now and Both switch and the step buttons. references/page.md explains how to fill it.
