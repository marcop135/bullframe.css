# Contributing to bullframe.css

Thanks for helping improve Bullframe CSS.

## Branches

- **v6 work:** branch off `v6` and open pull requests **into `v6`**.
- **`main`:** published / stable line until v6 is released. Do not use `main` for v6 final-pass changes unless a maintainer asks.
- Prefer focused branches (`fix/…`, `docs/…`, `chore/…`).

## Issues and bugs

Use [GitHub Issues](https://github.com/marcop135/bullframe.css/issues). Include steps to reproduce, expected vs actual behavior, and browser / OS.

For CSS bugs, prefer a [reduced test case](https://css-tricks.com/reduced-test-cases/) on CodePen. Collection: https://codepen.io/collection/nxpjRe

## Pull requests

1. Fork, clone, and branch from the latest `v6` (for v6 work).
2. Match existing CSS / docs style (Prettier + Stylelint).
3. Run before push:
   - `npm run lint`
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

After secrets exist, push to `v6` / `main` or run **Deploy docs** via `workflow_dispatch`.

## Releases (maintainers)

1. Update `CHANGELOG.md` (Keep a Changelog) and `package.json` version.
2. Create a GitHub Release / tag (`vX.Y.Z`).
3. Publish to npm with `NPM_TOKEN` configured for the publish workflow or local `npm publish` as documented for the release.

## License

By submitting a patch, you agree to license your work under the same MIT license as the project.
