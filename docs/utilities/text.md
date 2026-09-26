# Text Utilities

Bullframe CSS provides utilities for controlling text appearance and behavior.

## Text Alignment

```html
<p class="bf-t-left">Left aligned</p>
<p class="bf-t-center">Center aligned</p>
<p class="bf-t-right">Right aligned</p>
```

There is no justify utility. Set `text-align: justify` yourself where a design calls for it.

## Text Transform

```html
<p class="bf-t-transform-uppercase">UPPERCASE TEXT</p>
<p class="bf-t-transform-none">No transform</p>
```

Lowercase and capitalize have no utility; use `<span>` with your own rule when you need
them.

## Font Weight

```html
<p class="bf-t-weight-300">Light</p>
<p class="bf-t-weight-400">Normal</p>
<p class="bf-t-weight-500">Medium</p>
<p class="bf-t-weight-600">Semibold</p>
<p class="bf-t-weight-700">Bold</p>
<p class="bf-t-weight-800">Extra bold</p>
```

## Font Style

```html
<p class="bf-t-style-normal">Normal</p>
<p class="bf-t-italic">Italic</p>
```

## Truncation

```html
<p class="bf-t-truncate">One line, clipped with an ellipsis</p>
<p class="bf-t-truncate--multiline-2">Two lines, then an ellipsis</p>
<p class="bf-t-truncate--multiline-3">Three lines, then an ellipsis</p>
<p class="bf-text-break">Breaks a long unbroken string instead of overflowing</p>
```

## Text Hide

Hide text visually while keeping it accessible to screen readers:

```html
<span class="bf-text-hide">Hidden text</span>
```

## Screen Reader Only

Show text only to screen readers (class-based and utilities builds):

```html
<span class="bf-sr-only">Screen reader only</span> <span class="bf-sr-only bf-focusable">Focusable screen reader text</span>
```

For a skip link that stays out of document flow until focused, prefer `.bf-skip-link`. See [Accessibility](/accessibility).
