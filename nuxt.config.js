export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'fle.st',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  srcDir: 'src/',

  css: [
    'normalize.css',
    '~/assets/style/_fuck-webkit-highlight.scss'
  ],

  plugins: [
    '~/plugins/twemoji.js',
    '~/plugins/cjp.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode',
    '@nuxtjs/date-fns',
    '@nuxtjs/device',
  ],

  modules: [
    '@nuxt/content',
  ],

  content: {
    markdown: {
      prism: {
        theme: '~/assets/style/github-markdown-light.css'
      }
    }
  },

  build: {},
  
  googleFonts: {
    families: {
      'Sawarabi Gothic': true,
      'League Script': true,
      'Outfit': true
    },
  },

  styleResources: {
    scss: [
      '~/assets/style/_variables.scss'
    ]
  },
  
  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: [
          "faLightbulb",
          "faHouse",
          "faUser",
          "faNewspaper",
        ],
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: [
          "faTwitter",
          "faDiscord",
          "faGithub",
          "faInstagram",
          "faLine",
          "faYoutube",
          "faTiktok",
          "faFacebookF",
          "faTumblr",
        ],
      },
    ],
  },
}
