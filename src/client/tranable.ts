import {AxiosInstance, AxiosResponse} from 'axios'
import * as merge from 'deepmerge'
import * as qs from 'querystring'
import Client from '../client'
import {IConfig} from '../config'
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
    const res: AxiosResponse = await this.client.post('/payment/EntryTran.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)
    const result: IEntryTranResult = <IEntryTranResult> parsed
    this.errorHandler(result)

    return result
  }

  public async execTran(args: IExecTranArgs): Promise<IExecTranResult> {
    const res: AxiosResponse = await this.client.post('/payment/ExecTran.idPass', args, this.options)
    const parsed: any = qs.parse(res.data)
    const result: IExecTranResult = <IExecTranResult> parsed
    this.errorHandler(result)

    return result
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
    const res: AxiosResponse = await this.client.post('/payment/AlterTran.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)
    const result: IAlterTranResult = <IAlterTranResult> parsed
    this.errorHandler(result)

    return result
  }

  public async searchTrade(args: ISearchTradeArgs): Promise<ISearchTradeResult> {
    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      OrderID: undefined
    }
    const data: ISearchTradeArgs = merge(defaultData, args)
    const res: AxiosResponse = await this.client.post('/payment/SearchTrade.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)
    const result: ISearchTradeResult = <ISearchTradeResult> parsed
    this.errorHandler(result)

    return result
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
    const res: AxiosResponse = await this.client.post('/payment/ChangeTran.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)
    const result: IChangeTranResult = <IChangeTranResult> parsed
    this.errorHandler(result)

    return result
  }
}
