import test from 'ava'
import * as Util from './util'

test('.generateID returns key with hash', (t) => {
  t.regex(Util.generateID('foo'), /foo-\w{32}/)
})
