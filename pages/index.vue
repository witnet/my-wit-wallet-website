<template>
  <div class="container">
    <div class="left-column">
      <div class="header">
        <img
          src="~/assets/svg/my-wit-wallet-icon.svg"
          alt="myWitWallet logo"
          class="logo"
        />
        <h1 class="logo-title">{{ $t('logo.my_wit_wallet') }}</h1>
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url(../assets/png/my-wit-wallet-icon-in-background.png) no-repeat;
  background-position: 350% 300%;
  .left-column {
    max-width: 500px;
  }
  .app-image {
    width: 600px;
    margin-left: 112px;
    box-shadow: 0px 6px 30px 5px rgba(24, 122, 96, 0.25);
  }
  .header {
    display: flex;
    align-items: center;
    .logo-title {
      margin-left: 16px;
      font-size: 2em;
      color: $alt-grey;
      font-weight: bold;
      .wallet {
        font-weight: normal;
      }
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
  .footer {
    color: $grey;
    text-align: left;
    margin-top: 16px;
  }
}

@media (max-width: 700px) {
  .container {
    .app-image {
      display: none;
    }
    .left-column {
      max-width: 90vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .header {
        margin-top: 16px;
      }
      .footer {
        margin-bottom: 16px;
      }
      .links {
        flex-direction: column;
      }
      .btn {
        width: 100%;
      }
      .link {
        margin-top: 8px;
        margin-left: 0;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 1200px) and (min-width: 768px) {
  .container {
    flex-direction: column;
    justify-content: space-around;
    .app-image {
      display: block;
      margin-left: 0;
    }
    .left-column {
      max-width: 90vw;
      .header {
        margin-top: 16px;
      }
      .footer {
        margin-bottom: 16px;
      }
      .links {
        flex-direction: column;
      }
      .btn {
        width: 100%;
      }
      .link {
        margin-top: 8px;
        margin-left: 0;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 700px) {
  .app-image {
    display: none;
  }
  .container {
    .left-column {
      max-width: 90vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .header {
        margin-top: 16px;
      }
      .footer {
        margin-bottom: 16px;
      }
      .links {
        flex-direction: column;
      }
      .btn {
        width: 100%;
      }
      .link {
        margin-top: 8px;
        margin-left: 0;
        justify-content: center;
      }
    }
  }
}
</style>
