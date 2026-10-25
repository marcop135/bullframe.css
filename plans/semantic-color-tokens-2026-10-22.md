# Semantic colour tokens (breaking, zero visual change)

## Context

Colour tokens in `src/css/variables.css` are named after hues (`--bf-blue`, `--bf-gray-light`, `--bf-dark-bg`...). One hue serves several roles (`--bf-gray-light` is both button fill and border; `--bf-dark` is page text, button text and text shadow), so theming means guessing, and dark mode carries a parallel `--bf-dark-*` set. Goal: role-named `--bf-color-*` tokens across the whole codebase, old names removed (no aliases, 7.0 material). Engine-only: every build renders and computes identically before and after; the only consumer-facing change is the token names.

Rejected: a flat ~40 component-token list (breaks "override one token, links/buttons/focus follow" and scoped overrides); moving dark mode fully into `:root` overrides with element rules deleted (light and dark selector sets differ, e.g. dark styles `[type=range]` and aria-disabled focus, so deleting rules changes the cascade).

## Assumptions tested

| Assumption                                                             | Check                                                                                         | Result                                                                                                               | Consequence                                                                                                                             |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Hue tokens only used via `var()` in `src/css`, consumers, docs, skills | `git grep -noE -- '--bf-(white\|light\|gray\|dark\|black\|yellow\|orange\|blue\|red)[a-z-]*'` | 185 refs outside `src/css` across docs, examples, kitchen sink, skills, `scripts/generate-kitchen-sink-variants.mjs` | All in scope; mapping per use site, not global replace                                                                                  |
| Every colour use maps to one role                                      | per-file grep of each token with selector context                                             | `--bf-white`, `--bf-gray`, `--bf-gray-light`, `--bf-dark`, `--bf-gray-dark` each serve 2-4 roles                     | Split per role (table below)                                                                                                            |
| Dark sheets only re-declare colours already declared in light          | read `_utility-global-dark-elements.css` vs `forms/styling.css`, `normalization.css`          | Dark adds `color` on fields, styles `[type=range]`, covers `:active` and aria-disabled focus that light excludes     | Keep every dark rule and selector; re-point values to tokens                                                                            |
| A token can flip in dark on `:root` without side effects               | for each flipped token, compare its light use sites against dark selectors                    | Safe for all listed below except the radio/checkbox half of the field focus rule                                     | Split that `:where()` rule; radio/checkbox keep primary + literal ring                                                                  |
| `dist/` is committed only at release cuts                              | `git log --format='%h %s' -8 -- dist`                                                         | Only `chore(release)` commits                                                                                        | Never commit `dist/`; `git restore dist` after verification builds                                                                      |
| Kitchen sink can switch all builds                                     | `src/docs/kitchen-sink/index.html` `#bullframe-css` + build `<option>`s                       | 6 builds; utilities is add-on                                                                                        | Harness swaps via request routing; utilities = default + utilities sheet                                                                |
| Variants are not synced to `docs/public`                               | `ls docs/.vitepress/dist/kitchen-sink`                                                        | no `variants/`                                                                                                       | Harness copies `src/docs/kitchen-sink/variants` into both snapshots                                                                     |
| `getComputedStyle` enumerates custom properties in Chrome              | baseline run design                                                                           | yes                                                                                                                  | Harness drops `--*` before hashing                                                                                                      |
| CDP `forcePseudoState` per element is fast enough                      | first baseline run                                                                            | 9 screenshots in several minutes                                                                                     | Replaced by CSSOM cloning of `:hover/:focus/:focus-visible/:active` rules to a class forced on all elements; hashed styles; 6-page pool |
| Repo plan location                                                     | `ls docs`, `docs/.vitepress/chapters.mjs` `excludeDirs = ['public']`                          | No plan convention; any `docs/**/*.md` becomes a published page                                                      | Save plan at repo root `plans/semantic-color-tokens-2026-10-22.md` (outside docs, outside npm `files`)                                  |
| Attribution stripper                                                   | `ls scripts`                                                                                  | none                                                                                                                 | Check PR commits/body manually                                                                                                          |

