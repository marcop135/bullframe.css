---
sidebar_position: 5
---

# Layout

Bullframe CSS provides a flexible container system and grid layout utilities.

## Containers

### Standard Container

The `.bf-container` class creates a centered container with a max-width of 1140px:

```html
<div class="bf-container">
  <!-- Your content -->
</div>
```

### Fluid Container

Use `.bf-container--fluid` for a full-width container:

```html
<div class="bf-container--fluid">
  <!-- Your content -->
</div>
```

### Responsive Containers

Containers can collapse at specific breakpoints:

```html
<div class="bf-container--break-xs">Collapses at 575px and below</div>
<div class="bf-container--break-sm">Collapses at 767px and below</div>
<div class="bf-container--break-md">Collapses at 991px and below</div>
<div class="bf-container--break-lg">Collapses at 1199px and below</div>
<div class="bf-container--break-xl">Collapses at 1399px and below</div>
```

## Grid System

Bullframe CSS uses a 12-column flexbox grid system.

### Basic Grid

```html
<div class="bf-row">
  <div class="bf-col-12">Full width</div>
</div>

<div class="bf-row">
  <div class="bf-col-6">Half width</div>
  <div class="bf-col-6">Half width</div>
</div>

<div class="bf-row">
  <div class="bf-col-4">One third</div>
  <div class="bf-col-4">One third</div>
  <div class="bf-col-4">One third</div>
</div>
```

### Responsive Columns

Columns can be sized differently at different breakpoints:

```html
<div class="bf-row">
  <div class="bf-col-12 bf-col-md-6 bf-col-lg-4">
    Full width on mobile, half on tablet, third on desktop
  </div>
</div>
```

### Column Classes

Available column classes:
- `bf-col-1` through `bf-col-12` for all breakpoints
- `bf-col-xs-*` for extra small screens (0px+)
- `bf-col-sm-*` for small screens (576px+)
- `bf-col-md-*` for medium screens (768px+)
- `bf-col-lg-*` for large screens (992px+)
- `bf-col-xl-*` for extra large screens (1200px+)
- `bf-col-xxl-*` for 2x extra large screens (1400px+)

## Flexbox Utilities

### Display Flex

```html
<div class="bf-d-flex">Flex container</div>
```

### Flex Direction

```html
<div class="bf-flex-row">Row direction</div>
<div class="bf-flex-column">Column direction</div>
```

### Justify Content

```html
<div class="bf-justify-start">Start</div>
<div class="bf-justify-center">Center</div>
<div class="bf-justify-end">End</div>
<div class="bf-justify-between">Space between</div>
<div class="bf-justify-around">Space around</div>
```

### Align Items

```html
<div class="bf-align-start">Start</div>
<div class="bf-align-center">Center</div>
<div class="bf-align-end">End</div>
<div class="bf-align-stretch">Stretch</div>
```
