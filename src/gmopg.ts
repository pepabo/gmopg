import Axios, {AxiosInstance} from 'axios'
import * as merge from 'deepmerge'
import * as enums from './client.enum'
import Memberable from './client/memberable'
import Cardable from './client/cardable'
import Tranable from './client/tranable'
import CvsTranable from './client/cvsTranable'
import MultiTranable from './client/multiTranable'
import {buildByEnv, defaults} from './config'
import {applyMixins, generateID} from './util'
import {IConfig} from './config.interface'
import {
  IDeleteMemberArgs,
  IDeleteMemberResult,
  ISaveMemberArgs,
  ISaveMemberResult,
  ISearchMemberArgs,
  ISearchMemberResult,
  IUpdateMemberArgs,
  IUpdateMemberResult
} from './client/memberable.interface'
import {
  IDeleteCardArgs,
  IDeleteCardResult,
  ISaveCardArgs,
  ISaveCardResult,
  ISearchCardArgs,
  ISearchCardResult
} from './client/cardable.interface'
import {
  IAlterTranArgs,
  IAlterTranResult,
  IChangeTranArgs,
  IChangeTranResult,
  IEntryTranArgs,
  IEntryTranResult,
  IExecTranArgs,
  IExecTranResult,
  ISearchTradeArgs,
  ISearchTradeResult
} from './client/tranable.interface'
import {
  IEntryTranCvsArgs,
  IEntryTranCvsResult,
  IExecTranCvsArgs,
  IExecTranCvsResult
} from './client/cvsTranable.interface'
import {
  ISearchTradeMultiArgs,
  ISearchTradeMultiCardResult,
  ISearchTradeMultiCvsResult
} from './client/multiTranable.interface'

export class GMOPG implements Memberable, Cardable, Tranable, CvsTranable, MultiTranable {
  public name: string = 'GMOPG'
  public client: AxiosInstance
  public options: object
  public config: IConfig

  // client
  public post: (endpoint: string, data: any) => Promise<any>
  public isError: (res: any) => boolean

  // memberable
  public defaultMemberData: () => any
  public saveMember: (args: ISaveMemberArgs) => Promise<ISaveMemberResult>
  public updateMember: (args: IUpdateMemberArgs) => Promise<IUpdateMemberResult>
  public deleteMember: (args: IDeleteMemberArgs) => Promise<IDeleteMemberResult>
  public searchMember: (args: ISearchMemberArgs) => Promise<ISearchMemberResult | null>

  // cardable
  public defaultCardData: () => any
  public saveCard: (args: ISaveCardArgs) => Promise<ISaveCardResult>
  public deleteCard: (args: IDeleteCardArgs) => Promise<IDeleteCardResult>
  public searchCard: (args: ISearchCardArgs) => Promise<ISearchCardResult[]>

  // tranable
  public entryTran: (args: IEntryTranArgs) => Promise<IEntryTranResult>
  public execTran: (args: IExecTranArgs) => Promise<IExecTranResult>
  public alterTran: (args: IAlterTranArgs) => Promise<IAlterTranResult>
  public searchTrade: (args: ISearchTradeArgs) => Promise<ISearchTradeResult>
  public changeTran: (args: IChangeTranArgs) => Promise<IChangeTranResult>

  // tranable - cvs
  public entryTranCvs: (args: IEntryTranCvsArgs) => Promise<IEntryTranCvsResult>
  public execTranCvs: (args: IExecTranCvsArgs) => Promise<IExecTranCvsResult>

  // tranable - multi
  public searchTradeMulti: <R extends ISearchTradeMultiCardResult | ISearchTradeMultiCvsResult>(args: ISearchTradeMultiArgs) => Promise<R>

  constructor(config?: IConfig) {
    if (config === undefined) {
      config = {}
    }
    this.config = merge(defaults, config)
    const configByEnv: IConfig = buildByEnv()
    if (configByEnv !== {}) {
      this.config = merge(this.config, configByEnv)
    }
    this.client = Axios.create(this.config.axios)
  }

  public static CREATE(config?: IConfig): GMOPG {
    return new GMOPG(config)
  }

  public static GENERATE_MEMBER_ID(key: string): string {
    return generateID(key).substring(0, 60)
  }

  public static get ENUMS() {
    return enums
  }
}

applyMixins(GMOPG, [Memberable, Cardable, Tranable, CvsTranable, MultiTranable])

export * from './config.interface'
export * from './client.interface'
export * from './client.enum'
export * from './client/memberable.interface'
export * from './client/cardable.interface'
export * from './client/tranable.interface'
export * from './client/cvsTranable.interface'
export * from './client/multiTranable.interface'
export default GMOPG
