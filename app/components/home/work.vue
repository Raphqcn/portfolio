<!-- home > work.vue : typographic project index with a cursor-following preview -->
<script setup lang="ts">
import type { ProjectMeta } from "~/types/content";

const { data: projects } = await useFetch<ProjectMeta[]>("/api/projects");

// Hover preview (desktop only)
const hovered = ref<ProjectMeta | null>(null);
const pos = reactive({ x: 0, y: 0 });

const onMove = (e: MouseEvent) => {
  pos.x = e.clientX;
  pos.y = e.clientY;
};

const count = computed(() => {
  const n = projects.value?.length ?? 0;
  return `${n} ${n > 1 ? "projects" : "project"}`;
});
</script>

<template>
  <section
    id="work"
    class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 scroll-mt-16"
  >
    <UiSectionHead index="01" title="Selected work" :aside="count" />

    <ul class="group/list" @mousemove="onMove" @mouseleave="hovered = null">
      <li
        v-for="(project, i) in projects"
        :key="project.slug"
        class="border-b border-gray-800/60 transition-opacity duration-300 lg:group-hover/list:opacity-30 lg:hover:opacity-100!"
        @mouseenter="hovered = project"
      >
        <NuxtLink
          :to="`/work/${project.slug}`"
          class="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[4rem_1fr_10rem_6rem_auto] items-center gap-x-4 md:gap-x-6 py-8 md:py-10"
        >
          <span class="text-xs font-mono text-gray-500 self-start pt-2 md:pt-4">
            {{ String(i + 1).padStart(2, "0") }}
          </span>

          <div class="min-w-0">
            <h3
              class="font-display font-bold text-white text-3xl sm:text-4xl lg:text-6xl tracking-tight transition-transform duration-300 lg:group-hover:translate-x-3"
            >
              {{ project.title }}
            </h3>
            <p
              class="mt-2 text-sm md:text-base text-gray-400 max-w-xl line-clamp-2"
            >
              {{ project.summary }}
            </p>
            <!-- Mobile meta -->
            <p class="md:hidden mt-3 text-xs font-mono text-gray-500">
              {{ project.category }} · {{ project.year }}
            </p>
          </div>

          <span class="hidden md:block text-sm text-gray-400">
            {{ project.category }}
          </span>
          <span class="hidden md:block text-sm font-mono text-gray-500">
            {{ project.year }}
          </span>

          <Icon
            name="lucide:arrow-up-right"
            :size="28"
            class="text-gray-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </NuxtLink>
      </li>
    </ul>

    <!-- Cursor preview -->
    <Teleport to="body">
      <div
        class="hidden lg:block pointer-events-none fixed top-0 left-0 z-40 w-80 aspect-video transition-[opacity,scale] duration-300"
        :class="hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
        :style="{ transform: `translate(${pos.x + 24}px, ${pos.y - 90}px)` }"
      >
        <div
          v-if="hovered"
          class="size-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl shadow-indigo-950/50"
        >
          <NuxtImg
            v-if="hovered.thumbnail"
            :src="`/images/thumbnails/${hovered.thumbnail}`"
            :alt="hovered.title"
            class="size-full object-cover object-top"
            format="webp"
          />
          <div
            v-else
            class="size-full flex items-center justify-center bg-indigo-500/10"
          >
            <span class="font-display font-bold text-5xl text-white/80">
              {{ hovered.title.charAt(0) }}
            </span>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
