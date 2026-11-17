<!-- writing.vue page : every article -->
<script setup lang="ts">
import type { ArticleMeta } from "~/types/content";

const { data: site } = await useSite();
const { data: articles } = await useFetch<ArticleMeta[]>("/api/articles");

useSeoMeta({
  title: () => `Writing — ${site.value?.name}`,
  description: "Articles about building for the web.",
});

const count = computed(() => {
  const n = articles.value?.length ?? 0;
  return `${n} ${n > 1 ? "articles" : "article"}`;
});
</script>

<template>
  <main class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-xl md:w-5xl h-96 rounded-full bg-indigo-500/15 blur-[120px]"
    ></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 md:pt-44 pb-20">
      <h1
        class="font-display font-bold text-white tracking-tight leading-none text-6xl sm:text-8xl lg:text-9xl"
      >
        Writing.
      </h1>
      <p class="mt-8 max-w-2xl text-xl md:text-2xl text-gray-300">
        Notes and lessons learned while building things for the web.
      </p>

      <div class="mt-20">
        <UiSectionHead index="—" title="All articles" :aside="count" />
        <UiArticleList :articles="articles ?? []" />
        <p v-if="!articles?.length" class="py-12 text-gray-500">
          The first article is on its way.
        </p>
      </div>
    </div>
  </main>
</template>
