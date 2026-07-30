# AGENTS.md

Entry point for AI agents in this repository. Detailed maintainer rules live in [`CLAUDE.md`](CLAUDE.md).

**Playbook:** [Cursor CLI playbook](https://github.com/marcop135/dotfiles/blob/main/docs/cursor-cli-playbook.md).

## Stack

Native **CSS + PostCSS** (no Sass). Eight builds via Vite. Docs: **VitePress**. Visual regression: Playwright. Live docs: FTPS to Netsons.

## Build / test

| Command | Purpose |
| ----------------------- | -------------------------------- |
| `npm run build` | Compile eight CSS builds to `dist/css/` |
| `npm run lint` | Stylelint on `src/css/**/*.css` |
| `npm run lint:html` | html-validate on `src/**/*.html` |
| `npm run format:check` | Prettier check |
| `npm run docs:dev` | VitePress local docs (syncs demo first) |
| `npm run docs:build` | Framework build + VitePress production |
| `npm run test:e2e` | Playwright visual tests |

Keep `bullframe-modern.css`. Do not remove the modern build.

## Git

- Active work targets **`v6`**. Open PRs into `v6`. Do not touch `main` unless the maintainer asks.
- `main` remains the published/stable line until v6 is cut and published.
- Push to `v6` / `main` triggers [Deploy docs](.github/workflows/deploy-docs.yaml) (needs FTP secrets).
- Do not force-push shared branches unless explicitly requested.
- No agent / Cursor attribution in commits or PRs.

## Do not

- Commit secrets (`.env`, credentials, FTP passwords).
- Invent `FTP_*` / `NPM_TOKEN` secret values; document names only.
- Add Sass back.
- Ship ungated modern-only APIs (`oklch`, `:has`, `@starting-style`, `light-dark`) in the seven core builds.
- Force-push `main` / `v6` unless explicitly requested.

## Cursor CLI

- Model: Composer 2.5 standard (`maxMode: false`).
- Headless: `agent -p --force` from repo root with this file and `CLAUDE.md` in context.
