import Axios, {AxiosInstance} from 'axios'
import * as merge from 'deepmerge'
import * as enums from './client.enum'
import Memberable from './client/memberable'
import Cardable from './client/cardable'
import Tranable from './client/tranable'
import {buildByEnv, IConfig, defaults} from './config'
import {applyMixins, generateID} from './util'

export default class GMOPG implements Memberable, Cardable, Tranable {
  public config: IConfig
  public client: AxiosInstance
  public options: object

  public saveMember: (args: any) => any
  public updateMember: (args: any) => any
  public deleteMember: (args: any) => any
  public searchMember: (args: any) => any
  public defaultMemberData: () => any
  public saveCard: (args: any) => any
  public deleteCard: (args: any) => any
  public searchCard: (args: any) => any
  public defaultCardData: () => any
  public entryTran: (args: any) => any
  public execTran: (args: any) => any
  public alterTran: (args: any) => any
  public deleteTran: (args: any) => any
  public searchTrade: (args: any) => any
  public changeTran: (args: any) => any

  constructor(config: IConfig) {
    this.config = merge(defaults, config)
    const configByEnv: IConfig = buildByEnv()
    if (configByEnv !== {}) {
      this.config = merge(this.config, configByEnv)
    }
    this.client = Axios.create(this.config.axios)
  }

  public static CREATE(config: IConfig): GMOPG {
    return new GMOPG(config)
  }

  public static GENERATE_MEMBER_ID(key: string): string {
    return generateID(key)
  }

  get enums() {
    return enums
  }
}

applyMixins(GMOPG, [Memberable, Cardable, Tranable])
