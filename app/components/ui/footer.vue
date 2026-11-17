<!-- ui > footer.vue : big contact call + socials -->
<script setup lang="ts">
const { data: site } = await useSite();

// Mail if provided, otherwise the first social link
const contactLink = computed(() =>
  site.value?.contact.email
    ? `mailto:${site.value.contact.email}`
    : site.value?.socials[0]?.url,
);
const contactLabel = computed(
  () => site.value?.contact.email || "Get in touch",
);
</script>

<template>
  <footer
    id="contact"
    class="relative overflow-hidden border-t border-gray-800/60 scroll-mt-16"
  >
    <!-- Halo -->
    <div
      class="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-xl md:w-5xl h-96 rounded-full bg-indigo-500/15 blur-[120px]"
    ></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <p class="text-xs font-mono text-gray-500 mb-6">[ Contact ]</p>

      <h2
        class="font-display font-bold text-white text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-none"
      >
        {{ site?.contact.title }}
      </h2>

      <NuxtLink
        v-if="contactLink"
        :to="contactLink"
        :target="site?.contact.email ? undefined : '_blank'"
        class="group mt-10 inline-flex items-center gap-3 text-xl md:text-3xl text-gray-300 hover:text-white transition-colors"
      >
        <span
          class="underline underline-offset-8 decoration-1 decoration-white/30 group-hover:decoration-white transition-colors"
        >
          {{ contactLabel }}
        </span>
        <Icon
          name="lucide:arrow-up-right"
          :size="28"
          class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </NuxtLink>

      <!-- Bottom line -->
      <div
        class="mt-24 pt-6 border-t border-gray-800/60 flex flex-col-reverse sm:flex-row gap-6 sm:items-center sm:justify-between"
      >
        <p class="text-xs font-mono text-gray-500">
          © {{ new Date().getFullYear() }} {{ site?.name }} · {{ site?.role }}
        </p>

        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="social in site?.socials"
            :key="social.name"
            :to="social.url"
            target="_blank"
            :aria-label="social.name"
            class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Icon :name="social.icon" :size="16" />
            <span class="hidden sm:inline">{{ social.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
