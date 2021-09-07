import * as process from 'process'
import { Config } from './config.type'

export const defaults: Config = {
  baseUrl: 'https://pt01.mul-pay.jp',
  http: {
    timeout: 1000 * 60 * 3,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json, text/plain, */*',
      'User-Agent': 'GMO PG Client: Unofficial',
    },
  },
}

export function buildByEnv(): Config {
  const c: Config = {}

  if (process.env.GMOPG_ENDPOINT !== undefined) {
    c.baseUrl = process.env.GMOPG_ENDPOINT
  }
  if (process.env.GMOPG_TIMEOUT !== undefined) {
    c.http = { ...c.http, timeout: +`${process.env.GMOPG_TIMEOUT}` }
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
