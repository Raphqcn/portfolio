<script setup lang="ts">
import { ref } from "vue";
import { cn } from "~/assets/cn";

interface NavItem {
  name: string;
  link: string;
}

interface HeaderConfig {
  title: string;
  navbuttons: NavItem[];
}

// Fetch header content
const { data: config } = await useFetch<HeaderConfig>("/api/header");

// Theme manager
import { useTheme } from "~/assets/composable/useTheme";

// State
const isMenuOpen = ref(false);
const buttonTheme = ref(false);
</script>

<template>
  <header
    :class="
      cn(
        'text-white backdrop-blur-3xl bg-opacity-30 border-b border-gray-700 font-display fixed w-full top-0 z-50',
      )
    "
  >
    <div
      :class="
        cn(
          'container mx-auto flex items-center justify-between py-4 px-4 lg:max-w-7xl',
        )
      "
    >
      <button v-if="config">
        <NuxtLink to="/" :class="cn('text-2xl font-bold')">
          {{ config.title }}
        </NuxtLink>
      </button>

      <div :class="cn('flex items-center gap-16')">
        <nav
          :class="
            cn(
              isMenuOpen ? 'flex' : 'hidden',
              'md:flex',
              'absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent flex-col md:flex-row items-center gap-8 py-8 md:py-0 border-b border-gray-700 md:border-none',
            )
          "
        >
          <ul
            :class="cn('flex flex-col md:flex-row items-center gap-8 text-lg')"
          >
            <li
              v-for="item in config?.navbuttons"
              :key="item.link"
              @click="isMenuOpen = false"
            >
              <NuxtLink
                :to="item.link"
                :class="cn('hover:text-gray-400 transition')"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div :class="cn('items-center gap-4 mt-2 hidden')">
          <!--Hidden because WIP (flex)-->
          <button
            :class="cn('p-2 hover:bg-white/10 rounded-lg transition')"
            @click="buttonTheme = !buttonTheme"
          >
            <Transition name="theme" mode="out-in">
              <Icon
                :size="22"
                :name="buttonTheme ? 'lucide:sun' : 'lucide:moon'"
                class="text-white"
              />
            </Transition>
          </button>

          <button
            @click="isMenuOpen = !isMenuOpen"
            :class="cn('md:hidden p-2 text-white')"
          >
            <span v-if="!isMenuOpen">
              <Icon :size="22" name="lucide:menu" />
            </span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.theme-enter-active,
.theme-leave-active {
  transition: all 0.3s ease;
}

.theme-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.theme-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>
