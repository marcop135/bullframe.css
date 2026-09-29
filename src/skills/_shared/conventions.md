# Bullframe conventions

Shared reference for every Bullframe skill. The block between the `agents` markers
is what `npx bullframe.css skills install` writes into a project's `AGENTS.md`, so it
has to stand on its own for an agent that reads nothing else.

<!-- bf-absent: bf-card, bf-nav, bf-badge, bf-alert, bf-modal, bf-grid, bf-col-md-6, bf-col-lg-4 -->

<!-- agents:start -->

## Bullframe CSS

This project styles its HTML with [Bullframe CSS](https://bullframecss.marcopontili.com).
Follow these rules when writing or editing markup.

1. **One base build.** Link exactly one of the seven stylesheets. `bullframe-utilities.css`
   is the only sheet that stacks on top of another; two base builds never combine.
2. **No component classes.** Bullframe ships no `.bf-card`, `.bf-nav`, `.bf-badge`,
   `.bf-alert`, `.bf-modal`, `.bf-grid`. Cards, navs and dialogs are semantic HTML
   (`<article>`, `<nav>`, `<dialog>`) composed from utilities plus `var(--bf-*)` tokens.
3. **Never invent a class.** Every class is `.bf-`-prefixed and listed in `api.json`.
   If it is not in that file, it does not exist.
4. **No per-breakpoint columns.** `.bf-col-md-6` and `.bf-col-lg-4` do not exist.
   Columns are `.bf-col-1` … `.bf-col-12`; responsive stacking comes from
   `.bf-container--break-xs|md|lg` on the container, not from the column.
5. **Theme with tokens.** Override `--bf-*` on `:root` in your own stylesheet, loaded
   after the framework. Never edit or copy framework rules.
6. **Check for a utility before writing CSS.** Spacing `.bf-m-*` / `.bf-p-*`, text
   `.bf-t-*`, display `.bf-display-*`, width `.bf-width-*`, tables `.bf-table*`,
   lists `.bf-list-unstyled`, embeds `.bf-embed-responsive`.
7. **Skip link first.** On a class-based build, `<body>` opens with
   `<a class="bf-skip-link" href="#main-content">Skip to content</a>` and `<main>` carries
   that id.
8. **Label every control.** A `<label for>` bound to the control's `id`. A placeholder is
   never a label.
9. **Never remove focus rings.** No `outline: none`. Tune `--bf-focus-ring-color`,
   `--bf-focus-ring-width`, `--bf-focus-ring-offset`.
10. **Dark mode needs no JavaScript.** Use a `-dark` or `-system-default` build.
11. **`.bf-btn--primary` is a modifier.** It only works alongside `.bf-btn`.
12. **The root font-size is 62.5%,** so `1rem` is about `10px`. Custom CSS must size
    against that, or use the `--bf-spacing-*` tokens.

Machine-readable class and token list: `node_modules/bullframe.css/dist/skills/api.json`
or <https://bullframecss.marcopontili.com/api.json>.
Any docs page is Markdown by appending `.md`, for example
<https://bullframecss.marcopontili.com/layout.md>.

<!-- agents:end -->

## Why there are no component classes

`docs/components/cards.md` states the reasoning: every team's card differs in radius,
padding, shadow and spacing, so a single `.bf-card` would exist only to be overridden.
Patterns are documented as markup instead, under
<https://bullframecss.marcopontili.com/components/>.

The practical consequence for generated code: reach for semantic HTML first, utilities
second, a handful of inline `var(--bf-*)` declarations third, and a project stylesheet
last.

## Utility vocabulary at a glance

| Need              | Classes                                                                    |
| ----------------- | -------------------------------------------------------------------------- |
| Page width        | `.bf-container`, `.bf-container--fluid`, `.bf-container--break-xs\|md\|lg` |
| Columns           | `.bf-row`, `.bf-col-1` … `.bf-col-12`, `.bf-no-gutters`                    |
| Spacing           | `.bf-m-b-1` … `.bf-m-b-4`, `.bf-m-t-*`, `.bf-p-*`, `.bf-m-0`               |
| Text              | `.bf-lead` (on `<p>`), `.bf-t-center`, `.bf-t-weight-*`, `.bf-t-truncate`  |
| Headings by class | `.bf-h1` … `.bf-h6` (visual level without changing the tag)                |
| Buttons           | `.bf-btn`, `.bf-btn.bf-btn--primary`, `.bf-disabled`                       |
| Form state        | `.bf-invalid`, `.bf-focused`, `.bf-disabled`                               |
| Accessibility     | `.bf-skip-link`, `.bf-sr-only`, `.bf-focusable`, `.bf-target-size`         |
| Tables            | `.bf-table`, `.bf-table--zebra`, `.bf-table-responsive`                    |
| Media             | `.bf-embed-responsive`, `.bf-embed-responsive--4-3`                        |

The full list is `api.json`. This table is a shortcut, not the source of truth.

## Spacing scale

The numbered scale is bottom-only. `.bf-m-1` is the historical short form of `.bf-m-b-1`
and both set `margin-bottom`; prefer the explicit `.bf-m-b-*` form in generated markup.

| Step | Token              | Value    |
| ---- | ------------------ | -------- |
| 1    | `--bf-spacing-md`  | `0.5rem` |
| 2    | `--bf-spacing-lg`  | `1rem`   |
| 3    | `--bf-spacing-xl`  | `2rem`   |
| 4    | `--bf-spacing-xxl` | `3rem`   |

`.bf-m-0` zeroes every side; `.bf-m-t-0`, `.bf-m-b-0`, `.bf-m-l-0`, `.bf-m-r-0` zero one.
`.bf-p-1` … `.bf-p-4` and `.bf-p-t-*` / `.bf-p-b-*` follow the same steps for padding.
The grid gutter is `--bf-spacing-grid-gutter`, `1.5rem`. `--bf-spacing-sm` (`0.25rem`)
exists as a token but has no numbered utility.
