// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
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

  css: ['~/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/styles/colors.scss" as *;',
        },
      },
    },
  },
  components: true,

  compatibilityDate: '2024-11-19',
})
