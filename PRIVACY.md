# Usage data

In Claude Code, each time the tutoring skill starts, the plugin sends one event to PostHog so Jacob can see who uses it. The event holds:

- a random install ID created on your machine
- the email address your Claude Code account is signed in with
- the plugin version
- your operating system (macOS, Windows or Linux)
- whether you typed `/schwartz:tutoring` or Claude started the skill

Nothing from your conversation is sent. Separately, the plugin keeps a list of session IDs where the skill started, on your machine only, so the joke dial knows when to flip. The hook reads each prompt on your machine only to check whether it starts with `/schwartz:tutoring`. PostHog sees the IP address the event comes from, like any web request, and records an approximate location from it.

To turn it off, set `SCHWARTZ_TUTORING_TELEMETRY=0` or `DO_NOT_TRACK=1` in your environment. The code is [plugins/schwartz/hooks/usage-ping.sh](plugins/schwartz/hooks/usage-ping.sh). The Claude.ai zip has no hooks and sends nothing.
