import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import { JobCd, Status } from '../client.enum'
import WithPaypayTranable from './paypayTranable'
import {
  EntryTranPaypayAcceptResult,
  EntryTranPaypayResult,
  ExecTranPaypayResult,
  PaypayCancelReturnResult,
  PaypaySalesResult,
} from './paypayTranable.type'

const PaypayTranable = WithPaypayTranable(Client)
const paypayTranable = new PaypayTranable()

test.afterEach(() => {
  sinon.restore()
})

test('.entryTranPaypay calls API and returns response', async t => {
  const expect: EntryTranPaypayResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
  }

  sinon.stub(paypayTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    JobCd: JobCd.Auth,
    Amount: 1234,
  }
  const res = await paypayTranable.entryTranPaypay(args)

  t.deepEqual(res, expect)
})

test('.execTranPaypay calls API and returns response', async t => {
  const expect: ExecTranPaypayResult = {
    AccessID: 'accessid',
    Token: 'token',
    StartURL: 'starturl',
    StartLimitDate: 'yyyyMMddHHmmss',
  }

  sinon.stub(paypayTranable, 'post').resolves(expect)

  const args = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
    RetURL: 'returl',
  }
  const res = await paypayTranable.execTranPaypay(args)

  t.deepEqual(res, expect)
})

test('.paypaySales calls API and returns response', async t => {
  const expect: PaypaySalesResult = {
    OrderID: 'orderid',
    Status: Status.Sales,
    Amount: 1234,
    Tax: 123,
  }

  sinon.stub(paypayTranable, 'post').resolves(expect)

  const args = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
    Amount: 1234,
    Tax: 123,
  }
  const res = await paypayTranable.paypaySales(args)

  t.deepEqual(res, expect)
})

test('.paypayCancelReturn calls API and returns response', async t => {
  const expect: PaypayCancelReturnResult = {
    OrderID: 'orderid',
    Status: Status.Cancel,
    CancelAmount: 1234,
    CancelTax: 123,
  }

  sinon.stub(paypayTranable, 'post').resolves(expect)

  const args = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
    CancelAmount: 1234,
    CancelTax: 123,
  }
  const res = await paypayTranable.paypayCancelReturn(args)

  t.deepEqual(res, expect)
})

test('.entryTranPaypayAccept calls API and returns response', async t => {
  const expect: EntryTranPaypayAcceptResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
  }

  sinon.stub(paypayTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
  }
  const res = await paypayTranable.entryTranPaypayAccept(args)

  t.deepEqual(res, expect)
})
