import { Result, SiteArgs } from '../client.type'

export type SaveMemberArgs = SiteArgs & {
  MemberName?: string
}

export type SaveMemberResult = Result & {
  MemberID: string
}

export type UpdateMemberArgs = SiteArgs & {
  MemberName?: string
}

export type UpdateMemberResult = Result & {
  MemberID: string
}

export type DeleteMemberArgs = Result & {
  MemberID: string
}

export type DeleteMemberResult = Result & {
  MemberID: string
}

export type SearchMemberArgs = Result & {
  MemberID: string
}

export type SearchMemberResult = Result & {
  MemberID: string
  MemberName: string
  DeleteFlag: string
}
