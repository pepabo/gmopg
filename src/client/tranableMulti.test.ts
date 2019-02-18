import anyTest, {TestInterface} from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {CvsCode, PayType, Status, Method, JobCd} from '../client.enum'
import TranableMulti from './tranableMulti'
import {
  ISearchTradeMultiCardResult,
  ISearchTradeMultiCvsResult
} from './tranableMulti.interface'

const test = anyTest as TestInterface<{tranMulti: TranableMulti}>;

test.beforeEach((t) => {
  const tranMulti = new TranableMulti()
  tranMulti.client = Axios.create({})
  t.context.tranMulti = tranMulti
})

test('.searchTradeMulti calls API and returns response - CVS', async (t) => {
  t.context.tranMulti.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const text = [
        `Status=${Status.Reqsuccess}`,
        'ProcessDate=processdate',
        'AccessID=accessid',
        'AccessPass=accesspass',
        'Amount=1234',
        'Tax=10',
        'Currency=JPN',
        'ClientField1=clientfield1',
        'ClientField2=clientfield2',
        'ClientField3=clientfield3',
        `PayType=${PayType.Cvs}`,
        `CvsCode=${CvsCode.Lawson}`,
        'CvsConfNo=cvsconfno',
        'CvsReceiptNo=cvsreceiptno',
        'PaymentTerm=paymentterm'
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
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    PayType: PayType.Cvs
  }
  const res = await t.context.tranMulti.searchTradeMulti<ISearchTradeMultiCvsResult>(args)

  const expect: ISearchTradeMultiCvsResult = {
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
    PaymentTerm: 'paymentterm'
  }
  t.deepEqual(res, expect)
})

test('.searchTradeMulti calls API and returns response - Credit', async (t) => {
  t.context.tranMulti.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const text = [
        `Status=${Status.Capture}`,
        'ProcessDate=processdate',
        `JobCd=${JobCd.Capture}`,
        'AccessID=accessid',
        'AccessPass=accesspass',
        'Amount=1234',
        'Tax=10',
        'Currency=JPN',
        'SiteID=siteid',
        'MemberID=memberid',
        'CardNo=cardno',
        'Expire=expire',
        `Method=${Method.Lump}`,
        'PayTimes=1',
        'Forward=forward',
        'TranID=tranid',
        'Approve=approve',
        'ClientField1=clientfield1',
        'ClientField2=clientfield2',
        'ClientField3=clientfield3',
        `PayType=${PayType.Credit}`
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
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    PayType: PayType.Credit
  }
  const res = await t.context.tranMulti.searchTradeMulti<ISearchTradeMultiCardResult>(args)

  const expect: ISearchTradeMultiCardResult = {
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
    PayType: PayType.Credit
  }
  t.deepEqual(res, expect)
})
