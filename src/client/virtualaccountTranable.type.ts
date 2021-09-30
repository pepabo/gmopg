import { AccountStatus, AccountType } from '../client.enum'
import { Result, ShopArgs } from '../client.type'

export type EntryTranVirtualaccountArgs = ShopArgs & {
  Version?: string
  OrderID: string
  Amount: number
  Tax?: number
}

export type EntryTranVirtualaccountResult = Result & {
  OrderID?: string
  AccessID?: string
  AccessPass?: string
}

export type ExecTranVirtualaccountArgs = ShopArgs & {
  Version?: string
  AccessID: string
  AccessPass: string
  OrderID: string
  ClientField1?: string
  ClientField2?: string
  ClientField3?: string
  TradeDays: number
  TradeReason?: string
  TradeClientName?: string
  TradeClientMailaddress?: string
}

export type ExecTranVirtualaccountResult = Result & {
  AccessID: string
  BankCode: string
  BankName: string
  BranchCode: string
  BranchName: string
  AccountType: AccountType
  AccountNumber: string
  AvailableDate: string
  TradeCode: string
}

export type AssignVirtualaccountArgs = ShopArgs & {
  Version?: string
  ReserveID: string
  BankCode?: string
  BranchCode?: string
  AccountType?: AccountType
  AccountNumber?: string
}

export type AssignVirtualaccountResult = Result & {
  ReserveID: string
  BankCode: string
  BankName: string
  BranchCode: string
  BranchName: string
  AccountType: AccountType
  AccountNumber: string
}

export type FreeVirtualaccountArgs = ShopArgs & {
  Version?: string
  ReserveID: string
}

export type FreeVirtualaccountResult = Result & {
  ReserveID: string
  BankCode: string
  BankName: string
  BranchCode: string
  BranchName: string
  AccountType: AccountType
  AccountNumber: string
}

export type ListVirtualaccountArgs = ShopArgs & {
  Version?: string
}

export type ListVirtualaccountResult = Result & {
  ReserveID?: string
  BankCode?: string
  BranchCode?: string
  AccountType?: AccountType
  AccountNumber?: string
  AccountStatus?: AccountStatus
}
