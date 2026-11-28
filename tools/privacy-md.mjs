// Writes PRIVACY.md and PRIVACY.de.md from the privacy texts in index.html (the short friendly version on top,
// the full GDPR policy below), so the website and the app say the same. Run: node tools/privacy-md.mjs
import { readFileSync, writeFileSync } from 'node:fs';
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const grab = (name) => { const i = html.indexOf(`const ${name} = `); if (i < 0) throw new Error(name + ' not found');
  let j = html.indexOf('{', i), d = 0, k = j, q = null;
  for (; k < html.length; k++) { const c = html[k];
    if (q) { if (c === '\\') { k++; continue; } if (c === q) q = null; continue; }
    if (c === '"' || c === "'" || c === '`') { q = c; continue; }
    if (c === '{' || c === '[') d++; else if (c === '}' || c === ']') { d--; if (!d) break; } }
  return Function('return (' + html.slice(j, k + 1) + ')')(); };
const PROVIDER = grab('PROVIDER'), FULL = grab('PRIVACY_FULL'), DATE = grab('PRIVACY_DATE');
const md = h => h.replace(/<br>/g, '  \n').replace(/<\/p>\s*<p>/g, '\n\n').replace(/<\/?p>/g, '').replace(/<b>(.*?)<\/b>/g, '**$1**')
  .replace(/<a href="([^"]+)"[^>]*>(.*?)<\/a>/g, '[$2]($1)').replace(/<[^>]+>/g, '').trim();
const C = [PROVIDER.name, PROVIDER.address, PROVIDER.email && `<a href="mailto:${PROVIDER.email}">${PROVIDER.email}</a>`].filter(Boolean).join('<br>');
for (const [lang, file, head] of [['en', 'PRIVACY.md', 'Full privacy policy (GDPR)'], ['de', 'PRIVACY.de.md', 'Vollständige Datenschutzerklärung (DSGVO)']]) {
  const path = new URL('../' + file, import.meta.url), old = readFileSync(path, 'utf8');
  const short = old.split(/\n## (Full privacy policy|Vollständige Datenschutzerklärung)/)[0].trimEnd();
  const full = FULL[lang].map(([h, t]) => `### ${h}\n\n${md(t.replace('{C}', C).replace('{D}', DATE[lang]))}`).join('\n\n');
  writeFileSync(path, `${short}\n\n## ${head}\n\n${full}\n`);
  console.log('wrote', file);
}
