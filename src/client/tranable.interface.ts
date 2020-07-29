import { JobCd, Method, SeqMode, Status } from '../client.enum'
import { Result, ShopArgs } from '../client.interface'

export interface EntryTranArgs extends ShopArgs {
  OrderID: string
  JobCd: JobCd
  ItemCode?: string
  Amount: number
  Tax?: number
  TdFlag?: string
  TdTenantName?: string
}

export interface EntryTranResult extends Result {
  AccessID: string
  AccessPass: string
}

export interface ExecTranArgs {
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

export interface ExecTranResult extends Result {
  Acs: string
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
}

export interface AlterTranArgs extends ShopArgs {
  AccessID: string
  AccessPass: string
  JobCd: JobCd
  Amount?: number
  Method?: Method
}

export interface AlterTranResult extends Result {
  AccessID: string
  AccessPass: string
  Forward: string
  Approve: string
  TranID: string
  TranDate: string
}

export interface SearchTradeArgs extends ShopArgs {
  OrderID: string
}

export interface SearchTradeResult extends Result {
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

export interface ChangeTranArgs extends ShopArgs {
  AccessID: string
  AccessPass: string
  JobCd: JobCd
  Amount: number
  Tax?: string
}

export interface ChangeTranResult extends Result {
  AccessID: string
  AccessPass: string
  Forward: string
  Approve: string
  TranID: string
  TranDate: string
}
