---
sidebar_position: 2
---

# Button Patterns

Composite button patterns. For individual button classes (`.bf-btn`, `.bf-btn--primary`, `.bf-disabled`), see [Buttons](../buttons).

## Button group

Inline buttons that share a horizontal axis. Wrap in any block element.

```html
<div>
  <button class="bf-btn bf-btn--primary">Save</button>
  <button class="bf-btn">Cancel</button>
</div>
```

## Full-width button

Stretches to the container's width. Useful in mobile forms and cards.

```html
<button class="bf-btn bf-btn--primary" style="width: 100%;">Continue</button>
```

For wider use, declare a utility once:

```css
.bf-btn--block { display: block; width: 100%; }
```

## Icon + text button

Use `<svg>` inline. Bullframe doesn't ship icons; bring your own (Heroicons, Lucide, Phosphor, etc.).

```html
<button class="bf-btn bf-btn--primary">
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
    <path fill="currentColor" d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5z"/>
  </svg>
  Star
</button>
```

`currentColor` makes the icon inherit the button's text color, including hover and disabled states.

## Anchor styled as button

```html
<a class="bf-btn bf-btn--primary" href="/signup">Sign up</a>
```

The button styles apply to `<a>` elements via attribute selectors — no extra class needed beyond `.bf-btn`.

## Submit + reset pair

Standard form footer pattern. The `<button type="reset">` styles match `.bf-btn` automatically.

```html
<form>
  <!-- form fields -->
  <button type="submit" class="bf-btn bf-btn--primary">Submit</button>
  <button type="reset" class="bf-btn">Reset</button>
</form>
```

## Disabled with reason

Combine `disabled` with `aria-describedby` so screen readers announce why the button is unavailable.

```html
<button class="bf-btn bf-btn--primary" disabled aria-describedby="why-disabled">
  Publish
</button>
<small id="why-disabled" class="bf-t-italic">Add a title before publishing.</small>
```
