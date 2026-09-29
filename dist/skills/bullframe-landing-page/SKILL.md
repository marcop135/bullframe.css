---
name: bullframe-landing-page
description: Build a marketing or product landing page with Bullframe CSS. Use for a hero, feature row, pricing block, call to action, or any multi-section marketing page.
bullframe: '>=6.1.0 <7.0.0'
builds: [bullframe.css, bullframe-dark.css, bullframe-system-default.css]
requires: [bullframe-core]
docs: ['/layout', '/utilities/grid', '/buttons', '/components/cards']
---

# Landing page

<!-- bf-absent: bf-col-md-6, bf-col-lg-4, bf-card, bf-hero, bf-section -->

A landing page in Bullframe is one HTML file: a container, a few `.bf-row` sections, and
composed markup for anything that looks like a card. No JavaScript, no build step.

## When to use

A marketing page, product page, cover page, pricing page or feature page. For a form-first
page use `bullframe-forms`; for prose use `bullframe-docs-page`.

## Inputs to gather

Product name, one-sentence value proposition, primary and secondary call to action with
their targets, the sections wanted, and whether the page is light, dark or follows the OS.
Assume a class-based light build when nothing is said, and state that in one line.

## Rules

1. One `<h1>`, in the hero. Sections below it use `<h2>`, cards inside them `<h3>`. Never
   skip a level.
2. Wrap the page body in `.bf-container.bf-container--break-md`. That caps the width and
   stacks every row below 768px.
3. Each section is a `.bf-row` whose `.bf-col-*` children sum to 12 or less. Twelfths only:
   there are no per-breakpoint column classes.
4. The primary action is `<a class="bf-btn bf-btn--primary">`, the secondary is
   `<a class="bf-btn">`. One primary per screen.
5. Cards are `<article>` with a border, radius and padding written as inline
   `var(--bf-*)` declarations. There is no card class.
6. Use `<table class="bf-table bf-table--zebra">` with a `<caption>` for a comparison
   table, not a grid of divs.
7. Decorative images take `alt=""`. Meaningful ones take real alt text.
8. Keep custom CSS out of the page. If the design needs brand colour, override
   `--bf-blue` and `--bf-blue-light` in a `<style>` block or project stylesheet.

## Recipe

1. Pick the build (`bullframe-core` has the table).
2. Emit the scaffold: doctype, `lang`, charset, viewport, title, description, one
   stylesheet link.
3. `<body>` opens with the skip link, then `<header>` with a `<nav aria-label="Primary">`
   if the page has navigation.
4. Hero: `.bf-row` with a `.bf-col-7` text column and a `.bf-col-5` media column.
5. Feature row: `.bf-row` with three `.bf-col-4` articles.
6. Comparison or pricing: a `.bf-table` with a caption and scoped headers.
7. Closing call to action, then `<footer>`.
8. Re-read the output and delete any class that is not in `api.json`.

## Example

[`examples/landing.html`](examples/landing.html) is a complete page built to these rules.
It validates under the project's html-validate a11y config and contains no custom CSS
beyond inline token references.

## Expected output

One `index.html` (or the path the user asked for) that opens in a browser and renders
finished with a single stylesheet link. No placeholder classes, no framework mixing, no
`<style>` block other than declared token overrides.

## Failure modes

- Writing `.bf-col-md-6` or `.bf-col-lg-4`. They do not exist; stacking is a container
  modifier.
- Columns summing past 12, which wraps the row unintentionally.
- Inventing `.bf-card`, `.bf-hero` or `.bf-section`.
- Using `<div>` for what is a `<section>`, `<article>`, `<nav>` or `<footer>`.
- Jumping from `<h1>` to `<h3>`.
- Reimplementing the grid in a `<style>` block because a breakpoint class seemed missing.
- Adding a colour as a hex literal instead of overriding the token, which then does not
  follow the dark build.

## Do not

- Do not add JavaScript for layout, theming or animation.
- Do not link a second CSS framework or a second base build.
- Do not use `bf-container--fluid` for a marketing page unless the design is edge to edge.
- Do not set `outline: none` on the buttons.

## Canonical docs

- Layout: <https://bullframecss.marcopontili.com/layout.md>
- Grid: <https://bullframecss.marcopontili.com/utilities/grid.md>
- Buttons: <https://bullframecss.marcopontili.com/buttons.md>
- Card patterns: <https://bullframecss.marcopontili.com/components/cards.md>
- Live examples: <https://bullframecss.marcopontili.com/examples>
