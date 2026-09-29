---
name: bullframe-core
description: Core conventions for writing HTML styled with Bullframe CSS. Use before any other Bullframe skill, and whenever choosing a build, scaffolding a page, theming with tokens, or deciding whether to write custom CSS.
bullframe: '>=6.1.0 <7.0.0'
builds: [bullframe.css, bullframe-dark.css, bullframe-system-default.css, bullframe-classless.css, bullframe-classless-dark.css, bullframe-classless-system-default.css, bullframe-utilities.css]
requires: []
docs: ['/getting-started', '/variables', '/theming', '/api-reference']
---

# Bullframe core conventions

<!-- bf-absent: bf-col-md-6, bf-col-sm-12, bf-d-flex, bf-mt-3, bf-text-center, bf-card -->

Bullframe is one stylesheet of plain CSS. No build step, no JavaScript, no components to
import. It styles semantic HTML, then adds `.bf-*` utilities on the class-based builds.

Read [`_shared/conventions.md`](../_shared/conventions.md) and
[`_shared/builds.md`](../_shared/builds.md) alongside this file. They hold the rule list
and the build table this skill applies.

## When to use

Any task that writes or edits HTML in a project that links Bullframe. Every other
Bullframe skill assumes these rules.

## Rules

1. Link exactly one base build. Two base builds cascade over each other and produce
   wrong colours in dark mode.
2. Do not invent classes. Check `api.json` (shipped at
   `node_modules/bullframe.css/dist/skills/api.json`, published at
   <https://bullframecss.marcopontili.com/api.json>). 179 classes, 47 tokens, and nothing
   else exists.
3. Prefer the element over the class. `<button>` is already styled; `.bf-btn` is for
   links that must look like buttons and for buttons that need the framework's chrome.
4. Prefer a utility over a declaration. Before writing `style="margin-bottom: 2rem"`,
   use `.bf-m-b-3`.
5. Prefer a token over a literal. `var(--bf-gray-light)`, not `#ccc`; the dark builds
   rebind those tokens, a literal does not follow.
6. Keep custom CSS in one project stylesheet, loaded after Bullframe, and confine it to
   `:root` token overrides plus genuinely project-specific rules.
7. The root font-size is `62.5%`, so `1rem` is about `10px`. `--bf-body-font-size-rem` is
   `1.6rem`, which renders as 16px.

## Page scaffold

Class-based, light. Every generated page starts here.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page title</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css" />
  </head>
  <body>
    <a class="bf-skip-link" href="#main-content">Skip to content</a>
    <main id="main-content" class="bf-container bf-container--break-md">
      <h1>Page title</h1>
      <p class="bf-lead">One sentence that says what this page is for.</p>
    </main>
  </body>
</html>
```

Classless, same page:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page title</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-classless.min.css" />
  </head>
  <body>
    <main>
      <h1>Page title</h1>
      <p>One sentence that says what this page is for.</p>
    </main>
  </body>
</html>
```

There is no skip link on a classless build: `.bf-skip-link` is not in that stylesheet.

## Layout

`.bf-container` caps width at `114rem` and adds gutters. `.bf-container--fluid` is full
width. `.bf-row` is a flex row with negative gutters, `.bf-col-1` … `.bf-col-12` are
twelfths.

```html
<main id="main-content" class="bf-container bf-container--break-md">
  <section class="bf-row">
    <div class="bf-col-8">Main column</div>
    <div class="bf-col-4">Sidebar</div>
  </section>
</main>
```

Columns in one row sum to 12 or less. Responsiveness is a container modifier:
`--break-xs` stacks below 576px, `--break-md` below 768px, `--break-lg` below 992px.
Use `--break-md` unless there is a reason not to.

## Theming

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css" />
<style>
  :root {
    --bf-blue: rgb(84 47 194);
    --bf-blue-light: rgb(64 32 160);
    --bf-focus-ring-color: rgb(84 47 194);
  }
</style>
```

That restyles links, primary buttons and focus rings across the page. Check contrast:
the shipped blues are WCAG AA (4.5:1) on white, and a replacement has to clear the same
bar.

## Do not

- Do not link `bullframe.css` and `bullframe-dark.css` together, or any two base builds.
- Do not write `.bf-col-md-6`, `.bf-col-sm-12`, `.bf-d-flex`, `.bf-mt-3`, `.bf-text-center`
  or `.bf-card`. None exist. The real names are `.bf-col-6`, `.bf-display-flex`,
  `.bf-m-t-3`, `.bf-t-center`, and a card is composed markup.
- Do not add a theme-toggle script to get dark mode; pick a `-system-default` build.
- Do not set `outline: none` anywhere.
- Do not reimplement the grid, the spacing scale or the type scale in project CSS.
- Do not add a CSS framework alongside Bullframe.

## Canonical docs

- Getting started: <https://bullframecss.marcopontili.com/getting-started.md>
- Variables: <https://bullframecss.marcopontili.com/variables.md>
- Theming: <https://bullframecss.marcopontili.com/theming.md>
- API reference: <https://bullframecss.marcopontili.com/api-reference.md>
- Every class and token as JSON: <https://bullframecss.marcopontili.com/api.json>
