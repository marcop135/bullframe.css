---
name: bullframe-convert
description: Convert existing HTML and CSS to Bullframe CSS. Use when migrating a page off Bootstrap, Tailwind, a hand-rolled stylesheet, or an older Bullframe version, and when asked to remove custom CSS in favour of the framework.
bullframe: '>=6.1.0 <7.0.0'
builds: [bullframe.css, bullframe-classless.css, bullframe-utilities.css]
requires: [bullframe-core]
docs: ['/migration', '/utilities', '/api-reference']
---

# Convert to Bullframe

<!-- bf-absent: bf-d-flex, bf-mt-3, bf-text-center, bf-card, bf-btn-primary, bf-col-md-6 -->

This is advisory work, not a codemod. Read the source, rewrite the markup, and report
what could not be mapped. Never run a blind find and replace: class names from other
frameworks look similar to Bullframe's and are not the same.

## When to use

Migrating a page or component onto Bullframe, stripping custom CSS that the framework
already covers, or upgrading markup from Bullframe v5.

## Inputs to gather

The HTML, the stylesheet that styles it, which framework it uses today, the target build,
and how aggressive to be: replace the reset only, or convert the whole page.

## Rules

1. Work in four passes, in order: base styles, layout, utilities, leftovers.
2. Pass 1, base. Delete the reset, normalize and base typography rules; link one
   Bullframe build instead. Most of the deleted CSS is now element styling.
3. Pass 2, layout. Map the page's container and grid onto `.bf-container`
   (`--fluid`, `--break-xs|md|lg`), `.bf-row` and `.bf-col-1` … `.bf-col-12`. Per-breakpoint
   column classes have no equivalent: collapse them to the desktop span and put the
   breakpoint on the container.
4. Pass 3, utilities. Map declaration by declaration against `api.json`. Never guess a
   name from the source framework.
5. Pass 4, leftovers. Anything with no equivalent stays as project CSS. List it. Do not
   silently drop a rule.
6. Upgrade the markup while you are there: a `<div class="header">` becomes `<header>`,
   `<div class="card-title">` becomes a heading, a clickable `<div>` becomes a `<button>`
   or `<a>`.
7. Preserve every accessibility attribute: `alt`, `aria-*`, `for`, `id`, `lang`,
   `scope`, `tabindex`. Add the skip link if the page lacks one.
8. Output the converted file plus a mapping table and a residual list. The user needs to
   see what moved and what stayed.

## Name mapping

Common false friends. The left column does not exist in Bullframe.

| Source                          | Bullframe                                         |
| ------------------------------- | ------------------------------------------------- |
| `container`, `container-fluid`  | `bf-container`, `bf-container--fluid`             |
| `row`, `col-md-6`               | `bf-row`, `bf-col-6` + `bf-container--break-md`   |
| `d-flex`, `justify-content-end` | `bf-display-flex`, `bf-display-flex--justify-end` |
| `mt-3`, `mb-4`                  | `bf-m-t-3`, `bf-m-b-4`                            |
| `p-3`                           | `bf-p-3` (padding-bottom) or `bf-p-t-3`           |
| `text-center`, `text-start`     | `bf-t-center`, `bf-t-left`                        |
| `fw-bold`, `font-weight-bold`   | `bf-t-weight-700`                                 |
| `text-truncate`                 | `bf-t-truncate`                                   |
| `btn btn-primary`               | `bf-btn bf-btn--primary`                          |
| `table table-striped`           | `bf-table bf-table--zebra`                        |
| `visually-hidden`, `sr-only`    | `bf-sr-only`                                      |
| `card`, `card-body`             | no equivalent: compose `<article>` with tokens    |
| `badge`, `alert`, `navbar`      | no equivalent: semantic markup plus tokens        |

Spacing steps do not translate by number. Bullframe's `1` … `4` are `0.5rem`, `1rem`,
`2rem`, `3rem`, and the unsuffixed `.bf-m-N` sets `margin-bottom` only.

## Recipe

1. Inventory: list every class in the source and every rule in its stylesheet.
2. Decide the target build.
3. Convert the markup pass by pass.
4. Diff the result against the original visually, not just structurally.
5. Emit: converted file, mapping table, residual CSS with a one-line reason for each rule
   that stayed, and a count of removed declarations.

## Example

[`examples/before.html`](examples/before.html) is a `div`-heavy page on a custom
stylesheet. [`examples/after.html`](examples/after.html) is the same page converted: two
stylesheets replaced by one, `div` wrappers replaced by landmarks, card titles promoted to
headings, inline footer styling replaced by `.bf-t-center` and `<small>`.

## Expected output

The converted markup, plus the mapping table and the residual list. The converted page
must validate and must reference only classes present in `api.json`.

## Failure modes

- Mechanical prefixing: `mt-3` becoming `bf-mt-3`, `d-flex` becoming `bf-d-flex`,
  `text-center` becoming `bf-text-center`. All three are wrong.
- Keeping per-breakpoint column classes with a `bf-` prefix.
- Dropping rules that had no mapping instead of reporting them.
- Losing `aria-*`, `alt` or `for` attributes during the rewrite.
- Linking Bullframe while leaving the old framework's stylesheet in place.
- Converting a page that only needed the utilities build, and rewriting its base styles
  for no reason.
- Treating a `.bf-m-N` class as all-sides margin.

## Do not

- Do not run a regex replace over class attributes.
- Do not rewrite the project's own component CSS that Bullframe does not cover.
- Do not change copy, structure or behaviour while converting styles.
- Do not delete a rule you cannot explain.

## Canonical docs

- Migration from v5: <https://bullframecss.marcopontili.com/migration.md>
- Utilities overview: <https://bullframecss.marcopontili.com/utilities.md>
- API reference: <https://bullframecss.marcopontili.com/api-reference.md>
- Every class and token as JSON: <https://bullframecss.marcopontili.com/api.json>
