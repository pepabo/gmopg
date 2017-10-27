import {AxiosRequestConfig} from 'axios'
import * as process from 'process'

export interface IConfig {
  axios?: AxiosRequestConfig
  SiteID?: string
  SitePass?: string
  ShopID?: string
  ShopPass?: string
}

const msec = 1000
const sec = 60
const min = 3

export const defaults: IConfig = {
  axios: {
    timeout: min * sec * msec,
    baseURL: 'https://pt01.mul-pay.jp',
    headers: {
      'user-agent': 'GMO PG Client: Unofficial'
    }
  }
}

export function buildByEnv(): IConfig {
  const c: IConfig = {}
  c.axios = {}

  if (process.env.GMOPG_ENDPOINT !== undefined) {
    c.axios.baseURL = process.env.GMOPG_ENDPOINT
  }
  if (process.env.GMOPG_TIMEOUT !== undefined) {
    c.axios.timeout = +`${process.env.GMOPG_TIMEOUT}`
  }
  if (process.env.GMOPG_SITEID !== undefined) {
    c.SiteID = process.env.GMOPG_SITEID
  }
  if (process.env.GMOPG_SITEPASS !== undefined) {
    c.SitePass = process.env.GMOPG_SITEPASS
  }
  if (process.env.GMOPG_SHOPID !== undefined) {
    c.ShopID = process.env.GMOPG_SHOPID
  }
  if (process.env.GMOPG_SHOPPASS !== undefined) {
    c.ShopPass = process.env.GMOPG_SHOPPASS
  }

  return c
}
