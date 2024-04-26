export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/scss/main.scss"],
  modules: ["@nuxt/image", "@nuxtjs/google-fonts", "nuxt-svgo"],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  googleFonts: {
    families: {
      "Plus+Jakarta+Sans": "200..700",
    },
  },
  svgo: {
    global: false,
    componentPrefix: "i",
    customComponent: "BaseIcon",
  },
});
