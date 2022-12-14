export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
   // Target: https://go.nuxtjs.dev/config-target
   target: 'static',

  head: {
    titleTemplate: '%s - Tarjeta Digital',
    title: 'Tarjeta Digital',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tu tarjeta digital a tu alcance' },
      
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/357b447e7e.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //General
    '~/assets/StylesGenerals/styles.scss',

    // manager
    '~/assets/Manager/style.scss',
    '~/assets/MiTarjetaDigital/Header.scss',
    '~/assets/MiTarjetaDigital/Footer.scss',
    '~/assets/MiTarjetaDigital/Intro.scss',
    '~/assets/MiTarjetaDigital/style.scss',
    // AnaPiñaShop
    '~/assets/AnaPinaShop/style.scss',
    // olivos
    '~/assets/LosOlivosSantaMarta/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    "@nuxtjs/axios",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image'
  ],
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/stylevariables.scss'],
    treeShake: false,
    theme: {
      dark: false,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
