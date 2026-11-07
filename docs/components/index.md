# Components

Copy-paste HTML patterns composed from Bullframe classes and standard HTML. For single elements and classes, see [Buttons](../buttons), [Forms](../forms), and the rest of Core Concepts.

## Patterns

- [Button patterns](./button-patterns): groups, icon buttons, full-width, submit and reset, disabled with a reason.
- [Form patterns](./forms): login, contact, search, newsletter.
- [Modal patterns](./modals): native `<dialog>`.
- [Card patterns](./cards): content, media, grid, pricing, linked.
- [Navigation patterns](./navigation): header nav, breadcrumb, pagination, skip link, sidebar.

## Conventions

Every snippet on these pages:

- Uses only `.bf-*` classes, standard HTML, and inline styles where no class exists.
- Needs a class-based build (`bullframe.css`, `bullframe-dark.css`, `bullframe-system-default.css`) or a classless build plus `bullframe-utilities.css`. Classless builds alone ship no `.bf-*` classes.
- Is keyboard-accessible and meets WCAG AA contrast with the default tokens.
- Uses no JavaScript, except the dialog open and close calls on [Modal patterns](./modals).
