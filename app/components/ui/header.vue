<!-- ui > header.vue -->
<script setup lang="ts">
const { data: site } = await useSite();

const isMenuOpen = ref(false);

const links = [
  { name: "Work", to: "/#work" },
  { name: "Writing", to: "/#writing" },
  { name: "About", to: "/#about" },
  { name: "Contact", to: "#contact" },
];

// Local time (client only, refreshed every 30s)
const time = ref("");
let timer: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  const update = () => {
    time.value = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: site.value?.timezone,
    });
  };
  update();
  timer = setInterval(update, 30_000);
});
onBeforeUnmount(() => clearInterval(timer));

// Close the mobile menu on navigation
const route = useRoute();
watch(() => route.fullPath, () => (isMenuOpen.value = false));
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 border-b border-gray-800/60 bg-gray-950/60 backdrop-blur-xl"
  >
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6"
    >
      <!-- Identity -->
      <NuxtLink
        to="/"
        class="font-display text-xl font-bold text-white tracking-tight"
      >
        {{ site?.name }}
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm text-gray-400 hover:text-white transition-colors"
        >
          {{ link.name }}
        </NuxtLink>

        <span
          v-if="time"
          class="pl-6 border-l border-gray-800 text-xs font-mono text-gray-500"
        >
          {{ site?.location }} · {{ time }}
        </span>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="md:hidden p-2 -mr-2 text-white"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" :size="26" />
      </button>
    </div>

    <!-- Mobile nav -->
    <nav
      v-if="isMenuOpen"
      class="md:hidden border-t border-gray-800/60 px-4 py-6 flex flex-col gap-5"
    >
      <NuxtLink
        v-for="(link, i) in links"
        :key="link.to"
        :to="link.to"
        class="flex items-baseline gap-4 font-display text-3xl font-bold text-white"
        @click="isMenuOpen = false"
      >
        <span class="text-xs font-mono text-gray-500">0{{ i + 1 }}</span>
        {{ link.name }}
      </NuxtLink>
    </nav>
  </header>
</template>
