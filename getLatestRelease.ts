import { GITHUB_RELEASE_URL, URL_RELEASE_BASE } from './constants'

type Release = {
  platform: string
  releaseUrl: string
  downloadName: string | null
}

type LatestReleaseResponse = {
  assets: []
}

type ReleaseAsset = {
  browser_download_url: string
  name: string | null
}

export function getStoreRelease({ os }: { os: string }): Release | undefined {
  const iosLink = {
    platform: 'iOS',
    releaseUrl: 'https://apps.apple.com/cl/app/mywitwallet/id6449979271',
    downloadName: null,
  }
  const storeReleases: Record<string, Release> = {
    iphone: iosLink,
    ipad: iosLink,
    android: {
      platform: 'Android',
      releaseUrl:
        'https://play.google.com/store/apps/details?id=io.witnet.myWitWallet&hl=es_419&pli=1',
      downloadName: null,
    },
    windows: {
      platform: 'Windows',
      releaseUrl: 'https://apps.microsoft.com/detail/9PN09DKWPL57',
      downloadName: null,
    },
  }
  if (storeReleases[os]) {
    return storeReleases[os]
  }
}

const { data }: { data: Ref<LatestReleaseResponse | undefined> } =
  await useAsyncData('release', () => $fetch(URL_RELEASE_BASE))

export async function getLatestRelease({
  os,
}: {
  os: string
}): Promise<Release | null> {
  if (data.value) {
    const macRelease: ReleaseAsset = data.value.assets.find(
      (asset: ReleaseAsset) => {
        return asset.browser_download_url.includes('myWitWallet.dmg')
      },
    ) ?? { browser_download_url: GITHUB_RELEASE_URL, name: null }
    const linuxRelease: ReleaseAsset = data.value.assets.find(
      (asset: ReleaseAsset) =>
        asset.browser_download_url.includes('linux.tar.gz'),
    ) ?? { browser_download_url: GITHUB_RELEASE_URL, name: null }

    const release: Record<string, Release> = {
      linux: {
        platform: 'GNU / Linux',
        releaseUrl: linuxRelease.browser_download_url,
        downloadName: linuxRelease.name,
      },
      macos: {
        platform: 'Mac OS',
        releaseUrl: macRelease.browser_download_url,
        downloadName: macRelease.name,
      },
    }
    return release[os]
  }
  return null
}
