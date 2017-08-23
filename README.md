GMO PaymentGateway API Client: Unofficial
=========================================

This package is API client for GMO PaymentGateway on NodeJS

Usage
-----

Purchase Example:

``` js
const GMOPG = require('gmopg')

const orderID ='Order ID'

const entryRes = await GMOPG.entryTran({
  ShopID: 'Your shopID',
  ShopPass: 'Your shopPass',
  OrderID: orderID,
  JobCd: GMOPG.enum.JobCd.Auth,
  Amount: 1234
})

const execRes = await GMOPG.execTran({
  AccessID: entryRes.accessId,
  AccessPass: entryRes.accessPass,
  OrderID: orderID,
  Method: GMOPG.enum.Method.Lump,
  CardNo: '1234123412341234',
  Expire: '2024',
  SecurityCode: '123'
})

const alterRes = GMOPG.alterTran({
  ShopID: 'Your shopID',
  ShopPass: 'Your shopPass',
  AccessID: entryRes.accessId,
  AccessPass: entryRes.accessPass,
  JobCd: GMOPG.JobCd.Sales,
  amount: amount
})
```

License
-------

MIT
