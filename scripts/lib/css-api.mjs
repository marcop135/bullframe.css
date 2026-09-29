/* Single extractor for the framework's public CSS surface.
 *
 * Parses src/css/ and returns every --bf-* token, every .bf-* class, and the
 * seven consumer builds. Two consumers:
 *
 * - scripts/build-api-reference.mjs → docs/api-reference.md (human reference)
 * - scripts/build-skills.mjs        → dist/skills/api.json  (machine reference)
 *
 * Keeping both on one extractor is what stops a skill from teaching a class
 * that no longer exists.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const repoRoot = path.resolve(__dirname, '..', '..');
export const cssRoot = path.join(repoRoot, 'src', 'css');

export function walkCss(dir, { shallow = false } = {}) {
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

export function extractVariables(cssText) {
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

export function extractClassScores(cssText, file) {
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

export function groupVars(vars) {
  const groups = new Map();
  for (const v of vars) {
    const key = v.section || 'Other';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(v);
  }
  return groups;
}

function dirOf(file, root) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  return rel.includes('/') ? rel.split('/')[0] : 'core';
}

export function assignClassesToDirs(fileScores, root) {
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
    const dir = dirOf(bestFile, root);
    if (!groups.has(dir)) groups.set(dir, new Set());
    groups.get(dir).add(name);
  }
  return new Map([...groups.entries()].map(([k, v]) => [k, [...v].sort()]));
}

/** Theme and markup mode implied by a build's file name. */
function describeBuild(name) {
  if (name === 'bullframe-utilities') return { mode: 'utilities', theme: 'none' };
  const mode = name.includes('classless') ? 'classless' : 'class-based';
  if (name.endsWith('-dark')) return { mode, theme: 'dark' };
  if (name.endsWith('-system-default')) return { mode, theme: 'system' };
  return { mode, theme: 'light' };
}

/**
 * The seven consumer builds, derived the same way vite.config.js derives them:
 * src/css/bullframe*.css, partials excluded. npm subpaths come from the real
 * `exports` map so the two can never disagree.
 */
export function listBuilds({ root = cssRoot, pkg } = {}) {
  const manifest = pkg ?? JSON.parse(readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));

  const subpathFor = (file) => {
    for (const [key, value] of Object.entries(manifest.exports ?? {})) {
      if (value === `./dist/css/${file}`) {
        return key === '.' ? manifest.name : `${manifest.name}${key.slice(1)}`;
      }
    }
    return null;
  };

  return readdirSync(root)
    .filter((f) => f.startsWith('bullframe') && f.endsWith('.css') && !f.startsWith('_'))
    .sort()
    .map((file) => {
      const name = path.basename(file, '.css');
      return {
        name,
        file,
        min: `${name}.min.css`,
        subpath: subpathFor(file),
        ...describeBuild(name),
      };
    });
}

/**
 * The machine-readable surface written to dist/skills/api.json and published at
 * /api.json. Deterministic by design: no timestamp, so an unchanged source tree
 * rebuilds to a byte-identical file.
 */
export function toApiJson(css, { docs = 'https://bullframecss.marcopontili.com' } = {}) {
  const tokens = [];
  for (const [section, vars] of css.varGroups) {
    for (const v of vars) {
      tokens.push({
        name: v.name,
        value: v.value,
        section,
        ...(v.inlineComment ? { note: v.inlineComment } : {}),
      });
    }
  }

  const classes = [];
  for (const [group, names] of css.classGroups) {
    for (const name of names) classes.push({ name, group });
  }
  classes.sort((a, b) => a.name.localeCompare(b.name));

  return {
    name: 'bullframe.css',
    version: css.version,
    docs,
    builds: css.builds,
    tokens,
    classes,
    counts: { builds: css.builds.length, tokens: tokens.length, classes: classes.length },
  };
}

/** Everything a consumer needs in one shape. */
export function readCssApi({ root = cssRoot } = {}) {
  const pkg = JSON.parse(readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
  const variablesCss = readFileSync(path.join(root, 'variables.css'), 'utf8');

  // Only scan authored partials in subdirectories so entry points and shared
  // dark-mode partials do not steal the canonical grouping.
  const sourceFiles = walkCss(root, { shallow: true });

  const fileScores = new Map();
  for (const file of sourceFiles) {
    const scores = extractClassScores(readFileSync(file, 'utf8'), file);
    for (const [name, fileScoresMap] of scores) {
      if (!fileScores.has(name)) fileScores.set(name, new Map());
      const current = fileScores.get(name);
      for (const [f, s] of fileScoresMap) {
        current.set(f, (current.get(f) || 0) + s);
      }
    }
  }

  const classGroups = assignClassesToDirs(fileScores, root);
  const varGroups = groupVars(extractVariables(variablesCss));

  return {
    version: pkg.version,
    fileScores,
    classGroups,
    varGroups,
    builds: listBuilds({ root, pkg }),
  };
}
