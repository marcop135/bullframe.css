---
sidebar_position: 1
---

# Grid System

Bullframe CSS uses a 12-column flexbox grid system with responsive breakpoints.

## Breakpoints

| Breakpoint | Value |
| ---------- | ----- |
| `xs` | 0px |
| `sm` | 576px |
| `md` | 768px |
| `lg` | 992px |
| `xl` | 1200px |
| `xxl` | 1400px |

## Basic Grid

### Rows

```html
<div class="bf-row">
  <!-- Columns go here -->
</div>
```

### Columns

```html
<div class="bf-row">
  <div class="bf-col-12">Full width (12/12)</div>
</div>

<div class="bf-row">
  <div class="bf-col-6">Half width (6/12)</div>
  <div class="bf-col-6">Half width (6/12)</div>
</div>

<div class="bf-row">
  <div class="bf-col-4">One third (4/12)</div>
  <div class="bf-col-4">One third (4/12)</div>
  <div class="bf-col-4">One third (4/12)</div>
</div>
```

## Responsive Columns

Columns can be sized differently at different breakpoints:

```html
<div class="bf-row">
  <div class="bf-col-12 bf-col-md-6 bf-col-lg-4">
    Full width on mobile, half on tablet, third on desktop
  </div>
</div>
```

## Column Classes

### All Breakpoints
- `bf-col-1` through `bf-col-12`

### Extra Small (xs) - 0px+
- `bf-col-xs-1` through `bf-col-xs-12`

### Small (sm) - 576px+
- `bf-col-sm-1` through `bf-col-sm-12`

### Medium (md) - 768px+
- `bf-col-md-1` through `bf-col-md-12`

### Large (lg) - 992px+
- `bf-col-lg-1` through `bf-col-lg-12`

### Extra Large (xl) - 1200px+
- `bf-col-xl-1` through `bf-col-xl-12`

### 2X Extra Large (xxl) - 1400px+
- `bf-col-xxl-1` through `bf-col-xxl-12`

## No Gutters

Remove gutters from rows and columns:

```html
<div class="bf-row no-gutters">
  <div class="bf-col-6">No gutters</div>
  <div class="bf-col-6">No gutters</div>
</div>
```
