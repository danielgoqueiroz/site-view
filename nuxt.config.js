export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Daniel G. Queiroz',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/content',
  ],

  bootstrapVue: {
    icons: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets({isServer}) {
        const targets = isServer ? {node: 'current'} : {ie: 11}
        return [
          [require.resolve("@babel/preset-env"), {targets}]
        ]
      },
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator"
      ]
    }
  },

  pwa: {
    icon: {
      /* icon options */
    },
  },
}
