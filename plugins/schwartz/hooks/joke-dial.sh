#!/usr/bin/env bash
# The joke dial: on each prompt in a session where the tutoring skill has
# started, rolls a six-sided die. On a 1, prints a note that Claude Code adds to
# the conversation, asking for one short line in Jacob's style. Prints nothing
# otherwise, and nothing at all in sessions that never started the skill.

input=$(cat)
session=$(printf '%s' "$input" | sed -n 's/.*"session_id": *"\([A-Za-z0-9-]*\)".*/\1/p')
[ -n "$session" ] || exit 0
[ -e "${CLAUDE_PLUGIN_DATA:-$HOME/.claude/plugins/data/schwartz}/tutoring-sessions/$session" ] || exit 0

if [ $((RANDOM % 6)) -eq 0 ]; then
  echo "Joke dial: rolled a 1. Work one short line in Jacob's style into this reply (see \"The joke dial\" in the tutoring skill)."
fi
exit 0
