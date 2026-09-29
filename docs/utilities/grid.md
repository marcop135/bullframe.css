# Grid System

Bullframe CSS uses a 12-column flexbox grid system with responsive breakpoints.

## Breakpoints

| Breakpoint | Value  |
| ---------- | ------ |
| `xs`       | 0px    |
| `sm`       | 576px  |
| `md`       | 768px  |
| `lg`       | 992px  |
| `xl`       | 1200px |
| `xxl`      | 1400px |

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

There are no per-breakpoint column classes. A column keeps its span at every width, and
responsiveness comes from a modifier on the **container**: below the breakpoint, every
column in that container stacks to full width.

| Container modifier       | Stacks below |
| ------------------------ | ------------ |
| `bf-container--break-xs` | 576px        |
| `bf-container--break-md` | 768px        |
| `bf-container--break-lg` | 992px        |

```html
<div class="bf-container bf-container--break-md">
  <div class="bf-row">
    <div class="bf-col-4">One third on desktop, full width below 768px</div>
    <div class="bf-col-4">One third on desktop, full width below 768px</div>
    <div class="bf-col-4">One third on desktop, full width below 768px</div>
  </div>
</div>
```

## Column Classes

- `bf-col-1` through `bf-col-12`

The breakpoint table above documents the `--bf-breakpoint-*` tokens, which exist for your
own media queries. The grid itself uses only the three container modifiers.

## No Gutters

Remove gutters from rows and columns:

```html
<div class="bf-row bf-no-gutters">
  <div class="bf-col-6">No gutters</div>
  <div class="bf-col-6">No gutters</div>
</div>
```
