<!-- index.vue page -->
<script setup lang="ts">
const { data: site } = await useSite();

useSeoMeta({
  title: () => `${site.value?.name} — ${site.value?.role}`,
  description: () => site.value?.intro,
});
</script>

<template>
  <main>
    <HomeHero />
    <HomeWork />
    <HomeWriting />
    <HomeAbout />
  </main>
</template>
