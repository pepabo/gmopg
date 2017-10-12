import GMOPG from './gmopg'
import * as gmopg from './gmopg'
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

export import TGMOPGConfig = config.TConfig
export import IGMOPG = gmopg.IGMOPG
export import IGMOPGStatic = gmopg.IGMOPGStatic

export default GMOPG
module.exports = GMOPG.createInstance({})
