<script setup>
import { computed, ref } from 'vue';
import installTabs from './install-tabs.json';

const tabs = installTabs;

const activeId = ref('npm');
const active = computed(() => tabs.find((t) => t.id === activeId.value) ?? tabs[0]);
const installTitle = computed(() => active.value.title);

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
    label: 'Semantic',
    detail: 'Headings, forms, tables, and links are styled without a pile of classes.',
  },
  {
    kicker: '02',
    label: 'Classless',
    detail: 'Swap in bullframe-classless.css and keep markup as plain HTML.',
  },
  {
    kicker: '03',
    label: 'System dark',
    detail: 'Always-dark builds, or system-default builds that follow prefers-color-scheme.',
  },
];
const builds = [
  { file: 'bullframe.css', use: 'Class-based, light' },
  { file: 'bullframe-dark.css', use: 'Class-based, always dark' },
  { file: 'bullframe-system-default.css', use: 'Class-based, follows the OS' },
  { file: 'bullframe-classless.css', use: 'Semantic HTML, light' },
  { file: 'bullframe-classless-dark.css', use: 'Classless, always dark' },
  { file: 'bullframe-classless-system-default.css', use: 'Classless, follows the OS' },
  { file: 'bullframe-utilities.css', use: 'Utilities only' },
];

const stats = [
  {
    value: '0',
    label: 'Dependencies',
    detail: 'Native CSS, PostCSS builds, no Sass, no runtime JavaScript. Any stack.',
  },
  {
    value: 'AA',
    label: 'Contrast',
    detail: 'Focus-visible rings, reduced-motion respect, WCAG AA on links and primary buttons.',
  },
  {
    value: '7',
    label: 'Builds',
    detail: 'Class-based and classless, each with light, dark, and system themes, plus a utilities companion.',
  },
];
</script>

<template>
  <div class="bfh">
    <section class="bfh-section" aria-labelledby="bfh-pillars-heading">
      <div class="bfh-section__head">
        <p class="bfh-eyebrow">Why</p>
        <p class="bfh-bridge">Drop in a stylesheet. Keep your stack.</p>
        <h2 id="bfh-pillars-heading" class="bfh-heading">Semantic. Classless. System dark.</h2>
      </div>
      <ul class="bfh-pillars">
        <li v-for="p in pillars" :key="p.label" class="bfh-pillar">
          <span class="bfh-pillar__kicker" aria-hidden="true">{{ p.kicker }}</span>
          <span class="bfh-pillar__label">{{ p.label }}</span>
          <p class="bfh-pillar__detail">{{ p.detail }}</p>
        </li>
      </ul>
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
        <h2 id="bfh-builds-heading" class="bfh-heading">Pick a file. Same defaults in every build.</h2>
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
        <p class="bfh-eyebrow">By the numbers</p>
        <h2 id="bfh-stats-heading" class="bfh-heading">Zero dependencies. Accessible defaults.</h2>
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
        <p class="bfh-eyebrow">Next</p>
        <h2 id="bfh-cta-heading" class="bfh-heading">Ready when you are.</h2>
      </div>
      <div class="bfh-cta">
        <a class="bfh-cta__btn bfh-cta__btn--brand" href="/getting-started">Get started</a>
        <a class="bfh-cta__btn bfh-cta__btn--alt" href="/README">Read the docs</a>
      </div>
    </section>
  </div>
</template>
