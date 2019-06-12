import test from 'ava'
import sinon = require('sinon')
import Client from '../client'
import WithMemberable from './memberable'
import {
  IDeleteMemberResult,
  ISaveMemberResult,
  ISearchMemberResult,
  IUpdateMemberResult
} from './memberable.interface'

const Memberable = WithMemberable(Client)
const memberable = new Memberable()

test.afterEach(() => {
  sinon.restore();
})

test('.saveMember calls API and returns response', async (t) => {
  const expect: ISaveMemberResult = {
    MemberID: 'memberid'
  }

  sinon.stub(memberable, 'post').resolves(expect)

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid',
    MemberName: 'membername'
  }
  const res = await memberable.saveMember(args)

  t.deepEqual(res, expect)
})

test('.updateMember calls API and returns response', async (t) => {
  const expect: IUpdateMemberResult = {
    MemberID: 'memberid'
  }

  sinon.stub(memberable, 'post').resolves(expect)

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid',
    MemberName: 'membername'
  }
  const res = await memberable.updateMember(args)

  t.deepEqual(res, expect)
})

test('.deleteMember calls API and returns response', async (t) => {
  const expect: IDeleteMemberResult = {
    MemberID: 'memberid'
  }

  sinon.stub(memberable, 'post').resolves(expect)

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid'
  }
  const res = await memberable.deleteMember(args)

  t.deepEqual(res, expect)
})

test('.searchMember calls API and returns response', async (t) => {
  const expect: ISearchMemberResult = {
    MemberID: 'memberid',
    MemberName: 'membername',
    DeleteFlag: '1'
  }

  sinon.stub(memberable, 'post').resolves(expect)

  const args = {
    SiteID: 'siteid',
    SitePass: 'sitepass',
    MemberID: 'memberid'
  }
  const res = await memberable.searchMember(args)

  t.deepEqual(res, expect)
})
