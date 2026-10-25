# CSS Variables

Bullframe CSS uses CSS custom properties (variables) for easy customization. All variables use the `--bf-*` prefix and are defined on `:root`.

## Naming

Every token follows `--bf-<category>-<role>[-<property>][-<state>]`: `--bf-color-primary-hover`, `--bf-color-field-shadow-focus`, `--bf-space-lg`, `--bf-font-size-body`. Colours are named for the job they do, not the hue, so one override changes one role. v6 names are listed in the [v6 to v7 migration guide](/migration-v7).

## Color Variables

Values are `rgb()`; any CSS colour works as an override.

### Page

| Token                                  | Light                         | Dark          | Role                                       |
| -------------------------------------- | ----------------------------- | ------------- | ------------------------------------------ |
| `--bf-color-bg`                        | `255 255 255`                 | `28 28 28`    | Page and dialog background                 |
| `--bf-color-text`                      | `34 34 34`                    | `240 240 240` | Page and dialog text                       |
| `--bf-color-text-muted`                | `118 118 118`                 | `153 153 153` | `blockquote small`                         |
| `--bf-color-text-subtle`               | `102 102 102`                 | same          | Secondary text (for your own CSS)          |
| `--bf-color-text-shadow`               | `34 34 34`                    | same          | `.bf-t-shadow`                             |
| `--bf-color-contrast`                  | `0 0 0`                       | same          | Maximum-contrast black                     |
| `--bf-color-surface`                   | `233 233 233`                 | same          | Panels and placeholders (for your own CSS) |
| `--bf-color-border` / `-border-strong` | `204 204 204` / `102 102 102` | same          | Borders                                    |
| `--bf-color-overlay-bg`                | `255 255 255`                 | same          | Skip link background                       |
| `--bf-color-caption`                   | `118 118 118`                 | `204 204 204` | Table `caption`                            |

### Primary and Neutral

| Token                                   | Light                         | Dark                | Role                                                              |
| --------------------------------------- | ----------------------------- | ------------------- | ----------------------------------------------------------------- |
| `--bf-color-primary`                    | `0 86 179`                    | same                | Links, primary buttons, focused fields, accent (WCAG AA on white) |
| `--bf-color-primary-hover`              | `0 65 135`                    | same                | Hover of the above                                                |
| `--bf-color-primary-subtle`             | `190 216 254`                 | same                | Light primary tint                                                |
| `--bf-color-primary-shadow-focus`       | `0 65 135 / 35%`              | `190 216 254 / 75%` | Primary button focus shadow                                       |
| `--bf-color-on-primary`                 | `255 255 255`                 | same                | Text on primary                                                   |
| `--bf-color-neutral` / `-neutral-hover` | `204 204 204` / `184 184 184` | same                | Default button fill                                               |
| `--bf-color-on-neutral`                 | `34 34 34`                    | same                | Default button text                                               |
| `--bf-color-button-shadow-focus`        | `0 0 0 / 15%`                 | `255 255 255 / 45%` | Default button focus shadow                                       |

### Forms

| Token                                       | Light                         | Dark                          | Role                                         |
| ------------------------------------------- | ----------------------------- | ----------------------------- | -------------------------------------------- |
| `--bf-color-field-bg`                       | `255 255 255`                 | `17 17 17`                    | Text field background                        |
| `--bf-color-field-border`                   | `138 138 138`                 | `0 0 0`                       | Text field border                            |
| `--bf-color-field-shadow-focus`             | `0 86 179 / 25%`              | `3 102 214 / 50%`             | Focused field shadow                         |
| `--bf-color-placeholder`                    | `102 102 102`                 | `153 153 153`                 | Placeholder text                             |
| `--bf-color-control-bg` / `-control-border` | `255 255 255` / `138 138 138` | `255 255 255` / `153 153 153` | Radio, checkbox, range thumb, `.bf-disabled` |
| `--bf-color-range-track`                    | `233 233 233`                 | `17 17 17`                    | Range track                                  |
| `--bf-color-progress-track`                 | `204 204 204`                 | `51 51 51`                    | Progress track                               |
| `--bf-color-danger`                         | `255 0 0`                     | `255 38 38`                   | `.bf-invalid` and invalid-state helpers      |

### Highlight and Tables

| Token                         | Light         | Dark          | Role                    |
| ----------------------------- | ------------- | ------------- | ----------------------- |
| `--bf-color-highlight`        | `255 255 0`   | `230 230 0`   | `mark`                  |
| `--bf-color-highlight-subtle` | `255 255 153` | `255 255 200` | `ins`                   |
| `--bf-color-table-border`     | `138 138 138` | `102 102 102` | `.bf-table` borders     |
| `--bf-color-table-stripe`     | `233 233 233` | `51 51 51`    | `.bf-table--zebra` rows |

### Hooks

Undeclared in light builds, so they follow `--bf-color-primary` (also when you scope it to a component). Dark sheets set them; set them yourself to split links or focused fields from the primary colour.

| Token                                                    | Light fallback             | Dark                     |
| -------------------------------------------------------- | -------------------------- | ------------------------ |
| `--bf-color-link`                                        | `--bf-color-primary`       | `77 165 255`             |
| `--bf-color-link-hover`                                  | `--bf-color-primary-hover` | `77 165 255`             |
| `--bf-color-field-border-focus`                          | `--bf-color-primary`       | `26 140 255`             |
| `--bf-color-field-text`                                  | inherited text             | `204 204 204`            |
| `--bf-color-scrollbar-track` / `-thumb` / `-thumb-hover` | browser default            | `17` / `97` / `115` grey |

### Focus Ring

```css
:root {
  --bf-color-focus-ring: rgb(255 165 0);
  --bf-focus-ring-width: 0.2rem;
  --bf-focus-ring-offset: 0.3rem;
}
```

Under `prefers-contrast: more`, `--bf-color-focus-ring` is raised automatically for WCAG 1.4.11. Override these tokens to restyle keyboard focus globally. See [Accessibility](/accessibility).

## Spacing Variables

```css
:root {
  --bf-space-sm: 0.25rem;
  --bf-space-md: 0.5rem;
  --bf-space-lg: 1rem;
  --bf-space-xl: 2rem;
  --bf-space-xxl: 3rem;
  --bf-space-gutter: 1.5rem;
}
```

## Typography Variables

```css
:root {
  --bf-font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --bf-font-serif: Georgia, Times, 'Times New Roman', serif;
  --bf-font-mono: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  --bf-font-size-body: 1.6rem;
  --bf-line-height-body: 1.5;
}
```

## Breakpoint Variables

```css
:root {
  --bf-breakpoint-xs: 0;
  --bf-breakpoint-sm: 576px;
  --bf-breakpoint-md: 768px;
  --bf-breakpoint-lg: 992px;
  --bf-breakpoint-xl: 1200px;
  --bf-breakpoint-xxl: 1400px;
}
```

## Customizing Variables

Override any token after Bullframe loads. Light tokens sit at zero specificity (`:where(:root)`), so a plain `:root` rule always wins:

```css
:root {
  --bf-color-primary: rgb(0 112 74);
  --bf-space-lg: 1.5rem;
}
```

Scope a token to one component:

```css
.my-component {
  --bf-color-primary: rgb(180 0 0);
}
```

Light and dark read the same tokens. With a dark or system-default build, a `:root` override loaded after Bullframe applies to both schemes. To change one scheme only, wrap it:

```css
@media (prefers-color-scheme: light) {
  :root {
    --bf-color-bg: rgb(250 247 240);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --bf-color-bg: rgb(18 18 24);
  }
}
```
