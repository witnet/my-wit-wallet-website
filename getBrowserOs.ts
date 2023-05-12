import { DEFAULT_OS } from './constants'

export function getBrowserOs(navigator: any) {
  const supportedOs = ['Win', 'Mac', 'Linux', 'MacIntel']
  const platform = navigator.platform
  console.log('hpllaaaaa')
  return supportedOs.find((os) => platform.includes(os)) || DEFAULT_OS
}
