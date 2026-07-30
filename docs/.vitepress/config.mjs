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
  collapsed: false,
  items: c.files.map((f) => ({ text: titleFor(f), link: linkFor(f) })),
}));

export default defineConfig({
  title: 'Bullframe CSS',
  description:
    'A lightweight CSS framework for building fast, responsive, and accessible UIs. Semantic, themeable, and classless-friendly.',
  lang: 'en-US',
  cleanUrls: true,
  base: '/',
  ignoreDeadLinks: true,
  markdown: {
    html: true,
  },
  srcExclude: [...excludeDirs.map((d) => `${d}/**`), '**/node_modules/**'],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Bullframe CSS',
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/README' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Demo', link: '/demo/' },
    ],
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/marcop135/bullframe.css' }],
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
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#f95c1f' }],
  ],
});
