import test from 'ava'
import GMOPG, {ENUMS, GENERATE_MEMBER_ID} from './gmopg'

let gmopg: any

test.beforeEach(() => {
  gmopg = new GMOPG()
})

test('new returns GMOPG instance', (t) => {
  t.true(gmopg instanceof GMOPG)
})

test('.ENUMS returns enum object', (t) => {
  t.deepEqual(Object.keys(ENUMS), [
    'PayType',
    'Method',
    'Status',
    'JobCd',
    'SeqMode',
    'DefaultFlag',
    'CvsCode',
  ])
})

test('.GENERATE_MEMBER_ID returns generated memberID', (t) => {
  const ID = GENERATE_MEMBER_ID('key')
  t.regex(ID, /^key-\w{32}$/)
})

test('.GENERATE_MEMBER_ID returns max 60 chars', (t) => {
  const ID = GENERATE_MEMBER_ID('0123456789-0123456789-0123456789-0123456789')
  t.regex(ID, /^.{60}$/)
})

test('.config returns IConfig', (t) => {
  const expect = {
    baseUrl: 'https://pt01.mul-pay.jp',
    http: {
      timeout: 180000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'GMO PG Client: Unofficial'
      }
    }
  }
  t.deepEqual(gmopg.config, expect)
})

test('.saveMember is function', (t) => {
  t.is(typeof gmopg.saveMember, 'function')
})

test('.updateMember is function', (t) => {
  t.is(typeof gmopg.updateMember, 'function')
})

test('.deleteMember is function', (t) => {
  t.is(typeof gmopg.deleteMember, 'function')
})

test('.searchMember is function', (t) => {
  t.is(typeof gmopg.searchMember, 'function')
})

test('.saveCard is function', (t) => {
  t.is(typeof gmopg.saveCard, 'function')
})

test('.deleteCard is function', (t) => {
  t.is(typeof gmopg.deleteCard, 'function')
})

test('.searchCard is function', (t) => {
  t.is(typeof gmopg.searchCard, 'function')
})

test('.entryTran is function', (t) => {
  t.is(typeof gmopg.entryTran, 'function')
})

test('.execTran is function', (t) => {
  t.is(typeof gmopg.execTran, 'function')
})

test('.alterTran is function', (t) => {
  t.is(typeof gmopg.alterTran, 'function')
})

test('.searchTrade is function', (t) => {
  t.is(typeof gmopg.searchTrade, 'function')
})

test('.changeTran is function', (t) => {
  t.is(typeof gmopg.changeTran, 'function')
})

test('.entryTranCvs is function', (t) => {
  t.is(typeof gmopg.entryTranCvs, 'function')
})

test('.execTranCvs is function', (t) => {
  t.is(typeof gmopg.execTranCvs, 'function')
})

test('.cancelCvs is function', (t) => {
  t.is(typeof gmopg.cancelCvs, 'function')
})

test('.searchTradeMulti is function', (t) => {
  t.is(typeof gmopg.searchTradeMulti, 'function')
})

test('.post is function', (t) => {
  t.is(typeof gmopg.post, 'function')
})
