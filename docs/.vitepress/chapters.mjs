// Single source of truth for the docs-site navigation.
//
// `chapters` defines the sidebar: an ordered list of groups, each with the
// markdown files (paths relative to `docs/`) that belong to it. When you add
// or move a doc under `docs/`, add it to a chapter here.

export const excludeDirs = [];

export const chapters = [
  {
    text: 'Overview',
    files: ['README.md', 'getting-started.md', 'migration.md'],
  },
  {
    text: 'Core Concepts',
    files: ['variables.md', 'typography.md', 'layout.md', 'forms.md', 'buttons.md'],
  },
  {
    text: 'Utilities',
    files: [
      'utilities.md',
      'utilities/grid.md',
      'utilities/spacing.md',
      'utilities/text.md',
      'utilities/tables.md',
      'utilities/lists.md',
      'utilities/embeds.md',
      'utilities/filters.md',
      'utilities/print.md',
    ],
  },
  {
    text: 'Components',
    files: [
      'components/index.md',
      'components/button-patterns.md',
      'components/forms.md',
      'components/modals.md',
      'components/cards.md',
      'components/navigation.md',
    ],
  },
  {
    text: 'Theming',
    files: ['theming.md', 'theming/dark-mode.md', 'theming/customization.md'],
  },
  {
    text: 'Reference',
    files: ['accessibility.md', 'browser-support.md', 'api-reference.md'],
  },
];
