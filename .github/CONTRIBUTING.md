# Contributing to bullframe.css

Thanks for helping improve Bullframe CSS.

## Branches

- Branch off **`develop`** and open pull requests **into `develop`**.
- Prefer focused branches (`fix/…`, `docs/…`, `chore/…`).
- `main` is the release branch. Maintainers merge `develop` into `main` at release time; a push to `main` deploys the docs.

## Issues and bugs

Use [GitHub Issues](https://github.com/marcop135/bullframe.css/issues). Include steps to reproduce, expected vs actual behavior, and browser / OS.

For CSS bugs, prefer a [reduced test case](https://css-tricks.com/reduced-test-cases/) on CodePen. Collection: https://codepen.io/collection/nxpjRe

## Pull requests

1. Fork, clone, and branch from the latest `develop`.
2. Match existing CSS / docs style (Prettier + Stylelint).
3. Run before push:
   - `npm run lint`
   - `npm run lint:html`
   - `npm run format:check`
   - `npm run build`
   - `npm run docs:build` and `npm run test:e2e` when docs or visuals change
4. Keep commits and the PR description clear; link related issues.
5. Do not include agent / Cursor attribution in commits or PR bodies.

## Stack notes

- Native CSS + PostCSS (no Sass).
- Seven builds stay (no `bullframe-modern.css`).
- Builds target Browserslist `defaults`; progressive enhancements use `@supports`.

## Docs deploy (maintainers)

Workflow: [`.github/workflows/deploy-docs.yaml`](../.github/workflows/deploy-docs.yaml) (FTPS, same action pattern as [md2pdf](https://github.com/marcop135/md2pdf)).

Add these **repository Actions secrets** in the GitHub UI (do not commit values):

| Secret | Purpose |
| ---------------------------- | ------------------------- |
| `FTP_HOST` | FTPS server hostname (must match TLS cert CN/SAN) |
| `FTP_USERNAME_PRODUCTION` | FTPS username |
| `FTP_PASSWORD_PRODUCTION` | FTPS password |

After secrets exist, push to `main` or run **Deploy docs** via `workflow_dispatch`.

## Releases (maintainers)

1. On `develop`: update `CHANGELOG.md` (Keep a Changelog) and the `package.json` version.
2. Run `npm run docs:build`. This rebuilds `dist/`, then `docs:sri` rewrites `docs/public/sri.json` and re-pins the versioned CDN + SRI snippets in `docs/getting-started.md`, `docs/theming.md` and `docs/theming/dark-mode.md`. Commit the result.
3. Update the version strings no script patches: the self-host archive link in `docs/getting-started.md` and the `?v<major>` cache-buster in `src/docs/kitchen-sink/` (major releases only).
4. Open the release PR `develop` into `main` and merge it.
5. Create a GitHub Release / tag (`vX.Y.Z`) on `main`. `publish.yml` fires on `release: published` and runs `npm publish --provenance` with `NPM_TOKEN`.
6. Confirm the docs deploy triggered by the push to `main`, then delete merged branches. Keep `develop`.

## License

By submitting a patch, you agree to license your work under the same MIT license as the project.
