---
sidebar_position: 5
---

# Card Patterns

Bullframe doesn't ship a `.bf-card` class. Cards are usually one box with padding, a border or shadow, and consistent spacing — easy enough to compose from existing utilities.

## Content card

```html
<article class="bf-m-b-3" style="border: 1px solid var(--bf-gray-light); border-radius: 4px; padding: 1.5rem;">
  <h3 class="bf-m-t-0">Article title</h3>
  <p>One- or two-line summary of the article. Just enough to entice without giving away the lede.</p>
  <a class="bf-btn" href="#">Read more</a>
</article>
```

Why no `.bf-card` class? Because every team's card looks different — different border radius, padding, shadow, spacing. Forcing a single class makes overrides ugly. Compose from utilities and a few inline custom properties.

## Media card

Image on top, content below.

```html
<article style="border: 1px solid var(--bf-gray-light); border-radius: 4px; overflow: hidden;">
  <img src="hero.jpg" alt="" style="display: block; width: 100%; height: auto;">
  <div style="padding: 1.5rem;">
    <h3 class="bf-m-t-0">Card with image</h3>
    <p>Content sits below the image. The <code>overflow: hidden</code> on the parent clips the image to the rounded corner.</p>
    <a class="bf-btn bf-btn--primary" href="#">View</a>
  </div>
</article>
```

Note `alt=""` on decorative images — keeps the link list clean for screen readers. If the image is meaningful (a chart, a screenshot), give it a real alt.

## Card grid (responsive)

3-up on desktop, 2-up on tablet, 1-up on phone.

```html
<div class="bf-row">
  <div class="bf-col-12 bf-col-md-6 bf-col-lg-4">
    <!-- card -->
  </div>
  <div class="bf-col-12 bf-col-md-6 bf-col-lg-4">
    <!-- card -->
  </div>
  <div class="bf-col-12 bf-col-md-6 bf-col-lg-4">
    <!-- card -->
  </div>
</div>
```

For the modern variant: drop the breakpoint classes and use a container query instead.

## Pricing card

```html
<article class="bf-t-center" style="border: 2px solid var(--bf-blue); border-radius: 8px; padding: 2rem;">
  <h3 class="bf-m-t-0">Pro</h3>
  <p style="font-size: 3rem; margin: 0;">
    <strong>$12</strong>
    <small style="font-size: 1rem; color: var(--bf-gray-dark);">/month</small>
  </p>
  <ul class="bf-list-unstyled bf-m-b-2">
    <li>Unlimited projects</li>
    <li>Priority support</li>
    <li>Custom domains</li>
  </ul>
  <a class="bf-btn bf-btn--primary" style="width: 100%;" href="#">Choose Pro</a>
</article>
```

## Linked card (whole card clickable)

Wrap in `<a>` and reset its appearance. Avoid nested interactive elements inside the link.

```html
<a href="/article/42" style="display: block; text-decoration: none; color: inherit;">
  <article style="border: 1px solid var(--bf-gray-light); border-radius: 4px; padding: 1.5rem;">
    <h3 class="bf-m-t-0">Title</h3>
    <p>Whole card is the link target. No nested buttons or links inside.</p>
  </article>
</a>
```
