import colors from 'vuetify/es5/util/colors';

export default {
  head: {
    titleTemplate: '%s - qtim-test',
    title: 'qtim-test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  css: [],

  plugins: [{ src: '@/plugins/jw-vue-pagination.js' }],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify', '@nuxtjs/date-fns'],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/',
  },

  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.indigo.darken1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
};
