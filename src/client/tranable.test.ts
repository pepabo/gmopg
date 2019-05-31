import anyTest, {TestInterface} from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {JobCd, Method, Status} from '../client.enum'
import Tranable from './tranable'
import {
  IAlterTranResult,
  IChangeTranResult,
  IEntryTranResult,
  IExecTranResult,
  ISearchTradeResult
} from './tranable.interface'

interface Context {
  tran: Tranable
}

const test = anyTest as TestInterface<Context>;

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
    JobCd: JobCd.Check,
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
    Method: Method.Lump,
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

test('.alterTran calls API and returns response', async (t) => {
  t.context.tran.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'AccessID=accessid&AccessPass=accesspass&Forward=forward&Approve=approve&TranID=tranid&TranDate=trandate',
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
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    JobCd: JobCd.Check
  }
  const res = await t.context.tran.alterTran(args)

  const expect: IAlterTranResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    Forward: 'forward',
    Approve: 'approve',
    TranID: 'tranid',
    TranDate: 'trandate'
  }
  t.deepEqual(res, expect)
})

test('.searchTrade calls API and returns response', async (t) => {
  t.context.tran.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const text = [
        'OrderID=orderid',
        'Status=CHECK',
        'ProcessDate=processdate',
        'JobCd=CHECK',
        'AccessID=accessid',
        'AccessPass=accesspass',
        'ItemCode=itemcode',
        'Amount=1234',
        'Tax=10',
        'SiteID=siteid',
        'MemberID=memberid',
        'CardNo=cardno',
        'Expire=expire',
        'Method=1',
        'PayTimes=1',
        'Forward=forward',
        'TranID=tranid',
        'Approve=approve',
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
    ShopID: 'shopid',
    ShopPass: 'shoppass',
    OrderID: 'orderid'
  }
  const res = await t.context.tran.searchTrade(args)

  const expect: ISearchTradeResult = {
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
    ClientField3: 'clientfield3'
  }
  t.deepEqual(res, expect)
})

test('.changeTran calls API and returns response', async (t) => {
  t.context.tran.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const text = [
        'AccessID=accessid',
        'AccessPass=accesspass',
        'Forward=forward',
        'Approve=approve',
        'TranID=tranid',
        'TranDate=trandate'
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
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    JobCd: JobCd.Check,
    Amount: 1234
  }
  const res = await t.context.tran.changeTran(args)

  const expect: IChangeTranResult = {
    AccessID: 'accessid',
    AccessPass: 'accesspass',
    Forward: 'forward',
    Approve: 'approve',
    TranID: 'tranid',
    TranDate: 'trandate'
  }
  t.deepEqual(res, expect)
})
