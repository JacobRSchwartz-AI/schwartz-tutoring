# Changelog

## v1 (2026-10-31)
Built from Jacob's two tutor trainings (Full Onboarding Training, Online Training), 40 full session transcripts (41 hours, every subject and level) and 210 whiteboard pages from 100 saved session PDFs (2020 to 2023). 338 quotes, all checked word for word against the transcripts.

## v2 (2026-10-31)
Full read of all 168 tutoring sessions (154 keepers and 14 maybes, about 165 hours) plus the two trainings.
- Split into a core SKILL.md (philosophy, session shape, moves, board, voice, training vs practice, don'ts) and four references read when needed: references/subjects.md, references/analogies.md, references/rare-situations.md (new) and references/policies.md.
- Moves: 172 (63 new), all in the core file. New subject sections for linear algebra and abstract algebra; every subject playbook expanded.
- Analogies: 143, grouped by subject (about 76 new, duplicates merged).
- Rare situations: 89, under eleven headings (young kids and siblings, groups, tech failures, health and focus, graded work, professors and answer keys, unusual students, sensitive tangents, parents, scheduling and payment, when Jacob doesn't know).
- Training vs practice table grew from 13 to 20 rows.
- 788 quote citations across the five files, all checked word for word against the transcripts.

## v2 rename (2026-11-01)
Renamed from jacob-tutoring to tutoring, shipped in the `schwartz` plugin, so it runs as `/schwartz:tutoring`.

## v2.0.1 (2026-11-01)
Fixed dollar amounts that got overwritten when the skill was run with text after the command. Claude Code treats `$0`, `$1`, `$2` and so on in SKILL.md as slots for the words typed after `/schwartz:tutoring`, so "$1 million" arrived as "this million" when the command was followed by "did this skill load correctly?". Four lines now spell the amounts out in dollars (the $1 million / $10 million / $9 million quote, the $1,400 quote, "$2/brush" and "$3,000 less in revenue").
- Rule for future edits: in SKILL.md, never write `$` followed by a single digit (like $1 or $9 million); write "5 dollars" instead. Longer amounts like $42 are only at risk if someone types 42 or more words after the command. The reference files are read as plain files and are not affected.

## v2.0.2 (2026-11-02)
Removed company operations so the skill is about tutoring, not running Schwartz Tutoring.
- references/policies.md is now just conduct: prep, language, politics and religion, physical contact, what to do when you can't solve something, follow-up, and parents. Dropped the dashboard, Slack, cancellation and last-minute fees, payments, referral bonuses and the company whiteboard's setup.
- references/rare-situations.md: "Scheduling, time and payment" is now "Scheduling and time". Dropped billing for a reserved block, the package discount, rebooking on the site, the company's missed follow-up, and substituting for another tutor.
- SKILL.md points to policies.md as conduct rules and drops "don't hound students for payment".

## v2.1.0 (2026-11-02)
Added "All-time greatest hits" to section 5 of SKILL.md: Jacob's ten most Jacob lines plus five honorable mentions, picked from a full read of all 169 transcripts and checked word for word.
- Removed the AI-specific "no profanity" lines (section 5 Language level, the section 6 Language row, policies.md). An AI tutor gets the same language guidance as a human tutor: PG-13 with college students, none with minors, never aimed at the student.
- Licensed CC BY-NC 4.0 (LICENSE at the repo root). README rewritten for the public GitHub repo, JacobRSchwartz-AI/schwartz-tutoring.

## Next
v3: full pass over the remaining ~1,000 whiteboard PDFs; board conventions and boxed rules get folded in here.
