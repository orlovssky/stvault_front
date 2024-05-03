export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "ST Vault",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
        { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/manifest.webmanifest" },
      ],
    },
  },
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
