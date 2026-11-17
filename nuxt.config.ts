import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-confi
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        'clsx',
        'tailwind-merge',
      ]
    }
  },
  
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Raphael.Q — Full-stack developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Raphael.Q, full-stack developer building fast web apps and tools.' }
      ]
    }
  },
})