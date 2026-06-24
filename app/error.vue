<template>
  <div
    class="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-4 antialiased font-sans"
  >
    <div
      class="max-w-xl w-full bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center text-center space-y-6"
    >
      <span
        class="text-xs font-mono tracking-widest text-zinc-500 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full"
      >
        Error {{ error?.statusCode || 404 }}
      </span>

      <h1
        class="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 leading-relaxed max-w-md"
      >
        This website is still under development and this page will be ready very
        soon in order to offer you a better navigation experience.
      </h1>

      <p class="text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed">
        In the meantime, my work is available on my GitHub.
      </p>

      <div class="w-full pt-4 flex flex-col sm:flex-row justify-center gap-3">
        <button
          @click="handleError"
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 font-medium transition-all duration-200 active:scale-[0.98]"
        >
          Back to home
        </button>

        <NuxtLink
          to="https://github.com/Raphqcn"
          target="_blank"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Explore my GitHub
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Nuxt injecte automatiquement le prop 'error' dans ce fichier racine
defineProps({
  error: Object,
});

// Fonction native de Nuxt pour effacer l'état d'erreur et rediriger proprement
const handleError = () => clearError({ redirect: "/" });
</script>
