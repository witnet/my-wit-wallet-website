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
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
    },
  },
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'GTM-WXTPK299',
  },
  css: ['~/styles/main.scss', 'wit-vue-ui/style.css'],
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
