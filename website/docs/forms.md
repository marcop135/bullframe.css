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

## Form Layout

### Form Groups

Wrap form elements in a container for consistent spacing:

```html
<form>
  <div class="bf-form-group">
    <label for="name">Name</label>
    <input type="text" id="name">
  </div>
  
  <div class="bf-form-group">
    <label for="email">Email</label>
    <input type="email" id="email">
  </div>
  
  <button type="submit">Submit</button>
</form>
```

## Form Utilities

### Form States Utilities

```html
<input class="bf-form-valid" type="text">
<input class="bf-form-invalid" type="text">
```

### Custom Radio and Checkbox

Use utility classes for custom-styled radio buttons and checkboxes:

```html
<input type="checkbox" class="bf-custom-checkbox" id="custom1">
<label for="custom1">Custom checkbox</label>

<input type="radio" class="bf-custom-radio" id="custom2" name="custom">
<label for="custom2">Custom radio</label>
```
