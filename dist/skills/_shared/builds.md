# Choosing a build

Seven stylesheets, one token set. Pick one base build. `bullframe-utilities.css` is the
only sheet that layers on top of another.

| Build                                    | npm subpath                      | Markup mode | Theme                  |
| ---------------------------------------- | -------------------------------- | ----------- | ---------------------- |
| `bullframe.css`                          | `bullframe.css`                  | class-based | light                  |
| `bullframe-dark.css`                     | `bullframe.css/dark`             | class-based | always dark            |
| `bullframe-system-default.css`           | `bullframe.css/system`           | class-based | `prefers-color-scheme` |
| `bullframe-classless.css`                | `bullframe.css/classless`        | classless   | light                  |
| `bullframe-classless-dark.css`           | `bullframe.css/classless/dark`   | classless   | always dark            |
| `bullframe-classless-system-default.css` | `bullframe.css/classless/system` | classless   | `prefers-color-scheme` |
| `bullframe-utilities.css`                | `bullframe.css/utilities`        | helpers     | none                   |

## Decision

1. Did the user name a build? Use it.
2. Is the page prose (article, docs, changelog, README-style) with no multi-column
   layout? Use **classless**. No class attributes at all.
3. Does the page need the grid, buttons, or any `.bf-*` helper? Use **class-based**.
4. Does the project already ship its own reset and base typography? Use **utilities**.
5. Theme: `-system-default` when the user wants dark to follow the OS, `-dark` when
   dark is unconditional, neither for light only.

With no instruction, use `bullframe.css` (class-based, light) and say so in one line.

## Classless is not a subset

The classless builds contain no `.bf-*` rules at all. `.bf-container`, `.bf-btn`,
`.bf-skip-link` and every utility are absent there. Writing `class="bf-row"` against a
classless build produces unstyled markup. If a page needs one utility, it needs a
class-based build, or the utilities sheet alongside.

## Linking it

CDN, latest release:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css" />
```

Another build over CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-classless.min.css" />
```

npm:

```js
import 'bullframe.css';
import 'bullframe.css/classless/dark';
```

Version-pinned URLs with Subresource Integrity live at
<https://bullframecss.marcopontili.com/sri.json> and in
<https://bullframecss.marcopontili.com/getting-started>.

## Utilities on top

```html
<link rel="stylesheet" href="/my-reset.css" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-utilities.min.css" />
```

That is the one supported stacking order: your base first, utilities second.
