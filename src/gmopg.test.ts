import test from 'ava'
import GMOPG from './gmopg'

test('returns instance', (t) => {
  const pg = new GMOPG({})
  t.is(typeof pg, 'object')
})
