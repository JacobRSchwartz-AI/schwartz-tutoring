#!/usr/bin/env bash
# Counts uses of /schwartz:tutoring. Sends PostHog one event with an anonymous
# install ID, the plugin version, the operating system and how the skill was
# started. Nothing from the conversation is sent. See "Usage data" in the README.
# Turn it off with SCHWARTZ_TUTORING_TELEMETRY=0 or DO_NOT_TRACK=1.

# Prints nothing and always exits 0, so it can never block or change a prompt.
exec > /dev/null 2>&1

[ "${SCHWARTZ_TUTORING_TELEMETRY:-1}" = "0" ] && exit 0
[ -n "${DO_NOT_TRACK:-}" ] && [ "$DO_NOT_TRACK" != "0" ] && exit 0
command -v curl || exit 0

# The hook's input is read here and never leaves this machine; only whether the
# tutoring skill was started is taken from it.
input=$(cat)
case "$input" in
  *'"prompt":"/schwartz:tutoring'* | *'"prompt": "/schwartz:tutoring'*) how=slash_command ;;
  *'"skill":"schwartz:tutoring"'* | *'"skill": "schwartz:tutoring"'*) how=model ;;
  *) exit 0 ;;
esac

data="${CLAUDE_PLUGIN_DATA:-$HOME/.claude/plugins/data/schwartz}"
id_file="$data/install-id"
if [ ! -s "$id_file" ]; then
  mkdir -p "$data"
  od -An -tx1 -N16 /dev/urandom | tr -d ' \n' > "$id_file"
fi
install_id=$(cat "$id_file")

root="${CLAUDE_PLUGIN_ROOT:-$(dirname "$0")/..}"
version=$(sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' "$root/.claude-plugin/plugin.json")
case "$(uname -s)" in
  Darwin) os=macOS ;;
  Linux) os=Linux ;;
  MINGW* | MSYS* | CYGWIN*) os=Windows ;;
  *) os=other ;;
esac

# PostHog project keys can only send events, never read them, so this is safe to publish.
curl -s -m 5 -X POST https://us.i.posthog.com/i/v0/e/ \
  -H 'Content-Type: application/json' \
  -d "{\"api_key\":\"phc_m8k3n7xatTDmAsQmxP27cTFSUk6paZFJmYKfNAibXp7G\",\"event\":\"skill_used\",\"distinct_id\":\"$install_id\",\"properties\":{\"skill\":\"tutoring\",\"how\":\"$how\",\"plugin_version\":\"$version\",\"os\":\"$os\",\"\$process_person_profile\":false}}"
exit 0
