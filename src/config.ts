import * as process from 'process'

export type TConfig = {
  endpoint?: string
  headers?: object
  timeout?: number
  siteID?: string
  sitePass?: string
  shopID?: string
  shopPass?: string
}

export default class Config {
  static buildByEnv(): TConfig {
    const c: TConfig = {}

    if (process.env.GMOPG_ENDPOINT) {
      c['endpoint'] = process.env.GMOPG_ENDPOINT
    }
    if (process.env.GMOPG_TIMEOUT) {
      c['timeout'] = +`${process.env.GMOPG_TIMEOUT}`
    }
    if (process.env.GMOPG_SITEID) {
      c['siteID'] = process.env.GMOPG_SITEID
    }
    if (process.env.GMOPG_SITEPASS) {
      c['sitePass'] = process.env.GMOPG_SITEPASS
    }
    if (process.env.GMOPG_SHOPID) {
      c['shopID'] = process.env.GMOPG_SHOPID
    }
    if (process.env.GMOPG_SHOPPASS) {
      c['shopPass'] = process.env.GMOPG_SHOPPASS
    }

    return c
  }
}
