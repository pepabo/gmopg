import { PayType, Status, CvsCode, JobCd, Method } from '../client.enum'
import { IResult, IShopArgs } from '../client.interface'

export interface ISearchTradeMultiArgs extends IShopArgs {
  OrderID: string
  PayType: PayType
}

export interface ISearchTradeMultiCardResult extends IResult {
  Status: Status
  ProcessDate: string
  JobCd: JobCd
  AccessID: string
  AccessPass: string
  Amount: string
  Tax: string
  Currency: string
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
  PayType: PayType
}

export interface ISearchTradeMultiCvsResult extends IResult {
  Status: Status
  ProcessDate: string
  AccessID: string
  AccessPass: string
  Amount: string
  Tax: string
  Currency: string
  ClientField1: string
  ClientField2: string
  ClientField3: string
  PayType: PayType
  CvsCode: CvsCode
  CvsConfNo: string
  CvsReceiptNo: string
  PaymentTerm: string
}
