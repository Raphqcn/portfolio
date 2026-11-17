<!-- home > about.vue -->
<script setup lang="ts">
const { data: site } = await useSite();
</script>

<template>
  <section
    id="about"
    class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 scroll-mt-16"
  >
    <UiSectionHead index="03" title="About" />

    <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 pt-10">
      <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
        {{ site?.about }}
      </p>

      <div>
        <p class="text-xs font-mono text-gray-500 mb-5">Stack</p>
        <ul class="grid grid-cols-2 gap-px bg-gray-800/60 border border-gray-800/60 rounded-2xl overflow-hidden">
          <li
            v-for="tech in site?.stack"
            :key="tech.name"
            class="group flex items-center gap-3 bg-gray-950 px-4 py-4 hover:bg-white/2 transition-colors"
          >
            <Icon
              :name="tech.icon"
              :size="20"
              class="text-gray-400 group-hover:text-white transition-colors"
            />
            <span class="text-sm text-gray-300">{{ tech.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
