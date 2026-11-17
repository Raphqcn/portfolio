<!-- articles > [slug].vue -->
<script setup lang="ts">
import type { Article } from "~/types/content";

const route = useRoute();
const { data: site } = await useSite();
const { data: post, error } = await useFetch<Article>(
  `/api/articles/${route.params.slug}`,
);

if (error.value || !post.value) {
  throw createError({ statusCode: 404, statusMessage: "Article not found", fatal: true });
}

useSeoMeta({
  title: () => `${post.value?.title} — ${site.value?.name}`,
  description: () => post.value?.description,
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.description,
});
</script>

<template>
  <main v-if="post" class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-xl md:w-5xl h-96 rounded-full bg-indigo-500/15 blur-[120px]"
    ></div>

    <article class="relative mx-auto max-w-3xl px-4 sm:px-6 pt-36 md:pt-44 pb-20">
      <NuxtLink
        to="/writing"
        class="group inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-white transition-colors"
      >
        <Icon
          name="lucide:arrow-left"
          :size="16"
          class="transition-transform duration-300 group-hover:-translate-x-1"
        />
        [ All articles ]
      </NuxtLink>

      <header class="mt-10 pb-10 border-b border-gray-800/60">
        <p class="text-xs font-mono text-gray-500">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          · {{ post.readingTime }} min read
          <template v-if="post.tags?.length"> · {{ post.tags.join(", ") }}</template>
        </p>

        <h1
          class="mt-6 font-display font-bold text-white tracking-tight leading-tight text-4xl md:text-6xl"
        >
          {{ post.title }}
        </h1>

        <p v-if="post.description" class="mt-6 text-lg md:text-xl text-gray-400">
          {{ post.description }}
        </p>
      </header>

      <NuxtImg
        v-if="post.thumbnail"
        :src="`/images/thumbnails/${post.thumbnail}`"
        :alt="post.title"
        class="mt-10 w-full rounded-2xl border border-white/10"
        format="webp"
      />

      <div class="article-content pt-10" v-html="post.html" />
    </article>
  </main>
</template>
