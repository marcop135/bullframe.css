// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bullframe CSS',
  tagline: 'The Lightweight CSS Framework',
  favicon: '../dist/favicon.ico',

  // Set the production url of your site here
  url: 'https://bullframecss.marcopontili.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'marcop135',
  projectName: 'bullframe.css',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to set "zh-Hans" here instead of "en".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/client-modules/colorMode.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/marcop135/bullframe.css/tree/v6/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Color mode configuration
      colorMode: {
        defaultMode: 'dark', // Default to dark (will be overridden by system preference if respectPrefersColorScheme is true)
        disableSwitch: false,
        respectPrefersColorScheme: true, // Respect user's system preference (dark/light) - overrides defaultMode
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Bullframe CSS',
        logo: {
          alt: 'Bullframe CSS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/marcop135/bullframe.css',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/bullframe.css',
            label: 'npm',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'CSS Variables',
                to: '/docs/variables',
              },
              {
                label: 'Utilities',
                to: '/docs/utilities',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/marcop135/bullframe.css',
              },
              {
                label: 'Issues',
                href: 'https://github.com/marcop135/bullframe.css/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Demo',
                href: 'https://bullframecss.marcopontili.com',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/bullframe.css',
              },
              {
                label: 'License',
                href: 'https://github.com/marcop135/bullframe.css/blob/master/LICENSE',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Marco Pontili. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
