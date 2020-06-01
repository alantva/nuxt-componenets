require('dotenv').config()

module.exports = {
  mode: 'spa',
  // Headers of the page
  head: {
    title: 'Contratos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  // Customize the progress-bar color
  loading: { color: '#0ff' },
  // Global CSS
  css: ['~assets/index.scss'],
  // Plugins to load before mounting the App
  plugins: [{ src: '~plugins/axios', mode: 'client' }],
  // Nuxt.js dev-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  // Nuxt.js modules
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment'
  ],
  proxy: {
    '/api/': process.env.API_URL
  },
  axios: {
    proxy: true,
    retry: { retries: 3 }
  },
  // Style Resources Module See https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
      '~assets/vars/*.scss',
      '~assets/functions/*.scss',
      '~assets/placeholders/*.scss'
    ]
  },
  moment: {
    defaultLocale: 'pt-br',
    locales: ['pt-br']
  },
  // Build configuration
  build: {
    // You can extend webpack config here
    extend(config, ctx) {}
  }
}
