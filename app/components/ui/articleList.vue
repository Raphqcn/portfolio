<!-- ui > articleList.vue : one line per article -->
<script setup lang="ts">
import type { ArticleMeta } from "~/types/content";

defineProps<{
  articles: ArticleMeta[];
}>();
</script>

<template>
  <ul>
    <li
      v-for="article in articles"
      :key="article.slug"
      class="border-b border-gray-800/60"
    >
      <NuxtLink
        :to="`/articles/${article.slug}`"
        class="group grid grid-cols-[1fr_auto] md:grid-cols-[8rem_1fr_6rem_auto] items-baseline gap-x-6 gap-y-1 py-6"
      >
        <time
          :datetime="article.date"
          class="order-2 md:order-none col-span-2 md:col-span-1 text-xs font-mono text-gray-500"
        >
          {{ formatDate(article.date) }}
        </time>

        <div class="min-w-0">
          <h3
            class="font-display font-bold text-xl md:text-2xl text-white transition-colors group-hover:text-indigo-200"
          >
            {{ article.title }}
          </h3>
          <p
            v-if="article.description"
            class="hidden md:block mt-1 text-sm text-gray-400 line-clamp-1"
          >
            {{ article.description }}
          </p>
        </div>

        <span class="hidden md:block text-xs font-mono text-gray-500">
          {{ article.readingTime }} min read
        </span>

        <Icon
          name="lucide:arrow-right"
          :size="20"
          class="text-gray-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
        />
      </NuxtLink>
    </li>
  </ul>
</template>
