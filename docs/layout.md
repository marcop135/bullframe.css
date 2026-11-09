# Layout

Containers and the display, flex, float, position, width, visibility and centering classes. They ship in class-based builds and `bullframe-utilities.css`. Columns and rows are on the [Grid system](/utilities/grid) page.

## Containers

`.bf-container` centres content at a max width of 114rem (1140px at the default 62.5% root size) with `--bf-spacing-grid-gutter` side padding. `.bf-container--fluid` keeps the padding without the max width.

```html
<div class="bf-container">
  <!-- Your content -->
</div>

<div class="bf-container--fluid">
  <!-- Your content -->
</div>
```

To stack columns to full width below a breakpoint, add a `bf-container--break-*` modifier; see [Grid system: responsive columns](/utilities/grid#responsive-columns).

## Display and flex

| Class                              | Effect                                                    |
| ---------------------------------- | --------------------------------------------------------- |
| `.bf-display-block`                | `display: block`                                          |
| `.bf-display-block-center`         | `display: block`, auto side margins, `text-align: center` |
| `.bf-display-inline`               | `display: inline`                                         |
| `.bf-display-inline-block`         | `display: inline-block`                                   |
| `.bf-display-flex`                 | `display: flex`                                           |
| `.bf-display-inline-flex`          | `display: inline-flex`                                    |
| `.bf-display-flex--wrap`           | `flex-wrap: wrap`                                         |
| `.bf-display-flex--nowrap`         | `flex-wrap: nowrap`                                       |
| `.bf-display-flex--justify-start`  | `justify-content: flex-start`                             |
| `.bf-display-flex--justify-center` | `justify-content: center`                                 |
| `.bf-display-flex--justify-end`    | `justify-content: flex-end`                               |

The `--wrap`, `--nowrap` and `--justify-*` classes do not set `display`; combine them with `.bf-display-flex`:

```html
<div class="bf-display-flex bf-display-flex--justify-center">Centred row</div>
```

## Centering

| Class                            | Effect                                                 |
| -------------------------------- | ------------------------------------------------------ |
| `.bf-align-center-flex`          | Flex, centred on both axes, `height: 100vh`            |
| `.bf-align-center-unknown`       | `position: relative` parent                            |
| `.bf-align-center-unknown--item` | Absolutely centred child of `.bf-align-center-unknown` |

## Float and position

| Class                   | Effect                           |
| ----------------------- | -------------------------------- |
| `.bf-float-left`        | `float: left`                    |
| `.bf-float-right`       | `float: right`                   |
| `.bf-clearfix`          | Contains floated children        |
| `.bf-position-relative` | `position: relative`             |
| `.bf-position-fixed`    | `position: fixed`                |
| `.bf-position-sticky`   | `position: sticky` with `top: 0` |

`.bf-z-index-N` sets `z-index: N` for N from 1 to 9, 10 to 90 in tens, and 100, 200 and 300.

## Width

`.bf-width-25`, `.bf-width-33`, `.bf-width-50`, `.bf-width-75` and `.bf-width-100` set that percentage width (`-33` is 33.3333%). `.bf-width-auto` sets `width: auto`.

## Visibility

| Class           | Effect                                   |
| --------------- | ---------------------------------------- |
| `.bf-visible`   | `visibility: visible`                    |
| `.bf-invisible` | `visibility: hidden`; keeps its space    |
| `.bf-hide`      | `display: none`                          |
| `.bf-hidden`    | `display: none` and `visibility: hidden` |

To hide content visually but keep it for screen readers, use `.bf-sr-only`; see [Accessibility](/accessibility).
