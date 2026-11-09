---
title: Embeds
---

# Embed utilities

`.bf-embed-responsive` keeps an embed at a fixed aspect ratio, 16:9 by default, at any width. An `iframe`, `embed`, `object` or `video` inside it, or any element with `.bf-embed-responsive--item`, fills the box.

| Class                        | Effect                                      |
| ---------------------------- | ------------------------------------------- |
| `.bf-embed-responsive`       | 16:9 box                                    |
| `.bf-embed-responsive--4-3`  | 4:3 box; add next to `.bf-embed-responsive` |
| `.bf-embed-responsive--item` | Makes any element fill the box              |

```html
<div class="bf-embed-responsive">
  <iframe src="https://www.youtube-nocookie.com/embed/<video-id>" title="Video title" allowfullscreen></iframe>
</div>

<div class="bf-embed-responsive bf-embed-responsive--4-3">
  <div class="bf-embed-responsive--item">
    <!-- Custom content -->
  </div>
</div>
```

`<video-id>` is the YouTube video ID.
