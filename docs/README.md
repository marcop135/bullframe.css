# Docs

Full reference for Bullframe CSS: semantic HTML by default, classless builds when markup should stay clean, and system dark via `prefers-color-scheme`. About 8 KB gzipped, MIT license, eight stylesheet builds on npm. Any stack.

Start with [Getting started](getting-started.md) if you are new. Live examples: [CodePen collection](https://codepen.io/collection/nxpjRe). Every page is also available as Markdown (append `.md`, or send `Accept: text/markdown`).

## Overview

| | |
|---|---|
| [Getting started](getting-started.md) | Modes, install, CDN/npm, starters |
| [Migration](migration.md) | v5 to v6 |

## Core

| | |
|---|---|
| [Variables](variables.md) | `--bf-*` tokens |
| [Typography](typography.md) | Headings, body, lists |
| [Layout](layout.md) | Containers, grid, responsive |
| [Forms](forms.md) | Controls and validation |
| [Buttons](buttons.md) | Button classes |

## Utilities

| | |
|---|---|
| [Utilities](utilities.md) | Overview |
| [Grid](utilities/grid.md) · [Spacing](utilities/spacing.md) · [Text](utilities/text.md) | Layout helpers |
| [Tables](utilities/tables.md) · [Lists](utilities/lists.md) · [Embeds](utilities/embeds.md) | Content |
| [Filters](utilities/filters.md) · [Print](utilities/print.md) | Extras |

## Components

| | |
|---|---|
| [Components](components/index.md) | Patterns overview |
| [Buttons](components/button-patterns.md) · [Forms](components/forms.md) · [Modals](components/modals.md) | |
| [Cards](components/cards.md) · [Navigation](components/navigation.md) | |

## Theming

| | |
|---|---|
| [Theming](theming.md) | Approach and tokens |
| [Dark mode](theming/dark-mode.md) | Light, dark, system |
| [Customization](theming/customization.md) | Override and extend |

## Reference

| | |
|---|---|
| [Accessibility](accessibility.md) | AA defaults and guidance |
| [Browser support](browser-support.md) | Supported browsers |
| [API reference](api-reference.md) | Properties and classes |

## Local docs site

```bash
npm install
npm run docs:dev
```

Build: `npm run docs:build` · Preview: `npm run docs:preview`
