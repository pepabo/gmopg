import {AxiosInstance} from 'axios'
import * as m from './client/memberable.interface'
import * as c from './client/cardable.interface'
import * as t from './client/tranable.interface'
import {TConfig} from './config'
import {ISiteArgs} from './client.interface'
import * as enums from './client.enum'

export * from './client/memberable.interface'
export * from './client/cardable.interface'
export * from './client/tranable.interface'
export * from './client.interface'
export * from './client.enum'
export * from './config'

export interface GMOPGInstance {
  config: TConfig
  client: AxiosInstance
  options: object
  new: (config: TConfig) => GMOPGInstance
  saveMember: (args: m.ISaveMemberArgs) => m.ISaveMemberResult
  updateMember: (args: m.IUpdateMemberArgs) => m.IUpdateMemberResult
  deleteMember: (args: ISiteArgs) => m.IDeleteMemberResult
  searchMember: (args: ISiteArgs) => m.ISearchMemberResult
  defaultMemberData: () => any
  saveCard: (args: c.ISaveCardArgs) => any
  updateCard: (args: any) => any
  deleteCard: (args: any) => any
  searchCard: (args: any) => any
  defaultCardData: () => any
  entryTran: (args: t.IEntryTranArgs) => any
  execTran: (args: any) => any
  alterTran: (args: any) => any
  updateTran: (args: any) => any
  deleteTran: (args: any) => any
  searchTrade: (args: any) => any
  changeTran: (args: any) => any
  readonly enums: typeof enums
  createInstance(config: TConfig): GMOPGInstance
  generateMemberID(key: string): string
}

export interface GMOPGStatic extends GMOPGInstance {
  createInstance(config: TConfig): GMOPGInstance
  generateMemberID(key: string): string
}

declare const GMOPG: GMOPGStatic
export default GMOPG
