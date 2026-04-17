---
sidebar_position: 7
---

# Buttons

Bullframe CSS provides button styles for creating consistent, accessible buttons.

## Basic Buttons

### Default Button

```html
<button class="bf-btn">Default Button</button>
```

### Primary Button

```html
<button class="bf-btn bf-btn--primary">Primary Button</button>
```

### Button as Link

```html
<a href="#" class="bf-btn">Link Button</a>
```

## Button States

### Disabled

Use the `disabled` attribute or the `.bf-disabled` class:

```html
<button class="bf-btn" disabled>Disabled Button</button>
<button class="bf-btn bf-disabled">Disabled Button</button>
<button class="bf-btn bf-btn--primary bf-disabled">Disabled Primary</button>
```

## Accessibility

- Primary buttons meet WCAG AA 4.5:1 contrast (white text on blue background)
- Disabled buttons use `cursor: not-allowed` and `pointer-events: none`
- Focus states include a visible box-shadow ring
