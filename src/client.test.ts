import anyTest, {TestInterface} from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {PayType} from './client.enum'
import Client from './client'

interface Context {
  client: Client
}

const test = anyTest as TestInterface<Context>;

test.beforeEach((t) => {
  const client = new Client()
  client.client = Axios.create({})
  t.context.client = client
})

test('.post requests body correctly', async (t) => {
  t.context.client.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'AccessID=accessid&AccessPass=accesspass',
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      }

      return Promise.resolve(response)
    }
  }

  t.context.client.client.interceptors.request.use((req) => {
    t.is(req.data, 'Foo=aaa&Bar=0&Baz=true&Ja=%E6%97%A5%E6%9C%AC%E8%AA%9E&Type=0')
    return req
  })

  const res = await t.context.client.post('/test', {
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

test('.postWithEncodeShiftJIS requests body correctly', async (t) => {
  t.context.client.options = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'AccessID=accessid&AccessPass=accesspass',
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      }

      return Promise.resolve(response)
    }
  }

  t.context.client.client.interceptors.request.use((req) => {
    t.is(req.data, 'Foo=aaa&Bar=0&Baz=true&Ja=%93%FA%96%7B%8C%EA&Type=0')
    return req
  })

  const res = await t.context.client.postWithEncodeShiftJIS('/test', {
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
