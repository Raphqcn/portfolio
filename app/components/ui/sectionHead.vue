<!-- ui > sectionHead.vue : "01 — Selected work" ............ 2 projects -->
<script setup lang="ts">
defineProps<{
  index: string;
  title: string;
  aside?: string;
}>();
</script>

<template>
  <div
    class="flex items-baseline justify-between gap-4 pb-4 border-b border-gray-800/60 text-xs font-mono text-gray-500"
  >
    <span>[ {{ index }} — {{ title }} ]</span>
    <span v-if="aside">{{ aside }}</span>
  </div>
</template>
