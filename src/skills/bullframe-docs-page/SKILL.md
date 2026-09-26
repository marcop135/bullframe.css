---
name: bullframe-docs-page
description: Build a documentation, article or reference page with Bullframe CSS. Use for docs, guides, changelogs, help center articles, blog posts, or any prose-first page.
bullframe: '>=6.1.0 <7.0.0'
builds: [bullframe-classless.css, bullframe-classless-dark.css, bullframe-classless-system-default.css, bullframe.css]
requires: [bullframe-core]
docs: ['/typography', '/getting-started', '/examples']
---

# Documentation page

<!-- bf-absent: bf-prose, bf-article, bf-toc -->

Prose is where the classless builds win. Semantic HTML with no class attributes at all
renders as a finished document: headings, lists, tables, quotes, code blocks and figures
are styled by element.

## When to use

Documentation, a guide, a changelog, a help center article, a blog post, an API page, or
any page that is mostly text.

## Inputs to gather

Title, section outline, whether a table of contents or breadcrumb is needed, code sample
languages, and the theme. Default to the classless light build and say so.

## Rules

1. Default to `bullframe-classless.css`. Write zero class attributes. Escalate to the
   class-based build only when the page needs a real multi-column layout, and state why.
2. `.bf-*` classes do not exist in a classless build. Writing them there produces
   unstyled markup.
3. One `<h1>`, then `<h2>` sections in order. Give every heading that is a link target an
   `id`.
4. The body is `<article>` inside `<main>`. A table of contents is a `<nav>` with an
   `aria-label` and an ordered list.
5. Code samples are `<pre><code>`. Inline code is `<code>`. Do not add a highlighter
   unless the task asks for one.
6. Tables carry a `<caption>` and `<th scope="col">` headers.
7. Use `<blockquote>`, `<figure>` with `<figcaption>`, `<dl>`, `<abbr>` and `<time>` where
   they fit. All of them are styled.
8. A skip link needs `.bf-skip-link`, which only exists on class-based builds. On a
   classless page, a `<main>` landmark plus ordered headings is the accessible structure.

## Recipe

1. Confirm the page is prose. If it needs a sidebar with independent scroll, it is a
   layout page, not this.
2. Emit the classless scaffold from `bullframe-core`.
3. Breadcrumb `<nav>` in `<header>` if the page sits inside a hierarchy.
4. `<article>` with the `<h1>`, a lead paragraph, then the sections.
5. Table of contents as a `<nav aria-label="On this page">` with anchors matching the
   heading ids.
6. Close with a `<footer>` carrying the review date or edit link.

## Example

[`examples/docs-page.html`](examples/docs-page.html) is a complete classless page:
breadcrumb, table of contents, code block, captioned table and a quote. It contains no
class attribute.

## Expected output

An HTML file whose class attribute count is zero on the classless path, and which reads
correctly with stylesheets disabled.

## Failure modes

- Reaching for `.bf-container` or `.bf-lead` on a classless build, where neither exists.
- Wrapping every paragraph in a `<div>`.
- Restating framework typography in a `<style>` block.
- Heading levels chosen for size rather than structure; use `.bf-h1` … `.bf-h6` on a
  class-based build when the visual level must differ from the semantic one.
- A table of contents built from `<div>`s instead of a `<nav>` and a list.
- Anchors that do not match any heading id.

## Do not

- Do not add a JavaScript table of contents generator for a static page.
- Do not mix a classless build with utility classes; add the utilities sheet if you need
  them, or move to the class-based build.
- Do not put a skip link on a classless page; the class is not in that stylesheet.

## Canonical docs

- Typography: <https://bullframecss.marcopontili.com/typography.md>
- Getting started: <https://bullframecss.marcopontili.com/getting-started.md>
- Examples, including the classless blog: <https://bullframecss.marcopontili.com/examples>
