import test from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import Cardable, {ISaveCardResult, IDeleteCardResult, ISearchCardResult} from './cardable'

test.beforeEach((t) => {
  const card = new Cardable()
  card.client = Axios.create({})
  t.context.card = card
})

test('.defaultCardData returns default object', async (t) => {
  const res = await t.context.card.defaultCardData()
  const expect = {
    SiteID: undefined,
    SitePass: undefined,
    MemberID: undefined
  }
  t.deepEqual(res, expect)
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

test('.deleteCard calls API and returns response', async (t) => {
  t.context.card.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'CardSeq=cardseq',
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
    SeqMode: '0',
    CardSeq: 'cardseq'
  }
  const res = await t.context.card.deleteCard(args)

  const expect: IDeleteCardResult = {
    CardSeq: 'cardseq'
  }
  t.deepEqual(res, expect)
})

test('.searchCard calls API and returns response', async (t) => {
  t.context.card.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'CardSeq=cardseq&DefaultFlag=1&CardName=cardname&CardNo=cardno&Expire=expire&HolderName=holdername&DeleteFlag=0',
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
    SeqMode: '0',
    CardSeq: 'cardseq'
  }
  const res = await t.context.card.searchCard(args)

  const result: ISearchCardResult = {
    CardSeq: 'cardseq',
    DefaultFlag: '1',
    CardName: 'cardname',
    CardNo: 'cardno',
    Expire: 'expire',
    HolderName: 'holdername',
    DeleteFlag: '0'
  }
  const expect = [result]
  t.deepEqual(res, expect)
})
