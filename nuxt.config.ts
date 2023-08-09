// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title:
        'myWitWallet: Your Secure & Instant Non-Custodial Wallet for Witnet',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The ultimate non-custodial wallet for your Wit coins—secure, fast, and seamless. Download now!',
        },
        { name: 'theme-color', content: '#b566ff' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:type', content: 'website' },
        {
          name: 'og:title',
          content:
            'myWitWallet: Your Secure & Instant Non-Custodial Wallet for Witnet',
        },
        {
          name: 'og:description',
          content:
            'The ultimate non-custodial wallet for your Wit coins—secure, fast, and seamless. Download now!',
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
