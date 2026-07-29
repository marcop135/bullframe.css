---
page: true
title: Demo
description: Interactive demo of all Bullframe CSS builds and components.
---

<script setup>
import { ref, onMounted } from 'vue';
const iframe = ref(null);
</script>

<iframe
  ref="iframe"
  src="/demo/index.html"
  title="Bullframe CSS interactive demo"
  style="width: 100%; height: calc(100vh - var(--vp-nav-height)); border: 0;"
></iframe>
