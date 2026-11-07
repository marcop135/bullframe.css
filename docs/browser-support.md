# Browser support

All seven builds target the Browserslist query **`defaults`**, set in [`.browserslistrc`](https://github.com/marcop135/bullframe.css/blob/main/.browserslistrc). Autoprefixer adds vendor prefixes for that query at build time. There are no polyfills. See the live coverage of `defaults` on [browsersl.ist](https://browsersl.ist/#q=defaults).

## Required CSS features

- Custom properties (`--bf-*`)
- Flexbox and Grid
- Space-separated `rgb()` colour syntax
- `prefers-color-scheme` (system-default builds)

## Progressive enhancements

Engines without these features skip them and keep native UI. All are gated with `@supports` or a media query.

| Feature                                      | Gate                                    | Builds                 |
| -------------------------------------------- | --------------------------------------- | ---------------------- |
| Balanced heading wrap (`text-wrap: balance`) | `@supports (text-wrap: balance)`        | Class-based, classless |
| Stable scrollbar gutter                      | `@supports (scrollbar-gutter: stable)`  | Class-based, classless |
| Custom range input styling                   | `@supports (appearance: none)`          | Class-based, classless |
| Dialog and popover enter transitions         | `@supports (overlay: auto)`             | Class-based, classless |
| Smooth scrolling and dialog transitions      | `prefers-reduced-motion: no-preference` | Class-based, classless |

## Accessibility preferences

| Preference                       | Effect                                                                                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `prefers-reduced-motion: reduce` | No smooth scrolling or dialog transitions. `.bf-reduced-motion` (class-based, utilities) stops all animation and transitions in its subtree |
| `prefers-contrast: more`         | Underlined links, darker `--bf-color-focus-ring`, thicker focus outline, 2px field borders                                                  |
| `forced-colors: active`          | `Highlight` focus outlines (fields included), underlined links, `mark` in system colours, button borders                                    |

## Testing

Playwright visual tests run in desktop Chromium, Firefox and WebKit. Form controls (`select`, `range`) and `<dialog>` vary most between engines: check them in iOS Safari when you restyle them.
