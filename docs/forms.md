# Forms

Every build styles native form controls with no classes: text fields, `textarea`, `select`, checkboxes, radios and range. Class-based and utilities builds add state classes and custom radio and checkbox wrappers. For complete forms, see [Form patterns](/components/forms).

## Controls

```html
<input type="text" placeholder="Enter text" />
<input type="email" placeholder="Enter email" />
<input type="password" placeholder="Enter password" />
<input type="number" placeholder="Enter number" />

<textarea placeholder="Enter your message"></textarea>

<select>
  <option>Choose an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<input type="checkbox" id="checkbox1" />
<label for="checkbox1">Checkbox label</label>

<input type="radio" id="radio1" name="radio" />
<label for="radio1">Radio option 1</label>
<input type="radio" id="radio2" name="radio" />
<label for="radio2">Radio option 2</label>

<input type="range" min="0" max="100" value="50" />
```

A focused text field, `select` or `textarea` gets a `--bf-color-field-border-focus` border and a `--bf-color-field-shadow-focus` shadow; see [CSS variables](/variables#forms).

## Disabled

`disabled`, `aria-disabled="true"` and `fieldset[disabled]` render controls at 50% opacity with a `not-allowed` cursor and no pointer events:

```html
<input type="text" disabled placeholder="Disabled input" /> <button disabled>Disabled button</button>
```

## State classes

These ship in class-based and utilities builds only.

| Class          | Effect                                                  |
| -------------- | ------------------------------------------------------- |
| `.bf-focused`  | Shows the focus border and shadow without focus         |
| `.bf-disabled` | Disabled look and no pointer events, without `disabled` |
| `.bf-invalid`  | `--bf-color-danger` text and border, with a red shadow  |

```html
<input class="bf-focused" type="text" value="Focused input" />
<input class="bf-disabled" type="text" value="Disabled input" />
<input class="bf-invalid" type="email" aria-invalid="true" value="not-an-email" />
```

No build styles `:invalid` or `aria-invalid`. Add `.bf-invalid` from your validation script, and set `aria-invalid="true"` on the same field for assistive technology.

## Custom radio and checkbox

Wrap a control and its label in `.custom-checkbox-wrapper` or `.custom-radio-wrapper` to replace the native look with a primary-coloured box or dot. Class-based and utilities builds only.

```html
<div class="custom-checkbox-wrapper">
  <input type="checkbox" id="custom1" />
  <label for="custom1">Custom checkbox</label>
</div>

<div class="custom-radio-wrapper">
  <input type="radio" id="custom2" name="custom" />
  <label for="custom2">Custom radio</label>
</div>
```
