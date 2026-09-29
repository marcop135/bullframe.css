/* Generates docs/api-reference.md by scanning src/css.
 *
 * - Pulls every --bf-* custom property from src/css/variables.css.
 * - Pulls every .bf-* class from src/css/* (excluding entry points and shared
 *   partials so the grouping reflects the canonical source directory).
 * - Groups classes by source directory and links each directory to GitHub.
 *
 * Parsing lives in scripts/lib/css-api.mjs, shared with the skills build.
 *
 * Run with: `npm run docs:api-reference`
 * Re-run whenever you add new tokens or classes — the file is committed, not gitignored.
 */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { readCssApi, repoRoot } from './lib/css-api.mjs';

const outFile = path.join(repoRoot, 'docs', 'api-reference.md');
const repoUrl = 'https://github.com/marcop135/bullframe.css';
const branch = 'v6';

const { fileScores, classGroups, varGroups } = readCssApi();
const dedupedClassCount = fileScores.size;

const lines = [];
lines.push('# API Reference');
lines.push('');
lines.push(
  'Generated from `src/css/`. Re-run `npm run docs:api-reference` after changing variables or classes.'
);
lines.push('');
lines.push('## CSS Custom Properties');
lines.push('');

for (const [section, vars] of varGroups) {
  lines.push(`### ${section}`);
  lines.push('');
  lines.push('| Variable | Default | Notes |');
  lines.push('|----------|---------|-------|');
  for (const v of vars) {
    const value = '`' + v.value.replace(/\|/g, '\\|') + '`';
    const notes = v.inlineComment ? v.inlineComment.replace(/\|/g, '\\|') : '';
    lines.push(`| \`${v.name}\` | ${value} | ${notes} |`);
  }
  lines.push('');
}

lines.push('## Classes');
lines.push('');
lines.push(
  'Grouped by source directory under `src/css/`. Click a directory to see the full rules on GitHub.'
);
lines.push('');

const orderedDirs = ['typography', 'forms', 'miscellaneous', 'utilities'];
const sortedKeys = [...classGroups.keys()].sort((a, b) => {
  const ai = orderedDirs.indexOf(a);
  const bi = orderedDirs.indexOf(b);
  if (ai === -1 && bi === -1) return a.localeCompare(b);
  if (ai === -1) return 1;
  if (bi === -1) return -1;
  return ai - bi;
});

for (const dir of sortedKeys) {
  const list = classGroups.get(dir);
  const dirUrl = `${repoUrl}/blob/${branch}/src/css/${dir}`;
  lines.push(`### [${dir}](${dirUrl})`);
  lines.push('');
  lines.push(list.map((c) => `\`${c}\``).join(' · '));
  lines.push('');
}

lines.push('---');
lines.push('');
lines.push(
  `_${dedupedClassCount} classes, ${[...varGroups.values()].reduce((n, v) => n + v.length, 0)} CSS custom properties._`
);
lines.push('');

writeFileSync(outFile, lines.join('\n'), 'utf8');
console.log(`[api-reference] OK — wrote ${path.relative(repoRoot, outFile)}`);
