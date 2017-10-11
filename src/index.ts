import {AxiosInstance} from 'axios'
import GMOPG from './gmopg'
import * as client from './client'
import * as member from './client/memberable'
import * as card from './client/cardable'
import * as tran from './client/tranable'
import * as config from './config'

export import ISiteArgs = client.ISiteArgs
export import IShopArgs = client.IShopArgs
export import PayType = client.PayType
export import Method = client.Method
export import Status = client.Status
export import JobCd = client.JobCd
export import SeqMode = client.SeqMode
export import DefaultFlag = client.DefaultFlag

export import ISaveMemberArgs = member.ISaveMemberArgs
export import ISaveMemberResult = member.ISaveMemberResult
export import IUpdateMemberArgs = member.IUpdateMemberArgs
export import IUpdateMemberResult = member.IUpdateMemberResult
export import IDeleteMemberResult = member.IDeleteMemberResult
export import ISearchMemberResult = member.ISearchMemberResult

export import ISaveCardArgs = card.ISaveCardArgs
export import ISaveCardResult = card.ISaveCardResult
export import IDeleteCardArgs = card.IDeleteCardArgs
export import IDeleteCardResult = card.IDeleteCardResult
export import ISearchCardArgs = card.ISearchCardArgs
export import ISearchCardResult = card.ISearchCardResult

export import IEntryTranArgs = tran.IEntryTranArgs
export import IEntryTranResult = tran.IEntryTranResult
export import IExecTranArgs = tran.IExecTranArgs
export import IExecTranResult = tran.IExecTranResult
export import IAlterTranArgs = tran.IAlterTranArgs
export import IAlterTranResult = tran.IAlterTranResult
export import ISearchTradeArgs = tran.ISearchTradeArgs
export import ISearchTradeResult = tran.ISearchTradeResult
export import IChangeTranArgs = tran.IChangeTranArgs
export import IChangeTranResult = tran.IChangeTranResult

export import TConfig = config.TConfig

export interface GMOPGInstance {
  config: TConfig
  client: AxiosInstance
  options: object

  saveMember: (args: any) => any
  updateMember: (args: any) => any
  deleteMember: (args: any) => any
  searchMember: (args: any) => any
  defaultMemberData: () => any

  saveCard: (args: any) => any
  updateCard: (args: any) => any
  deleteCard: (args: any) => any
  searchCard: (args: any) => any
  defaultCardData: () => any

  entryTran: (args: any) => any
  execTran: (args: any) => any
  alterTran: (args: any) => any
  updateTran: (args: any) => any
  deleteTran: (args: any) => any
  searchTrade: (args: any) => any
  changeTran: (args: any) => any
}

export interface GMOPGStatic extends GMOPGInstance {
  generateMemberID: (key: string) => string
}

declare const gmopg: GMOPGStatic
export default gmopg


function createInstance() {
  var instance = new GMOPG({})

  return instance
}

const gmopgInstance = createInstance()
module.exports = gmopgInstance
