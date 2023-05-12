<template>
  <a
    v-if="release.platform"
    class="link"
    :href="release.releaseUrl"
    :download="release.downloadName"
  >
    <ElButton class="btn" type="primary">
      <i18n-t keypath="download" tag="span">
        <template #platform>
          <span>{{ release.platform }}</span>
        </template>
      </i18n-t>
    </ElButton>
  </a>
  <a
    v-else
    class="link"
    href="https://github.com/witnet/my-wit-wallet/releases/latest"
  >
    <ElButton class="btn" type="primary">{{ $t('head.title') }}</ElButton>
  </a>
</template>

<script setup>
import { getLatestRelease } from '../getLatestRelease'
const release = await getLatestRelease(navigator)
</script>

<style></style>
