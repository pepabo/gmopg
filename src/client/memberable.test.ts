import anyTest, {TestInterface} from 'ava'
import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import Memberable from './memberable'
import {
  IDeleteMemberResult,
  ISaveMemberResult,
  ISearchMemberResult,
  IUpdateMemberResult
} from './memberable.interface'

interface Context {
  member: Memberable
}

const test = anyTest as TestInterface<Context>;

test.beforeEach((t) => {
  const member = new Memberable()
  member.client = Axios.create({})
  t.context.member = member
})

test('.defaultMemberData returns default object', async (t) => {
  const res = await t.context.member.defaultMemberData()
  const expect = {
    SiteID: undefined,
    SitePass: undefined,
    MemberID: undefined
  }
  t.deepEqual(res, expect)
})

test('.saveMember calls API and returns response', async (t) => {
  t.context.member.options = {
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
  const res = await t.context.member.saveMember(args)

  const expect: ISaveMemberResult = {
    MemberID: 'memberid'
  }
  t.deepEqual(res, expect)
})

test('.updateMember calls API and returns response', async (t) => {
  t.context.member.options = {
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
  const res = await t.context.member.updateMember(args)

  const expect: IUpdateMemberResult = {
    MemberID: 'memberid'
  }
  t.deepEqual(res, expect)
})

test('.deleteMember calls API and returns response', async (t) => {
  t.context.member.options = {
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
  const res = await t.context.member.deleteMember(args)

  const expect: IDeleteMemberResult = {
    MemberID: 'memberid'
  }
  t.deepEqual(res, expect)
})

test('.searchMember calls API and returns response', async (t) => {
  t.context.member.options = {
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
  const res = await t.context.member.searchMember(args)

  const expect: ISearchMemberResult = {
    MemberID: 'memberid',
    MemberName: 'membername',
    DeleteFlag: '1'
  }
  t.deepEqual(res, expect)
})

test('.post is function', (t) => {
  t.is(typeof t.context.member.post, 'function')
})
