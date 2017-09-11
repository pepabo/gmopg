import axios, { AxiosResponse } from 'axios'
import * as querystring from 'querystring'

export interface ISaveMemberArgs {
  siteID: string
  sitePass: string
  memberID: string
  memberName?: string
}

export interface ISaveMemberResult {
  memberID: string
}

export async function saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/SaveMember.idPass`, {
    SiteID: args.siteID,
    SitePass: args.sitePass,
    MemberID: args.memberID,
    MemberName: args.memberName
  })

  const result = querystring.parse(res.data)

  return {
    memberID: result.MemberID
  }
}

export interface IUpdateMemberArgs {
  siteID: string
  sitePass: string
  memberID: string
  memberName?: string
}

export interface IUpdateMemberResult {
  memberID: string
}

export async function updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/UpdateMember.idPass`, {
    SiteID: args.siteID,
    SitePass: args.sitePass,
    MemberID: args.memberID,
    MemberName: args.memberName
  })

  const result = querystring.parse(res.data)

  return {
      memberID: result.MemberID
  }
}

export interface IDeleteMemberArgs {
  siteID: string
  sitePass: string
  memberID: string
}

export interface IDeleteMemberResult {
  memberID: string
}

export async function deleteMember(args: IDeleteMemberArgs): Promise<IDeleteMemberResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/DeleteMember.idPass`, {
    SiteID: args.siteID,
    SitePass: args.sitePass,
    MemberID: args.memberID
  })

  const result = querystring.parse(res.data)

  return {
    memberID: result.MemberID
  }
}

export interface ISearchMemberArgs {
  siteID: string
  sitePass: string
  memberID: string
}

export interface ISearchMemberResult {
  memberID: string
  memberName: string
  deleteFlag: string
}

export async function searchMember(args: ISearchMemberArgs): Promise<ISearchMemberResult | null> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/SearchMember.idPass`, {
    SiteID: args.siteID,
    SitePass: args.sitePass,
    MemberID: args.memberID
  })

  const result = querystring.parse(res.data)

  return {
    memberID: result.MemberID,
    memberName: result.MemberName,
    deleteFlag: result.DeleteFlag
  }
}
