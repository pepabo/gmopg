import {AxiosRequestConfig} from 'axios'
import * as process from 'process'

export type TConfig = {
  axios?: AxiosRequestConfig
  siteID?: string
  sitePass?: string
  shopID?: string
  shopPass?: string
}

export const defaults: TConfig = {
  axios: {
    timeout: 3*60*1000,
    baseURL: 'https://pt01.mul-pay.jp',
    headers: {
      'user-agent': 'GMO PG Client: Unofficial',
      'content-length': '0',
    },
  },
}

export default class Config {
  static buildByEnv(): TConfig {
    const c: TConfig = {}
    c.axios = {}

    if (process.env.GMOPG_ENDPOINT) {
      c.axios.baseURL = process.env.GMOPG_ENDPOINT
    }
    if (process.env.GMOPG_TIMEOUT) {
      c.axios.timeout = +`${process.env.GMOPG_TIMEOUT}`
    }
    if (process.env.GMOPG_SITEID) {
      c.siteID = process.env.GMOPG_SITEID
    }
    if (process.env.GMOPG_SITEPASS) {
      c.sitePass = process.env.GMOPG_SITEPASS
    }
    if (process.env.GMOPG_SHOPID) {
      c.shopID = process.env.GMOPG_SHOPID
    }
    if (process.env.GMOPG_SHOPPASS) {
      c.shopPass = process.env.GMOPG_SHOPPASS
    }

    return c
  }
}
