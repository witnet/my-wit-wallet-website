<template>
  <a
    v-if="releaseContent && releaseContent.downloadName"
    class="link"
    :href="releaseContent.releaseUrl"
    target="_blank"
    :download="releaseContent.downloadName"
  >
    <button class="btn">
      <i18n-t keypath="downloadLink" tag="span">
        <template #platform>
          <span>{{ releaseContent.platform }}</span>
        </template>
      </i18n-t>
    </button>
  </a>
  <a
    v-else
    class="link"
    :href="releaseContent ? releaseContent.releaseUrl : GITHUB_RELEASE_URL"
  >
    <button class="btn">
      <i18n-t v-if="releaseContent" keypath="downloadLink" tag="span">
        <template #platform>
          <span>{{ releaseContent?.platform }}</span>
        </template>
      </i18n-t>
      <span v-else>{{ t('githubLink') }}</span>
    </button>
  </a>
</template>

<script setup>
import { getLatestRelease, getStoreRelease } from '@/getLatestRelease'
import { getBrowserOs } from '@/getBrowserOs'
import { useI18n } from 'vue-i18n'
import { GITHUB_RELEASE_URL } from '@/constants'
import { onMounted, ref } from 'vue'
const { t } = useI18n()

const releaseContent = ref(null)

onMounted(async () => {
  releaseContent.value = await release()
})

async function release() {
  const os = getBrowserOs(navigator)
  const storeRelease = getStoreRelease({ os })
  if (!os) {
    return null
  }
  if (storeRelease) {
    return storeRelease
  }
  return await getLatestRelease({ os })
}
</script>

<style lang="scss">
.link {
  width: max-content;
  height: auto;
  display: flex;
}
</style>
