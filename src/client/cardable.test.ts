import test from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import Cardable, {ISaveCardResult} from './cardable'

test.beforeEach((t) => {
  const card = new Cardable()
  card.client = Axios.create({})
  t.context.card = card
})

test('.saveCard calls API and returns response', async (t) => {
  t.context.card.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'CardSeq=cardseq&CardNo=cardno&Forward=forward&Brand=brand',
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
    MemberID: 'memberid'
  }
  const res = await t.context.card.saveCard(args)

  const expect: ISaveCardResult = {
    CardSeq: 'cardseq',
    CardNo: 'cardno',
    Forward: 'forward',
    Brand: 'brand'
  }
  t.deepEqual(res, expect)
})
