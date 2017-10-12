import test from 'ava'
import GMOPG from './gmopg'
import * as gmopg from './index'

test('export GMOPG instance as module', (t) => {
  t.true(gmopg instanceof GMOPG)
})

test('constructor.name returns GMOPG', (t) => {
  t.is(gmopg.constructor.name, 'GMOPG')
})
