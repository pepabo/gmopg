import {IResult, ISiteArgs} from '../client.interface'

export interface ISaveMemberArgs extends ISiteArgs {
  MemberName?: string
}

export interface ISaveMemberResult extends IResult {
  MemberID: string
}

export interface IUpdateMemberArgs extends ISiteArgs {
  MemberName?: string
}

export interface IUpdateMemberResult extends IResult {
  MemberID: string
}

export interface IDeleteMemberResult extends IResult {
  MemberID: string
}

export interface ISearchMemberResult extends IResult {
  MemberID: string
  MemberName: string
  DeleteFlag: string
}
