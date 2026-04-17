---
sidebar_position: 6
---

# Forms

Bullframe CSS provides consistent, accessible form styling across all browsers.

## Basic Form Elements

### Text Inputs

```html
<input type="text" placeholder="Enter text">
<input type="email" placeholder="Enter email">
<input type="password" placeholder="Enter password">
<input type="number" placeholder="Enter number">
```

### Textarea

```html
<textarea placeholder="Enter your message"></textarea>
```

### Select

```html
<select>
  <option>Choose an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Checkboxes

```html
<input type="checkbox" id="checkbox1">
<label for="checkbox1">Checkbox label</label>
```

### Radio Buttons

```html
<input type="radio" id="radio1" name="radio">
<label for="radio1">Radio option 1</label>

<input type="radio" id="radio2" name="radio">
<label for="radio2">Radio option 2</label>
```

### Range Input

```html
<input type="range" min="0" max="100" value="50">
```

## Form States

### Disabled State

```html
<input type="text" disabled placeholder="Disabled input">
<button disabled>Disabled button</button>
```

### Readonly State

```html
<input type="text" readonly value="Readonly value">
```

### Invalid State

```html
<input type="email" required aria-invalid="true" placeholder="Invalid email">
```

## Form Utilities

### Focus State

Apply the `.bf-focused` class to simulate a focused appearance:

```html
<input class="bf-focused" type="text" value="Focused input">
```

### Disabled State

Apply the `.bf-disabled` class to disable form elements via CSS:

```html
<input class="bf-disabled" type="text" value="Disabled input">
```

### Invalid State

Apply the `.bf-invalid` class to mark form elements as invalid:

```html
<input class="bf-invalid" type="text" value="Invalid input">
```

### Custom Radio and Checkbox

Use wrapper classes for custom-styled radio buttons and checkboxes:

```html
<div class="custom-checkbox-wrapper">
  <input type="checkbox" id="custom1">
  <label for="custom1">Custom checkbox</label>
</div>

<div class="custom-radio-wrapper">
  <input type="radio" id="custom2" name="custom">
  <label for="custom2">Custom radio</label>
</div>
```
