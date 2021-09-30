import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import WithVirtualaccountTranable from './virtualaccountTranable'
import { EntryTranVirtualaccountResult } from './virtualaccountTranable.type'

const VirtualaccountTranable = WithVirtualaccountTranable(Client)
const virtualaccountTranable = new VirtualaccountTranable()

test.afterEach(() => {
  sinon.restore()
})

test('.entryTranVirtualaccount calls API and returns response', async t => {
  const expect: EntryTranVirtualaccountResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
  }

  sinon.stub(virtualaccountTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    Amount: 1234,
  }
  const res = await virtualaccountTranable.entryTranVirtualaccount(args)

  t.deepEqual(res, expect)
})
