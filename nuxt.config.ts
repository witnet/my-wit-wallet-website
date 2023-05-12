// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Get myWitWallet, your Witnet wallet.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Get myWitWallet',
        },
        { name: 'theme-color', content: '#b566ff' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'Get myWitWallet' },
        {
          name: 'og:description',
          content:
            'Download myWitWallet, the desktop app that keeps your Witnet tokens safe and helps you build, share and deploy data requests into the Witnet network.',
        },
        { name: 'og:image', content: '/my-wit-wallet.png' },
        { name: 'og:url', content: 'https://myWitWallet.app' },
        { name: 'og:locale:alternate', content: 'es_ES' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap',
        },
      ],
    },
  },
  css: ['~/styles/colors.scss', '~/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/styles/element-variables.scss';",
        },
      },
    },
  },
  components: true,
  modules: ['@element-plus/nuxt'],
  elementPlus: {
    components: ['ElButton'],
  },
})
