import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import { CvsCode, PayType, Status, Method, JobCd } from '../client.enum'
import WithMultiTranable from './multiTranable'
import {
  SearchTradeMultiCardResult,
  SearchTradeMultiCvsResult,
} from './multiTranable.interface'

const MultiTranable = WithMultiTranable(Client)
const multiTranable = new MultiTranable()

test.afterEach(() => {
  sinon.restore()
})

test('.searchTradeMulti calls API and returns response - CVS', async t => {
  const expect: SearchTradeMultiCvsResult = {
    Status: Status.Reqsuccess,
    ProcessDate: 'processdate',
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    Amount: '1234',
    Tax: '10',
    Currency: 'JPN',
    ClientField1: 'clientfield1',
    ClientField2: 'clientfield2',
    ClientField3: 'clientfield3',
    PayType: PayType.Cvs,
    CvsCode: CvsCode.Lawson,
    CvsConfNo: 'cvsconfno',
    CvsReceiptNo: 'cvsreceiptno',
    PaymentTerm: 'paymentterm',
  }

  sinon.stub(multiTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    PayType: PayType.Cvs,
  }
  const res = await multiTranable.searchTradeMulti<SearchTradeMultiCvsResult>(
    args
  )

  t.deepEqual(res, expect)
})

test('.searchTradeMulti calls API and returns response - Credit', async t => {
  const expect: SearchTradeMultiCardResult = {
    Status: Status.Capture,
    ProcessDate: 'processdate',
    JobCd: JobCd.Capture,
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    Amount: '1234',
    Tax: '10',
    Currency: 'JPN',
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
    PayType: PayType.Credit,
  }

  sinon.stub(multiTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    PayType: PayType.Credit,
  }
  const res = await multiTranable.searchTradeMulti<SearchTradeMultiCardResult>(
    args
  )

  t.deepEqual(res, expect)
})
