#!/usr/bin/env node
/* Bullframe CSS command line.
 *
 * One job: copy the agent skills that ship in this package into the current project,
 * in whatever layout the project's AI tooling reads. Zero dependencies, no network,
 * no postinstall hook, and it never touches the framework's CSS.
 *
 *   npx bullframe.css skills list
 *   npx bullframe.css skills install [--target claude,cursor,codex,agents,dir] [--dir <path>]
 *   npx bullframe.css skills path
 */
import { cp, mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, '..');
const skillsDir = path.join(packageRoot, 'dist', 'skills');

const START = '<!-- bullframe:skills:start -->';
const END = '<!-- bullframe:skills:end -->';
const LOCAL_DIR = 'bullframe-skills';

/** Tool targets that write into `$parent/skills/` with the same SKILL.md layout. */
const TOOL_TARGETS = {
  claude: { parent: '.claude', label: '.claude/skills' },
  cursor: { parent: '.cursor', label: '.cursor/skills' },
  codex: { parent: '.agents', label: '.agents/skills' },
};

const KNOWN_TARGETS = [...Object.keys(TOOL_TARGETS), 'agents', 'dir'];

const USAGE = `bullframe.css - agent skills for the Bullframe CSS framework

Usage
  npx bullframe.css skills list
  npx bullframe.css skills install [options]
  npx bullframe.css skills path

Install options
  --target <list>   Comma separated: claude, cursor, codex, agents, dir.
                    Default: agents, plus claude / cursor / codex when a
                    .claude, .cursor, or .agents directory exists.
  --dir <path>      Where the "dir" and "agents" targets copy the skills.
                    Default: ./${LOCAL_DIR}
  --dry-run         Print what would be written and exit without writing.
  --force           Overwrite files that already differ.

Other
  --help, -h        This text
  --version, -v     Package version
`;

function parseArgs(argv) {
  const options = { targets: null, dir: null, dryRun: false, force: false };
  const positional = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--target') options.targets = (argv[++i] ?? '').split(',').filter(Boolean);
    else if (arg === '--dir') options.dir = argv[++i];
    else if (arg === '--dry-run') options.dryRun = true;
    else if (arg === '--force') options.force = true;
    else if (arg === '--help' || arg === '-h') options.help = true;
    else if (arg === '--version' || arg === '-v') options.version = true;
    else if (arg.startsWith('-')) options.unknown = arg;
    else positional.push(arg);
  }

  return { options, positional };
}

