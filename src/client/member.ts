import * as createDebug from 'debug'
import * as querystring from 'querystring'
import * as request from 'request-promise-native'
import { BadRequestError } from '../error/badRequest'
import * as util from '../utils/util'

const debug = createDebug('gmo-service:services:card')

export interface ISaveMemberArgs {
  siteId: string
  sitePass: string
  memberId: string
  memberName?: string
}

export interface ISaveMemberResult {
  memberId: string
}

export async function saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
  debug('requesting...', args)
  const body = await request.post({
      url: `${process.env.GMOPG_ENDPOINT}/payment/SaveMember.idPass`,
      form: {
          SiteID: args.siteId,
          SitePass: args.sitePass,
          MemberID: args.memberId,
          MemberName: args.memberName
      }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
      throw new BadRequestError(body)
  }

  return {
      memberId: result.MemberID
  }
}

export interface IUpdateMemberArgs {
  siteId: string
  sitePass: string
  memberId: string
  memberName?: string
}

export interface IUpdateMemberResult {
  memberId: string
}

export async function updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
  debug('requesting...', args)
  const body = await request.post({
      url: `${process.env.GMOPG_ENDPOINT}/payment/UpdateMember.idPass`,
      form: {
          SiteID: args.siteId,
          SitePass: args.sitePass,
          MemberID: args.memberId,
          MemberName: args.memberName
      }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
      throw new BadRequestError(body)
  }

  return {
      memberId: result.MemberID
  }
}

export interface IDeleteMemberArgs {
  siteId: string
  sitePass: string
  memberId: string
}

export interface IDeleteMemberResult {
  memberId: string
}

export async function deleteMember(args: IDeleteMemberArgs): Promise<IDeleteMemberResult> {
  debug('requesting...', args)
  const body = await request.post({
      url: `${process.env.GMOPG_ENDPOINT}/payment/DeleteMember.idPass`,
      form: {
          SiteID: args.siteId,
          SitePass: args.sitePass,
          MemberID: args.memberId
      }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
      throw new BadRequestError(body)
  }

  return {
      memberId: result.MemberID
  }
}

export interface ISearchMemberArgs {
  siteId: string
  sitePass: string
  memberId: string
}

export interface ISearchMemberResult {
  memberId: string
  memberName: string
  deleteFlag: string
}

export async function searchMember(args: ISearchMemberArgs): Promise<ISearchMemberResult | null> {
  debug('requesting...', args)
  const body = await request.post({
    url: `${process.env.GMOPG_ENDPOINT}/payment/SearchMember.idPass`,
    form: {
      SiteID: args.siteId,
      SitePass: args.sitePass,
      MemberID: args.memberId
    }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
    const error = new BadRequestError(body)

    // 指定されたサイトIDと会員IDの会員が存在しない場合、nullを返すように、特別扱い
    if (error.errors.length === 1 && error.errors[0].info === 'E01390002') {
        return null
    }

    throw error
  }

  return {
    memberId: result.MemberID,
    memberName: result.MemberName,
    deleteFlag: result.DeleteFlag
  }
}
