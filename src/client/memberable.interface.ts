import { Result, SiteArgs } from '../client.interface'

export interface SaveMemberArgs extends SiteArgs {
  MemberName?: string
}

export interface SaveMemberResult extends Result {
  MemberID: string
}

export interface UpdateMemberArgs extends SiteArgs {
  MemberName?: string
}

export interface UpdateMemberResult extends Result {
  MemberID: string
}

export interface DeleteMemberArgs extends Result {
  MemberID: string
}

export interface DeleteMemberResult extends Result {
  MemberID: string
}

export interface SearchMemberArgs extends Result {
  MemberID: string
}

export interface SearchMemberResult extends Result {
  MemberID: string
  MemberName: string
  DeleteFlag: string
}