## Token model

**Base roles** on `:root` in `variables.css` (light values):

| Token                                               | Value                             | Replaces (role)                              |
| --------------------------------------------------- | --------------------------------- | -------------------------------------------- |
| `--bf-color-bg`                                     | 255 255 255                       | `--bf-white` page/dialog bg                  |
| `--bf-color-text`                                   | 34 34 34                          | `--bf-dark` page/dialog text                 |
| `--bf-color-text-muted`                             | 153 153 153                       | `--bf-gray` text                             |
| `--bf-color-text-subtle`                            | 102 102 102                       | `--bf-gray-dark` secondary text (consumers)  |
| `--bf-color-text-shadow`                            | 34 34 34                          | `--bf-dark` in `.bf-t-shadow`                |
| `--bf-color-contrast`                               | 0 0 0                             | `--bf-black`                                 |
| `--bf-color-surface`                                | 233 233 233                       | `--bf-gray-light-extra` surfaces (consumers) |
| `--bf-color-border` / `-border-strong`              | 204 / 102                         | `--bf-gray-light` / `--bf-gray-dark` borders |
| `--bf-color-overlay-bg`                             | 255 255 255                       | skip-link bg                                 |
| `--bf-color-caption`                                | 153 153 153                       | caption                                      |
| `--bf-color-primary` / `-hover` / `-subtle`         | 0 86 179 / 0 65 135 / 190 216 254 | `--bf-blue*`                                 |
| `--bf-color-primary-focus-shadow`                   | 0 65 135 / 35%                    | literal                                      |
| `--bf-color-on-primary`                             | 255 255 255                       | `--bf-white` on primary                      |
| `--bf-color-neutral` / `-hover` / `on-neutral`      | 204 / 184 / 34                    | button fills (literal 184), button text      |
| `--bf-color-button-focus-shadow`                    | 0 0 0 / 15%                       | literal                                      |
| `--bf-color-field-bg` / `-border` / `-focus-shadow` | 255 / 153 / 0 86 179 25%          | fields                                       |
| `--bf-color-placeholder`                            | 102 102 102                       | placeholder                                  |
| `--bf-color-control-bg` / `-border`                 | 255 / 153                         | radio, checkbox, range ring, `.bf-disabled`  |
| `--bf-color-range-track` / `progress-track`         | 233 / 204                         | range, progress                              |
| `--bf-color-highlight` / `-subtle`                  | 255 255 0 / 255 255 153           | mark / ins                                   |
| `--bf-color-danger`                                 | 255 0 0                           | `--bf-red`                                   |
| `--bf-color-table-border` / `-stripe`               | 153 / 233                         | `.bf-table`                                  |
| `--bf-focus-ring-color`                             | 255 165 0                         | absorbs `--bf-orange`; name unchanged        |

**Hooks** (undeclared in light, read with fallback so scoped `--bf-color-primary` overrides still reach them): `--bf-color-link` → primary, `--bf-color-link-hover` → primary-hover, `--bf-color-field-border-focus` → primary.

**Dark** (`:root` block at top of `_utility-global-dark-elements.css`, inherits the existing import wrapping, so `prefers-color-scheme` builds get it inside the media query): bg 28, text 240, link/link-hover 77 165 255, caption 204, highlight 230 230 0, highlight-subtle 255 255 200, field-bg 17, field-border 0, field-text 204 (dark-only), field-border-focus 26 140 255, field-focus-shadow 3 102 214 / 50%, placeholder 153, range-track 17, progress-track 51, button-focus-shadow 255 255 255 / 45%, primary-focus-shadow 190 216 254 / 75%, danger 255 38 38, table-border 102, table-stripe 51, scrollbar-track/thumb/thumb-hover 17/97/115. All `--bf-dark-*` removed.

## Changes

Implemented on `feat/semantic-color-tokens` (uncommitted, verification pending):

