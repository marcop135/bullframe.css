import { defineConfig } from 'vitepress';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { chapters, excludeDirs } from './chapters.mjs';

const docsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Derive a nav label from a doc's first H1 (falls back to a prettified filename).
function titleFor(rel) {
  try {
    const text = readFileSync(resolve(docsRoot, rel), 'utf8');
    const m = text.match(/^#\s+(.+?)\s*$/m);
    if (m) return m[1].replace(/[`*_]/g, '').trim();
  } catch {
    /* fall through to filename */
  }
  const base = rel.split('/').pop().replace(/\.md$/i, '');
  return base.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const linkFor = (rel) => '/' + rel.replace(/\.md$/i, '');

const sidebar = chapters.map((c) => ({
  text: c.text,
  // Keep Overview open; collapse the rest so first paint stays light.
  collapsed: c.text !== 'Overview',
  items: c.files.map((f) => ({ text: titleFor(f), link: linkFor(f) })),
}));

const siteUrl = 'https://bullframecss.marcopontili.com';
const siteDescription =
  'Semantic by default. Classless when you want it. System dark built in. Zero JavaScript. Eight builds.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Bullframe CSS',
      url: siteUrl,
      description: siteDescription,
      inLanguage: 'en-US',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Bullframe CSS',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      url: siteUrl,
      description: siteDescription,
      license: 'https://opensource.org/licenses/MIT',
      codeRepository: 'https://github.com/marcop135/bullframe.css',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  ],
};

/** Serve static demo HTML for /demo/ in docs:dev (VitePress SPA would 404 otherwise). */
function serveDemoHtml() {
  return {
    name: 'bf-serve-demo-html',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/demo' || url === '/demo/') {
          req.url = '/demo/index.html';
        }
        next();
      });
    },
  };
}

export default defineConfig({
  title: 'Bullframe CSS',
  description: siteDescription,
  lang: 'en-US',
  cleanUrls: true,
  base: '/',
  ignoreDeadLinks: false,
  sitemap: {
    hostname: siteUrl,
  },
  markdown: {
    html: true,
  },
  srcExclude: [...excludeDirs.map((d) => `${d}/**`), '**/node_modules/**'],
  // Dev nav felt 1–3s cold: avoid watching build output, warm common pages.
  vite: {
    plugins: [serveDemoHtml()],
    server: {
      watch: {
        ignored: [
          '**/docs/.vitepress/dist/**',
          '**/docs/.vitepress/cache/**',
          '**/docs/.vitepress/.temp/**',
        ],
      },
      warmup: {
        clientFiles: [
          './.vitepress/theme/index.js',
          './.vitepress/theme/components/HomeAfterHero.vue',
          './index.md',
          './README.md',
          './getting-started.md',
          './variables.md',
          './utilities.md',
          './theming.md',
          './accessibility.md',
        ],
      },
    },
  },
  themeConfig: {
    logo: '/docs/demo/icons/favicon-32x32.png',
    siteTitle: 'Bullframe CSS',
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    nav: [
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Docs', link: '/README' },
      { text: 'Demo', link: '/demo/', target: '_blank', rel: 'noopener' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/marcop135/bullframe.css' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/bullframe.css' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Marco Pontili',
    },
    editLink: {
      pattern: 'https://github.com/marcop135/bullframe.css/edit/v6/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/docs/demo/icons/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/docs/demo/icons/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/docs/demo/icons/apple-touch-icon.png' }],
    ['link', { rel: 'shortcut icon', href: '/docs/demo/icons/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#c2410c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Bullframe CSS' }],
    ['meta', { property: 'og:title', content: 'Bullframe CSS' }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:image', content: `${siteUrl}/bullframe-css-social-image.png` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Bullframe CSS' }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
    ['meta', { name: 'twitter:image', content: `${siteUrl}/bullframe-css-social-image.png` }],
    ['link', { rel: 'llms.txt', href: '/llms.txt' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)],
  ],
});
