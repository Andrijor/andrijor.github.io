// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: true,
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/fonts",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/assets/css/tailwind.css"],
});