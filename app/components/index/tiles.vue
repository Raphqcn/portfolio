<!-- Tiles.vue -->

<script setup lang="ts">
import { cn } from "~/assets/cn";
import type { tile } from "~/types/tile";

defineProps<{
  tile: tile;
}>();

//Micro composant local aux descriptions
const TileDescription = (props: { text: string }) => {
  return h(
    "p",
    { class: cn("text-sm text-gray-400 leading-relaxed text-left") },
    props.text,
  );
};
</script>

<template>
  <!-- General design -->
  <div
    :class="
      cn(
        'flex flex-col',
        'relative overflow-hidden rounded-2xl',
        'bg-white/2 backdrop-blur-xl',
        'border border-white/10',
        'p-6 justify-between',
        'min-h-50 lg:min-h-70',
        'w-full md:w-150 lg:w-80',
        'group transition-all duration-300 hover:bg-white/4',
      )
    "
  >
    <!-- Content -->
    <div>
      <!-- Header -->
      <div :class="cn('flex', 'items-center gap-3.5', 'w-full mb-6')">
        <div
          v-if="tile.icon"
          :class="
            cn(
              'flex items-center justify-center size-10 rounded-xl',
              'bg-white/4 border border-white/10',
              'shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]',
            )
          "
        >
          <Icon
            :name="tile.icon"
            :size="21"
            :class="
              cn(
                'text-gray-300 group-hover:text-white transition-colors duration-300',
              )
            "
          />
        </div>

        <h3
          :class="
            cn('font-bold text-1xl md:text-2xl text-white tracking-wide pb-1')
          "
        >
          {{ tile.title }}
        </h3>
      </div>

      <!-- Types format -->
      <!-- Skill showcase format -->
      <div
        v-if="tile.type === 'skills'"
        :class="cn('flex flex-col', 'items-center gap-4 mb-4')"
      >
        <div
          :class="
            cn(
              'flex lg:grid lg:grid-cols-3',
              'max-sm:gap-x-2 gap-x-10 gap-y-6 justify-items-center',
            )
          "
        >
          <Icon
            v-for="iconName in tile.icons"
            :size="35"
            :key="iconName"
            :name="iconName"
            :class="cn('text-white/80 hover:text-white transition-colors')"
          />
        </div>
        <TileDescription :text="tile.desc" />
      </div>

      <!-- Latest project format -->
      <div
        v-if="tile.type === 'latest'"
        :class="cn('flex flex-col', 'items-center gap-4 mb-4')"
      >
        <div
          :class="
            cn('relative w-full h-28 overflow-hidden rounded-xl bg-slate-100')
          "
        >
          <NuxtImg
            :src="`/images/thumbnails/${tile.thumbnail}`"
            :alt="tile.title"
            :class="cn('w-full object-cover rounded-xl')"
            format="webp"
            loading="lazy"
          />
        </div>
        <TileDescription :text="tile.desc" />
        <NuxtLink
          :to="tile.link"
          target="_blank"
          :class="cn('absolute inset-0 z-10 cursor-pointer')"
          aria-label="Go to the website"
        />
      </div>

      <!-- Contact list format -->
      <div
        v-if="tile.type === 'contact'"
        :class="cn('flex md:flex-col', 'items-center gap-4 mb-4')"
      >
        <TileDescription :text="tile.desc" />
        <div :class="cn('flex flex-col gap-2.5 text-left mt-2')">
          <NuxtLink
            v-for="link in tile.links"
            :key="link.name"
            :to="link.url"
            target="_blank"
            :aria-label="`Check out my ${link.name}`"
            :class="
              cn(
                'flex items-center gap-3 text-white/90 hover:text-white transition-colors group w-fit relative z-20',
              )
            "
          >
            <Icon
              :name="link.icon"
              :size="22"
              :class="
                cn('text-white/80 group-hover:text-white transition-colors')
              "
            />

            <span
              :class="
                cn(
                  'text-base font-medium underline underline-offset-4 decoration-white/40 group-hover:decoration-white transition-colors',
                )
              "
            >
              {{ link.name }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
