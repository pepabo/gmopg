import test from 'ava'
import GMOPG from './gmopg'

test('new returns instance', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg, 'object')
})

test('.enums returns enum object', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg.enums, 'object')
})

test('returns generated memberID', (t) => {
  const ID = GMOPG.generateMemberID('key')
  t.regex(ID, /key-\w{32}/)
})
