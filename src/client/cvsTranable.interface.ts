import { CvsCode, Status } from '../client.enum'
import { IResult, IShopArgs } from '../client.interface'

export interface IEntryTranCvsArgs extends IShopArgs {
  OrderID: string
  Amount: number
  Tax: number
}

export interface IEntryTranCvsResult extends IResult {
  AccessID: string
  AccessPass: string
}

export interface IExecTranCvsArgs {
  AccessID: string
  AccessPass: string
  OrderID: string
  Convenience: CvsCode
  CustomerName: string
  CustomerKana: string
  TelNo: string
  PaymentTermDay?: number
  MailAddress?: string
  ShopMailAddress?: string
  ReserveNo?: string
  MemberNo?: string
  RegisterDisp1?: string
  RegisterDisp2?: string
  RegisterDisp3?: string
  RegisterDisp4?: string
  RegisterDisp5?: string
  RegisterDisp6?: string
  RegisterDisp7?: string
  RegisterDisp8?: string
  ReceiptsDisp1?: string
  ReceiptsDisp2?: string
  ReceiptsDisp3?: string
  ReceiptsDisp4?: string
  ReceiptsDisp5?: string
  ReceiptsDisp6?: string
  ReceiptsDisp7?: string
  ReceiptsDisp8?: string
  ReceiptsDisp9?: string
  ReceiptsDisp10?: string
  ReceiptsDisp11: string
  ReceiptsDisp12: string
  ReceiptsDisp13: string
  ClientField1?: string
  ClientField2?: string
  ClientField3?: string
  ClientFieldFlag?: string
}

export interface IExecTranCvsResult extends IResult {
  OrderID: string
  Convenience: CvsCode
  ConfNo: string
  ReceiptNo: string
  PaymentTerm: string
  TranDate: string
  CheckString: string
  ClientField1: string
  ClientField2: string
  ClientField3: string
}

export interface ICancelCvsArgs extends IShopArgs {
  AccessID: string
  AccessPass: string
  OrderID: string
}

export interface ICancelCvsResult extends IResult {
  OrderID: string
  Status: Status
}
