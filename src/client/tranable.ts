import {AxiosInstance} from 'axios'
import * as merge from 'deepmerge'
import Client from '../client'
import {IConfig} from '../config.interface'
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
} from './tranable.interface'

export default class Tranable extends Client {
  public name: string = 'Tranable'
  public config: IConfig
  public client: AxiosInstance
  public options: object = {}

  public async entryTran(args: IEntryTranArgs): Promise<IEntryTranResult> {
    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      OrderID: undefined,
      JobCd: undefined,
      Amount: undefined
    }
    const data: IEntryTranArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/EntryTran.idPass', data)

    return <IEntryTranResult> parsed
  }

  public async execTran(args: IExecTranArgs): Promise<IExecTranResult> {
    const parsed: any = await this.post('/payment/ExecTran.idPass', args)

    return <IExecTranResult> parsed
  }

  public async alterTran(args: IAlterTranArgs): Promise<IAlterTranResult> {
    const defaultData =  {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      AccessID: undefined,
      AccessPass: undefined,
      JobCd: undefined
    }
    const data: IAlterTranArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/AlterTran.idPass', data)

    return <IAlterTranResult> parsed
  }

  public async searchTrade(args: ISearchTradeArgs): Promise<ISearchTradeResult> {
    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      OrderID: undefined
    }
    const data: ISearchTradeArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/SearchTrade.idPass', data)

    return <ISearchTradeResult> parsed
  }

  public async changeTran(args: IChangeTranArgs): Promise<IChangeTranResult> {
    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      AccessID: undefined,
      AccessPass: undefined,
      JobCd: undefined,
      Amount: undefined
    }
    const data: IChangeTranArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/ChangeTran.idPass', data)

    return <IChangeTranResult> parsed
  }
}
