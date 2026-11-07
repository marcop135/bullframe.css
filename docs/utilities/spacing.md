# Spacing utilities

Margin (`.bf-m-*`) and padding (`.bf-p-*`) classes on a five-step scale. Every class uses `!important`.

## Scale

| Step | Value                      |
| ---- | -------------------------- |
| `0`  | `0`                        |
| `1`  | `--bf-spacing-md` (0.5rem) |
| `2`  | `--bf-spacing-lg` (1rem)   |
| `3`  | `--bf-spacing-xl` (2rem)   |
| `4`  | `--bf-spacing-xxl` (3rem)  |

## Classes

Replace `m` with `p` for padding; the sets are identical.

| Class                      | Sets                                       |
| -------------------------- | ------------------------------------------ |
| `.bf-m-0`                  | `margin: 0` on all sides                   |
| `.bf-m-t-0` to `.bf-m-t-4` | `margin-top`                               |
| `.bf-m-b-0` to `.bf-m-b-4` | `margin-bottom`                            |
| `.bf-m-1` to `.bf-m-4`     | `margin-bottom`; short form of `.bf-m-b-*` |
| `.bf-m-l-0`, `.bf-m-r-0`   | `margin-left: 0`, `margin-right: 0`        |

`.bf-m-1` to `.bf-m-4` set the bottom side only, not all four. Prefer the explicit `.bf-m-b-*` form. Left and right have only the `0` step.

```html
<h2 class="bf-m-t-0 bf-m-b-3">Section title</h2>
<div class="bf-p-0">No padding</div>
<div class="bf-p-t-2 bf-p-b-2">1rem padding above and below</div>
```

To change the scale, override the `--bf-spacing-*` tokens; see [CSS variables](/variables#spacing-tokens).
