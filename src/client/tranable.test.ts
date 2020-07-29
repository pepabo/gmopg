import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import { JobCd, Method, Status } from '../client.enum'
import WithTranable from './tranable'
import { AlterTranResult, ChangeTranResult, EntryTranResult, ExecTranResult, SearchTradeResult } from './tranable.interface'

const Tranable = WithTranable(Client)
const tranable = new Tranable()

test.afterEach(() => {
  sinon.restore()
})

test('.entryTran calls API and returns response', async t => {
  const expect: EntryTranResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
  }

  sinon.stub(tranable, 'post').resolves(expect)

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid',
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    JobCd: JobCd.Check,
    Amount: 1234,
  }
  const res = await tranable.entryTran(args)

  t.deepEqual(res, expect)
})

test('.execTran calls API and returns response', async t => {
  const expect: ExecTranResult = {
    Acs: 'acs',
    OrderID: 'orderid',
    Forward: 'forward',
    Method: Method.Lump,
    PayTimes: '1',
    Approve: 'approve',
    TranID: 'tranid',
    TranDate: 'trandate',
    CheckString: 'checkstring',
    ClientField1: 'clientfield1',
    ClientField2: 'clientfield2',
    ClientField3: 'clientfield3',
  }

  sinon.stub(tranable, 'post').resolves(expect)

  const args = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
    Method: Method.Lump,
    PayTimes: 1,
    CardNo: 'cardno',
    Expire: 'expire',
    SecurityCode: '123',
  }
  const res = await tranable.execTran(args)

  t.deepEqual(res, expect)
})

test('.alterTran calls API and returns response', async t => {
  const expect: AlterTranResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    Forward: 'forward',
    Approve: 'approve',
    TranID: 'tranid',
    TranDate: 'trandate',
  }

  sinon.stub(tranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    JobCd: JobCd.Check,
  }
  const res = await tranable.alterTran(args)

  t.deepEqual(res, expect)
})

test('.searchTrade calls API and returns response', async t => {
  const expect: SearchTradeResult = {
    OrderID: 'orderid',
    Status: Status.Check,
    ProcessDate: 'processdate',
    JobCd: JobCd.Check,
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    ItemCode: 'itemcode',
    Amount: '1234',
    Tax: '10',
    SiteID: 'siteid',
    MemberID: 'memberid',
    CardNo: 'cardno',
    Expire: 'expire',
    Method: Method.Lump,
    PayTimes: '1',
    Forward: 'forward',
    TranID: 'tranid',
    Approve: 'approve',
    ClientField1: 'clientfield1',
    ClientField2: 'clientfield2',
    ClientField3: 'clientfield3',
  }

  sinon.stub(tranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
  }
  const res = await tranable.searchTrade(args)
  t.deepEqual(res, expect)
})

test('.changeTran calls API and returns response', async t => {
  const expect: ChangeTranResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    Forward: 'forward',
    Approve: 'approve',
    TranID: 'tranid',
    TranDate: 'trandate',
  }

  sinon.stub(tranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    JobCd: JobCd.Check,
    Amount: 1234,
  }
  const res = await tranable.changeTran(args)

  t.deepEqual(res, expect)
})
