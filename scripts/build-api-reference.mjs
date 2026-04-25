/* Generates website/docs/api-reference.md by scanning src/css.
 *
 * - Pulls every --bf-* custom property from src/css/variables.css.
 * - Pulls every .bf-* class from src/css (excluding .bf-classless / unrelated suffixes).
 * - Groups them by source file for readability.
 *
 * Run with: `npm run docs:api-reference`
 * Re-run whenever you add new tokens or classes — the file is committed, not gitignored.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const cssRoot = path.join(repoRoot, 'src', 'css');
const outFile = path.join(repoRoot, 'website', 'docs', 'api-reference.md');

function walkCss(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...walkCss(full));
    } else if (entry.endsWith('.css')) {
      out.push(full);
    }
  }
  return out;
}

function extractVariables(cssText) {
  const vars = [];
  let inRoot = false;
  let depth = 0;
  let pendingComment = '';
  let sawDeclSinceComment = true;

  for (const line of cssText.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed.startsWith(':root')) {
      inRoot = true;
      depth = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
      continue;
    }
    if (!inRoot) continue;
    depth += (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
    if (depth <= 0) { inRoot = false; continue; }
    const sectionComment = trimmed.match(/^\/\*\s*(.+?)\s*\*\/$/);
    if (sectionComment) {
      // Only the FIRST comment in a run becomes the section heading; subsequent
      // back-to-back comments are descriptive notes for the section.
      if (sawDeclSinceComment) {
        pendingComment = sectionComment[1];
        sawDeclSinceComment = false;
      }
      continue;
    }
    if (trimmed === '') continue;
    const decl = trimmed.match(/^(--bf-[a-z0-9-]+):\s*(.+?);?\s*(?:\/\*\s*(.+?)\s*\*\/)?$/);
    if (decl) {
      let value = decl[2].replace(/;$/, '').trim();
      const inlineComment = decl[3] || '';
      vars.push({ name: decl[1], value, section: pendingComment, inlineComment });
      sawDeclSinceComment = true;
    }
  }
  return vars;
}

function extractClasses(cssText, file) {
  const classes = new Set();
  const re = /\.(bf-[a-z0-9-]+(?:--[a-z0-9-]+)?)/g;
  let m;
  while ((m = re.exec(cssText)) !== null) classes.add(m[1]);
  return [...classes].map((name) => ({ name, file }));
}

function groupVars(vars) {
  const groups = new Map();
  for (const v of vars) {
    const key = v.section || 'Other';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(v);
  }
  return groups;
}

function groupClasses(classes) {
  const groups = new Map();
  for (const c of classes) {
    const rel = path.relative(cssRoot, c.file).replace(/\\/g, '/');
    const dir = rel.includes('/') ? rel.split('/')[0] : 'core';
    if (!groups.has(dir)) groups.set(dir, new Set());
    groups.get(dir).add(c.name);
  }
  return new Map([...groups.entries()].map(([k, v]) => [k, [...v].sort()]));
}

const variablesCss = readFileSync(path.join(cssRoot, 'variables.css'), 'utf8');
const allCssFiles = walkCss(cssRoot);

const allClasses = [];
for (const file of allCssFiles) {
  const text = readFileSync(file, 'utf8');
  allClasses.push(...extractClasses(text, file));
}

const dedupedClasses = [];
const seen = new Set();
for (const c of allClasses) {
  if (seen.has(c.name)) continue;
  seen.add(c.name);
  dedupedClasses.push(c);
}

const varGroups = groupVars(extractVariables(variablesCss));
const classGroups = groupClasses(dedupedClasses);

const lines = [];
lines.push('---');
lines.push('sidebar_position: 99');
lines.push('---');
lines.push('');
lines.push('# API Reference');
lines.push('');
lines.push('Generated from `src/css/`. Re-run `npm run docs:api-reference` after changing variables or classes.');
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
lines.push('Grouped by source directory under `src/css/`. Open the linked file for the full rule.');
lines.push('');

const orderedDirs = ['core', 'typography', 'forms', 'miscellaneous', 'utilities'];
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
  lines.push(`### ${dir}`);
  lines.push('');
  lines.push(list.map((c) => `\`${c}\``).join(' · '));
  lines.push('');
}

lines.push('---');
lines.push('');
lines.push(`_${dedupedClasses.length} classes, ${[...varGroups.values()].reduce((n, v) => n + v.length, 0)} CSS custom properties._`);
lines.push('');

writeFileSync(outFile, lines.join('\n'), 'utf8');
console.log(`[api-reference] OK — wrote ${path.relative(repoRoot, outFile)}`);
