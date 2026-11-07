# Card patterns

<!-- bf-absent: bf-card -->

Bullframe has no `.bf-card` class: card styling varies too much between projects for one class to fit. Compose cards from spacing and text utilities, tokens, and a few inline styles.

## Content card

```html
<article class="bf-m-b-3" style="border: 1px solid var(--bf-color-border); border-radius: 4px; padding: 1.5rem;">
  <h3 class="bf-m-t-0">Article title</h3>
  <p>One- or two-line summary of the article.</p>
  <a class="bf-btn" href="#">Read more</a>
</article>
```

## Media card

Image on top, content below. `overflow: hidden` clips the image to the rounded corners.

```html
<article style="border: 1px solid var(--bf-color-border); border-radius: 4px; overflow: hidden;">
  <img src="hero.jpg" alt="" style="display: block; width: 100%; height: auto;" />
  <div style="padding: 1.5rem;">
    <h3 class="bf-m-t-0">Card with image</h3>
    <p>Content sits below the image.</p>
    <a class="bf-btn bf-btn--primary" href="#">View</a>
  </div>
</article>
```

`alt=""` marks the image as decorative. Give a meaningful image, such as a chart or screenshot, real alt text.

## Responsive card grid

Three columns from 768px up, stacked below. The breakpoint is set on the container with `.bf-container--break-md`; there are no per-breakpoint column classes.

```html
<div class="bf-container bf-container--break-md">
  <div class="bf-row">
    <div class="bf-col-4">
      <!-- card -->
    </div>
    <div class="bf-col-4">
      <!-- card -->
    </div>
    <div class="bf-col-4">
      <!-- card -->
    </div>
  </div>
</div>
```

## Pricing card

```html
<article class="bf-t-center" style="border: 2px solid var(--bf-color-primary); border-radius: 8px; padding: 2rem;">
  <h3 class="bf-m-t-0">Pro</h3>
  <p style="font-size: 3rem; margin: 0;">
    <strong>$12</strong>
    <small style="font-size: 1rem; color: var(--bf-color-text-subtle);">/month</small>
  </p>
  <ul class="bf-list-unstyled bf-m-b-2">
    <li>Unlimited projects</li>
    <li>Priority support</li>
    <li>Custom domains</li>
  </ul>
  <a class="bf-btn bf-btn--primary" style="width: 100%;" href="#">Choose Pro</a>
</article>
```

## Linked card

Wrap the card in `<a>` to make the whole card the link target. Do not nest buttons or links inside it.

```html
<a href="/article/42" style="display: block; text-decoration: none; color: inherit;">
  <article style="border: 1px solid var(--bf-color-border); border-radius: 4px; padding: 1.5rem;">
    <h3 class="bf-m-t-0">Title</h3>
    <p>The whole card is the link target.</p>
  </article>
</a>
```
