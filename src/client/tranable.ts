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
      const data: EntryTranArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/EntryTran.idPass', data)

      return <EntryTranResult>parsed
    }

    public async execTran(args: ExecTranArgs): Promise<ExecTranResult> {
      const parsed: any = await this.post('/payment/ExecTran.idPass', args)

      return <ExecTranResult>parsed
    }

    public async alterTran(args: AlterTranArgs): Promise<AlterTranResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        JobCd: undefined,
      }
      const data: AlterTranArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/AlterTran.idPass', data)

      return <AlterTranResult>parsed
    }

    public async searchTrade(
      args: SearchTradeArgs
    ): Promise<SearchTradeResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
      }
      const data: SearchTradeArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/SearchTrade.idPass', data)

      return <SearchTradeResult>parsed
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
      const data: ChangeTranArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/ChangeTran.idPass', data)

      return <ChangeTranResult>parsed
    }
  }
