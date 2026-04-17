/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'variables',
        'typography',
        'layout',
        'forms',
        'buttons',
      ],
    },
    {
      type: 'category',
      label: 'Utilities',
      items: [
        'utilities',
        'utilities/grid',
        'utilities/spacing',
        'utilities/text',
        'utilities/tables',
        'utilities/lists',
        'utilities/embeds',
        'utilities/filters',
        'utilities/print',
      ],
    },
    {
      type: 'category',
      label: 'Theming',
      items: [
        'theming',
        'theming/dark-mode',
        'theming/customization',
      ],
    },
    'accessibility',
    'browser-support',
    'migration',
  ],
};

module.exports = sidebars;
