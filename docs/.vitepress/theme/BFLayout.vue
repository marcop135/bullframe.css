<script setup>
import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';
import { inBrowser } from 'vitepress';
import HomeAfterHero from './components/HomeAfterHero.vue';

const { Layout } = DefaultTheme;

onMounted(() => {
  if (!inBrowser) return;

  // Static /demo/ is not a VitePress page; SPA navigation 404s. Force a full load.
  document.addEventListener(
    'click',
    (event) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const a = event.target?.closest?.('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      try {
        const url = new URL(a.href, location.href);
        if (url.origin !== location.origin) return;
        if (!url.pathname.startsWith('/demo')) return;
        event.preventDefault();
        window.location.assign(url.href);
      } catch {
        /* ignore */
      }
    },
    true,
  );

  // Warm common doc pages via dynamic import (VitePress page modules).
  const warm = (path) => {
    const md =
      path === '/'
        ? '/index.md'
        : `${path.replace(/\/$/, '')}.md`;
    import(/* @vite-ignore */ `${md}?import`).catch(() => {});
  };

  const top = ['/getting-started', '/README', '/variables', '/utilities', '/theming'];
  const rIC = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
  rIC(() => top.forEach(warm));

  document.addEventListener(
    'pointerenter',
    (event) => {
      const a = event.target?.closest?.('a[href]');
      if (!a || a.target === '_blank') return;
      try {
        const url = new URL(a.href, location.href);
        if (url.origin !== location.origin) return;
        if (url.pathname === location.pathname) return;
        if (url.pathname.startsWith('/demo')) return;
        warm(url.pathname);
      } catch {
        /* ignore */
      }
    },
    true,
  );
});
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <HomeAfterHero />
    </template>
  </Layout>
</template>
