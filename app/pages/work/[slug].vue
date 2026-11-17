<!-- work > [slug].vue : project case study -->
<script setup lang="ts">
import type { Project } from "~/types/content";

const route = useRoute();
const { data: site } = await useSite();
const { data: project, error } = await useFetch<Project>(
  `/api/projects/${route.params.slug}`,
);

if (error.value || !project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found", fatal: true });
}

useSeoMeta({
  title: () => `${project.value?.title} — ${site.value?.name}`,
  description: () => project.value?.summary,
});

const isExternal = (url?: string) => !!url?.startsWith("http");

// Meta rows shown under the title
const meta = computed(() =>
  [
    { label: "Role", value: project.value?.role },
    { label: "Year", value: project.value?.year },
    { label: "Type", value: project.value?.category },
    { label: "Stack", value: project.value?.stack?.join(", ") },
  ].filter((m) => m.value),
);
</script>

<template>
  <main v-if="project" class="relative overflow-hidden">
    <!-- Halo -->
    <div
      class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-xl md:w-5xl h-96 rounded-full bg-indigo-500/15 blur-[120px]"
    ></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 md:pt-44 pb-20">
      <NuxtLink
        to="/#work"
        class="group inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-white transition-colors"
      >
        <Icon
          name="lucide:arrow-left"
          :size="16"
          class="transition-transform duration-300 group-hover:-translate-x-1"
        />
        [ All work ]
      </NuxtLink>

      <!-- Title -->
      <h1
        class="mt-10 font-display font-bold text-white tracking-tight leading-[0.95] text-5xl sm:text-7xl lg:text-9xl"
      >
        {{ project.title }}
      </h1>
      <p class="mt-8 max-w-3xl text-xl md:text-2xl text-gray-300 leading-snug">
        {{ project.summary }}
      </p>

      <!-- Meta + links -->
      <div
        class="mt-14 grid grid-cols-2 md:grid-cols-[repeat(4,1fr)_auto] gap-6 py-6 border-y border-gray-800/60"
      >
        <div v-for="item in meta" :key="item.label" class="min-w-0">
          <p class="text-xs font-mono text-gray-500">{{ item.label }}</p>
          <p class="mt-1 text-sm text-gray-200">{{ item.value }}</p>
        </div>

        <div
          class="col-span-2 md:col-span-1 flex items-center gap-3 md:justify-end"
        >
          <NuxtLink
            v-if="project.link"
            :to="project.link"
            :target="isExternal(project.link) ? '_blank' : undefined"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-gray-200 text-gray-950 text-sm font-medium transition-colors"
          >
            Visit
            <Icon name="lucide:arrow-up-right" :size="16" />
          </NuxtLink>
          <NuxtLink
            v-if="project.source"
            :to="project.source"
            target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/4 border border-white/10 hover:bg-white/10 text-gray-300 text-sm font-medium transition-colors"
          >
            <Icon name="simple-icons:github" :size="16" />
            Code
          </NuxtLink>
        </div>
      </div>

      <!-- Cover -->
      <NuxtImg
        v-if="project.thumbnail"
        :src="`/images/thumbnails/${project.thumbnail}`"
        :alt="project.title"
        class="mt-14 w-full rounded-3xl border border-white/10"
        format="webp"
      />

      <!-- Case study -->
      <div class="mx-auto max-w-3xl">
        <div class="article-content pt-16" v-html="project.html" />
      </div>

      <!-- Next project -->
      <NuxtLink
        v-if="project.next"
        :to="`/work/${project.next.slug}`"
        class="group mt-28 block border-t border-gray-800/60 pt-10"
      >
        <p class="text-xs font-mono text-gray-500">[ Next project ]</p>
        <p
          class="mt-4 flex items-center gap-4 font-display font-bold text-4xl md:text-7xl text-gray-500 group-hover:text-white transition-colors"
        >
          {{ project.next.title }}
          <Icon
            name="lucide:arrow-right"
            class="size-10 md:size-16 transition-transform duration-300 group-hover:translate-x-3"
          />
        </p>
      </NuxtLink>
    </div>
  </main>
</template>