async function exists(target) {
  try {
    await access(target, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function readIndex() {
  try {
    return JSON.parse(await readFile(path.join(skillsDir, 'index.json'), 'utf8'));
  } catch {
    fail(
      `no skills found in ${skillsDir}.\nInstall the published package, or run "npm run skills:build" in a clone.`
    );
  }
}

function fail(message) {
  console.error(`bullframe: ${message}`);
  process.exit(1);
}

/** Replace the managed block in place, or append it. Never duplicates. */
function mergeAgentsBlock(existing, body) {
  const block = `${START}\n${body.trimEnd()}\n${END}\n`;
  if (!existing) return block;

  const start = existing.indexOf(START);
  const end = existing.indexOf(END);
  if (start !== -1 && end !== -1 && end > start) {
    return existing.slice(0, start) + block.trimEnd() + existing.slice(end + END.length);
  }

  const separator = existing.endsWith('\n') ? '\n' : '\n\n';
  return `${existing}${separator}${block}`;
}

async function writeFileIfNeeded(file, content, { dryRun, force }, written) {
  const current = (await exists(file)) ? await readFile(file, 'utf8') : null;
  if (current === content) {
    written.push(`unchanged ${path.relative(process.cwd(), file)}`);
    return;
  }
  if (current !== null && !force && !file.endsWith('AGENTS.md')) {
    written.push(`skipped   ${path.relative(process.cwd(), file)} (exists, use --force)`);
    return;
  }
  written.push(
    `${current === null ? 'wrote    ' : 'updated  '} ${path.relative(process.cwd(), file)}`
  );
  if (dryRun) return;
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content, 'utf8');
}

async function copyTree(from, to, { dryRun }, written, label) {
  written.push(`${dryRun ? 'would copy' : 'copied   '} ${label}`);
  if (dryRun) return;
  await mkdir(path.dirname(to), { recursive: true });
  await cp(from, to, { recursive: true, force: true });
}

/** Copy every skill plus `_shared` and `api.json` into `$parent/skills/`. */
async function installToolLayout(index, parentDir, label, options, written) {
  const root = path.join(parentDir, 'skills');
  for (const skill of index.skills) {
    await copyTree(
      path.join(skillsDir, skill.name),
      path.join(root, skill.name),
      options,
      written,
      `${label}/${skill.name}/`
    );
  }
  await copyTree(
    path.join(skillsDir, '_shared'),
    path.join(root, '_shared'),
    options,
    written,
    `${label}/_shared/`
  );
  await writeFileIfNeeded(
    path.join(root, '_shared', 'api.json'),
    await readFile(path.join(skillsDir, 'api.json'), 'utf8'),
    { ...options, force: true },
    written
  );
}

async function listSkills() {
  const index = await readIndex();
  console.log(`bullframe.css ${index.version} - ${index.skills.length} skills\n`);
  for (const skill of index.skills) {
    console.log(`  ${skill.name}`);
    console.log(`    ${skill.description}`);
    if (skill.requires?.length) console.log(`    requires: ${skill.requires.join(', ')}`);
  }
  console.log(`\nInstall with: npx bullframe.css skills install`);
}

async function installSkills(options) {
  const index = await readIndex();
  const cwd = process.cwd();
  const localDir = path.resolve(cwd, options.dir ?? LOCAL_DIR);

  let targets = options.targets;
  if (!targets) {
    targets = ['agents'];
    for (const [name, { parent }] of Object.entries(TOOL_TARGETS)) {
      if (await exists(path.join(cwd, parent))) targets.push(name);
    }
  }

  const unknown = targets.filter((t) => !KNOWN_TARGETS.includes(t));
  if (unknown.length) {
    fail(`unknown target "${unknown[0]}". Use ${KNOWN_TARGETS.join(', ')}.`);
  }

  const written = [];

  for (const name of Object.keys(TOOL_TARGETS)) {
    if (!targets.includes(name)) continue;
    const { parent, label } = TOOL_TARGETS[name];
    await installToolLayout(index, path.join(cwd, parent), label, options, written);
  }

  if (targets.includes('agents') || targets.includes('dir')) {
    for (const skill of index.skills) {
      await copyTree(
        path.join(skillsDir, skill.name),
        path.join(localDir, skill.name),
        options,
        written,
        `${path.relative(cwd, localDir)}/${skill.name}/`
      );
    }
    for (const file of ['_shared', 'api.json', 'index.json']) {
      await copyTree(
        path.join(skillsDir, file),
        path.join(localDir, file),
        options,
        written,
        `${path.relative(cwd, localDir)}/${file}`
      );
    }
  }

  if (targets.includes('agents')) {
    const agentsFile = path.join(cwd, 'AGENTS.md');
    const body = await readFile(path.join(skillsDir, index.agentsBlock), 'utf8');
    const existing = (await exists(agentsFile)) ? await readFile(agentsFile, 'utf8') : null;
    await writeFileIfNeeded(
      agentsFile,
      mergeAgentsBlock(existing, body),
      { ...options, force: true },
      written
    );
  }

  console.log(`bullframe.css ${index.version} - targets: ${targets.join(', ')}`);
  for (const line of written) console.log(`  ${line}`);
  if (options.dryRun) console.log('\nDry run: nothing was written.');
}

async function main() {
  const { options, positional } = parseArgs(process.argv.slice(2));

  if (options.version) {
    const pkg = JSON.parse(await readFile(path.join(packageRoot, 'package.json'), 'utf8'));
    console.log(pkg.version);
    return;
  }
  if (options.help || positional.length === 0) {
    console.log(USAGE);
    return;
  }
  if (options.unknown) {
    console.error(`bullframe: unknown option "${options.unknown}"\n`);
    console.log(USAGE);
    process.exit(2);
  }

  const [group, command] = positional;
  if (group !== 'skills') {
    console.error(`bullframe: unknown command "${group}"\n`);
    console.log(USAGE);
    process.exit(2);
  }

  if (command === 'list') return listSkills();
  if (command === 'install') return installSkills(options);
  if (command === 'path') {
    console.log(skillsDir);
    return;
  }

  console.error(`bullframe: unknown subcommand "${command ?? ''}"\n`);
  console.log(USAGE);
  process.exit(2);
}

main().catch((error) => fail(error.message));
