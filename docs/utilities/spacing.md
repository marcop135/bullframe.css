# Spacing Utilities

Bullframe CSS provides margin and padding utilities for consistent spacing throughout your design.

## Margin Utilities

### All Sides

Only the `0` step clears every side.

```html
<div class="bf-m-0">No margin</div>
```

`.bf-m-1` through `.bf-m-4` are the historical short form of `.bf-m-b-1` through
`.bf-m-b-4`: they set `margin-bottom`, not all four sides. Prefer the explicit
`.bf-m-b-*` form.

### Top Margin

```html
<div class="bf-m-t-0">No top margin</div>
<div class="bf-m-t-1">Small top margin</div>
<div class="bf-m-t-2">Medium top margin</div>
<div class="bf-m-t-3">Large top margin</div>
<div class="bf-m-t-4">Extra large top margin</div>
```

### Bottom Margin

```html
<div class="bf-m-b-0">No bottom margin</div>
<div class="bf-m-b-1">Small bottom margin</div>
<div class="bf-m-b-2">Medium bottom margin</div>
<div class="bf-m-b-3">Large bottom margin</div>
<div class="bf-m-b-4">Extra large bottom margin</div>
```

### Left and Right Margin

Left and right have a `0` step only; there is no numbered scale on those sides.

```html
<div class="bf-m-l-0">No left margin</div>
<div class="bf-m-r-0">No right margin</div>
```

## Padding Utilities

Padding mirrors margin exactly, including the bottom-only shorthand.

### All Sides

Only the `0` step clears every side.

```html
<div class="bf-p-0">No padding</div>
```

`.bf-p-1` through `.bf-p-4` are the short form of `.bf-p-b-1` through `.bf-p-b-4` and set
`padding-bottom`.

### Top Padding

```html
<div class="bf-p-t-0">No top padding</div>
<div class="bf-p-t-1">Small top padding</div>
<div class="bf-p-t-2">Medium top padding</div>
<div class="bf-p-t-3">Large top padding</div>
<div class="bf-p-t-4">Extra large top padding</div>
```

### Bottom Padding

```html
<div class="bf-p-b-0">No bottom padding</div>
<div class="bf-p-b-1">Small bottom padding</div>
<div class="bf-p-b-2">Medium bottom padding</div>
<div class="bf-p-b-3">Large bottom padding</div>
<div class="bf-p-b-4">Extra large bottom padding</div>
```

### Left and Right Padding

```html
<div class="bf-p-l-0">No left padding</div>
<div class="bf-p-r-0">No right padding</div>
```

## Spacing Scale

The spacing utilities use the following scale:

- `0` = `0`
- `1` = `--bf-spacing-md` (0.5rem)
- `2` = `--bf-spacing-lg` (1rem)
- `3` = `--bf-spacing-xl` (2rem)
- `4` = `--bf-spacing-xxl` (3rem)
