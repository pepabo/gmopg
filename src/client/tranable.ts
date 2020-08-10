import * as merge from 'deepmerge'
import Client from '../client'
import { Constructor } from '../util'
import {
  AlterTranArgs,
  AlterTranResult,
  ChangeTranArgs,
  ChangeTranResult,
  EntryTranArgs,
  EntryTranResult,
  ExecTranArgs,
  ExecTranResult,
  SearchTradeArgs,
  SearchTradeResult,
} from './tranable.interface'

export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async entryTran(args: EntryTranArgs): Promise<EntryTranResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        JobCd: undefined,
        Amount: undefined,
      }
      const data = merge(defaultData, args)
      return this.post<EntryTranArgs, EntryTranResult>('/payment/EntryTran.idPass', data)
    }

    public async execTran(args: ExecTranArgs): Promise<ExecTranResult> {
      return this.post<ExecTranArgs, ExecTranResult>('/payment/ExecTran.idPass', args)
    }

    public async alterTran(args: AlterTranArgs): Promise<AlterTranResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        JobCd: undefined,
      }
      const data = merge(defaultData, args)
      return this.post<AlterTranArgs, AlterTranResult>('/payment/AlterTran.idPass', data)
    }

    public async searchTrade(args: SearchTradeArgs): Promise<SearchTradeResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
      }
      const data = merge(defaultData, args)
      return this.post<SearchTradeArgs, SearchTradeResult>('/payment/SearchTrade.idPass', data)
    }

    public async changeTran(args: ChangeTranArgs): Promise<ChangeTranResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        JobCd: undefined,
        Amount: undefined,
      }
      const data = merge(defaultData, args)
      return this.post<ChangeTranArgs, ChangeTranResult>('/payment/ChangeTran.idPass', data)
    }
  }
