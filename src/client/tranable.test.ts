import test from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import Tranable, {IEntryTranResult} from './tranable'

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
