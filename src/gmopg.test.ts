import test from 'ava'
import GMOPG from './gmopg'

test.beforeEach((t) => {
  t.context.gmopg = new GMOPG({})
})

test('new returns GMOPG instance', (t) => {
  t.true(t.context.gmopg instanceof GMOPG)
})

test('.enums returns enum object', (t) => {
  t.is(typeof t.context.gmopg.enums, 'object')
})

test('constructor.createInstance returns new GMOPG instance', (t) => {
  const instance = GMOPG.createInstance({})
  t.true(instance instanceof GMOPG)
})

test('.create returns new GMOPG instance', (t) => {
  const instance = t.context.gmopg.create({})
  t.true(instance instanceof GMOPG)
  t.notDeepEqual(t.context.gmopg, instance)
})

test('constructor.generateMemberID returns generated memberID', (t) => {
  const ID = GMOPG.generateMemberID('key')
  t.regex(ID, /key-\w{32}/)
})

test('.generateMemberID returns generated memberID', (t) => {
  const ID = t.context.gmopg.generateMemberID('key')
  t.regex(ID, /key-\w{32}/)
})

test('.config returns TConfig', (t) => {
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
