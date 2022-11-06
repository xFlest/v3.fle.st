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
    'normalize.css'
  ],

  plugins: [
    '~/plugins/twemoji.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome'
  ],

  modules: [
    '@nuxt/content',
  ],

  content: {},

  build: {},
  
  googleFonts: {
    families: {
      'Sawarabi Gothic': true,
      'League Script': true
    },
  },

  styleResources: {
    scss: ['~/assets/style/_variables.scss']
  },
  
  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: [
          "faHouse",
          "faCircleUser",
          "faUser",
          "faAward",
          "faNewspaper",
          "faImages",
          "faEarthAmericas",
          "faAngleRight",
          "faSackDollar",
          "faDownload"
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
