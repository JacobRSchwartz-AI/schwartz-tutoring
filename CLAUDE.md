# Branches

- `main` is public. CI pushes it to the GitHub repo after every merge.
- `internal` holds private data in `data/` and is the main of internal work: branch off it and merge back into it. It must never reach `main`.

When opening a merge request, target the branch this one was cut from. A branch that has `INTERNAL.md` came from `internal`, so open it with `glab mr create --target-branch internal`. Never merge `internal` into `main` or bring commits that touch `data/` across. CI on `main` blocks both, but don't rely on it.
