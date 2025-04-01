<template>
  <div class="container">
    <div class="left-column">
      <h1 class="logo">
        <a href="https://mywitwallet.com/">
          <img
            src="~/assets/svg/my-wit-wallet-logo.svg"
            alt="myWitWallet logo"
            class="logo"
          />
        </a>
      </h1>
      <i18n-t keypath="title" tag="h2" class="title">
        <br />
      </i18n-t>
      <p class="description text">{{ $t('description') }}</p>
      <div class="links">
        <ClientOnly>
          <DownloadBtn />
        </ClientOnly>
      </div>
      <i18n-t keypath="source_code" tag="p" class="footer">
        <template #github>
          <WLink
            href="https://github.com/witnet/my-wit-wallet"
            :label="'Github'"
            :underline="true"
          />
        </template>
      </i18n-t>
    </div>
    <img
      class="app-image"
      src="~/assets/png/my-wit-wallet-app-image.png"
      alt="app image"
    />
  </div>
</template>

<script setup>
import { WLink } from 'wit-vue-ui'
import 'wit-vue-ui/style.css'
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .left-column {
    max-width: 500px;
    .logo {
      width: 100%;
      max-width: 350px;
    }
    .title {
      color: $black;
      text-align: left;
      font-size: 2.2em;
      font-weight: bold;
      line-height: 1.2;
      margin-top: 32px;
      max-width: 500px;
    }
    .description {
      color: $grey;
      font-weight: 400;
      margin-top: 16px;
      text-align: left;
      font-size: 1.2em;
    }
    .links {
      display: flex;
      margin-top: 24px;
      width: 100%;
      .link {
        width: 100%;
      }
    }
  }
  .app-image {
    width: 600px;
    margin-left: 112px;
    box-shadow: 0px 6px 30px 5px rgba(68, 66, 87, 0.25);
    border-radius: 8px;
  }
  .footer {
    color: $grey;
    text-align: left;
    margin-top: 16px;
    font-size: 1em;
  }
}

@media (max-width: 1200px) {
  .container {
    display: flex;
    justify-content: center;
    max-width: 300px;
    .app-image {
      display: none;
    }
  }
}

@media (max-width: 600px) {
  .container {
    padding: 24px;
    height: max-content;
    .left-column {
      .logo {
        width: 80vw;
      }
    }
  }
}

@media (max-width: 300px) {
  .container {
    padding: 16px;
    height: max-content;
    .left-column {
      .title {
        font-size: 2em;
      }
    }
  }
}
</style>
