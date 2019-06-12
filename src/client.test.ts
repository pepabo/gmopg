import test from 'ava'
import nock = require('nock');
import {PayType} from './client.enum'
import Client from './client'

const baseUrl = 'https://x.y';

const client = new Client({baseUrl})

test('.post is function', (t) => {
  t.is(typeof client.post, 'function')
})

test('.post requests body correctly and send correct content-type header', async (t) => {
  nock(baseUrl, {
    reqheaders: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .post(/.*/, 'Foo=aaa&Bar=0&Baz=true&Ja=日本語&Type=0')
    .reply(200, 'AccessID=accessid&AccessPass=accesspass')

  const res = await client.post('/test1', {
    Foo: 'aaa',
    Bar: 0,
    Baz: true,
    Ja: '日本語',
    Type: PayType.Credit
  });

  t.deepEqual(res, {
    AccessID: 'accessid',
    AccessPass: 'accesspass'
  })
})

test('.post returns errors correctly', async (t) => {
  nock(baseUrl)
    .post(/.*/, 'Foo=aaa&Bar=0&Baz=true&Ja=日本語&Type=0')
    .reply(200, 'ErrCode=E01&ErrInfo=E01190001')

  try {
    await client.post('/test2', {
      Foo: 'aaa',
      Bar: 0,
      Baz: true,
      Ja: '日本語',
      Type: PayType.Credit
    });
    t.fail()
  } catch (err) {
    t.deepEqual(err.errInfo, ["E01190001"])
  }
})
