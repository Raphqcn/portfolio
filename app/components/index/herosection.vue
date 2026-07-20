<script setup lang="ts">
import Tiles from "./tiles.vue";
import type { tile } from "~/types/tile.js"; //tilesData

const { data: tilesData } = await useFetch<tile[]>("/api/pages/index/tiles"); // Récupération du contenu des tuiles
const { data: config } = await useFetch<title>("/api/pages/index/hero"); // Récupération du contenu texte

interface title {
  subtitle: string;
}
</script>

<template>
  <!-- Main container -->
  <main
    :class="
      cn(
        'relative min-h-screen md:h-screen w-full bg-gray-950 overflow-x-hidden',
        'flex flex-col justify-between',
        'items-center',
        'pt-38 md:pt-48 pb-12 md:pb-8',
      )
    "
  >
    <!-- Background effect container -->
    <div
      :class="
        cn(
          'absolute inset-0 z-0',
          'pointer-events-none',
          'flex items-center justify-center',
        )
      "
    >
      <!-- Background halo effect -->
      <div
        :class="
          cn(
            'w-80 h-80 md:w-5xl md:h-144',
            'rounded-full bg-indigo-500/20',
            'blur-[80px] md:blur-[120px]',
            'animate-pulse [animation-duration:10s]',
          )
        "
      ></div>
    </div>

    <!-- Content container -->
    <div
      :class="
        cn(
          'relative z-10 w-full max-w-7xl',
          'mx-auto px-4 sm:px-6 lg:px-8',
          'flex-1 flex flex-col gap-y-14 md:gap-y-20',
        )
      "
    >
      <!-- Title introduction-->
      <div :class="cn('w-full')">
        <h1
          :class="
            cn(
              'text-3xl md:text-5xl lg:text-7xl',
              'font-bold font-display text-white',
              'text-center',
              'mx-auto',
              'leading-tight',
            )
          "
        >
          {{ config?.subtitle }}
        </h1>
      </div>

      <!-- Tiles container -->
      <section
        :class="
          cn(
            'w-full flex max-lg:flex-col gap-6 justify-center max-lg:items-center',
          )
        "
      >
        <Tiles v-for="item in tilesData" :key="item.id" :tile="item" />
      </section>
    </div>
  </main>
</template>
