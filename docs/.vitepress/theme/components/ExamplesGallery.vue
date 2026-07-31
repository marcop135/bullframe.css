<script setup>
import { computed } from 'vue';
import { withBase } from 'vitepress';
import examples from '../../../../src/docs/examples/examples.json';

const props = defineProps({
  /** Optional slug allowlist; omit for the full gallery. */
  slugs: {
    type: Array,
    default: null,
  },
  /** Use h3 titles when embedded under a page h2 (home showcase). */
  compact: {
    type: Boolean,
    default: false,
  },
});

const items = computed(() => {
  const list = props.slugs?.length
    ? props.slugs
        .map((slug) => examples.find((ex) => ex.slug === slug))
        .filter(Boolean)
    : examples;
  return list.map((ex) => ({
    ...ex,
    href: props.compact ? '/examples' : `/examples/${ex.slug}/`,
    screenshot: `/examples/screenshots/${ex.slug}.png`,
  }));
});
</script>

<template>
  <div class="bf-ex-gallery" :class="{ 'bf-ex-gallery--compact': compact }">
    <a
      v-for="ex in items"
      :key="ex.slug"
      class="bf-ex-card"
      :href="withBase(ex.href)"
    >
      <div class="bf-ex-card__frame" aria-hidden="true">
        <div class="bf-ex-card__dots">
          <span></span><span></span><span></span>
        </div>
        <div class="bf-ex-card__viewport">
          <img
            class="bf-ex-card__img"
            :src="withBase(ex.screenshot)"
            :alt="`${ex.title} example preview`"
            width="1200"
            height="750"
            loading="lazy"
          />
        </div>
      </div>
      <div class="bf-ex-card__body">
        <component :is="compact ? 'h3' : 'h2'" class="bf-ex-card__title">{{
          ex.title
        }}</component>
        <p class="bf-ex-card__blurb">{{ ex.blurb }}</p>
        <p class="bf-ex-card__build"><code>{{ ex.build }}</code></p>
      </div>
    </a>
  </div>
</template>
