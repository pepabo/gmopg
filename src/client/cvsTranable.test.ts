import anyTest, {TestInterface} from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {CvsCode} from '../client.enum'
import CvsTranable from './cvsTranable'
import {
  IEntryTranCvsResult,
  IExecTranCvsResult
} from './cvsTranable.interface'

const test = anyTest as TestInterface<{cvsTran: CvsTranable}>;

test.beforeEach((t) => {
  const cvsTran = new CvsTranable()
  cvsTran.client = Axios.create({})
  t.context.cvsTran = cvsTran
})

test('.entryTranCvs calls API and returns response', async (t) => {
  t.context.cvsTran.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'AccessID=accessid&AccessPass=accesspass',
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      }

      return Promise.resolve(response)
    }
  }

  const args = {
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    Amount: 1234,
    Tax: 123
  }
  const res = await t.context.cvsTran.entryTranCvs(args)

  const expect: IEntryTranCvsResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass'
  }
  t.deepEqual(res, expect)
})

test('.execTranCvs calls API and returns response', async (t) => {
  t.context.cvsTran.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const text = [
        'OrderID=orderid',
        `Convenience=${CvsCode.Lawson}`,
        'ConfNo=confno',
        'ReceiptNo=receiptno',
        'PaymentTerm=yyyyMMddHHmmss',
        'TranDate=yyyyMMddHHmmss',
        'CheckString=checkstring',
        'ClientField1=clientfield1',
        'ClientField2=clientfield2',
        'ClientField3=clientfield3'
      ].join('&')
      const response: AxiosResponse = {
        data: text,
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      }

      return Promise.resolve(response)
    }
  }

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
    ReceiptsDisp13: '10:00-19:00'
  }
  const res = await t.context.cvsTran.execTranCvs(args)

  const expect: IExecTranCvsResult = {
    OrderID: 'orderid',
    Convenience: CvsCode.Lawson,
    ConfNo: 'confno',
    ReceiptNo: 'receiptno',
    PaymentTerm: 'yyyyMMddHHmmss',
    TranDate: 'yyyyMMddHHmmss',
    CheckString: 'checkstring',
    ClientField1: 'clientfield1',
    ClientField2: 'clientfield2',
    ClientField3: 'clientfield3'
  }
  t.deepEqual(res, expect)
})

