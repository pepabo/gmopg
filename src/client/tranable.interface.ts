import {JobCd, Method, SeqMode} from '../client.enum'
import {IResult, IShopArgs} from '../client.interface'

export interface IEntryTranArgs extends IShopArgs {
  OrderID: string
  JobCd: JobCd
  ItemCode?: string
  Amount: number
  Tax?: number
  TdFlag?: string
  TdTenantName?: string
}

export interface IEntryTranResult extends IResult {
  AccessID: string
  AccessPass: string
}

export interface IExecTranArgs {
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

export interface IExecTranResult extends IResult {
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

export interface IAlterTranArgs extends IShopArgs {
  AccessID: string
  AccessPass: string
  JobCd: JobCd
  Amount?: number
  Method?: Method
}

export interface IAlterTranResult extends IResult {
  AccessID: string
  AccessPass: string
  Forward: string
  Approve: string
  TranID: string
  TranDate: string
}

export interface ISearchTradeArgs extends IShopArgs {
  OrderID: string
}

export interface ISearchTradeResult extends IResult {
  OrderID: string
  Status: string
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

export interface IChangeTranArgs extends IShopArgs {
  AccessID: string
  AccessPass: string
  JobCd: JobCd
  Amount: number
  Tax?: string
}

export interface IChangeTranResult extends IResult {
  AccessID: string
  AccessPass: string
  Forward: string
  Approve: string
  TranID: string
  TranDate: string
}
