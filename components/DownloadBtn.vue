<template>
  <a
    v-if="release && release.downloadName"
    class="link"
    :href="release.releaseUrl"
    target="_blank"
    :download="release.downloadName"
  >
    <button class="btn">
      <i18n-t keypath="downloadLink" tag="span">
        <template #platform>
          <span>{{ release.platform }}</span>
        </template>
      </i18n-t>
    </button>
  </a>
  <a
    v-else
    class="link"
    :href="release ? release.releaseUrl : GITHUB_RELEASE_URL"
  >
    <button class="btn">
      <i18n-t v-if="release" keypath="downloadLink" tag="span">
        <template #platform>
          <span>{{ release?.platform }}</span>
        </template>
      </i18n-t>
      <span v-else>{{ t('githubLink') }}</span>
    </button>
  </a>
</template>

<script setup lang="ts">
import {
  getLatestRelease,
  getStoreRelease,
  type LatestReleaseResponse,
} from '@/getLatestRelease'
import { getBrowserOs } from '@/getBrowserOs'
import { useI18n } from 'vue-i18n'
import { GITHUB_RELEASE_URL, URL_RELEASE_BASE } from '@/constants'
import { computed, type Ref } from 'vue'
const { t } = useI18n()

const { data }: { data: Ref<LatestReleaseResponse | undefined> } =
  await useFetch(URL_RELEASE_BASE)

const os = computed(() => getBrowserOs(navigator))

const storeRelease = computed(() =>
  os.value ? getStoreRelease({ os: os.value }) : null,
)
const downloadRelease = computed(() =>
  os.value ? getLatestRelease({ os: os.value, data: data.value }) : null,
)
const release = computed(() => storeRelease.value ?? downloadRelease.value)
</script>

<style lang="scss">
.link {
  width: max-content;
  height: auto;
  display: flex;
}
</style>
