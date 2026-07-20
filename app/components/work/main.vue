<!-- work > main.vue -->
<script setup lang="ts">

//Get yml content
const { data: config } = await useFetch<title>("/api/pages/work/workmain");

//Set title interface
interface title {
  title: string;
  subtitle: string;
}

// -- FILTERS BUTTONS
//Tailwind class var
const filterBtnBase =
  "cursor-pointer transition-colors duration-200 hover:text-white";

//Filter State
const activeFilter = ref<"all" | "web" | "tools">("all");
//Filters list
const filters = [
  { value: "all", label: "[ All ]" },
  { value: "web", label: "[ Web Apps ]" },
  { value: "tools", label: "[ Tools ]" },
] as const;
</script>

<template>
  <main
    :class="
      cn(
        'relative min-h-screen md:h-screen w-full overflow-x-hidden',
        'flex flex-col',
        'items-center',
        'pt-38 md:pt-42 pb-12 md:pb-8',
      )
    "
  >
    <!-- TITLE AND SUBTITLE -->
    <div class="flex flex-col items-center text-center gap-y-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
        {{ config?.title }}
      </h1>
      <p class="text-1xl md:text-2xl text-gray-200 px-4">
        {{ config?.subtitle }}
      </p>
    </div>

    <!-- FILTERS -->
    <div class="text-gray-500 flex gap-4 pt-8">
      <button
        v-for="filter in filters"
        :key="filter.value"
        @click="activeFilter = filter.value"
        :class="
          cn(
            filterBtnBase,
            activeFilter === filter.value
              ? 'text-white font-bold'
              : 'hover:text-gray-300',
          )
        "
      >
        {{ filter.label }}
      </button>
    </div>
  </main>
</template>
