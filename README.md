GMO Payment Gateway API Client: Unofficial
==========================================

Simple Nodejs wrapper for [GMO Payment Gateway][gmopg] API.

<a href="https://travis-ci.org/linyows/gmopg.js" title="travis"><img src="https://img.shields.io/travis/linyows/gmopg.js.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/gmopg" title="npm"><img src="http://img.shields.io/npm/v/gmopg.svg?style=flat-square"></a>
<a href="https://github.com/linyows/gmopg.js/blob/master/MIT-LICENSE" title="MIT License"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>

[gmopg]: https://www.gmo-pg.com/

Installation
------------

```sh
$ npm install gmopg
```

Usage
-----

Purchase Example:

```js
const GMOPG = require('gmopg')

GMOPG.config.SiteID = 'Your SiteID'
GMOPG.config.SitePass = 'Your SitePass'
GMOPG.config.ShopID = 'Your ShopID'
GMOPG.config.ShopPass = 'Your SitePass'

const orderID = 'Order ID'
const amount = 1234

const entryRes = await GMOPG.entryTran({
  OrderID: orderID,
  JobCd: GMOPG.enums.JobCd.Auth,
  Amount: amount
})

const execRes = await GMOPG.execTran({
  AccessID: entryRes.accessId,
  AccessPass: entryRes.accessPass,
  OrderID: orderID,
  Method: GMOPG.enums.Method.Lump,
  CardNo: '1234123412341234',
  Expire: '2024',
  SecurityCode: '123'
})

const alterRes = await GMOPG.alterTran({
  AccessID: entryRes.accessId,
  AccessPass: entryRes.accessPass,
  JobCd: GMOPG.enums.JobCd.Sales,
  amount: amount
})
```

License
-------

MIT
