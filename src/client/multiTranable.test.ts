import test from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {CvsCode, PayType, Status, Method, JobCd} from '../client.enum'
import Client from '../client'
import WithMultiTranable from './multiTranable'
import {
  ISearchTradeMultiCardResult,
  ISearchTradeMultiCvsResult
} from './multiTranable.interface'

const MultiTranable = WithMultiTranable(Client)
let multiTran: any

test.beforeEach(() => {
  multiTran = new MultiTranable()
  multiTran.client = Axios.create({})
})

test('.searchTradeMulti calls API and returns response - CVS', async (t) => {
  multiTran.config.axios = {
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
  const res = await multiTran.searchTradeMulti(args)

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
  multiTran.config.axios = {
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
  const res = await multiTran.searchTradeMulti(args)

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
