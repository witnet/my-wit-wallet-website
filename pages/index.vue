<template>
  <div class="container">
    <div class="left-column">
      <div class="header">
        <img
          src="~/assets/svg/my-wit-wallet-logo.svg"
          alt="myWitWallet logo"
          class="logo"
        />
      </div>
      <i18n-t keypath="title" tag="h2" class="title">
        <br />
      </i18n-t>
      <p class="description">{{ $t('description') }}</p>
      <div class="links">
        <DownloadBtn />
      </div>
      <i18n-t keypath="source_code" tag="p" class="footer">
        <template #github>
          <a href="https://github.com/witnet/my-wit-wallet" target="_blanc">
            Github
          </a>
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

<script>
export default {
  head() {
    return {
      name: 'index',
      title: this.$t('head.title'),
      meta: [
        {
          name: this.$t('head.title'),
          content: this.$t('description'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.container {
  margin: 0 auto;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url(../assets/png/my-wit-wallet-icon-in-background.png) no-repeat;
  background-position: bottom 50px;
  .left-column {
    max-width: 500px;
    .header {
      display: flex;
      align-items: center;
      .logo {
        width: 100%;
        max-width: 350px;
      }
    }
    .title {
      color: $black;
      text-align: left;
      font-size: 3em;
      font-weight: bolder;
      margin-top: 32px;
      max-width: 500px;
    }
    .description {
      color: $grey;
      font-weight: 400;
      margin-top: 16px;
      text-align: left;
      font-size: 1.3em;
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
    box-shadow: 0px 6px 30px 5px rgba(24, 122, 96, 0.25);
  }
  .footer {
    color: $grey;
    text-align: left;
    margin-top: 16px;
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
      .header {
        .logo {
          width: 80vw;
        }
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
