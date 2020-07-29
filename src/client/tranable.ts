import * as merge from 'deepmerge'
import Client from '../client'
import { Constructor } from '../util'
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
  ISearchTradeResult,
} from './tranable.interface'

export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async entryTran(args: IEntryTranArgs): Promise<IEntryTranResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        JobCd: undefined,
        Amount: undefined,
      }
      const data: IEntryTranArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/EntryTran.idPass', data)

      return <IEntryTranResult>parsed
    }

    public async execTran(args: IExecTranArgs): Promise<IExecTranResult> {
      const parsed: any = await this.post('/payment/ExecTran.idPass', args)

      return <IExecTranResult>parsed
    }

    public async alterTran(args: IAlterTranArgs): Promise<IAlterTranResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        JobCd: undefined,
      }
      const data: IAlterTranArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/AlterTran.idPass', data)

      return <IAlterTranResult>parsed
    }

    public async searchTrade(
      args: ISearchTradeArgs
    ): Promise<ISearchTradeResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
      }
      const data: ISearchTradeArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/SearchTrade.idPass', data)

      return <ISearchTradeResult>parsed
    }

    public async changeTran(args: IChangeTranArgs): Promise<IChangeTranResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        JobCd: undefined,
        Amount: undefined,
      }
      const data: IChangeTranArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/ChangeTran.idPass', data)

      return <IChangeTranResult>parsed
    }
  }
