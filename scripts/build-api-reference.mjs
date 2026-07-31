/* Generates docs/api-reference.md by scanning src/css.
 *
 * - Pulls every --bf-* custom property from src/css/variables.css.
 * - Pulls every .bf-* class from src/css/* (excluding entry points and shared
 *   partials so the grouping reflects the canonical source directory).
 * - Groups classes by source directory and links each directory to GitHub.
 *
 * Run with: `npm run docs:api-reference`
 * Re-run whenever you add new tokens or classes — the file is committed, not gitignored.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const cssRoot = path.join(repoRoot, 'src', 'css');
const outFile = path.join(repoRoot, 'docs', 'api-reference.md');
const repoUrl = 'https://github.com/marcop135/bullframe.css';
const branch = 'v6';

function walkCss(dir, { shallow = false } = {}) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (!shallow) out.push(...walkCss(full));
      else {
        // When shallow, collect CSS files directly inside subdirectories but not
        // at the top level (which are entry points and shared partials).
        for (const sub of readdirSync(full)) {
          const subFull = path.join(full, sub);
          if (statSync(subFull).isFile() && sub.endsWith('.css')) {
            out.push(subFull);
          }
        }
      }
    }
  }
  return out;
}

function extractRootBlock(cssText) {
  const start = cssText.indexOf(':root');
  if (start === -1) return '';

  let brace = cssText.indexOf('{', start);
  if (brace === -1) return '';

  let depth = 1;
  let i = brace + 1;
  while (i < cssText.length && depth > 0) {
    if (cssText[i] === '{') depth++;
    else if (cssText[i] === '}') depth--;
    i++;
  }
  return cssText.slice(brace + 1, i - 1);
}

function extractVariables(cssText) {
  const block = extractRootBlock(cssText);
  const lines = block.split(/\r?\n/);

  // Join continuation lines so multi-line declarations become single logical lines.
  const logicalLines = [];
  let buffer = '';
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith('/*') && line.endsWith('*/')) {
      if (buffer) {
        logicalLines.push(buffer);
        buffer = '';
      }
      logicalLines.push(line);
      continue;
    }

    buffer = buffer ? `${buffer} ${line}` : line;
    // A declaration is complete once it contains a semicolon (inline comments
    // come after the semicolon, so lines ending with `*/` are still complete).
    if (line.includes(';')) {
      logicalLines.push(buffer);
      buffer = '';
    }
  }
  if (buffer) logicalLines.push(buffer);

  const vars = [];
  let pendingComment = '';
  let sawDeclSinceComment = true;

  for (const line of logicalLines) {
    const sectionComment = line.match(/^\/\*\s*(.+?)\s*\*\/$/);
    if (sectionComment) {
      if (sawDeclSinceComment) {
        pendingComment = sectionComment[1];
        sawDeclSinceComment = false;
      }
      continue;
    }

    const decl = line.match(/^(--bf-[a-z0-9-]+):\s*(.+?);\s*(?:\/\*\s*(.+?)\s*\*\/)?\s*$/);
    if (decl) {
      let value = decl[2].trim();
      // Normalize whitespace inside multi-line rgb()/font-stack values.
      value = value.replace(/\s+/g, ' ');
      const inlineComment = decl[3] || '';
      vars.push({ name: decl[1], value, section: pendingComment, inlineComment });
      sawDeclSinceComment = true;
    }
  }
  return vars;
}

function scoreClassInSelector(className, selector) {
  const escaped = className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`\\.${escaped}(?![a-z0-9_-])`, 'g');
  let score = 0;
  let m;
  while ((m = re.exec(selector)) !== null) {
    const idx = m.index;
    const before = selector.slice(0, idx).trim();
    // Higher score when the class is the primary subject of the selector.
    if (
      !before ||
      before.endsWith(',') ||
      before.endsWith('>') ||
      before.endsWith('+') ||
      before.endsWith('~')
    ) {
      score += 10;
    } else if (before.endsWith('(') || before.endsWith('[')) {
      score += 3;
    } else {
      score += 1;
    }
  }
  return score;
}

function extractClassScores(cssText, file) {
  const scores = new Map();
  const root = postcss.parse(cssText);
  root.walkRules((rule) => {
    for (const sel of rule.selector.split(',')) {
      for (const className of sel.match(/\.bf-[a-z0-9-]+(?:--[a-z0-9-]+)?/g) || []) {
        const name = className.slice(1);
        const score = scoreClassInSelector(name, sel.trim());
        if (!scores.has(name)) scores.set(name, new Map());
        const fileScores = scores.get(name);
        fileScores.set(file, (fileScores.get(file) || 0) + score);
      }
    }
  });
  return scores;
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

function dirOf(file) {
  const rel = path.relative(cssRoot, file).replace(/\\/g, '/');
  return rel.includes('/') ? rel.split('/')[0] : 'core';
}

function assignClassesToDirs(fileScores) {
  const groups = new Map();
  for (const [name, scoresByFile] of fileScores) {
    let bestFile = null;
    let bestScore = -1;
    for (const [file, score] of scoresByFile) {
      if (score > bestScore) {
        bestScore = score;
        bestFile = file;
      }
    }
    const dir = dirOf(bestFile);
    if (!groups.has(dir)) groups.set(dir, new Set());
    groups.get(dir).add(name);
  }
  return new Map([...groups.entries()].map(([k, v]) => [k, [...v].sort()]));
}

const variablesCss = readFileSync(path.join(cssRoot, 'variables.css'), 'utf8');

// Only scan authored partials in subdirectories so entry points and shared
// dark-mode partials do not steal the canonical grouping.
const sourceFiles = walkCss(cssRoot, { shallow: true });

const fileScores = new Map();
for (const file of sourceFiles) {
  const text = readFileSync(file, 'utf8');
  const scores = extractClassScores(text, file);
  for (const [name, fileScoresMap] of scores) {
    if (!fileScores.has(name)) fileScores.set(name, new Map());
    const current = fileScores.get(name);
    for (const [f, s] of fileScoresMap) {
      current.set(f, (current.get(f) || 0) + s);
    }
  }
}

const classGroups = assignClassesToDirs(fileScores);
const dedupedClassCount = fileScores.size;

const varGroups = groupVars(extractVariables(variablesCss));

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
