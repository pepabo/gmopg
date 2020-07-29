import { PayType, Status, CvsCode, JobCd, Method } from '../client.enum'
import { Result, ShopArgs } from '../client.interface'

export interface SearchTradeMultiArgs extends ShopArgs {
  OrderID: string
  PayType: PayType
}

export interface SearchTradeMultiCardResult extends Result {
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

export interface SearchTradeMultiCvsResult extends Result {
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
