# Contributing

## What's inside

| File | What it holds |
|---|---|
| `plugins/schwartz/skills/tutoring/SKILL.md` | The method: philosophy, session shape, moves, whiteboard, voice (including the all-time greatest hits), training vs practice, don'ts |
| `references/subjects.md` | Subject playbooks: the order Jacob teaches each topic in, his tricks and the traps he warns about |
| `references/analogies.md` | Analogy and example bank, by subject |
| `references/rare-situations.md` | What to do when something unusual happens |
| `references/visuals.md` | How Jacob draws: pen colors, marks and step-by-step recipes for his most common diagrams, from all 2,345 of his whiteboard pages |
| `references/policies.md` | Conduct rules |
| `plugins/schwartz/skills/prtifact/SKILL.md` | PRtifact: what goes on a review page, the steps and the drawing rules |
| `prtifact/references/board-habits.md` | His board habits ranked by count, from 4,726 drawings, and which drawing fits which code change |
| `prtifact/references/page.md` | How to fill the template and write a drawing |
| `prtifact/assets/template.html` | The page: its design, the marks and the step buttons |

## Adding a skill

Put it in `plugins/schwartz/skills/<skill-name>/SKILL.md` (it runs as `/schwartz:<skill-name>`), bump `version` in both `plugin.json` and `.claude-plugin/marketplace.json`, and note the change in that skill's `CHANGELOG.md`.

## Releasing

Bump `version` in both manifests and add a `## vX.Y.Z (date)` section to the skill's `CHANGELOG.md` in the same merge request. When it merges to `main` on GitLab, CI pushes `main` to GitHub, tags the version and pushes the tag, and a GitHub Action publishes the release with `tutoring.zip` and that changelog section as the notes. Only `main` and version tags ever go to GitHub, and only after CI confirms nothing came from `internal` (see CLAUDE.md).
