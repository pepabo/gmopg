GMO Payment Gateway API Client: Unofficial
==========================================

Simple Nodejs wrapper for [GMO Payment Gateway][gmopg] API.

<a href="https://www.npmjs.com/package/gmopg" title="npm"><img src="http://img.shields.io/npm/v/gmopg.svg?style=flat-square"></a>
<a href="https://travis-ci.org/linyows/gmopg.js" title="travis"><img src="https://img.shields.io/travis/linyows/gmopg.js.svg?style=flat-square"></a>
<a href="https://coveralls.io/github/linyows/gmopg.js" title="coveralls"><img src="https://img.shields.io/coveralls/linyows/gmopg.js.svg?style=flat-square"></a>
<a href="https://github.com/linyows/gmopg.js/blob/master/MIT-LICENSE" title="MIT License"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>

[gmopg]: https://www.gmo-pg.com/

Installation
------------

```sh
$ npm install gmopg
```

Usage
-----

Purchase example

### Node.js

```js
const GMOPG = require('gmopg')

GMOPG.config.SiteID   = 'Your SiteID'
GMOPG.config.SitePass = 'Your SitePass'
GMOPG.config.ShopID   = 'Your ShopID'
GMOPG.config.ShopPass = 'Your SitePass'

const orderID = 'Order ID'
const amount  = 1234

GMOPG.entryTran({
  OrderID: orderID,
  JobCd: GMOPG.enums.JobCd.Auth,
  Amount: amount
}).then((entryRes) => {
  GMOPG.execTran({
    AccessID: entryRes.accessId,
    AccessPass: entryRes.accessPass,
    OrderID: orderID,
    Method: GMOPG.enums.Method.Lump,
    CardNo: '1234123412341234',
    Expire: '2024',
    SecurityCode: '123'
  }).then((execRes) => {
    GMOPG.alterTran({
      AccessID: entryRes.accessId,
      AccessPass: entryRes.accessPass,
      JobCd: GMOPG.enums.JobCd.Sales,
      amount: amount
    }).then((alterRes) => {
      console.log(alterRes)
    })
  })
})
```

### TypeScript

```ts
import GMOPG, {TConfig} from 'gmopg'

const config: TConfig = {
  axios: {},
  SiteID: 'Your SiteID',
  SitePass: 'Your SitePass',
  ShopID: 'Your ShopID',
  ShopPass: 'Your ShopPass'
}
const gmopg = new GMOPG(config)

const orderID = 'Order ID'
const amount  = 1234

const entryRes = await gmopg.entryTran({
  OrderID: orderID,
  JobCd: gmopg.enums.JobCd.Auth,
  Amount: amount
})

const execRes = await gmopg.execTran({
  AccessID: entryRes.accessId,
  AccessPass: entryRes.accessPass,
  OrderID: orderID,
  Method: gmopg.enums.Method.Lump,
  CardNo: '1234123412341234',
  Expire: '2024',
  SecurityCode: '123'
})

const alterRes = await gmopg.alterTran({
  AccessID: entryRes.accessId,
  AccessPass: entryRes.accessPass,
  JobCd: gmopg.enums.JobCd.Sales,
  amount: amount
})
```

Config
------

`GMOPG.config`:

name          | description         | environ        | default
---           | ---                 | ---            | ---
axios.baseURL | baseurl for request | GMOPG_ENDPOINT | https://pt01.mul-pay.jp
axios.timeout | timeout for request | GMOPG_TIMEOUT  | 180000 (ms)
axios.headers | headers for request | -              | see code :eyes:
SiteID        | PG site id          | GMOPG_SITEID   | undefined
SitePass      | PG site pass        | GMOPG_SITEPASS | undefined
ShopID        | PG shop id          | GMOPG_SHOPID   | undefined
ShopPass      | PG shop pass        | GMOPG_SHOPPASS | undefined

Contribution
------------

1. Fork (https://github.com/linyows/gmopg.js/fork)
1. Create a feature branch
1. Commit your changes
1. Rebase your local changes against the master branch
1. Run test suite with the `npm ci` command and confirm that it passes
1. Create a new Pull Request

Author
------

[linyows](https://github.com/linyows)
