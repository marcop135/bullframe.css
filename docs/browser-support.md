# Browser Support

Bullframe CSS targets browsers covered by the Browserslist query in [`.browserslistrc`](https://github.com/marcop135/bullframe.css/blob/v6/.browserslistrc): **`defaults`**. Autoprefixer uses that same query when building CSS. Prefixes are added where needed; there are no polyfills for unsupported CSS APIs.

## Builds

All seven builds (default / classless / utilities / dark / system-default) are intended for that `defaults` audience. They rely on:

- CSS custom properties (`--bf-*`)
- Flexbox and CSS Grid
- `prefers-color-scheme` (system-default builds)
- Modern `rgb()` color syntax
- Progressive enhancements gated with `@supports` where needed (for example range styling and some form/dialog polish)

Optional enhancements in the default pipeline (UA+ layer) use `@supports` / `prefers-reduced-motion` so older engines keep usable native UI.

## Mobile

Tested against current Chromium and WebKit mobile. Forms (`select`, `range`) and `<dialog>` are the most engine-specific surfaces; spot-check iOS Safari when shipping custom form chrome.

## Accessibility preferences

- `prefers-reduced-motion`: dialog enter transitions are skipped when reduced motion is requested
- `forced-colors` / high contrast: marked text and related rules adapt under Windows forced colors where implemented

## Checking support

Inspect [`.browserslistrc`](https://github.com/marcop135/bullframe.css/blob/v6/.browserslistrc) and [browsersl.ist](https://browsersl.ist/) for the live coverage of `defaults`.
