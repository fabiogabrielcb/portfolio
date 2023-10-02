// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  css: ["@/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Portfolio - Akiva",
    },
  },
});
