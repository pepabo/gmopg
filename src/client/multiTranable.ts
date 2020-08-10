import * as merge from 'deepmerge'
import Client from '../client'
import { Constructor } from '../util'
import { SearchTradeMultiArgs, SearchTradeMultiCardResult, SearchTradeMultiCvsResult } from './multiTranable.interface'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async searchTradeMulti<R extends SearchTradeMultiCardResult | SearchTradeMultiCvsResult>(args: SearchTradeMultiArgs): Promise<R> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        PayType: undefined,
      }
      const data = merge(defaultData, args)
      return this.post<SearchTradeMultiArgs, R>('/payment/SearchTradeMulti.idPass', data)
    }
  }
