---
name: bullframe-forms
description: Build accessible forms with Bullframe CSS. Use when creating a contact form, login, signup, checkout, search box, filter bar, or any page with input controls.
bullframe: '>=6.1.0 <7.0.0'
builds: [bullframe.css, bullframe-dark.css, bullframe-system-default.css, bullframe-classless.css]
requires: [bullframe-core]
docs: ['/forms', '/components/forms', '/accessibility']
---

# Forms

<!-- bf-absent: bf-form-group, bf-input, bf-label, bf-form-control, bf-checkbox -->

Bullframe styles form elements directly. A plain `<label>` plus `<input>` is already
sized, spaced and focus-ringed on every build, classless included. Classes appear only
for state (`.bf-invalid`, `.bf-disabled`) and layout.

## When to use

Any task that adds or edits a form, a single control, or validation feedback.

## Inputs to gather

The field list with types and required flags, the submit label, the form action and
method, whether the layout is stacked or two-column, and whether errors are rendered
server-side or client-side.

## Rules

1. Every control has a `<label for>` whose value is the control's `id`. A placeholder is
   not a label, and `aria-label` is a fallback for controls with no visible text, not the
   default.
2. Pick the narrowest input type: `email`, `tel`, `url`, `number`, `date`, `search`. It
   changes the mobile keyboard and gives free validation.
3. Set `autocomplete` with the standard token (`name`, `email`, `street-address`,
   `cc-number`, `current-password`, `new-password`). Checkout and sign-in forms are the
   main reason users abandon a page.
4. Mark a required field with the `required` attribute. Do not use a class for it.
5. Group related controls, especially radios and checkboxes, in `<fieldset>` with a
   `<legend>`.
6. Hints go in an element referenced by `aria-describedby`, not in the label.
7. Error state is `.bf-invalid` on the control plus a message referenced by
   `aria-describedby`. Colour alone never carries the meaning.
8. A disabled control gets the `disabled` attribute; `.bf-disabled` is for styling
   elements that cannot take the attribute, such as a link styled as a button.
9. Two-column layouts use `.bf-row` with `.bf-col-*`. The form itself needs no wrapper
   class.
10. The submit control is `<button type="submit" class="bf-btn bf-btn--primary">`.

## Recipe

1. Choose the build. A form-only page on a classless build works and needs no classes;
   any two-column layout needs the class-based build.
2. Emit the page scaffold from `bullframe-core`.
3. Write the form: `action`, `method`, then label and control pairs in source order.
4. Add `fieldset`/`legend` around each radio or checkbox group.
5. Add the submit button last, inside the form.
6. Check every control has a label, a type and, where applicable, an autocomplete token.

## Example

[`examples/contact-form.html`](examples/contact-form.html) is a complete two-column contact
page: labelled controls, a select with an empty first option, a described textarea, a
radio fieldset, and an aside composed from tokens.

## Expected output

Markup where every control is labelled and typed, which passes html-validate with the
`input-missing-label` rule set to error. No form framework, no validation library, no
custom control CSS.

## Failure modes

- A placeholder standing in for a label.
- `<div>` or `<a>` used as a submit control.
- `outline: none` or a custom focus style that drops contrast.
- Inventing `.bf-form-group`, `.bf-input`, `.bf-label` or `.bf-form-control`. None exist;
  the element selectors do the work.
- Custom checkbox and radio CSS when `src/css/utilities/form-custom-radio-checkbox.css`
  already ships it on the class-based builds.
- Missing `autocomplete` on address, payment and password fields.
- A select whose first option is a real value, so the user cannot express "not chosen".
- Client-side validation messages that replace, rather than supplement, the `required`
  attribute.

## Do not

- Do not remove or restyle the focus ring; tune `--bf-focus-ring-color`,
  `--bf-focus-ring-width`, `--bf-focus-ring-offset`.
- Do not use `.bf-invalid` as a permanent style; it is a state.
- Do not nest a form inside another form.
- Do not add JavaScript unless the task explicitly asks for client-side behaviour.

## Canonical docs

- Forms: <https://bullframecss.marcopontili.com/forms.md>
- Form patterns: <https://bullframecss.marcopontili.com/components/forms.md>
- Accessibility: <https://bullframecss.marcopontili.com/accessibility.md>
- Live examples: <https://bullframecss.marcopontili.com/examples>
