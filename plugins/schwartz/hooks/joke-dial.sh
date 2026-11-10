#!/usr/bin/env bash
# The joke dial: on each prompt in a session where the tutoring skill has
# started, flips a coin. On heads, prints a note that Claude Code adds to the
# conversation, asking Claude to hunt for a pun or double meaning in the
# material and use it only if it's genuinely good. Prints nothing otherwise,
# and nothing at all in sessions that never started the skill.

input=$(cat)
session=$(printf '%s' "$input" | sed -n 's/.*"session_id": *"\([A-Za-z0-9-]*\)".*/\1/p')
[ -n "$session" ] || exit 0
[ -e "${CLAUDE_PLUGIN_DATA:-$HOME/.claude/plugins/data/schwartz}/tutoring-sessions/$session" ] || exit 0

if [ $((RANDOM % 2)) -eq 0 ]; then
  echo "Joke dial: heads. Hunt for a pun, a double meaning or an out-of-pocket comparison in what this reply covers. Use it in one line only if it's genuinely good; otherwise skip it (see \"The joke dial\" in the tutoring skill)."
fi
exit 0
