# Grid system

A 12-column flexbox grid: `.bf-row` holds `.bf-col-1` to `.bf-col-12`, and each number is the column's span in twelfths. Containers are on the [Layout](/layout) page.

## Rows and columns

```html
<div class="bf-row">
  <div class="bf-col-12">Full width (12/12)</div>
</div>

<div class="bf-row">
  <div class="bf-col-6">Half width (6/12)</div>
  <div class="bf-col-6">Half width (6/12)</div>
</div>

<div class="bf-row">
  <div class="bf-col-4">One third (4/12)</div>
  <div class="bf-col-4">One third (4/12)</div>
  <div class="bf-col-4">One third (4/12)</div>
</div>
```

Put the `bf-col-*` class first in the `class` attribute. The column selector is `[class^='bf-col-']`, so `class="card bf-col-6"` gets the width but not the gutter padding.

## Responsive columns

There are no per-breakpoint column classes. A column keeps its span at every width; a modifier on the container stacks every column inside it to full width below a breakpoint.

| Container modifier       | Stacks below |
| ------------------------ | ------------ |
| `bf-container--break-xs` | 576px        |
| `bf-container--break-md` | 768px        |
| `bf-container--break-lg` | 992px        |

```html
<div class="bf-container bf-container--break-md">
  <div class="bf-row">
    <div class="bf-col-4">One third on desktop, full width below 768px</div>
    <div class="bf-col-4">One third on desktop, full width below 768px</div>
    <div class="bf-col-4">One third on desktop, full width below 768px</div>
  </div>
</div>
```

The `--bf-breakpoint-*` tokens are for your own media queries; the grid uses only these three modifiers. See [CSS variables](/variables#breakpoint-tokens).

## No gutters

`.bf-no-gutters` on a row removes the row's negative margins and its direct columns' padding:

```html
<div class="bf-row bf-no-gutters">
  <div class="bf-col-6">No gutters</div>
  <div class="bf-col-6">No gutters</div>
</div>
```

The gutter width is `--bf-spacing-grid-gutter` (1.5rem).
