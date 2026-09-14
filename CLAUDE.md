# CLAUDE.md

Guidance for Claude Code and other agents in this repository. Read once at session start; these rules override generic defaults when they conflict.

## What this project is

**Bullframe CSS** — a lightweight CSS framework for fast, accessible UIs. Semantic by default, classless when you want it, system dark built in. Seven builds, shared `--bf-*` tokens, zero runtime JS dependencies. Live docs: https://bullframecss.marcopontili.com.

Slogan: *Semantic by default. Any stack.*
Tagline: *Classless when you want it. System dark built in.*

## Stack constraints

- **Native CSS + PostCSS only.** No Sass, no CSS-in-JS runtime.
- **Seven builds** must remain: default, dark, system-default, classless (+ dark / system-default), and utilities. Do **not** add `bullframe-modern.css`.
- **Classless builds** are element styles only. They must not ship `.bf-*` classes (no a11y helpers, no utilities). Those live on class-based and utilities builds.
- Builds target Browserslist `defaults`. Gate progressive enhancements with `@supports` / `prefers-reduced-motion`.
- **Accessibility:** keep focus-visible rings, reduced-motion respect, and WCAG AA contrast on default link/button blues unless intentionally overriding via tokens.

## Common commands

Uses **npm**. Node `>=20`.

| Command | Purpose |
| ----------------------- | -------------------------------- |
| `npm run build` | Seven CSS builds → `dist/css/` |
| `npm run lint` | Stylelint (`src/**/*.css`) |
| `npm run lint:html` | html-validate (`src/**/*.html`) |
| `npm run format` / `format:check` | Prettier |
| `npm run docs:dev` | Sync public assets, then local VitePress |
| `npm run docs:build` | Framework build + SRI patch + sync + VitePress production |
| `npm run docs:sri` | Pin CDN URLs + SRI hashes in docs (not README) |
| `npm run docs:sync-public` | Copy kitchen sink, examples, CSS into `docs/public/` |
| `npm run test:e2e` | Playwright visuals |
| `npm run test:e2e:update` | Refresh baselines (only when intentional) |
| `npm run brand:icons` | Favicons / touch icons from `src/docs/brand/logo.svg` |
| `npm run brand:images` | README, site hero, OG, social preview → PNG/JPEG |
| `npm run brand:images:check` | Fail if a committed brand image is out of date |

## Project layout

- `src/css/` — source CSS (entry files + partials; not published to npm).
- `dist/css/` — published builds (npm `files` / `exports` / jsDelivr).
- `docs/` — **VitePress site** (Markdown pages, theme, deployable `docs/public/`).
- `src/docs/` — **source assets**, not the docs site:
  - `brand/` — logo mark, favicons
  - `brand/images/` — source scene for every generated brand image (`brand:images`)
  - `examples/` — HTML templates synced to `docs/public/examples/`
  - `kitchen-sink/` — kitchen sink synced to `docs/public/kitchen-sink/`
  - `github-readme/` — README light/dark hero rasters (16:9) + GitHub social preview
- `tests/e2e/` — Playwright specs and `__screenshots__` baselines.
- `.github/workflows/ci.yml` — lint/build/e2e on `main` (and legacy `v6` while it exists).
- `.github/workflows/deploy-docs.yaml` — FTPS deploy of `docs/.vitepress/dist/` on `main`.

`docs:sync-public` is the bridge: it copies from `src/docs/` (and `dist/css/`) into `docs/public/`. Do not treat `docs/` and `src/docs/` as duplicates.

`dist/` holds CSS only. Nothing copies `src/docs/` into `dist/docs/`; if that directory reappears, it is stale output, not a source.

## Brand images

Never hand-edit a generated image. Change `src/docs/brand/images/` (`tokens.mjs` for colour and copy, `scene.mjs` for geometry, `targets.mjs` for outputs), re-run `npm run brand:images`, and commit source and output together. Post-processing a rendered PNG is what produced the soft type and the mascot fringe that this pipeline replaced.

## CDN / README

- **README** keeps the unversioned jsDelivr URL (`https://cdn.jsdelivr.net/npm/bullframe.css`). `docs:sri` must not rewrite it to a pinned SRI snippet.
- **Docs** (getting-started, theming, migration, etc.) use version-pinned CDN + SRI from `docs/public/sri.json` via `npm run docs:sri`.

## Git / branch policy

- `develop` is the integration branch. Feature work branches off **`develop`** and opens PRs **into `develop`**.
- `main` is the release branch. Only release PRs (`develop` into `main`) land there; a push to `main` deploys the docs.
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
