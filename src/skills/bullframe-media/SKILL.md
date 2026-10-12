---
name: bullframe-media
description: Build galleries, responsive embeds and media grids with Bullframe CSS. Use when creating an album, photo grid, video or map embed, figure with caption, or mixed media cards.
bullframe: '>=6.1.0 <7.0.0'
builds: [bullframe.css, bullframe-dark.css, bullframe-system-default.css]
requires: [bullframe-core]
docs: ['/utilities/embeds', '/utilities/filters', '/utilities/grid', '/components/cards']
---

# Media

<!-- bf-absent: bf-gallery, bf-media, bf-card, bf-aspect-ratio, bf-col-md-4 -->

Media layouts in Bullframe are grid columns plus embed utilities. Cards and galleries are
composed markup; there is no gallery or card class.

## When to use

An album, portfolio grid, video or map embed, captioned figure, filter chip bar over a
media set, or any page whose main content is images or embeds.

## Inputs to gather

Item list (image or embed URL, title, caption, meaningful vs decorative), grid density
(two or three columns), whether a filter bar is needed, and light / dark / system theme.

## Rules

1. Wrap iframes, video and map-like boxes in `.bf-embed-responsive` (16:9). Add
   `.bf-embed-responsive--4-3` for a taller ratio. Non-replaced content inside the box
   needs `.bf-embed-responsive--item`.
2. There is no `.bf-card` or `.bf-gallery`. A media card is an `<article>` with a border,
   radius and padding written as `var(--bf-*)` declarations, or an image plus a body
   block.
3. Lay out cards with `.bf-row` and `.bf-col-*` that sum to 12 or less. Use
   `.bf-container.bf-container--break-md` so columns stack below 768px.
4. Meaningful images take real `alt` text. Decorative images take `alt=""`.
5. Prefer `<figure>` with `<figcaption>` for a single captioned image.
6. A filter bar is a `<nav aria-label="…">` of `.bf-btn` links; mark the active filter with
   `aria-current="page"`.
7. Optional image treatments use `.bf-filter-grayscale`, `.bf-filter-blur`,
   `.bf-filter-invert`, `.bf-filter-dim-images` or `.bf-filter-none`. Do not invent filter
   classes.
8. Keep custom CSS out of the page unless the task asks for crop or object-fit rules that
   tokens cannot cover.

## Recipe

1. Pick a class-based build (`bullframe-core` has the table).
2. Emit the scaffold with skip link and container.
3. Optional hero row, then optional filter `<nav>`.
4. Emit the grid: one `.bf-row`, equal `.bf-col-4` or `.bf-col-6` children.
5. Each cell is an `<article>` or `<figure>` with image or embed, then title and caption.
6. Re-read and delete any class that is not in `api.json`.

## Example

[`examples/album.html`](examples/album.html) is a six-tile album with a filter bar,
captioned articles and a 16:9 embed section. Placeholders stand in for real assets.

## Expected output

One HTML file with responsive embeds and a grid whose column classes sum to at most 12
per row. No gallery library and no invented media classes.

## Failure modes

- Inventing `.bf-gallery`, `.bf-media`, `.bf-card` or `.bf-aspect-ratio`.
- A bare `<iframe>` or `<video>` without `.bf-embed-responsive`.
- Missing or placeholder `alt` on meaningful photos.
- Per-breakpoint column classes such as `.bf-col-md-4` (they do not exist).
- Filter chips built from unlabelled `<div>`s instead of a `<nav>` and buttons or links.

## Do not

- Do not add a lightbox or carousel library unless the task explicitly asks for one.
- Do not put decorative images in the accessibility tree with non-empty alt text.
- Do not use the classless build for a multi-column media grid; it has no grid utilities.

## Canonical docs

- Embeds: <https://bullframecss.marcopontili.com/utilities/embeds.md>
- Filters: <https://bullframecss.marcopontili.com/utilities/filters.md>
- Grid: <https://bullframecss.marcopontili.com/utilities/grid.md>
- Cards: <https://bullframecss.marcopontili.com/components/cards.md>
- Live album and media examples: <https://bullframecss.marcopontili.com/examples>
