# Button patterns

<!-- bf-absent: bf-btn--block -->

Composite button patterns. For the button classes themselves (`.bf-btn`, `.bf-btn--primary`, `.bf-disabled`), see [Buttons](../buttons).

## Button group

Buttons inline in any block element.

```html
<div>
  <button class="bf-btn bf-btn--primary">Save</button>
  <button class="bf-btn">Cancel</button>
</div>
```

## Full-width button

Bullframe has no block-button class. Set the width inline:

```html
<button class="bf-btn bf-btn--primary" style="width: 100%;">Continue</button>
```

For repeated use, declare your own class once:

```css
.bf-btn--block {
  display: block;
  width: 100%;
}
```

## Icon and text button

Bullframe ships no icons; inline your own `<svg>`.

```html
<button class="bf-btn bf-btn--primary">
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
    <path fill="currentColor" d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5z" />
  </svg>
  Star
</button>
```

`fill="currentColor"` makes the icon follow the button's text color in every state.

## Link styled as a button

`.bf-btn` works on `<a>`; use it for navigation that should look like a button.

```html
<a class="bf-btn bf-btn--primary" href="/signup">Sign up</a>
```

## Submit and reset pair

```html
<form>
  <!-- form fields -->
  <button type="submit" class="bf-btn bf-btn--primary">Submit</button>
  <button type="reset" class="bf-btn">Reset</button>
</form>
```

## Disabled with a reason

Pair `disabled` with `aria-describedby` so screen readers announce why the button is unavailable.

```html
<button class="bf-btn bf-btn--primary" disabled aria-describedby="why-disabled">Publish</button> <small id="why-disabled" class="bf-t-italic">Add a title before publishing.</small>
```
