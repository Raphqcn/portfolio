<!-- home > writing.vue : latest articles -->
<script setup lang="ts">
import type { ArticleMeta } from "~/types/content";

const LATEST = 4;

const { data: articles } = await useFetch<ArticleMeta[]>("/api/articles");
const latest = computed(() => (articles.value ?? []).slice(0, LATEST));
</script>

<template>
  <section
    v-if="latest.length"
    id="writing"
    class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 scroll-mt-16"
  >
    <UiSectionHead index="02" title="Writing" aside="Latest articles" />

    <UiArticleList :articles="latest" />

    <NuxtLink
      to="/writing"
      class="group mt-8 inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors"
    >
      [ All articles ]
      <Icon
        name="lucide:arrow-right"
        :size="16"
        class="transition-transform duration-300 group-hover:translate-x-1"
      />
    </NuxtLink>
  </section>
</template>
