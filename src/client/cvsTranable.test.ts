import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import { CvsCode, Status } from '../client.enum'
import WithCvsTranable from './cvsTranable'
import {
  CancelCvsResult,
  EntryTranCvsResult,
  ExecTranCvsResult,
} from './cvsTranable.interface'

const CvsTranable = WithCvsTranable(Client)
const cvsTranable = new CvsTranable()

test.afterEach(() => {
  sinon.restore()
})

test('.entryTranCvs calls API and returns response', async t => {
  const expect: EntryTranCvsResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
  }

  sinon.stub(cvsTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    Amount: 1234,
    Tax: 123,
  }
  const res = await cvsTranable.entryTranCvs(args)

  t.deepEqual(res, expect)
})

test('.execTranCvs calls API and returns response', async t => {
  const expect: ExecTranCvsResult = {
    OrderID: 'orderid',
    Convenience: CvsCode.Lawson,
    ConfNo: 'confno',
    ReceiptNo: 'receiptno',
    PaymentTerm: 'yyyyMMddHHmmss',
    TranDate: 'yyyyMMddHHmmss',
    CheckString: 'checkstring',
    ClientField1: 'clientfield1',
    ClientField2: 'clientfield2',
    ClientField3: 'clientfield3',
  }

  sinon.stub(cvsTranable, 'post').resolves(expect)

  const args = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
    Convenience: CvsCode.Lawson,
    CustomerName: '山田太郎',
    CustomerKana: 'ヤマダタロウ',
    TelNo: '09012341234',
    ReceiptsDisp11: 'contact info',
    ReceiptsDisp12: '09011112222',
    ReceiptsDisp13: '10:00-19:00',
  }
  const res = await cvsTranable.execTranCvs(args)

  t.deepEqual(res, expect)
})

test('.cancelCvs calls API and returns response', async t => {
  const expect: CancelCvsResult = {
    OrderID: 'orderid',
    Status: Status.Cancel,
  }

  sinon.stub(cvsTranable, 'post').resolves(expect)

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    OrderID: 'orderid',
  }

  const res = await cvsTranable.cancelCvs(args)

  t.deepEqual(res, expect)
})
