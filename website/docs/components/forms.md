---
sidebar_position: 3
---

# Form Patterns

Full-form snippets. For individual form-element styling, see [Forms](../forms).

## Login form

```html
<form class="bf-container" style="max-width: 28rem;">
  <h2>Log in</h2>

  <label for="login-email">Email</label>
  <input id="login-email" type="email" name="email" required autocomplete="email">

  <label for="login-password">Password</label>
  <input id="login-password" type="password" name="password" required autocomplete="current-password">

  <p class="bf-m-t-2">
    <button type="submit" class="bf-btn bf-btn--primary" style="width: 100%;">Log in</button>
  </p>
  <p class="bf-t-center">
    <a href="/forgot">Forgot password?</a>
  </p>
</form>
```

Why these autocomplete tokens matter: password managers and `<input>` fill behavior depend on them. Skipping `autocomplete="current-password"` breaks 1Password and the OS keychain.

## Contact form

```html
<form class="bf-container" style="max-width: 36rem;">
  <h2>Get in touch</h2>

  <label for="contact-name">Name</label>
  <input id="contact-name" type="text" name="name" required autocomplete="name">

  <label for="contact-email">Email</label>
  <input id="contact-email" type="email" name="email" required autocomplete="email">

  <label for="contact-subject">Subject</label>
  <select id="contact-subject" name="subject" required>
    <option value="">Choose one&hellip;</option>
    <option value="sales">Sales</option>
    <option value="support">Support</option>
    <option value="other">Other</option>
  </select>

  <label for="contact-message">Message</label>
  <textarea id="contact-message" name="message" rows="5" required></textarea>

  <button type="submit" class="bf-btn bf-btn--primary">Send</button>
</form>
```

## Search bar (inline)

```html
<form role="search" style="display: flex; gap: 0.5rem;">
  <label class="bf-sr-only" for="site-search">Search</label>
  <input id="site-search" type="search" name="q" placeholder="Search&hellip;" style="flex: 1;">
  <button type="submit" class="bf-btn">Search</button>
</form>
```

`role="search"` is a landmark — screen readers list it in their navigation menu.

## Newsletter signup

```html
<form style="display: flex; gap: 0.5rem; max-width: 32rem;">
  <label class="bf-sr-only" for="newsletter-email">Email</label>
  <input id="newsletter-email" type="email" name="email" required placeholder="you@example.com" style="flex: 1;">
  <button type="submit" class="bf-btn bf-btn--primary">Subscribe</button>
</form>
```

## Form with validation hint (modern variant)

Requires `bullframe-modern.css`. The submit button dims when any field is invalid — no JavaScript.

```html
<form class="bf-form-modern" style="max-width: 28rem;">
  <label for="modern-email">Email</label>
  <input id="modern-email" type="email" required>

  <label for="modern-password">Password</label>
  <input id="modern-password" type="password" required minlength="8">

  <button type="submit" class="bf-btn bf-btn--primary">Create account</button>
</form>
```

The `:has(:invalid)` selector handles this in pure CSS. Browser support: Chrome 105+, Safari 15.4+, Firefox 121+.
