---
title: Filters
---

# Filter utilities

Classes that apply a CSS `filter` to an image or any element.

| Class                   | Filter                          | `!important` |
| ----------------------- | ------------------------------- | ------------ |
| `.bf-filter-invert`     | `invert(100%)`                  | Yes          |
| `.bf-filter-dim-images` | `brightness(0.8) contrast(1.2)` | No           |
| `.bf-filter-grayscale`  | `grayscale(1)`                  | Yes          |
| `.bf-filter-blur`       | `blur(0.3rem)`                  | Yes          |
| `.bf-filter-none`       | `none`                          | Yes          |

```html
<img class="bf-filter-dim-images" src="photo.jpg" alt="Harbour at dusk" />
```

`.bf-filter-dim-images` suits photos on a dark page. `.bf-filter-none` removes a filter set elsewhere.
