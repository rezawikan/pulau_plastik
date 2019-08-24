export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Pulau Plastik',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Pulau Plastik merupakan kampanye kolaboratif dalam menangani isu plastik sekali pakai di Bali dan sekitarnya.'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'black',
    height: '1px'
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/custom.scss',
  ],

  axios: {
    baseURL: 'http://localhost:3000',
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'https://api.pulauplastik.org/api/',
      pathRewrite: {
        '^/api/': ''
      },
      changeOrigin: true
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vue-bootstrap',
    '@/plugins/vue-gmaps',
    {
      src: '@/plugins/vue-carousel-3d',
      ssr: false
    },
    {
      src: '@/plugins/vue-js-modal',
      // ssr: false
    },
    // {
    //   src: '@/plugins/vue-isotope',
    //   // ssr: false
    // },
    {
      src: '@/plugins/vue-concise',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    // ['bootstrap-vue/nuxt'],
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'vue-scrollto/nuxt',
    ['@nuxtjs/google-analytics', {
      id: 'UA-20429270-13',
    }],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faDollarSign']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookF', 'faYoutube', 'faInstagram']
        }
      ]
    }],
    ['nuxt-i18n', {
      locales: [{
          name: 'ID',
          code: 'id',
          iso: 'id-ID',
          file: 'id-ID.js'
        },
        {
          name: 'EN',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
      ],
      seo: true,
      strategy: 'prefix_and_default',
      lazy: true,
      defaultLocale: 'id',
      langDir: 'lang/',
      defaultLocaleRouteNameSuffix: 'default',
      // detectBrowserLanguage: {
      //   useCookie: true,
      //   cookieKey: 'pulau_plastik_cookie'
      // },
      // By default a store module is registered and kept in sync with the
      // app's i18n current state
      // Set to false to disable
      vuex: {
        // Module namespace
        moduleName: 'i18n',

        // If enabled, current app's locale is synced with nuxt-i18n store module
        syncLocale: true,

        // If enabled, current translation messages are synced with nuxt-i18n store module
        syncMessages: true,

        // Mutation to commit to set route parameters translations
        syncRouteParams: true
      },
      parsePages: false,
      pages: {
        'merchandise/index': {
          en: '/merchandise',
          id: '/merchandise',
        },
        // 'about/team/index': {
        //   en: '/about/team',
        //   id: '/tentang/tim',
        // },
        'about/overview/index': {
          en: '/about/overview',
          id: '/tentang/kampanye',
        },
        'about/partners/index': {
          en: '/about/partners',
          id: '/tentang/rekan',
        },
        'contact/enquiry/index': {
          en: '/contact/enquiry',
          id: '/hubungi-kami/pertanyaan',
        },
        'contact/support/index': {
          en: '/contact/support',
          id: '/hubungi-kami/dukungan',
        },
        'news/blog/index': {
          en: '/news/blog',
          id: '/berita/blog',
        },
        'news/blog/index/:route?': {
          en: '/news/blog/:route?',
          id: '/berita/blog/:route?',
        },
        'news/gallery/index': {
          en: '/news/gallery',
          id: '/berita/galeri',
        },
        'news/media-coverage/index': {
          en: '/news/media-coverage',
          id: '/berita/liputan-media',
        },
        'resources/initiatives/index': {
          en: '/resources/initiatives',
          id: '/sumber/inisiatif',
        },
        'resources/research/index': {
          en: '/resources/research',
          id: '/sumber/penelitian',
        },
        // 'resources/take-action/index': {
        //   en: '/resources/take-action',
        //   id: '/sumber/beraksi',
        // },
        'screenings/organize/index': {
          en: '/screenings/organize',
          id: '/pemutaran/selenggarakan-pemutaran',
        },
        // 'screenings/past-screenings/index': {
        //   en: '/screenings/past-screenings',
        //   id: '/pemutaran/jadwal-sebelumnya',
        // },
        'resources/vendors/index': {
          en: '/resources/vendors',
          id: '/sumber/vendor',
        },
        'screenings/upcoming/index': {
          en: '/screenings/upcoming',
          id: '/pemutaran/jadwal',
        },
      }
    }],
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'http://pulauplastik.org',
    exclude: [
      '/screenings/past-screenings',
      '/en/screenings/past-screenings',
      '/resources/take_action',
      '/en/resources/take_action',
      '/about/team',
      '/en/about/team',
      '/id/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // config.module.rules.push({
      //   test: /\.(pdf)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[path][name].[ext]',
      //   },
      // })
    },
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
