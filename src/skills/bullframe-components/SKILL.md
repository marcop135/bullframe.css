---
name: bullframe-components
description: Compose navigation, cards and native dialog modals with Bullframe CSS. Use when building a header nav, breadcrumb, pagination, content or media cards, or a confirm dialog without a component library.
bullframe: '>=6.1.0 <7.0.0'
builds: [bullframe.css, bullframe-dark.css, bullframe-system-default.css]
requires: [bullframe-core]
docs: ['/components/navigation', '/components/cards', '/components/modals', '/components/button-patterns']
---

# Components

<!-- bf-absent: bf-card, bf-nav, bf-modal, bf-breadcrumb, bf-navbar -->

Bullframe does not ship React or Web Components. Navigation, cards and modals are
semantic HTML plus a few utilities and token-based inline styles. Prefer the patterns in
the docs over inventing framework classes.

## When to use

A site header, breadcrumb, pagination, a grid of content or media cards, a confirm or
help `<dialog>`, or any task that asks for "components" on top of Bullframe.

## Inputs to gather

Nav items and the primary action, card titles and summaries (and optional images),
whether a modal is needed and what it confirms, and light / dark / system theme.

## Rules

1. There is no `.bf-card`, `.bf-nav`, `.bf-modal`, `.bf-breadcrumb` or `.bf-navbar`. Compose
   with landmarks, lists, buttons and `var(--bf-*)` borders.
2. Header nav: `<header>` with `<nav aria-label="Primary">`, links in a list or inline
   group, and at most one `.bf-btn.bf-btn--primary` call to action.
3. Breadcrumbs: `<nav aria-label="Breadcrumb">` with an ordered list;
   `aria-current="page"` on the current item; hide separators from assistive tech with
   `aria-hidden="true"`.
4. Pagination: `<nav aria-label="Pagination">` with `.bf-btn` links; mark the current page
   with `aria-current="page"` and `.bf-btn--primary`.
5. Cards: `<article>` with border, radius and padding from tokens. Media cards put the
   image first and clip to the radius with `overflow: hidden`. Card grids use `.bf-row`
   and `.bf-col-*`.
6. Modals: native `<dialog>`. Open with `showModal()`, close with `<form method="dialog">`.
   Do not build an overlay `<div>` or a focus-trap library.
7. Every class-based page starts with `.bf-skip-link` pointing at `#main-content`.
8. Keep JavaScript to the dialog open trigger (and optional `close` listener). No
   framework.

## Recipe

1. Pick a class-based build.
2. Emit the scaffold with skip link.
3. Add header nav if the page needs site chrome.
4. Main content: card row and any other sections.
5. Add `<dialog>` elements at the end of `<body>` when confirmation or help is required.
6. Wire a button that calls `document.getElementById(…).showModal()` only when a modal is
   in scope.

## Example

[`examples/components.html`](examples/components.html) is a page with primary nav, a
three-card row and a confirm `<dialog>` opened from a destructive action.

## Expected output

Semantic landmarks, composed cards, and (when needed) a native dialog. No component npm
package and no invented `.bf-*` component classes.

## Failure modes

- Inventing `.bf-card`, `.bf-nav`, `.bf-modal` or `.bf-breadcrumb`.
- A modal built from fixed-position `<div>`s instead of `<dialog>`.
- Nav without an accessible name (`aria-label` or similar).
- Cards as nested `<div>` soup with no heading hierarchy.
- Multiple primary buttons competing in the header.

## Do not

- Do not add Bootstrap, Tailwind or a headless UI kit alongside Bullframe for these
  patterns.
- Do not disable the dialog backdrop or Escape behaviour.
- Do not skip heading levels inside cards (`h1` page title, then `h2` or `h3` in cards).

## Canonical docs

- Navigation: <https://bullframecss.marcopontili.com/components/navigation.md>
- Cards: <https://bullframecss.marcopontili.com/components/cards.md>
- Modals: <https://bullframecss.marcopontili.com/components/modals.md>
- Button patterns: <https://bullframecss.marcopontili.com/components/button-patterns.md>
