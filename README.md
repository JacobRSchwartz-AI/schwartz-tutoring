# Tutoring the Jacob Schwartz way

A skill that teaches Claude to tutor the way Jacob Schwartz does. Jacob founded Schwartz Tutoring and has tutored about 3,000 hours of math, statistics, economics, finance, accounting and coding.

It covers his philosophy, the shape of a session, the questioning moves he uses minute to minute, whiteboard conventions, how he sounds, subject playbooks, an analogy bank, rare situations (tech failures, young kids and groups, sick or checked-out students, parents, graded work) and conduct rules. All of it comes from his tutor trainings, 168 recorded sessions (about 165 hours) and 210 saved whiteboard pages. Quotes are his real words, cited to the session and timestamp. No student data is included.

## Install

**Claude Code**

```
/plugin marketplace add JacobRSchwartz-AI/schwartz-tutoring
/plugin install schwartz@schwartz-tutoring
```

Restart Claude Code, then run `/schwartz:tutoring` followed by what you want to learn.

**Claude.ai and the Claude desktop app**

Download `tutoring.zip` from the latest [release](https://github.com/JacobRSchwartz-AI/schwartz-tutoring/releases), then upload it under Customize > Skills. Code execution has to be turned on.

## What's inside

| File | What it holds |
|---|---|
| `plugins/schwartz/skills/tutoring/SKILL.md` | The method: philosophy, session shape, moves, whiteboard, voice (including the all-time greatest hits), training vs practice, don'ts |
| `references/subjects.md` | Subject playbooks: the order Jacob teaches each topic in, his tricks and the traps he warns about |
| `references/analogies.md` | Analogy and example bank, by subject |
| `references/rare-situations.md` | What to do when something unusual happens |
| `references/policies.md` | Conduct rules |

## Usage data

In Claude Code, each time the tutoring skill starts, the plugin sends one anonymous event to PostHog so Jacob can see how many people use it. The event holds:

- a random install ID created on your machine
- the plugin version
- your operating system (macOS, Windows or Linux)
- whether you typed `/schwartz:tutoring` or Claude started the skill

Nothing from your conversation is sent. Separately, the plugin keeps a list of session IDs where the skill started, on your machine only, so the joke dial knows when to roll. The hook reads each prompt on your machine only to check whether it starts with `/schwartz:tutoring`. PostHog sees the IP address the event comes from, like any web request, and records an approximate location from it.

To turn it off, set `SCHWARTZ_TUTORING_TELEMETRY=0` or `DO_NOT_TRACK=1` in your environment. The code is [plugins/schwartz/hooks/usage-ping.sh](plugins/schwartz/hooks/usage-ping.sh). The Claude.ai zip has no hooks and sends nothing.

## License

Copyright (c) 2026 Jacob Schwartz. Licensed [CC BY-NC 4.0](LICENSE). Use it, share it and adapt it with credit to Jacob Schwartz. You may not sell it or use it commercially.

## Adding a skill

Put it in `plugins/schwartz/skills/<skill-name>/SKILL.md` (it runs as `/schwartz:<skill-name>`), bump `version` in both `plugin.json` and `.claude-plugin/marketplace.json`, and note the change in that skill's `CHANGELOG.md`.

## Releasing

Bump `version` in both manifests and add a `## vX.Y.Z (date)` section to the skill's `CHANGELOG.md` in the same merge request. When it merges to `main` on GitLab, CI tags the version, the push mirror carries the tag to GitHub, and a GitHub Action publishes the release with `tutoring.zip` and that changelog section as the notes. Tags have to start on GitLab, because the mirror deletes tags that exist only on GitHub.
