# Agent skills

Bullframe ships agent skills: Markdown files that teach an AI coding agent to build with the framework. They come with the npm package and install as local files, with no server, network call or API key.

## Install

```bash
npm install bullframe.css
npx bullframe.css skills install
```

The default install writes:

- `bullframe-skills/`: every skill, plus `_shared/`, `api.json` and `index.json`.
- A managed block in `AGENTS.md`, between `<!-- bullframe:skills:start -->` and `<!-- bullframe:skills:end -->`, with the framework rules and a skill index. Re-running replaces that block and overwrites the copied skill files.

When a tool directory already exists in the project, the install also writes that tool's layout:

| Directory found | Layout written    | Read by             |
| --------------- | ----------------- | ------------------- |
| `.claude`       | `.claude/skills/` | Claude Code, Cursor |
| `.agents`       | `.agents/skills/` | Codex, Cursor       |
| `.cursor`       | `.agents/skills/` | Codex, Cursor       |

## Options

```bash
npx bullframe.css skills install --target claude
npx bullframe.css skills install --target codex
npx bullframe.css skills install --target cursor
npx bullframe.css skills install --target agents
npx bullframe.css skills install --target dir --dir <path>
npx bullframe.css skills install --dry-run
npx bullframe.css skills list
npx bullframe.css skills path
```

| Option or command | Effect                                                                         |
| ----------------- | ------------------------------------------------------------------------------ |
| `--target <list>` | Comma-separated: `claude`, `codex`, `cursor`, `agents`, `dir`. Skips detection |
| `--target cursor` | Same as `codex`: writes `.agents/skills/`                                      |
| `--target agents` | `AGENTS.md` block plus the local copy only                                     |
| `--dir <path>`    | Folder for the `dir` and `agents` copies. Default: `bullframe-skills`          |
| `--dry-run`       | Prints the plan and writes nothing                                             |
| `skills list`     | Lists the packaged skills                                                      |
| `skills path`     | Prints the packaged skills folder                                              |

## The skills

| Skill                    | Covers                                                         |
| ------------------------ | -------------------------------------------------------------- |
| `bullframe-core`         | Build selection, page scaffold, token theming, the conventions |
| `bullframe-landing-page` | Hero, feature rows, pricing, calls to action                   |
| `bullframe-forms`        | Labelled, typed, autocompleted, accessible forms               |
| `bullframe-docs-page`    | Prose pages on the classless builds                            |
| `bullframe-convert`      | Moving existing HTML and CSS onto Bullframe                    |
| `bullframe-theming`      | Token overrides, dark/system builds, short project CSS         |
| `bullframe-media`        | Albums, embeds, figures, media grids and filters               |
| `bullframe-components`   | Nav, breadcrumbs, pagination, cards, native `<dialog>` modals  |

Each skill declares the framework range it was validated against, the builds it applies to, and the docs pages it draws on.

## Without npm

The same files are published on this site:

- [skills/index.json](https://bullframecss.marcopontili.com/skills/index.json)
- [api.json](https://bullframecss.marcopontili.com/api.json): every `.bf-*` class, every `--bf-*` token with its default, and the seven builds, generated from `src/css/`

Any docs page is also Markdown: append `.md` to the path, or send `Accept: text/markdown`. See [llms.txt](https://bullframecss.marcopontili.com/llms.txt).

## How they stay correct

Skills are generated and tested with the CSS. CI fails if a skill, a shared reference or a docs code block names a class or token missing from `src/css/`, and every HTML example in a skill is validated with the project's accessibility rules. Skills version with the framework: one tag, one changelog, one package.
