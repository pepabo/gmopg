import anyTest, {TestInterface} from 'ava'
import GMOPG from './gmopg'

interface Context {
  gmopg: GMOPG
}

const test = anyTest as TestInterface<Context>;

test.beforeEach((t) => {
  t.context.gmopg = new GMOPG()
})

test('constructor.name returns Object', (t) => {
  t.is(t.context.constructor.name, 'Object')
})

test('new returns GMOPG instance', (t) => {
  t.true(t.context.gmopg instanceof GMOPG)
})

test('.ENUMS returns enum object', (t) => {
  t.deepEqual(Object.keys(GMOPG.ENUMS), [
    'PayType',
    'Method',
    'Status',
    'JobCd',
    'SeqMode',
    'DefaultFlag',
    'CvsCode',
  ])
})

test('.CREATE returns new GMOPG instance', (t) => {
  const instance = GMOPG.CREATE()
  t.true(instance instanceof GMOPG)
})

test('.GENERATE_MEMBER_ID returns generated memberID', (t) => {
  const ID = GMOPG.GENERATE_MEMBER_ID('key')
  t.regex(ID, /^key-\w{32}$/)
})

test('.GENERATE_MEMBER_ID returns max 60 chars', (t) => {
  const ID = GMOPG.GENERATE_MEMBER_ID('0123456789-0123456789-0123456789-0123456789')
  t.regex(ID, /^.{60}$/)
})

test('.config returns IConfig', (t) => {
  const expect = {
    axios: {
      baseURL: 'https://pt01.mul-pay.jp',
      timeout: 180000,
      headers: {
        'user-agent': 'GMO PG Client: Unofficial'
      }
    }
  }
  t.deepEqual(t.context.gmopg.config, expect)
})

test('.client returns AxiosInstance', (t) => {
  t.is(typeof t.context.gmopg.client, 'function')
})

test('.saveMember is function', (t) => {
  t.is(typeof t.context.gmopg.saveMember, 'function')
})

test('.updateMember is function', (t) => {
  t.is(typeof t.context.gmopg.updateMember, 'function')
})

test('.deleteMember is function', (t) => {
  t.is(typeof t.context.gmopg.deleteMember, 'function')
})

test('.searchMember is function', (t) => {
  t.is(typeof t.context.gmopg.searchMember, 'function')
})

test('.saveCard is function', (t) => {
  t.is(typeof t.context.gmopg.saveCard, 'function')
})

test('.deleteCard is function', (t) => {
  t.is(typeof t.context.gmopg.deleteCard, 'function')
})

test('.searchCard is function', (t) => {
  t.is(typeof t.context.gmopg.searchCard, 'function')
})

test('.entryTran is function', (t) => {
  t.is(typeof t.context.gmopg.entryTran, 'function')
})

test('.execTran is function', (t) => {
  t.is(typeof t.context.gmopg.execTran, 'function')
})

test('.alterTran is function', (t) => {
  t.is(typeof t.context.gmopg.alterTran, 'function')
})

test('.searchTrade is function', (t) => {
  t.is(typeof t.context.gmopg.searchTrade, 'function')
})

test('.changeTran is function', (t) => {
  t.is(typeof t.context.gmopg.changeTran, 'function')
})

test('.entryTranCvs is function', (t) => {
  t.is(typeof t.context.gmopg.entryTranCvs, 'function')
})

test('.execTranCvs is function', (t) => {
  t.is(typeof t.context.gmopg.execTranCvs, 'function')
})

test('.searchTradeMulti is function', (t) => {
  t.is(typeof t.context.gmopg.searchTradeMulti, 'function')
})

test('.post is function', (t) => {
  t.is(typeof t.context.gmopg.post, 'function')
})

test('.postWithEncodeShiftJIS is function', (t) => {
  t.is(typeof t.context.gmopg.postWithEncodeShiftJIS, 'function')
})
