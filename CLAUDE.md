# CLAUDE.md

Guidance for Claude Code and other agents in this repository. Read once at session start; these rules override generic defaults when they conflict.

## What this project is

**Bullframe CSS** — a lightweight CSS framework for fast, accessible UIs. Semantic by default, classless when you want it, system dark built in. Seven builds, shared `--bf-*` tokens, zero runtime JS dependencies. Live docs: https://bullframecss.marcopontili.com.

Slogan: *Semantic by default. Any stack.*
Tagline: *Classless when you want it. System dark built in.*

## Stack constraints

- **Native CSS + PostCSS only.** No Sass, no CSS-in-JS runtime.
- **Seven builds** must remain: default, dark, system-default, classless (+ dark / system-default), and utilities. Do **not** add `bullframe-modern.css`.
- Builds target Browserslist `defaults`. Gate progressive enhancements with `@supports` / `prefers-reduced-motion`.
- **Accessibility:** keep focus-visible rings, reduced-motion respect, and WCAG AA contrast on default link/button blues unless intentionally overriding via tokens.

## Common commands

Uses **npm**. Node `>=20`.

| Command | Purpose |
| ----------------------- | -------------------------------- |
| `npm run build` | Seven CSS builds → `dist/css/` |
| `npm run lint` | Stylelint |
| `npm run lint:html` | html-validate |
| `npm run format` / `format:check` | Prettier |
| `npm run docs:dev` | Local VitePress (port from VitePress defaults) |
| `npm run docs:build` | Production docs |
| `npm run test:e2e` | Playwright visuals |
| `npm run test:e2e:update` | Refresh baselines (only when intentional) |

## Project layout

- `src/css/` — source CSS (entry files + partials).
- `dist/css/` — published builds (also listed in `package.json` `files` / `exports`).
- `docs/` — VitePress site; demo synced into `docs/public/demo/` by `docs:sync-demo`.
- `tests/e2e/` — Playwright specs and `__screenshots__` baselines.
- `.github/workflows/ci.yml` — lint/build/e2e on `v6` and `main`.
- `.github/workflows/deploy-docs.yaml` — FTPS deploy of `docs/.vitepress/dist/`.

## Git / branch policy

- Feature work for the v6 line branches off **`v6`** and opens PRs **into `v6`**.
- Do not checkout, push, merge, or open PRs against `main` for v6 final-pass work.
- No agent attribution in commits, trailers, or PR bodies.

## Deploy secrets (document only; never invent values)

Repo Actions secrets required for docs deploy (same names as md2pdf FTPS):

| Secret | Role |
| ---------------------------- | ------------------------- |
| `FTP_HOST` | FTPS host (cert CN/SAN) |
| `FTP_USERNAME_PRODUCTION` | FTPS username |
| `FTP_PASSWORD_PRODUCTION` | FTPS password |

`NPM_TOKEN` is only needed at npm publish / GitHub Release time, not for docs deploy. The maintainer adds secrets in the GitHub UI; agents must not invent or commit secret values.

## Changelog

Prefer [Keep a Changelog](https://keepachangelog.com/) sections (`Added` / `Changed` / `Deprecated` / `Removed` / `Fixed` / `Security`) for Unreleased / release notes. Point breaking Sass→CSS details at `docs/migration.md`.

## Workflow expectations

- Run `npm run lint` and `npm run build` before pushing CSS changes; add `docs:build` / `test:e2e` when docs or visuals change.
- Keep CSS comments short; one attribution block where a third-party source is adapted (for example UA+).
- CodePen collection for reduced cases: https://codepen.io/collection/nxpjRe
