import { DEFAULT_OS } from './constants'

export function getBrowserOs(navigator: any) {
  const supportedOs = ['Mac', 'Linux', 'MacIntel']
  const platform = navigator.platform
  return supportedOs.find((os) => platform.includes(os)) || DEFAULT_OS
}
