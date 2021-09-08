import { JobCd, Method, SeqMode, Status } from '../client.enum'
import { Result, ShopArgs } from '../client.type'

export type EntryTranArgs = ShopArgs & {
  OrderID: string
  JobCd: JobCd
  ItemCode?: string
  Amount: number
  Tax?: number
  TdFlag?: string
  TdTenantName?: string
}

export type EntryTranResult = Result & {
  AccessID: string
  AccessPass: string
}

export type ExecTranArgs = {
  AccessID: string
  AccessPass: string
  OrderID: string
  Method?: Method
  PayTimes?: number
  CardNo?: string
  Expire?: string
  SecurityCode?: string
  Token?: string
  Pin?: string
  SiteID?: string
  SitePass?: string
  MemberID?: string
  SeqMode?: SeqMode
  CardSeq?: number
  CardPass?: string
  ClientField1?: string
  ClientField2?: string
  ClientField3?: string
}

export type ExecTranResult = Result & {
  ACS: string
  OrderID: string
  Forward: string
  Method: Method
  PayTimes: string
  Approve: string
  TranID: string
  TranDate: string
  CheckString: string
  ClientField1: string
  ClientField2: string
  ClientField3: string
  ACSUrl?: string
  PaReq?: string
  MD?: string
}

export type AlterTranArgs = ShopArgs & {
  AccessID: string
  AccessPass: string
  JobCd: JobCd
  Amount?: number
  Method?: Method
}

export type AlterTranResult = Result & {
  AccessID: string
  AccessPass: string
  Forward: string
  Approve: string
  TranID: string
  TranDate: string
}

export type SearchTradeArgs = ShopArgs & {
  OrderID: string
}

export type SearchTradeResult = Result & {
  OrderID: string
  Status: Status
  ProcessDate: string
  JobCd: JobCd
  AccessID: string
  AccessPass: string
  ItemCode: string
  Amount: string
  Tax: string
  SiteID: string
  MemberID: string
  CardNo: string
  Expire: string
  Method: Method
  PayTimes: string
  Forward: string
  TranID: string
  Approve: string
  ClientField1: string
  ClientField2: string
  ClientField3: string
}

export type ChangeTranArgs = ShopArgs & {
  AccessID: string
  AccessPass: string
  JobCd: JobCd
  Amount: number
  Tax?: string
}

export type ChangeTranResult = Result & {
  AccessID: string
  AccessPass: string
  Forward: string
  Approve: string
  TranID: string
  TranDate: string
}
