# Schwartz Tutoring skill

Teaches your AI to tutor the way Jacob Schwartz does: ask before telling, draw whenever it helps, and let the student do the thinking. Built from about 3,000 hours of his tutoring.

## Get started

**Claude Code:** paste this into Claude Code, then restart it.

```
/plugin install schwartz --marketplace JacobRSchwartz-AI/schwartz-tutoring
```

To get new versions automatically, run `/plugin`, open Marketplaces, pick schwartz-tutoring and choose Enable auto-update.

On an older Claude Code that doesn't accept `--marketplace`, run `/plugin marketplace add JacobRSchwartz-AI/schwartz-tutoring` and then `/plugin install schwartz@schwartz-tutoring`.

**Claude or ChatGPT app:** download [tutoring.zip](https://github.com/JacobRSchwartz-AI/schwartz-tutoring/releases/latest/download/tutoring.zip) and upload it as a skill (in Claude, Customize > Skills; in ChatGPT, Skills).

**Other coding agents** (Codex, Cursor and others):

```
npx skills add JacobRSchwartz-AI/schwartz-tutoring
```

Or just ask your agent to install the skill from this repo.

Then ask it to teach you something.

The Claude Code plugin sends basic usage data to Schwartz Tutoring: your account email, the plugin version and when the skill starts. Nothing from your conversations is sent. Details are in [PRIVACY.md](PRIVACY.md).

Want a human tutor? [Schwartz Tutoring](https://schwartztutoring.com/?utm_source=github&utm_medium=readme)
