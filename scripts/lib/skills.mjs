/* Reading and validating the skill sources under src/skills/.
 *
 * A skill is a directory holding one SKILL.md (YAML frontmatter + Markdown) and
 * optional examples/*.html. Nothing here executes skill content; these helpers
 * only parse, resolve and check it.
 *
 * Consumed by scripts/build-skills.mjs and tests/skills/*.test.mjs.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { repoRoot } from './css-api.mjs';

export const skillsRoot = path.join(repoRoot, 'src', 'skills');
export const sharedDirName = '_shared';

/** Frontmatter keys every SKILL.md must carry, and the shape each one takes. */
export const FRONTMATTER_SCHEMA = {
  name: 'string',
  description: 'string',
  bullframe: 'string',
  builds: 'list',
  requires: 'list',
  docs: 'list',
};

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function stripQuotes(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith("'") && trimmed.endsWith("'")) ||
    (trimmed.startsWith('"') && trimmed.endsWith('"'))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

/**
 * Deliberately tiny YAML subset: `key: scalar` and `key: [a, b]` on one line.
 * Anything richer is a validation error rather than a silent reinterpretation.
 */
export function parseFrontmatter(text) {
  const match = text.match(FRONTMATTER_RE);
  if (!match) return { data: null, body: text, raw: '' };

  const data = {};
  for (const rawLine of match[1].split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const sep = line.indexOf(':');
    if (sep === -1) {
      data.__invalid = data.__invalid || [];
      data.__invalid.push(line);
      continue;
    }

    const key = line.slice(0, sep).trim();
    const value = line.slice(sep + 1).trim();

    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1).trim();
      data[key] = inner ? inner.split(',').map((v) => stripQuotes(v)) : [];
    } else {
      data[key] = stripQuotes(value);
    }
  }

  return { data, body: text.slice(match[0].length), raw: match[1] };
}

function listFiles(dir, base = dir) {
  const out = [];
  for (const entry of readdirSync(dir).sort()) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...listFiles(full, base));
    else out.push(path.relative(base, full).replace(/\\/g, '/'));
  }
  return out;
}

/** Every skill directory, in load order: prerequisites before dependants. */
export function readSkills({ root = skillsRoot } = {}) {
  const dirs = readdirSync(root)
    .filter((entry) => !entry.startsWith('_'))
    .filter((entry) => statSync(path.join(root, entry)).isDirectory())
    .sort();

  const skills = dirs.map((dir) => {
    const skillFile = path.join(root, dir, 'SKILL.md');
    if (!existsSync(skillFile)) {
      return { dir, error: 'missing SKILL.md', files: [] };
    }
    const text = readFileSync(skillFile, 'utf8');
    const { data, body } = parseFrontmatter(text);
    return {
      dir,
      path: path.join(root, dir),
      data: data ?? {},
      body,
      text,
      files: listFiles(path.join(root, dir)),
    };
  });

  // Skills with no prerequisites first, then the rest alphabetically. One level
  // is enough: the set is small and deliberately shallow.
  return [
    ...skills.filter((s) => (s.data?.requires ?? []).length === 0),
    ...skills.filter((s) => (s.data?.requires ?? []).length > 0),
  ];
}

/** Shared reference files copied next to the skills. */
export function readShared({ root = skillsRoot } = {}) {
  const dir = path.join(root, sharedDirName);
  if (!existsSync(dir)) return [];
  return listFiles(dir).map((file) => ({
    file,
    path: path.join(dir, file),
    text: readFileSync(path.join(dir, file), 'utf8'),
  }));
}

/** `<!-- bf-absent: bf-card, bf-nav -->` marks names quoted as counterexamples. */
export function declaredAbsent(text) {
  const names = new Set();
  for (const match of text.matchAll(/<!--\s*bf-absent:\s*([^>]+?)\s*-->/g)) {
    for (const name of match[1].split(',')) {
      const clean = name.trim().replace(/^[.`]+|[`]+$/g, '');
      if (clean) names.add(clean);
    }
  }
  return names;
}

/** Every `.bf-*` class and `--bf-*` token named anywhere in a chunk of text. */
export function collectBfRefs(text) {
  const withoutDirectives = text.replace(/<!--\s*bf-absent:[^>]*-->/g, '');
  const classes = new Set();
  const tokens = new Set();

  // A trailing hyphen means a prose wildcard (`.bf-m-*`, `--bf-spacing-*`), not a name.
  const isWildcard = (name) => name.endsWith('-');

  for (const match of withoutDirectives.matchAll(/--bf-[a-z0-9-]+/g)) {
    if (!isWildcard(match[0])) tokens.add(match[0]);
  }
  // Skip the token matches when scanning classes: `--bf-x` must not read as `bf-x`.
  // `$bf-x` is a v5 Sass variable quoted in the migration guide, not a class.
  const classText = withoutDirectives.replace(/--bf-[a-z0-9-]+/g, ' ');
  for (const match of classText.matchAll(/(?<![$\w-])bf-[a-z0-9-]+/g)) {
    if (!isWildcard(match[0])) classes.add(match[0]);
  }

  return { classes, tokens };
}

/** Fenced code blocks of one language, in source order. */
export function codeBlocks(text, lang = 'html') {
  const blocks = [];
  const re = new RegExp('```' + lang + '\\r?\\n([\\s\\S]*?)```', 'g');
  for (const match of text.matchAll(re)) blocks.push(match[1]);
  return blocks;
}

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'source',
  'track',
  'wbr',
]);

/**
 * Twelfths claimed by the direct children of every `.bf-row`, in source order.
 * A tolerant tag scanner is enough here: the inputs are the project's own examples,
 * and the check only needs the class attribute and the nesting depth.
 */
