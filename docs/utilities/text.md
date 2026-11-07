# Text utilities

Classes for alignment, transform, weight, style, truncation and font family. Unless noted, each uses `!important`. Element typography is on the [Typography](/typography) page.

## Alignment and transform

```html
<p class="bf-t-left">Left aligned</p>
<p class="bf-t-center">Center aligned</p>
<p class="bf-t-right">Right aligned</p>
<p class="bf-t-transform-uppercase">Uppercase text</p>
<p class="bf-t-transform-none">No transform</p>
```

There are no justify, lowercase or capitalize classes; write the rule yourself.

## Weight and style

```html
<p class="bf-t-weight-300">Light</p>
<p class="bf-t-weight-400">Normal</p>
<p class="bf-t-weight-500">Medium</p>
<p class="bf-t-weight-600">Semibold</p>
<p class="bf-t-weight-700">Bold</p>
<p class="bf-t-weight-800">Extra bold</p>
<p class="bf-t-italic">Italic</p>
<p class="bf-t-style-normal">Normal style, for resetting inherited italics</p>
```

## Truncation and wrapping

```html
<p class="bf-t-truncate">One line, clipped with an ellipsis</p>
<p class="bf-t-truncate--multiline-2">Two lines, then an ellipsis</p>
<p class="bf-t-truncate--multiline-3">Three lines, then an ellipsis</p>
<p class="bf-text-break">Breaks a long unbroken string instead of overflowing</p>
```

## Font family

`.bf-font-sans-serif`, `.bf-font-serif` and `.bf-font-monospace` apply the `--bf-font-*` token stacks; see [CSS variables](/variables#typography-tokens).

These system font stacks, from [Modern Font Stacks](https://modernfontstacks.com/), load no web fonts and do not use `!important`:

| Family     | Classes                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sans-serif | `.bf-sans-serif--system`, `.bf-sans-serif--humanist`, `.bf-sans-serif--geometric`, `.bf-sans-serif--classical`, `.bf-sans-serif--neo-grotesque`, `.bf-sans-serif--industrial`, `.bf-sans-serif--rounded` |
| Serif      | `.bf-serif--transitional`, `.bf-serif--oldstyle`, `.bf-serif--slab`, `.bf-serif--antique`, `.bf-serif--didone`                                                                                           |
| Monospace  | `.bf-monospace--slab`, `.bf-monospace--code`                                                                                                                                                             |
| Cursive    | `.bf-cursive--handwritten`                                                                                                                                                                               |

## Other text classes

| Class                      | Effect                                                                        |
| -------------------------- | ----------------------------------------------------------------------------- |
| `.bf-t-shadow`             | Soft text shadow in `--bf-color-text-shadow`                                  |
| `.bf-no-select`            | `user-select: none`                                                           |
| `.bf-antialiased`          | Grayscale font smoothing on macOS; no `!important`                            |
| `.bf-subpixel-antialiased` | Resets font smoothing to `auto`; no `!important`                              |
| `.bf-text-hide`            | Collapses text to zero size (image replacement); screen readers still read it |

For text that only screen readers announce, use `.bf-sr-only`; see [Accessibility](/accessibility).
