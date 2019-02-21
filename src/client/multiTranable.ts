import {AxiosInstance} from 'axios'
import * as merge from 'deepmerge'
import Client from '../client'
import {IConfig} from '../config.interface'
import {
  ISearchTradeMultiArgs,
  ISearchTradeMultiCardResult,
  ISearchTradeMultiCvsResult
} from './multiTranable.interface'

export default class MultiTranable extends Client {
  public name: string = 'MultiTranable'
  public config: IConfig
  public client: AxiosInstance
  public options: object = {}

  public async searchTradeMulti<R extends ISearchTradeMultiCardResult | ISearchTradeMultiCvsResult>
    (args: ISearchTradeMultiArgs): Promise<R> {

    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      OrderID: undefined,
      PayType: undefined
    }
    const data: ISearchTradeMultiArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/SearchTradeMulti.idPass', data)

    return <R> parsed
  }
}
