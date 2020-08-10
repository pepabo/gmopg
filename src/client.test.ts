import test from 'ava'
import nock = require('nock');
import {PayType} from './client.enum'
import Client from './client'

const baseUrl = 'https://x.y';

const client = new Client({baseUrl})

type ExampleData = {
  Foo: string,
  Bar: number,
  Baz: boolean,
  Ja: string,
  Type: PayType,
}

type ExampleRes = {
  AccessID: string,
  AccessPass: string,
}

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

  const res = await client.post<ExampleData, ExampleRes>('/test1', {
    Foo: 'aaa',
    Bar: 0,
    Baz: true,
    Ja: '日本語',
    Type: PayType.Credit
  })

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
    await client.post<ExampleData, unknown>('/test2', {
      Foo: 'aaa',
      Bar: 0,
      Baz: true,
      Ja: '日本語',
      Type: PayType.Credit
    })
    t.fail()
  } catch (err) {
    t.deepEqual(err.errInfo, ["E01190001"])
  }
})

test('.post should not decode "+" chars', async (t) => {
  nock(baseUrl)
    .post(/.*/)
    .reply(200, 'TranID=123aZ&Token=abc123/+-_&StartUrl=https://x.y/z')

  type Data = {
    foo: string,
  }
    
  type Res = {
    TranID: string,
    Token: string,
    StartUrl: string,
  }
  const res = await client.post<Data, Res>('/test1', {foo: '1'});

  t.deepEqual(res, {
    TranID: '123aZ',
    Token: 'abc123/+-_',
    StartUrl: 'https://x.y/z',
  })
})
