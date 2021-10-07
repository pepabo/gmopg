import { JobCd, PaymentType, Status } from '../client.enum'
import { Result, ShopArgs } from '../client.type'

export type EntryTranPaypayArgs = ShopArgs & {
  OrderID: string
  JobCd: JobCd
  Amount: number
  Tax?: number
  PaymentType?: PaymentType
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
  RetURL?: string
  PaymentTermSec?: number
  PaypayAcceptCode?: string
}

export type ExecTranPaypayResult = Result & {
  AccessID?: string
  OrderID?: string
  Status?: Status
  Token?: string
  StartURL?: string
  StartLimitDate?: string
  TranDate?: string
  PaypayTrackingID?: string
  CheckString?: string
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

export type EntryTranPaypayAcceptArgs = ShopArgs & {
  OrderID: string
}

export type EntryTranPaypayAcceptResult = Result & {
  AccessID: string
  AccessPass: string
}

export type ExecTranPaypayAcceptArgs = ShopArgs & {
  AccessID: string
  AccessPass: string
  OrderID: string
  ClientField1?: string
  ClientField2?: string
  ClientField3?: string
  RetURL: string
  PaymentTermSec?: number
}

export type ExecTranPaypayAcceptResult = Result & {
  AccessID: string
  Token: string
  StartURL: string
  StartLimitDate: string
}

export type PaypayAcceptStartArgs = {
  AccessID: string
  Token: string
}

export type PaypayAcceptStartResult = Result & {
  ShopID: string
  OrderID: string
  Status: Status
  TranDate: string
  PaypayAcceptCode: string
  CheckString: string
}

export type PaypayAcceptEndArgs = ShopArgs & {
  AccessID: string
  AccessPass: string
  OrderID: string
  PaypayAcceptCode: string
}

export type PaypayAcceptEndResult = Result & {
  OrderID: string
  Status: Status
}

export type PaypayAcceptPushArgs = ShopArgs & {
  AccessID: string
  AccessPass: string
  OrderID: string
  PaypayAcceptCode: string
  ExpiredDatetime?: string
}

export type PaypayAcceptPushResult = Result & {
  OrderID: string
  Status: Status
  TranDate: string
  PushTrackingID: string
}

export type PaypayAcceptPushCancelArgs = ShopArgs & {
  AccessID: string
  AccessPass: string
  OrderID: string
}

export type PaypayAcceptPushCancelResult = Result & {
  OrderID: string
  Status: Status
}
