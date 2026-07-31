<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import installTabs from './install-tabs.json';
import ExamplesGallery from './ExamplesGallery.vue';

const tabs = installTabs;

const activeId = ref('npm');
const active = computed(() => tabs.find((t) => t.id === activeId.value) ?? tabs[0]);
const installTitle = computed(() => active.value.title);

const root = ref(null);
let sectionObserver;

onMounted(() => {
  const sections = root.value?.querySelectorAll('.bfh-section');
  if (!sections?.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sections.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        sectionObserver.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
  );

  sections.forEach((el, i) => {
    if (i === 0) {
      el.classList.add('is-visible');
      return;
    }
    sectionObserver.observe(el);
  });
});

onUnmounted(() => {
  sectionObserver?.disconnect();
});

const copied = ref(false);
let copiedTimer;

async function copySnippet() {
  const text = active.value.code;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  copied.value = true;
  clearTimeout(copiedTimer);
  copiedTimer = setTimeout(() => {
    copied.value = false;
  }, 2000);
}

function selectTab(id) {
  activeId.value = id;
  copied.value = false;
}

const pillars = [
  {
    kicker: '01',
    label: 'Semantic HTML',
    detail: 'Style real elements. Pages without a class on every heading and form.',
  },
  {
    kicker: '02',
    label: 'Classless build',
    detail: 'Point at bullframe-classless.css when the markup should stay plain HTML.',
  },
  {
    kicker: '03',
    label: 'Dark without JS',
    detail: 'Always-dark builds, or system-default builds wired to prefers-color-scheme.',
  },
];

const whenToUse = [
  {
    label: 'Good fit',
    detail: 'Docs, blogs, landings, help centers, and forms.',
  },
  {
    label: 'One CSS file',
    detail: 'Reset, type, forms, layout. npm or CDN.',
  },
  {
    label: 'Two markup modes',
    detail: 'Class-based (.bf-*) or classless. Utilities are optional.',
  },
  {
    label: 'Skip when',
    detail: 'Dense app shells, data grids, or a JS component library.',
  },
];

const showcaseSlugs = ['blog', 'cover', 'pricing', 'album', 'sign-in', 'branded'];

const builds = [
  { file: 'bullframe.css', use: 'Class-based · light' },
  { file: 'bullframe-dark.css', use: 'Class-based · always dark' },
  { file: 'bullframe-system-default.css', use: 'Class-based · OS theme' },
  { file: 'bullframe-classless.css', use: 'Classless · light' },
  { file: 'bullframe-classless-dark.css', use: 'Classless · always dark' },
  { file: 'bullframe-classless-system-default.css', use: 'Classless · OS theme' },
  { file: 'bullframe-utilities.css', use: 'Utilities only' },
];

const stats = [
  {
    value: '0',
    label: 'Runtime deps',
    detail: 'PostCSS builds to plain CSS. No Sass. No JS runtime.',
  },
  {
    value: 'AA',
    label: 'Defaults',
    detail: 'Focus-visible, reduced-motion, WCAG AA on links and primary buttons.',
  },
  {
    value: '7',
    label: 'Builds',
    detail: 'Class-based + classless × light / dark / system, plus utilities.',
  },
  {
    value: '~8',
    label: 'kB gzip',
    detail: 'Default build. One file for reset, type, forms, layout.',
  },
];
</script>

