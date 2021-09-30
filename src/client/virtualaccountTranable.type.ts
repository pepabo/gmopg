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
