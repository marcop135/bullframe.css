/* Builds the publishable agent-skill payload.
 *
 *   src/skills/**            → dist/skills/**            (copied verbatim)
 *   src/css/**               → dist/skills/api.json      (generated surface)
 *   skills + _shared         → dist/skills/index.json    (manifest)
 *   _shared/conventions.md   → dist/skills/AGENTS.bullframe.md (block body for AGENTS.md)
 *
 * dist/skills/ is committed and published; bin/bullframe.mjs reads it at runtime and
 * imports nothing from scripts/, which never ships.
 *
 * Run with: `npm run skills:build`, or `--out <dir>` to build somewhere else (the
 * staleness test uses that so it never disturbs the committed payload).
 */
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { readCssApi, toApiJson, repoRoot } from './lib/css-api.mjs';
import { readSkills, readShared, skillsRoot, sharedDirName } from './lib/skills.mjs';

const outFlag = process.argv.indexOf('--out');
const outDir =
  outFlag === -1
    ? path.join(repoRoot, 'dist', 'skills')
    : path.resolve(repoRoot, process.argv[outFlag + 1] ?? '');
const homepage = 'https://bullframecss.marcopontili.com';

function buildIndex(skills, shared, version) {
  return {
    name: 'bullframe.css',
    version,
    docs: homepage,
    api: 'api.json',
    agentsBlock: 'AGENTS.bullframe.md',
    shared: shared.map((s) => `${sharedDirName}/${s.file}`),
    skills: skills.map((skill) => ({
      name: skill.data.name,
      description: skill.data.description,
      path: `${skill.dir}/SKILL.md`,
      bullframe: skill.data.bullframe,
      builds: skill.data.builds,
      requires: skill.data.requires,
      docs: (skill.data.docs ?? []).map((slug) => `${homepage}${slug}`),
      files: skill.files,
    })),
  };
}

/** The AGENTS.md body: the marked section of conventions.md plus a skill index. */
function buildAgentsBlock(shared, skills) {
  const conventions = shared.find((s) => s.file === 'conventions.md');
  if (!conventions) throw new Error('src/skills/_shared/conventions.md is required');

  const match = conventions.text.match(
    /<!--\s*agents:start\s*-->([\s\S]*?)<!--\s*agents:end\s*-->/
  );
  if (!match) throw new Error('conventions.md is missing its agents:start / agents:end markers');

  const lines = [match[1].trim(), '', '### Skills'];
  for (const skill of skills) {
    lines.push(`- \`${skill.data.name}\`: ${skill.data.description}`);
  }
  lines.push('', 'Local copies of these skills are in `bullframe-skills/`.');
  lines.push(
    `Published copies: <${homepage}/skills/index.json>. Refresh with \`npx bullframe.css skills install\`.`
  );

  return `${lines.join('\n')}\n`;
}

const css = readCssApi();
const skills = readSkills();
const shared = readShared();

const missing = skills.filter((s) => s.error);
if (missing.length) {
  console.error(`[skills] ${missing.map((s) => `${s.dir}: ${s.error}`).join(', ')}`);
  process.exit(1);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const skill of skills) {
  await cp(skill.path, path.join(outDir, skill.dir), { recursive: true });
}
await cp(path.join(skillsRoot, sharedDirName), path.join(outDir, sharedDirName), {
  recursive: true,
});

const api = toApiJson(css, { docs: homepage });
await writeFile(path.join(outDir, 'api.json'), `${JSON.stringify(api, null, 2)}\n`, 'utf8');

const index = buildIndex(skills, shared, css.version);
await writeFile(path.join(outDir, 'index.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8');

await writeFile(
  path.join(outDir, 'AGENTS.bullframe.md'),
  buildAgentsBlock(shared, skills),
  'utf8'
);

// `--snapshot` refreshes the committed golden files, so a change to the generated
// surface always shows up as a reviewable diff rather than a silent drift.
if (process.argv.includes('--snapshot')) {
  const snapshotDir = path.join(repoRoot, 'tests', 'skills', '__snapshots__');
  await mkdir(snapshotDir, { recursive: true });
  await cp(path.join(outDir, 'index.json'), path.join(snapshotDir, 'index.json'));
  await cp(path.join(outDir, 'AGENTS.bullframe.md'), path.join(snapshotDir, 'agents-block.md'));
  console.log(`[skills] snapshots refreshed in ${path.relative(repoRoot, snapshotDir)}`);
}

console.log(
  `[skills] OK - ${skills.length} skills, ${api.counts.classes} classes, ${api.counts.tokens} tokens to ${path.relative(repoRoot, outDir)}`
);