1. `src/css/variables.css`: base roles above.
2. Partials (`forms/`, `miscellaneous/`, `typography/`, `utilities/`): line-scoped renames by role; literals 184, 0 0 0 15%, 0 65 135 35%, 0 86 179 25% (fields) tokenised; `forms/styling.css` focus rule split into fields and radio/checkbox.
3. Dark sheets (`_utility-global-dark-elements.css`, `_utility-global-dark-shared.css`, `utility-global-dark.css`, `utilities/global-dark-scrollbars.css`): `:root` dark block; every rule and selector kept, values re-pointed. `utility-global-dark-classless.css` untouched (no tokens).
4. Consumers: kitchen sink (`index.html`, `variants/b-sidebar.html`, `css/style.css`), `scripts/generate-kitchen-sink-variants.mjs`, `src/docs/examples/**`. Mapped to the role that resolves to the same value in that page's scheme; dark-only greys in `blog-dark`/`sign-in-dark` become literals (`rgb(204 204 204)`, `rgb(51 51 51)`, already their fallbacks). `branded/custom.css` scope overrides every role the old hue fed (`text`, `on-neutral`, `text-shadow`, `placeholder`, `neutral`, `border`, `progress-track`, `primary*`), its own tint becomes `--ex-branded-tint`.

Remaining: 5. `src/skills/**` (SKILL.md for core, theming, landing-page; HTML examples), same mapping. 6. Docs: `docs/variables.md` (base, hook, dark tables), `theming/customization.md`, `theming/dark-mode.md`, `api-reference.md`, `accessibility.md`, `typography.md`, `components/cards.md`, `components/navigation.md`, comment in `docs/.vitepress/theme/custom.css`. 7. `docs/migration.md`: 6.x to 7.0 section, old-to-new table (split roles listed with every replacement). 8. `CHANGELOG.md` Unreleased: `Changed` (BREAKING rename), `Removed` (hue and `--bf-dark-*` tokens). No version bump.

## Files

Critical: `src/css/variables.css`, `src/css/_utility-global-dark-elements.css`, `src/css/forms/styling.css`, `src/docs/examples/branded/custom.css`, `docs/variables.md`, `docs/migration.md`. New: `plans/semantic-color-tokens-2026-10-22.md`. Scratch (not committed): `harness.mjs`, `fixture.html` in the session scratchpad.

## Verification

- Baseline: `npm run docs:build` on `develop` sources (done), `docs/.vitepress/dist` + kitchen-sink variants + consumer fixture copied to scratchpad `base-site`; `git checkout docs/public/sri.json` after.
- After: same build from the branch into `after-site`, fixture with migrated token names.
- Harness (`node harness.mjs capture <site> <out> <port>` then `compare`): kitchen sink + 3 variants + fixture × 7 builds, all 15 examples; Chromium at 1280 and 390 × light, dark, contrast-more dark, forced-colors; Firefox light and dark. Pass = 0 byte-different screenshots, 0 differing computed-style hashes (all standard properties, every element and pseudo-element), 0 differing state hashes (`hover`, `focus`, `focus-visible`, `active`). Any diff: `node harness.mjs detail ...`, fix the token map, rerun. Baselines never updated.
- `npm run lint`, `npm run lint:html`, `npm run format:check`, `npm run build`, `npm run docs:build`, `npm run test:e2e` pass.
- `git grep` for old names hits only `docs/migration.md` and `CHANGELOG.md`; `git status` shows no `dist/` or `docs/public/` changes.

## Delivery

- Commit plan + implementation on `feat/semantic-color-tokens`, push, `gh pr create --base develop --draft` (draft until the harness reports zero diffs), body: one-line summary + bullets (BREAKING, changes, verification status). No agent attribution.
- Print the direct link `https://github.com/marcop135/bullframe.css/blob/feat/semantic-color-tokens/plans/semantic-color-tokens-2026-10-22.md` and the PR URL.
- `git switch develop` afterwards; work continues on the branch when resumed.
