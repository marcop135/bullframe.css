# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.2.2] - 2026-10-02

### Changed

- README, OG, and social images use the shared repo-brand kit.

### Removed

- HTML-scene brand image generator.

### Fixed

- Built CSS banners, the skills index, and docs CDN + SRI snippets report 6.2.2.

### Security

- Docs site: CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, COOP.

## [6.2.1] - 2026-09-29

### Changed

- Shorter README install, CDN, and agent skills sections.
- Renamed docs "AI skills" to "agent skills" (`/agent-skills`; `/ai-skills` redirects).
- Docs `color-scheme` (meta + CSS pins on `html` / `html.dark`, synced with the appearance toggle) and light/dark `theme-color`.

### Fixed

- Docs deploys reach returning visitors without a hard refresh.
- Docs edit links and API source links pointed at a deleted `v6` branch.
- Leftover legacy CSS files no longer linger in the docs public tree.

## [6.2.0] - 2026-09-29

### Added

- AI agent skills: `bullframe-core`, `bullframe-landing-page`, `bullframe-forms`, `bullframe-docs-page`, `bullframe-convert`; `npx bullframe.css skills install` (Claude, Cursor, Codex).
- Generated `api.json` (`.bf-*` classes, `--bf-*` tokens) in the package and at `/api.json`.
- AI skills docs page; docs site 404 page.
- `npm run test:e2e:sync-from-ci` to copy Playwright linux baselines from a CI run artifact.

### Changed

- npm publish is manual from the release tag; **Publish to npm** is `workflow_dispatch` only (no `release: published` trigger).

### Fixed

- Non-existent classes in Grid, Cards, Spacing, and Text docs.
- Wrong v6 token names in the migration guide.

### Security

- Explicit `permissions: contents: read` on CI, Deploy docs, and Skills eval workflows.

## [6.1.0] - 2026-09-14

### Added

- CSS variables `--bf-focus-ring-color`, `--bf-focus-ring-width`, `--bf-focus-ring-offset`.
- `.bf-skip-link`, `.bf-focusable`, `.bf-scheme-*`, `.bf-target-size`, `.bf-accent-native`.
- `@supports` for `text-wrap: balance` and `scrollbar-gutter: stable`.

### Changed

- README: install, CDN, examples; unversioned CDN (docs stay pinned + SRI).
- README, hero, OG, and social preview images regenerated from one source (`npm run brand:images`).

### Removed

- Dead UA+ rules that never applied inside `@layer`.

### Fixed

- `caption` and `progress` in classless always-dark.
- Accessibility markup in the kitchen sink and examples.
- Docs site cache headers, so a new release reaches returning visitors.

## [6.0.0] - 2026-07-31 - BREAKING CHANGES

### Added

- Brand identity for docs and README: mascot and logo mark, favicon variants, hero illustrations, and OG/social imagery.
- Opt-in font-smoothing, reduced-motion utilities, stronger focus / ARIA defaults.
- Progressive `@supports` gates for range, `:has()` label layout, and dialog enter.

### Changed

- Replaced Sass with native CSS and PostCSS (`--bf-*` tokens). See [Migration](docs/migration.md).
- Unified class-based, classless, dark, and system-default builds on one token set.
- Darkened link and button blues for WCAG AA contrast.
- Replaced the [docs site](https://bullframecss.marcopontili.com/) with VitePress; kitchen sink at `/kitchen-sink/`.
- Documented browser support against Browserslist `defaults`.

### Removed

- Sass sources and the Sass build path.
- Standalone `*-dark-prefers` and helper dist entries (`variables*`, `utility-global-dark*`); dark/system behavior lives in the seven builds.
- `bullframe-modern.css` and the `bullframe.css/modern` export.
- Legacy IE / Edge hacks.

### Fixed

- Dialog min-width on narrow viewports, reduced-motion fades, backdrop color, gated transition APIs.

## 5.1.0 - (July 08, 2025)

## 5.0.1 - (July 07, 2025)

## 5.0.0 (July 07, 2025) - BREAKING CHANGES

## 4.2.2 (May 28, 2025)

## 4.2.1 (April 26, 2025)

## 4.2.0 (April 14, 2025)

## 4.1.2 (February 23, 2024)

## 4.1.1 (August 31, 2023)

## 4.1.0 (August 30, 2023)

## 4.0.1 (August 12, 2022)

## 4.0.0 (August 11, 2022) - BREAKING CHANGES

## 3.8.2 (June 26, 2021)

## 3.8.1 (June 22, 2021)

## 3.8.0 (June 22, 2021) - BREAKING CHANGES

## 3.7.0 (April 24, 2021) - BREAKING CHANGES

## 3.6.0 (March 16, 2021)

## 3.5.0 (February 09, 2021)

## 3.4.5 (February 08, 2021)

## 3.4.4 (February 04, 2021)

## 3.4.3 (January 28, 2021)

## 3.4.2 (January 27, 2021)

## 3.4.1 (January 24, 2021)

## 3.4.0 (January 24, 2021)

## 3.3.9 (November 29, 2020)

## 3.3.8 (November 29, 2020)

## 3.3.7 (November 27, 2020)

## 3.3.6 (November 20, 2020)

## 3.3.5 (September 27, 2020)

## 3.3.4 (September 03, 2020)

## 3.3.3 (July 22, 2020)

## 3.3.2 (July 22, 2020)

## 3.3.1 (July 22, 2020)

## 3.3.0 (July 09, 2020)

## 3.2.0 (June 16, 2020)

## 3.1.0 (May 06, 2020)

## 3.0.2 (March 20, 2020)

## 3.0.1 (March 06, 2020)

## 3.0.0 (18 May 2020)

## 2.9.0 (13 April 2020)

## 2.8.2 (09 April 2020)

## 2.8.1 (03 April 2020)

## 2.8.0 (22 March 2020)

## 2.7.0 (17 March 2020)

## 2.6.3 (13 March 2020)

## 2.6.2 (11 March 2020)

## 2.6.1 (04 March 2020)

## 2.6.0 (29 February 2020)

## 2.5.0 (22 February 2020)

## 2.4.0 (19 February 2020)

## 2.3.0 (14 February 2020)

## 2.2.0 (09 February 2020)

## 2.1.0 (04 February 2020)

## 2.0.0 (28 January 2020)

## 1.6.3 (31 January 2014)

## 1.6.2 (29 December 2013)

## 1.6.1 (27 December 2013)

## 1.6.0 (05 December 2013)

## 1.5.2 (21 October 2013)

## 1.5.1 (07 October 2013)

## 1.5.0 (13 September 2013)

## 1.4.3 (01 August 2013)

## 1.4.2 (04 July 2013)

## 1.4.1 (07 June 2013)

## 1.4.0 (30 May 2013)

## 1.3.2 (17 May 2013)

## 1.3.1 (14 May 2013)

## 1.3.0 (07 May 2013)

## 1.2.0 (26 April 2013)

## 1.1.2 (21 March 2013)

## 1.1.1 (20 March 2013)

## 1.1.0 (19 March 2013)

## 1.0.2 (12 March 2013)

## 1.0.1 (12 March 2013)

## 1.0.0 (19 February 2013)
