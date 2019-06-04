import test from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import Client from '../client'
import WithMemberable from './memberable'
import {
  IDeleteMemberResult,
  ISaveMemberResult,
  ISearchMemberResult,
  IUpdateMemberResult
} from './memberable.interface'

const Memberable = WithMemberable(Client)
let member: any

test.beforeEach(() => {
  member = new Memberable()
  member.client = Axios.create({})
})

test('.defaultMemberData returns default object', async (t) => {
  const res = await member.defaultMemberData()
  const expect = {
    SiteID: undefined,
    SitePass: undefined,
    MemberID: undefined
  }
  t.deepEqual(res, expect)
})

test('.saveMember calls API and returns response', async (t) => {
  member.config.axios = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'MemberID=memberid',
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      }

      return Promise.resolve(response)
    }
  }

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid',
    MemberName: 'membername'
  }
  const res = await member.saveMember(args)

  const expect: ISaveMemberResult = {
    MemberID: 'memberid'
  }
  t.deepEqual(res, expect)
})

test('.updateMember calls API and returns response', async (t) => {
  member.config.axios = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'MemberID=memberid',
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      }

      return Promise.resolve(response)
    }
  }

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid',
    MemberName: 'membername'
  }
  const res = await member.updateMember(args)

  const expect: IUpdateMemberResult = {
    MemberID: 'memberid'
  }
  t.deepEqual(res, expect)
})

test('.deleteMember calls API and returns response', async (t) => {
  member.config.axios = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'MemberID=memberid',
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      }

      return Promise.resolve(response)
    }
  }

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid'
  }
  const res = await member.deleteMember(args)

  const expect: IDeleteMemberResult = {
    MemberID: 'memberid'
  }
  t.deepEqual(res, expect)
})

test('.searchMember calls API and returns response', async (t) => {
  member.config.axios = {
    adapter: async (config: AxiosRequestConfig) => {
      const response: AxiosResponse = {
        data: 'MemberID=memberid&MemberName=membername&DeleteFlag=1',
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      }

      return Promise.resolve(response)
    }
  }

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid'
  }
  const res = await member.searchMember(args)

  const expect: ISearchMemberResult = {
    MemberID: 'memberid',
    MemberName: 'membername',
    DeleteFlag: '1'
  }
  t.deepEqual(res, expect)
})

test('.post is function', (t) => {
  t.is(typeof member.post, 'function')
})
