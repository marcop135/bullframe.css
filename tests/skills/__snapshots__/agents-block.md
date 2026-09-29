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

### Skills
- `bullframe-core`: Core conventions for writing HTML styled with Bullframe CSS. Use before any other Bullframe skill, and whenever choosing a build, scaffolding a page, theming with tokens, or deciding whether to write custom CSS.
- `bullframe-convert`: Convert existing HTML and CSS to Bullframe CSS. Use when migrating a page off Bootstrap, Tailwind, a hand-rolled stylesheet, or an older Bullframe version, and when asked to remove custom CSS in favour of the framework.
- `bullframe-docs-page`: Build a documentation, article or reference page with Bullframe CSS. Use for docs, guides, changelogs, help center articles, blog posts, or any prose-first page.
- `bullframe-forms`: Build accessible forms with Bullframe CSS. Use when creating a contact form, login, signup, checkout, search box, filter bar, or any page with input controls.
- `bullframe-landing-page`: Build a marketing or product landing page with Bullframe CSS. Use for a hero, feature row, pricing block, call to action, or any multi-section marketing page.

Local copies of these skills are in `bullframe-skills/`.
Published copies: <https://bullframecss.marcopontili.com/skills/index.json>. Refresh with `npx bullframe.css skills install`.
