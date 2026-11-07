# Modal patterns

Bullframe styles the native `<dialog>` element, so a modal needs no overlay markup and no focus-management library. Every build includes the dialog styles.

## Confirm dialog

```html
<button class="bf-btn bf-btn--primary" onclick="document.getElementById('confirm').showModal()">Delete account</button>

<dialog id="confirm">
  <h2>Are you sure?</h2>
  <p>This permanently deletes your account and all associated data.</p>
  <form method="dialog">
    <button class="bf-btn bf-btn--primary" value="confirm">Yes, delete</button>
    <button class="bf-btn" value="cancel">Cancel</button>
  </form>
</dialog>
```

- `showModal()` opens the dialog on the top layer, makes the rest of the page inert, shows a `::backdrop`, and closes on `Esc`.
- `<form method="dialog">` closes the dialog on submit and stores the clicked button's `value` in `dialog.returnValue`.

## Read the result

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

## Non-modal dialog

Open with `dialog.show()` instead of `showModal()` when the rest of the page must stay usable, for example a contextual help panel.

```html
<dialog id="help">
  <p>Tips for filling out this form&hellip;</p>
  <form method="dialog">
    <button class="bf-btn">Got it</button>
  </form>
</dialog>
```

## Safe default focus

The browser focuses the first focusable element on open. Put `autofocus` on the non-destructive action so a stray `Enter` does not confirm:

```html
<dialog id="confirm">
  <h2>Are you sure?</h2>
  <form method="dialog">
    <button class="bf-btn" value="cancel" autofocus>Cancel</button>
    <button class="bf-btn bf-btn--primary" value="confirm">Delete</button>
  </form>
</dialog>
```

## Motion

Where the browser supports `overlay` transitions, the dialog and backdrop fade in. Users with `prefers-reduced-motion: reduce` get no transition, on every build.
