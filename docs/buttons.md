# Buttons

`.bf-btn` styles a `button` or `a` as a neutral button; add `.bf-btn--primary` for the primary colour. Both ship in class-based and utilities builds. For groups, icons and other layouts, see [Button patterns](/components/button-patterns).

```html
<button class="bf-btn">Default button</button>
<button class="bf-btn bf-btn--primary">Primary button</button>
<a href="/signup" class="bf-btn">Link button</a>
```

## Disabled

`disabled`, `aria-disabled="true"`, a disabled parent `fieldset` or the `.bf-disabled` class render the button at 50% opacity with a `not-allowed` cursor and no pointer events:

```html
<button class="bf-btn" disabled>Disabled button</button>
<a class="bf-btn bf-disabled" aria-disabled="true">Disabled link button</a>
<button class="bf-btn bf-btn--primary bf-disabled">Disabled primary</button>
```

`.bf-disabled` only changes the look. Pair it with `disabled` or `aria-disabled="true"` so assistive technology and keyboard users get the same state.

## Colours and focus

| Part           | Token                                                                                   |
| -------------- | --------------------------------------------------------------------------------------- |
| Default button | `--bf-color-neutral`, `--bf-color-neutral-hover`, `--bf-color-on-neutral`               |
| Primary button | `--bf-color-primary`, `--bf-color-primary-hover`, `--bf-color-on-primary`               |
| Focus shadow   | `--bf-color-button-shadow-focus` (default), `--bf-color-primary-shadow-focus` (primary) |

The default primary pair, white on `rgb(0 86 179)`, meets WCAG AA 4.5:1. In forced-colors mode buttons get a 1px `ButtonText` border. See [CSS variables](/variables#primary-and-neutral).
