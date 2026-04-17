---
sidebar_position: 4
title: Embeds
---

# Embed Utilities

Responsive embed utilities for iframes, videos, and other embedded content.

## Responsive Embed (16:9)

Wrap your embed in a `.bf-embed-responsive` container for a 16:9 aspect ratio by default:

```html
<div class="bf-embed-responsive">
  <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```

## 4:3 Aspect Ratio

Add `.bf-embed-responsive--4-3` for a 4:3 ratio:

```html
<div class="bf-embed-responsive bf-embed-responsive--4-3">
  <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```

## General Purpose Elements

Use `.bf-embed-responsive--item` on any element to make it behave like an embedded video inside the responsive container:

```html
<div class="bf-embed-responsive">
  <div class="bf-embed-responsive--item">
    <!-- Custom content -->
  </div>
</div>
```

## Supported Elements

The following elements are automatically made responsive inside `.bf-embed-responsive`:

- `<iframe>`
- `<embed>`
- `<object>`
- `<video>`
- `.bf-embed-responsive--item`

## Class Reference

| Class | Description |
|---|---|
| `.bf-embed-responsive` | Responsive container (16:9 default) |
| `.bf-embed-responsive--4-3` | 4:3 aspect ratio modifier |
| `.bf-embed-responsive--item` | Makes any element fill the responsive container |
