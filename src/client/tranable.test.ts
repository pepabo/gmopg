import test from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {JobCd, Method} from '../client'
import Tranable, {
  IAlterTranResult,
  IChangeTranResult,
  IEntryTranResult,
  IExecTranResult,
  ISearchTradeResult
} from './tranable'

test.beforeEach((t) => {
  const tran = new Tranable()
  tran.client = Axios.create({})
  t.context.tran = tran
})

test('.entryTran calls API and returns response', async (t) => {
  t.context.tran.options = {
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
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid',
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid',
    JobCd: 'jobcd',
    Amount: 1234
  }
  const res = await t.context.tran.entryTran(args)

  const expect: IEntryTranResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass'
  }
  t.deepEqual(res, expect)
})

test('.execTran calls API and returns response', async (t) => {
  t.context.tran.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const text = [
        'Acs=acs',
        'OrderID=orderid',
        'Forward=forward',
        'Method=1',
        'PayTimes=1',
        'Approve=approve',
        'TranID=tranid',
        'TranDate=trandate',
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
    Method: '1',
    PayTimes: 1,
    CardNo: 'cardno',
    Expire: 'expire',
    SecurityCode: '123'
  }
  const res = await t.context.tran.execTran(args)

  const expect: IExecTranResult = {
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
    ClientField3: 'clientfield3'
  }
  t.deepEqual(res, expect)
})
