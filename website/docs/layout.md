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
<div class="bf-container--break-md">Collapses at 991px and below</div>
<div class="bf-container--break-lg">Collapses at 1199px and below</div>
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

### Column Classes

Available column classes: `bf-col-1` through `bf-col-12`.

### No Gutters

Remove grid gutters with `.bf-no-gutters`:

```html
<div class="bf-row bf-no-gutters">
  <div class="bf-col-6">No gutter</div>
  <div class="bf-col-6">No gutter</div>
</div>
```

## Display Utilities

```html
<div class="bf-display-block">Block</div>
<div class="bf-display-inline">Inline</div>
<div class="bf-display-inline-block">Inline block</div>
<div class="bf-display-flex">Flex</div>
<div class="bf-display-inline-flex">Inline flex</div>
<div class="bf-display-block-center">Block centered</div>
```

## Flex Utilities

```html
<div class="bf-display-flex--wrap">Flex wrap</div>
<div class="bf-display-flex--nowrap">Flex nowrap</div>
<div class="bf-display-flex--justify-start">Justify start</div>
<div class="bf-display-flex--justify-center">Justify center</div>
<div class="bf-display-flex--justify-end">Justify end</div>
```

## Float Utilities

```html
<div class="bf-float-left">Float left</div>
<div class="bf-float-right">Float right</div>
<div class="bf-clearfix">Clear floats</div>
```

## Position Utilities

```html
<div class="bf-position-relative">Relative</div>
<div class="bf-position-fixed">Fixed</div>
<div class="bf-position-sticky">Sticky</div>
```

## Width Utilities

```html
<div class="bf-width-25">25% width</div>
<div class="bf-width-33">33% width</div>
<div class="bf-width-50">50% width</div>
<div class="bf-width-75">75% width</div>
<div class="bf-width-100">100% width</div>
<div class="bf-width-auto">Auto width</div>
```

## Visibility Utilities

```html
<div class="bf-visible">Visible</div>
<div class="bf-invisible">Invisible (takes up space)</div>
<div class="bf-hidden">Hidden (no space)</div>
<div class="bf-hide">Hide</div>
<div class="bf-sr-only">Screen reader only</div>
```
