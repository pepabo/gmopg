import * as merge from 'deepmerge'
import Client from '../client'
import {Constructor} from '../util'
import {
  ISearchTradeMultiArgs,
  ISearchTradeMultiCardResult,
  ISearchTradeMultiCvsResult,
} from './multiTranable.interface'

export default <T extends Constructor<Client>>(Base: T) => class extends Base {
  public async searchTradeMulti<R extends ISearchTradeMultiCardResult | ISearchTradeMultiCvsResult>
    (args: ISearchTradeMultiArgs): Promise<R> {

    const defaultData = {
      ShopID: this.config.ShopID,
      ShopPass: this.config.ShopPass,
      OrderID: undefined,
      PayType: undefined,
    }
    const data: ISearchTradeMultiArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/SearchTradeMulti.idPass', data)

    return <R>parsed
  }
}
