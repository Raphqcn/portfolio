<!-- home > hero.vue -->
<script setup lang="ts">
const { data: site } = await useSite();
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Halo -->
    <div
      class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-xl md:w-5xl h-96 md:h-144 rounded-full bg-indigo-500/20 blur-[80px] md:blur-[120px] animate-pulse [animation-duration:10s]"
    ></div>

    <div
      class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 md:pt-52 pb-20 md:pb-28"
    >
      <!-- Availability -->
      <p
        v-if="site?.availability"
        class="inline-flex items-center gap-2.5 text-xs font-mono text-gray-300 mb-8"
      >
        <span class="relative flex size-2">
          <span
            class="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-60 animate-ping"
          ></span>
          <span class="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
        </span>
        {{ site.availability }}
      </p>

      <!-- Name + role -->
      <h1
        class="font-display font-bold text-white tracking-tight leading-[0.9] text-6xl sm:text-8xl lg:text-[10rem]"
      >
        {{ site?.name }}
      </h1>

      <div
        class="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:items-end"
      >
        <p class="max-w-2xl text-xl md:text-3xl text-gray-300 leading-snug">
          {{ site?.intro }}
        </p>

        <NuxtLink
          to="/#work"
          class="group inline-flex items-center gap-3 text-sm font-mono text-gray-400 hover:text-white transition-colors"
        >
          [ {{ site?.role }} — {{ site?.location }} ]
          <Icon
            name="lucide:arrow-down"
            :size="16"
            class="transition-transform duration-300 group-hover:translate-y-1"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