export function columnSums(html) {
  const sums = [];
  const stack = [];
  const tagRe = /<\/?([a-z][a-z0-9-]*)\b([^>]*)>/gi;

  for (const match of html.matchAll(tagRe)) {
    const [raw, tag, attrs = ''] = match;
    const closing = raw.startsWith('</');
    const lower = tag.toLowerCase();

    if (closing) {
      while (stack.length) {
        const frame = stack.pop();
        if (frame.isRow) sums.push(frame.sum);
        if (frame.tag === lower) break;
      }
      continue;
    }

    const classMatch = attrs.match(/\bclass\s*=\s*["']([^"']*)["']/i);
    const classes = classMatch ? classMatch[1].split(/\s+/) : [];

    const parent = stack[stack.length - 1];
    if (parent?.isRow) {
      for (const name of classes) {
        const col = name.match(/^bf-col-(\d+)$/);
        if (col) parent.sum += Number(col[1]);
      }
    }

    if (VOID_TAGS.has(lower) || attrs.trimEnd().endsWith('/')) continue;
    stack.push({ tag: lower, isRow: classes.includes('bf-row'), sum: 0 });
  }

  for (const frame of stack.reverse()) {
    if (frame.isRow) sums.push(frame.sum);
  }
  return sums;
}

/** Site paths for every docs page, so frontmatter `docs` entries can be checked offline. */
export function docsSlugs({ root = path.join(repoRoot, 'docs') } = {}) {
  const slugs = new Map();
  const walk = (dir) => {
    for (const entry of readdirSync(dir).sort()) {
      if (entry.startsWith('.') || entry === 'public') continue;
      const full = path.join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.endsWith('.md')) continue;
      const rel = path.relative(root, full).replace(/\\/g, '/');
      const slug =
        rel === 'index.md'
          ? '/'
          : rel.endsWith('/index.md')
            ? `/${rel.slice(0, -'index.md'.length)}`
            : `/${rel.slice(0, -'.md'.length)}`;
      slugs.set(slug, rel);
    }
  };
  walk(root);
  return slugs;
}

/** Flat name sets from the generated API surface. */
export function apiNames(api) {
  return {
    classes: new Set(api.classes.map((c) => c.name)),
    tokens: new Set(api.tokens.map((t) => t.name)),
  };
}

export function validateSkill(skill, { version, slugs, skillNames }) {
  const errors = [];
  const where = `src/skills/${skill.dir}/SKILL.md`;

  if (skill.error) {
    errors.push(`${where}: ${skill.error}`);
    return errors;
  }

  const data = skill.data;
  if (data.__invalid) {
    errors.push(`${where}: unparseable frontmatter line "${data.__invalid[0]}"`);
  }

  for (const [key, kind] of Object.entries(FRONTMATTER_SCHEMA)) {
    const value = data[key];
    if (value === undefined) {
      errors.push(`${where}: missing frontmatter key "${key}"`);
      continue;
    }
    if (kind === 'list' && !Array.isArray(value)) {
      errors.push(`${where}: "${key}" must be an inline list, for example [a, b]`);
    }
    if (kind === 'string' && typeof value !== 'string') {
      errors.push(`${where}: "${key}" must be a scalar`);
    }
  }

  if (data.name !== skill.dir) {
    errors.push(`${where}: name "${data.name}" does not match directory "${skill.dir}"`);
  }
  if (typeof data.name === 'string' && !/^[a-z][a-z0-9-]*$/.test(data.name)) {
    errors.push(`${where}: name must be kebab-case`);
  }
  if (typeof data.description === 'string') {
    if (data.description.length > 400) {
      errors.push(`${where}: description is ${data.description.length} characters, cap is 400`);
    }
    if (!/\buse\b/i.test(data.description)) {
      errors.push(`${where}: description must say when to use the skill`);
    }
  }
  if (typeof data.bullframe === 'string' && !satisfies(version, data.bullframe)) {
    errors.push(`${where}: bullframe range "${data.bullframe}" excludes current ${version}`);
  }
  for (const required of data.requires ?? []) {
    if (!skillNames.has(required)) {
      errors.push(`${where}: requires unknown skill "${required}"`);
    }
  }
  for (const slug of data.docs ?? []) {
    if (!slugs.has(slug)) {
      errors.push(`${where}: docs entry "${slug}" has no page under docs/`);
    }
  }
  if (!/^#\s+\S/m.test(skill.body)) {
    errors.push(`${where}: body needs an H1`);
  }
  for (const heading of ['## When to use', '## Rules', '## Do not', '## Canonical docs']) {
    if (!skill.body.includes(heading)) {
      errors.push(`${where}: body is missing the "${heading}" section`);
    }
  }

  return errors;
}

/**
 * Enough semver for `>=6.1.0 <7.0.0`: comparator pairs on exact versions, which is
 * the only form the frontmatter schema allows.
 */
export function satisfies(version, range) {
  const parse = (v) => v.split('.').map((n) => Number.parseInt(n, 10));
  const cmp = (a, b) => {
    const [x, y] = [parse(a), parse(b)];
    for (let i = 0; i < 3; i++) {
      if ((x[i] ?? 0) !== (y[i] ?? 0)) return (x[i] ?? 0) - (y[i] ?? 0);
    }
    return 0;
  };

  const parts = range.trim().split(/\s+/);
  for (const part of parts) {
    const match = part.match(/^(>=|<=|>|<|=)?(\d+\.\d+\.\d+)$/);
    if (!match) return false;
    const [, op = '=', target] = match;
    const result = cmp(version, target);
    if (op === '>=' && result < 0) return false;
    if (op === '>' && result <= 0) return false;
    if (op === '<=' && result > 0) return false;
    if (op === '<' && result >= 0) return false;
    if (op === '=' && result !== 0) return false;
  }
  return true;
}
