GMO Payment Gateway API Client: Unofficial
==========================================

Simple Nodejs wrapper for [GMO Payment Gateway][gmopg] API.

<a href="https://www.npmjs.com/package/gmopg" title="npm"><img src="http://img.shields.io/npm/v/gmopg.svg?style=for-the-badge"></a>
<a href="https://github.com/pepabo/gmopg/actions" title="actions"><img src="https://img.shields.io/github/workflow/status/pepabo/gmopg/Build?style=for-the-badge"></a>
<a href="https://codecov.io/gh/pepabo/gmopg" title="codecov.io"><img src="https://img.shields.io/codecov/c/gh/pepabo/gmopg.svg?style=for-the-badge"></a>
<a href="https://github.com/pepabo/gmopg/blob/master/MIT-LICENSE" title="MIT License"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge"></a>

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
const {default: GMOPG, ENUMS} = require('gmopg');

const gmopg = new GMOPG({
  baseUrl: 'https://p01.mul-pay.jp',
  SiteID: 'Your SiteID',
  SitePass: 'Your SitePass',
  ShopID: 'Your ShopID',
  ShopPass: 'Your SitePass',
})

const orderID = 'Order ID'
const amount  = 1234

gmopg.entryTran({
  OrderID: orderID,
  JobCd: ENUMS.JobCd.Auth,
  Amount: amount
}).then((entryRes) => {
  gmopg.execTran({
    AccessID: entryRes.AccessID,
    AccessPass: entryRes.AccessPass,
    OrderID: orderID,
    Method: ENUMS.Method.Lump,
    CardNo: '1234123412341234',
    Expire: '2024',
    SecurityCode: '123'
  }).then((execRes) => {
    gmopg.alterTran({
      AccessID: entryRes.AccessID,
      AccessPass: entryRes.AccessPass,
      JobCd: ENUMS.JobCd.Sales,
      Amount: amount
    }).then((alterRes) => {
      console.log(alterRes)
    })
  })
})
```

### TypeScript

```ts
import GMOPG, {ENUMS} from 'gmopg'

const gmopg = new GMOPG({
  baseUrl: 'https://p01.mul-pay.jp',
  SiteID: 'Your SiteID',
  SitePass: 'Your SitePass',
  ShopID: 'Your ShopID',
  ShopPass: 'Your ShopPass'
})

const orderID = 'Order ID'
const amount = 1234

const entryRes = await gmopg.entryTran({
  OrderID: orderID,
  JobCd: ENUMS.JobCd.Auth,
  Amount: amount
})

const execRes = await gmopg.execTran({
  AccessID: entryRes.AccessID,
  AccessPass: entryRes.AccessPass,
  OrderID: orderID,
  Method: ENUMS.Method.Lump,
  CardNo: '1234123412341234',
  Expire: '2024',
  SecurityCode: '123'
})

const alterRes = await gmopg.alterTran({
  AccessID: entryRes.AccessID,
  AccessPass: entryRes.AccessPass,
  JobCd: ENUMS.JobCd.Sales,
  Amount: amount
})
```

Config
------

name         | description         | environ        | default
---          | ---                 | ---            | ---
baseUrl      | baseurl for request | GMOPG_ENDPOINT | https://pt01.mul-pay.jp
http.timeout | timeout for request | GMOPG_TIMEOUT  | 180000 (ms)
http.headers | headers for request | -              | see code :eyes:
SiteID       | PG site id          | GMOPG_SITEID   | undefined
SitePass     | PG site pass        | GMOPG_SITEPASS | undefined
ShopID       | PG shop id          | GMOPG_SHOPID   | undefined
ShopPass     | PG shop pass        | GMOPG_SHOPPASS | undefined

Contribution
------------

1. Fork (https://github.com/pepabo/gmopg/fork)
1. Create a feature branch
1. Commit your changes
1. Rebase your local changes against the master branch
1. Run test suite with the `npm ci` command and confirm that it passes
1. Create a new Pull Request

Author
------

[linyows](https://github.com/linyows)
