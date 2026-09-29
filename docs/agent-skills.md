# Agent skills

Bullframe ships a set of agent skills: plain Markdown files that teach an AI coding agent
how to build with this framework. They are part of the npm package, they need no server
and no API key, and they work in any environment that can read a file. Install is local
files only; no network call and no Anthropic (or other) key.

## Install

```bash
npm install bullframe.css
npx bullframe.css skills install
```

That writes two things into your project:

- `bullframe-skills/`, the skill files plus `api.json`.
- A managed block in `AGENTS.md`, between `<!-- bullframe:skills:start -->` and
  `<!-- bullframe:skills:end -->`, holding the framework's rules and an index of the
  skills. Re-running replaces that block and leaves the rest of the file untouched.

When a tool directory already exists, the same command also writes that tool's layout:

| Directory | Layout written    | Tool        |
| --------- | ----------------- | ----------- |
| `.claude` | `.claude/skills/` | Claude Code |
| `.cursor` | `.cursor/skills/` | Cursor      |
| `.agents` | `.agents/skills/` | Codex       |

```bash
npx bullframe.css skills install --target claude   # Claude layout only
npx bullframe.css skills install --target cursor   # Cursor layout only
npx bullframe.css skills install --target codex    # Codex layout only (.agents/skills)
npx bullframe.css skills install --target agents   # AGENTS.md + local copy only
npx bullframe.css skills install --target dir --dir vendor/bf
npx bullframe.css skills install --dry-run         # show the plan, write nothing
npx bullframe.css skills list
```

Explicit `--target` creates the path even if the parent directory was missing.

## The skills

| Skill                    | Covers                                                         |
| ------------------------ | -------------------------------------------------------------- |
| `bullframe-core`         | Build selection, page scaffold, token theming, the conventions |
| `bullframe-landing-page` | Hero, feature rows, pricing, calls to action                   |
| `bullframe-forms`        | Labelled, typed, autocompleted, accessible forms               |
| `bullframe-docs-page`    | Prose pages on the classless builds                            |
| `bullframe-convert`      | Moving existing HTML and CSS onto Bullframe                    |

Every skill declares the framework range it was validated against, the builds it applies
to, and the docs pages it draws on.

## Without npm

The same files are published on this site:

- <https://bullframecss.marcopontili.com/skills/index.json>
- <https://bullframecss.marcopontili.com/api.json>

`api.json` is the machine-readable surface: every `.bf-*` class, every `--bf-*` token with
its default, and the seven builds. It is generated from `src/css/`, so it cannot describe
a class the framework does not have.

Any docs page is also Markdown: append `.md` to the path, or send
`Accept: text/markdown`. See [llms.txt](https://bullframecss.marcopontili.com/llms.txt).

## How they stay correct

The skills are generated and tested alongside the CSS. Continuous integration fails if a
skill, a shared reference or a docs code block names a class or token that no longer
exists in `src/css/`, and every HTML example in a skill is validated with the project's
own accessibility rules. Skills version with the framework: one tag, one changelog, one
`npm install`.
