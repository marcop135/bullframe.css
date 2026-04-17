---
sidebar_position: 7
title: Filters
---

# Filter Utilities

CSS filter utilities for visual effects on images and elements.

## Available Filters

### Invert

Fully inverts the colors of an element:

```html
<img class="bf-filter-invert" src="photo.jpg" alt="Inverted image">
```

### Dim Images

Reduces brightness and increases contrast slightly — useful for dark mode image adjustments:

```html
<img class="bf-filter-dim-images" src="photo.jpg" alt="Dimmed image">
```

### Grayscale

Converts an element to grayscale:

```html
<img class="bf-filter-grayscale" src="photo.jpg" alt="Grayscale image">
```

### Blur

Applies a subtle blur effect:

```html
<img class="bf-filter-blur" src="photo.jpg" alt="Blurred image">
```

### Remove Filters

Reset all filters on an element:

```html
<img class="bf-filter-none" src="photo.jpg" alt="No filters">
```

## Class Reference

| Class | Effect |
|---|---|
| `.bf-filter-invert` | `filter: invert(100%)` |
| `.bf-filter-dim-images` | `filter: brightness(0.8) contrast(1.2)` |
| `.bf-filter-grayscale` | `filter: grayscale(1)` |
| `.bf-filter-blur` | `filter: blur(0.3rem)` |
| `.bf-filter-none` | `filter: none` |
