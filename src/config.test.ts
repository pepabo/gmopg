import test from 'ava'
import * as config from './config'
import * as process from 'process'

test('defaults returns default config', (t) => {
  const expect = {
    baseUrl: 'https://pt01.mul-pay.jp',
    http: {
      timeout: 180000,
      headers: {
        'user-agent': 'GMO PG Client: Unofficial'
      }
    }
  }
  t.deepEqual(config.defaults, expect)
})

test('.buildByEnv returns config', (t) => {
  t.deepEqual(config.buildByEnv(), {})
})

test('.buildByEnv returns config with env', (t) => {
  process.env.GMOPG_ENDPOINT = 'https://foo.com'
  process.env.GMOPG_TIMEOUT = '123'
  process.env.GMOPG_SITEID = 'foo-siteid'
  process.env.GMOPG_SITEPASS = 'foo-sitepass'
  process.env.GMOPG_SHOPID = 'foo-shopid'
  process.env.GMOPG_SHOPPASS = 'foo-shoppass'

  const expect = {
    baseUrl: 'https://foo.com',
    http: {
      timeout: 123
    },
    SiteID: 'foo-siteid',
    SitePass: 'foo-sitepass',
    ShopID: 'foo-shopid',
    ShopPass: 'foo-shoppass'
  }
  t.deepEqual(config.buildByEnv(), expect)
})
