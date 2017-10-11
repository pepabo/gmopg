import test from 'ava'
import GMOPG from './gmopg'

test('new GMOPG returns instance', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg, 'object')
})

test('GMOPG.enums returns enum object', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg.enums, 'object')
})

test('GMOPG.generateMemberID returns generated memberID', (t) => {
  const ID = GMOPG.generateMemberID('key')
  t.regex(ID, /key-\w{32}/)
})

test('.generateMemberID returns generated memberID', (t) => {
  const pg = new GMOPG({})
  const ID = pg.generateMemberID('key')
  t.regex(ID, /key-\w{32}/)
})

test('GMOPG.config returns TConfig', (t) => {
  const pg = new GMOPG({})
  const expect = {
    axios: {
      baseURL: 'https://pt01.mul-pay.jp',
      timeout: 180000,
      headers: {
        'user-agent': 'GMO PG Client: Unofficial',
        'content-length': '0'
      }
    }
  }
  t.deepEqual(pg.config, expect)
})

test('GMOPG.client returns AxiosInstance', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg.client, 'function')
})

test('.saveMember is function', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg.saveMember, 'function')
})

test('.updateMember is function', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg.updateMember, 'function')
})

test('.deleteMember is function', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg.deleteMember, 'function')
})

test('.searchMember is function', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg.searchMember, 'function')
})
