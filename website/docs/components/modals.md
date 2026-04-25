---
sidebar_position: 4
---

# Modal Patterns

Bullframe styles the native `<dialog>` element. No JS framework, no overlay div, no focus-trapping library — the browser handles all of it.

## Basic dialog

```html
<button class="bf-btn bf-btn--primary" onclick="document.getElementById('confirm').showModal()">
  Delete account
</button>

<dialog id="confirm">
  <h2>Are you sure?</h2>
  <p>This permanently deletes your account and all associated data.</p>
  <form method="dialog">
    <button class="bf-btn bf-btn--primary" value="confirm">Yes, delete</button>
    <button class="bf-btn" value="cancel">Cancel</button>
  </form>
</dialog>
```

Why this works:

- `showModal()` opens the dialog, traps focus, dims the background, and adds `Esc` to close — built into the browser.
- `<form method="dialog">` closes the dialog on submit and exposes the clicked button's `value` via `dialog.returnValue`.
- The `Esc` key always closes a modal dialog. No custom keydown handler needed.

## Reading the result

```html
<script>
  const dialog = document.getElementById('confirm');
  dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'confirm') {
      // user confirmed
    }
  });
</script>
```

## Non-modal dialog (popover-style)

Use `dialog.show()` instead of `showModal()` when the dialog should not block the rest of the page (e.g. a contextual help panel).

```html
<dialog id="help">
  <p>Tips for filling out this form&hellip;</p>
  <form method="dialog">
    <button class="bf-btn">Got it</button>
  </form>
</dialog>
```

## Focus on open

By default the browser focuses the first focusable element. Override with `autofocus`:

```html
<dialog id="confirm">
  <h2>Are you sure?</h2>
  <button class="bf-btn" autofocus>Cancel</button>
  <button class="bf-btn bf-btn--primary">Delete</button>
</dialog>
```

This is the "safe default focus" pattern — Cancel gets focus, so a stray Enter doesn't delete anything.

## Browser support

`<dialog>` ships in all modern browsers (Chrome 37+, Safari 15.4+, Firefox 98+). For older browsers, use the [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill).
