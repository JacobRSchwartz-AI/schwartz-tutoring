"""Give every code excerpt in a PRtifact page its real line numbers.

For each script.before and script.after with a data-ref, this reads the file from git (the before
excerpt at the target branch, the after excerpt at the head of the change), finds each line the page
shows, and writes the numbers as data-lines on the script. Run it again after any excerpt changes.

    python line-numbers.py page.html --repo path/to/repo --before main --after my-branch [--write]

Without --write it prints what it found and changes nothing. It writes nothing if any line is not
found: fix that excerpt so its lines are copied from the file, then run it again.
"""
import argparse
import io
import re
import subprocess

parser = argparse.ArgumentParser()
parser.add_argument('page')
parser.add_argument('--repo', required=True)
parser.add_argument('--before', required=True, help='the target branch or commit')
parser.add_argument('--after', required=True, help='the branch or commit of the change')
parser.add_argument('--write', action='store_true')
args = parser.parse_args()


def file_at(rev, path):
    out = subprocess.run(['git', 'show', rev + ':' + path], cwd=args.repo, capture_output=True)
    if out.returncode != 0:
        raise SystemExit('cannot read %s at %s: %s' % (path, rev, out.stderr.decode('utf-8', 'replace').strip()))
    return out.stdout.decode('utf-8').replace('\r\n', '\n').split('\n')


def note(line):
    return re.match(r'^\s*(//|#)\s*\.\.\.', line) is not None


def shown(text):
    # the lines the page shows: the same filter as the template's cleanLines
    out = []
    for line in text.replace('\t', '  ').split('\n'):
        if line.strip() == '':
            continue
        if re.match(r'^\s*(//|/\*|\*|#)', line) and not note(line):
            continue
        out.append(line)
    return out


def norm(text):
    return re.sub(r'\s+', ' ', text.strip())


def ranges(numbers):
    out, i = [], 0
    while i < len(numbers):
        j = i
        while j + 1 < len(numbers) and numbers[j + 1] == numbers[j] + 1:
            j += 1
        out.append(str(numbers[i]) if i == j else '%d-%d' % (numbers[i], numbers[j]))
        i = j + 1
    return ' '.join(out)


page = io.open(args.page, encoding='utf-8').read()
pattern = re.compile(r'(<script type="text/plain" class="(before|after)" data-ref="([^"]*)")(?: data-lines="[^"]*")?>(.*?)</script>', re.S)
missing = []


def number(m):
    head, kind, ref, body = m.group(1), m.group(2), m.group(3), m.group(4)
    path = re.split(r'[ ,:]', ref.strip())[0]
    lines = file_at(args.before if kind == 'before' else args.after, path)
    at, found = 0, []
    for line in shown(body):
        if note(line):
            continue
        hit = next((k for k in range(at, len(lines)) if norm(lines[k]) == norm(line)), None)
        if hit is None:
            missing.append('%s %s: %s' % (kind, path, line.strip()))
            continue
        found.append(hit + 1)
        at = hit + 1
    print('%-6s %-40s %s' % (kind, path, ranges(found)))
    return head + ' data-lines="' + ranges(found) + '">' + body + '</script>'


result = pattern.sub(number, page)
for line in missing:
    print('NOT FOUND', line)
if args.write and not missing:
    io.open(args.page, 'w', encoding='utf-8', newline='\n').write(result)
    print('written')
elif args.write:
    print('nothing written')
