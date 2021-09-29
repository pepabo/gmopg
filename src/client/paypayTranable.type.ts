import { JobCd, Status } from '../client.enum'
import { Result, ShopArgs } from '../client.type'

export type EntryTranPaypayArgs = ShopArgs & {
  OrderID: string
  JobCd: JobCd
  Amount: number
  Tax?: number
}

export type EntryTranPaypayResult = Result & {
  AccessID: string
  AccessPass: string
}

export type ExecTranPaypayArgs = ShopArgs & {
  AccessID: string
  AccessPass: string
  OrderID: string
  ClientField1?: string
  ClientField2?: string
  ClientField3?: string
  RetURL: string
  PaymentTermSec?: number
}

export type ExecTranPaypayResult = Result & {
  AccessID: string
  Token: string
  StartURL: string
  StartLimitDate: string
}

export type PaypayStartArgs = {
  AccessID: string
  Token: string
}

export type PaypayStartResult = Result & {
  ShopID: string
  OrderID: string
  Status: Status
  TranDate: string
  PayPayTrackingID?: string
  CheckString: string
}

export type PaypaySalesArgs = ShopArgs & {
  AccessID: string
  AccessPass: string
  OrderID: string
  Amount: number
  Tax?: number
}

export type PaypaySalesResult = Result & {
  OrderID: string
  Status: Status
  Amount: number
  Tax: number
}

export type PaypayCancelReturnArgs = ShopArgs & {
  AccessID: string
  AccessPass: string
  OrderID: string
  CancelAmount: number
  CancelTax?: number
}

export type PaypayCancelReturnResult = Result & {
  OrderID: string
  Status: Status
  CancelAmount: number
  CancelTax: number
}
