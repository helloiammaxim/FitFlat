#!/usr/bin/env python3
"""Build fitflat-offline.html: FitFlat as one file with every library inside it.

The result opens straight from disk or from any intranet server and makes no outside connection at all: a strict
Content-Security-Policy in the file itself blocks every network address, so nothing can be loaded or sent even by mistake.

    python3 tools/build-offline.py        (run from the repository folder)
"""
import re, pathlib

root = pathlib.Path(__file__).resolve().parent.parent
html = (root / 'index.html').read_text(encoding='utf-8')

def inline(m):
    path = m.group(1)
    code = (root / path).read_text(encoding='utf-8')
    assert '</script' not in code.lower(), path
    return f'<script>/* {path} (licence: see lib/ in the FitFlat repository) */\n{code}\n</script>'

html, n = re.subn(r'<script src="(lib/[^"]+)"></script>', inline, html)
assert n == 12, f'expected 12 library files, found {n}'
assert 'src="http' not in html and "src='http" not in html

# no network at all: only what is inside this file, plus data and blob addresses made while working
csp = ("default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; "
       "connect-src data: blob:; worker-src blob:; object-src 'none'; base-uri 'none'; form-action 'none'")
head = '<meta http-equiv="Content-Security-Policy" content="' + csp + '">'
html = html.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n' + head, 1)
assert head in html, 'charset meta not found'
html = html.replace('<title>', '<!-- FitFlat offline build: works without internet, sends nothing anywhere. -->\n<title>', 1)

out = root / 'fitflat-offline.html'
out.write_text(html, encoding='utf-8')
print(f'{out.name}: {out.stat().st_size / 1e6:.2f} MB, {n} libraries inside')
