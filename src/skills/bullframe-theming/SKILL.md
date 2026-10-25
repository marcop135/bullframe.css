---
name: bullframe-theming
description: Theme Bullframe CSS with token overrides, dark or system builds, and a short project stylesheet. Use when branding colours or fonts, picking a dark or prefers-color-scheme build, or adding custom.css on top of one base build.
bullframe: '>=7.0.0 <8.0.0'
builds: [bullframe.css, bullframe-dark.css, bullframe-system-default.css, bullframe-classless.css, bullframe-classless-dark.css, bullframe-classless-system-default.css, bullframe-utilities.css]
requires: [bullframe-core]
docs: ['/theming', '/theming/dark-mode', '/theming/customization', '/variables']
---

# Theming

<!-- bf-absent: bf-theme, bf-theme-toggle, bf-dark-mode -->

Bullframe themes through CSS custom properties and build choice. Override `--bf-*` tokens
after the stylesheet; do not fork the framework or invent theme classes.

## When to use

Brand colour or type, a dark or system-prefers page, a short `custom.css` on top of one
base build, or any task that changes appearance without new component CSS.

## Inputs to gather

Brand primary colour (and a hover/focus sibling), optional font stacks, light / dark /
system preference, and whether overrides are global (`:root`) or scoped to a class.

## Rules

1. Link exactly one base build. Dark is `bullframe-dark.css`; OS-follows is
   `bullframe-system-default.css` (or the classless equivalents). Do not stack two bases.
2. Override tokens, not selectors. Set `--bf-color-primary`, `--bf-color-primary-hover`,
   `--bf-color-focus-ring`, grays, and font stacks. Links, primary buttons and focus rings
   follow those tokens.
   With a dark or system build, a `:root` override covers both schemes; wrap it in
   `@media (prefers-color-scheme: light)` or `dark` to change one.
3. Load project CSS after Bullframe. Prefer a `<style>` block or one `custom.css` link.
   Keep it to token overrides plus a few layout or type rules.
4. Scope when the brand is not site-wide: put the overrides on a class such as
   `.brand`, not on every page.
5. Replaced blues must clear WCAG AA contrast (4.5:1) on the page background. The shipped
   blues already do; a replacement has to match that bar.
6. Do not add a theme-toggle script to get dark mode. Pick a `-dark` or `-system-default`
   build instead.
7. Leave the HTML alone when tokens suffice. Prefer element styles and utilities over
   restyling `.bf-btn` selectors unless a token cannot reach the property.

## Recipe

1. Choose the build from `bullframe-core` (light, dark, or system; class-based or
   classless).
2. Emit the page scaffold.
3. Add a token block on `:root` or a brand scope class.
4. If a few layout rules are needed, keep them in the same stylesheet and name them for
   the project, not as fake `.bf-*` classes.
5. Check contrast on primary buttons, links and body text.

## Example

[`examples/branded.html`](examples/branded.html) is a class-based page with a scoped brand
class: teal primary tokens, serif headings, and no second Bullframe build.

## Expected output

One HTML file that links exactly one Bullframe stylesheet, overrides only real `--bf-*`
tokens from `api.json`, and needs no JavaScript for theming.

## Failure modes

- Linking `bullframe.css` and `bullframe-dark.css` together.
- Inventing `.bf-theme`, `.bf-theme-toggle` or `.bf-dark-mode`.
- Hard-coding `#0f766e` on buttons instead of setting `--bf-color-primary`.
- Dropping contrast below AA when swapping the primary colour.
- A large custom stylesheet that reimplements grid, spacing or type scales.

## Do not

- Do not write a theme toggle for OS dark mode; use a `-system-default` build.
- Do not put token overrides in a stylesheet loaded before Bullframe.
- Do not rebuild the framework from source for a colour change.
- Do not set `outline: none`; tune `--bf-focus-ring-*` instead.

## Canonical docs

- Theming: <https://bullframecss.marcopontili.com/theming.md>
- Dark mode: <https://bullframecss.marcopontili.com/theming/dark-mode.md>
- Customization: <https://bullframecss.marcopontili.com/theming/customization.md>
- Variables: <https://bullframecss.marcopontili.com/variables.md>