<template>
  <div class="bfh" ref="root">
    <section class="bfh-section" aria-labelledby="bfh-pillars-heading">
      <div class="bfh-section__head">
        <p class="bfh-eyebrow">Why use it</p>
        <h2 id="bfh-pillars-heading" class="bfh-heading">Semantic by default. Any stack.</h2>
        <p class="bfh-bridge">npm or CDN. Class-based or classless. Dark is a build, not a theme script.</p>
      </div>
      <ul class="bfh-pillars">
        <li v-for="p in pillars" :key="p.label" class="bfh-pillar">
          <span class="bfh-pillar__kicker" aria-hidden="true">{{ p.kicker }}</span>
          <span class="bfh-pillar__label">{{ p.label }}</span>
          <p class="bfh-pillar__detail">{{ p.detail }}</p>
        </li>
      </ul>
    </section>

    <section class="bfh-section" aria-labelledby="bfh-when-heading">
      <div class="bfh-section__head">
        <p class="bfh-eyebrow">When to use</p>
        <h2 id="bfh-when-heading" class="bfh-heading">Use Bullframe for pages, not apps.</h2>
        <p class="bfh-bridge">
          Good for docs, blogs, landings, help centers, and forms. If you need a dashboard shell, data
          grid, or design-system components, use a UI kit instead.
        </p>
      </div>
      <ul class="bfh-pillars bfh-pillars--quad">
        <li
          v-for="item in whenToUse"
          :key="item.label"
          class="bfh-pillar"
          :class="{ 'bfh-pillar--mute': item.label === 'Skip when' }"
        >
          <span class="bfh-pillar__label">{{ item.label }}</span>
          <p class="bfh-pillar__detail">{{ item.detail }}</p>
        </li>
      </ul>
    </section>

    <section class="bfh-section" aria-labelledby="bfh-examples-heading">
      <div class="bfh-section__head">
        <p class="bfh-eyebrow">Examples</p>
        <h2 id="bfh-examples-heading" class="bfh-heading">Example pages</h2>
        <p class="bfh-bridge">
          Live HTML on the published builds.
          <a class="bfh-inline-link" href="/examples">All examples</a>.
        </p>
      </div>
      <ExamplesGallery :slugs="showcaseSlugs" compact />
    </section>

    <section class="bfh-section" aria-labelledby="bfh-install-heading">
      <div class="bfh-section__head">
        <p class="bfh-eyebrow">Install</p>
        <h2 id="bfh-install-heading" class="bfh-heading">{{ installTitle }}</h2>
      </div>

      <div class="bfh-install" role="group" aria-label="Install options">
        <div class="bfh-tabs" role="tablist" aria-label="Install method">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            type="button"
            class="bfh-tab"
            role="tab"
            :id="`bfh-tab-${tab.id}`"
            :aria-selected="activeId === tab.id"
            :aria-controls="`bfh-panel-${tab.id}`"
            :tabindex="activeId === tab.id ? 0 : -1"
            :class="{ 'is-active': activeId === tab.id }"
            @click="selectTab(tab.id)"
          >
            {{ tab.label }}
          </button>
        </div>

        <div
          class="bfh-code-wrap"
          role="tabpanel"
          :id="`bfh-panel-${active.id}`"
          :aria-labelledby="`bfh-tab-${active.id}`"
        >
          <pre class="bfh-code vp-code"><code v-html="active.highlighted"></code></pre>
          <button
            type="button"
            class="bfh-copy"
            :class="{ 'is-copied': copied }"
            :aria-label="copied ? 'Copied' : `Copy ${active.label} snippet`"
            @click="copySnippet"
          >
            <span class="bfh-copy__icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>

    <section class="bfh-section" aria-labelledby="bfh-builds-heading">
      <div class="bfh-section__head">
        <p class="bfh-eyebrow">Seven builds</p>
        <h2 id="bfh-builds-heading" class="bfh-heading">Seven CSS builds</h2>
        <p class="bfh-bridge">Markup mode and theme are in the filename. Same tokens in every build.</p>
      </div>
      <div class="bfh-builds">
        <table>
          <thead>
            <tr>
              <th scope="col">File</th>
              <th scope="col">Use when</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="b in builds" :key="b.file">
              <td><code>{{ b.file }}</code></td>
              <td>{{ b.use }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="bfh-section bfh-section--stats" aria-labelledby="bfh-stats-heading">
      <div class="bfh-section__head">
        <p class="bfh-eyebrow">Specs</p>
        <h2 id="bfh-stats-heading" class="bfh-heading">Package defaults</h2>
      </div>
      <div class="bfh-stats">
        <div v-for="s in stats" :key="s.label" class="bfh-stat">
          <div class="bfh-stat__value">{{ s.value }}</div>
          <div class="bfh-stat__label">{{ s.label }}</div>
          <p class="bfh-stat__detail">{{ s.detail }}</p>
        </div>
      </div>
    </section>

    <section class="bfh-section bfh-section--cta" aria-labelledby="bfh-cta-heading">
      <div class="bfh-section__head bfh-section__head--center">
        <h2 id="bfh-cta-heading" class="bfh-heading">Next steps</h2>
      </div>
      <div class="bfh-cta">
        <a class="bfh-cta__btn bfh-cta__btn--brand" href="/getting-started">Get started</a>
        <a class="bfh-cta__btn bfh-cta__btn--alt" href="/README">Read the docs</a>
      </div>
    </section>
  </div>
</template>
