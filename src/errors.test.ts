import test from 'ava'
import {BadRequest} from './errors'

test('new returns BadRequest instance', (t) => {
  t.true(new BadRequest() instanceof BadRequest)
})

test('variables is message as instance', (t) => {
  const err = new BadRequest('yo')
  t.is(err.message, 'yo')
})

test('.parseError returns ErrInfo as array', (t) => {
  const err = new BadRequest().parseError({ ErrInfo: 'aaa|bbb' })
  t.is(err.errors[0], 'aaa')
  t.is(err.errors[1], 'bbb')
})
