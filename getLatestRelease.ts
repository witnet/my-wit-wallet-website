import { GITHUB_RELEASE_URL } from './constants'

export type Release = {
  platform: string
  releaseUrl: string
  downloadName: string | null
}

export type LatestReleaseResponse = {
  assets: Array<ReleaseAsset>
}

export type ReleaseAsset = {
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

export function getLatestRelease({
  os,
  data,
}: {
  os: string
  data: LatestReleaseResponse | undefined
}): Release | null {
  if (data) {
    const macRelease: ReleaseAsset = data.assets.find((asset: ReleaseAsset) => {
      return asset.browser_download_url.includes('myWitWallet.dmg')
    }) ?? { browser_download_url: GITHUB_RELEASE_URL, name: null }
    const linuxRelease: ReleaseAsset = data.assets.find((asset: ReleaseAsset) =>
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
