import Client from '../client'
import { Constructor } from '../util'
import { EntryTranVirtualaccountArgs, EntryTranVirtualaccountResult } from './virtualaccountTranable.type'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async entryTranVirtualaccount(args: EntryTranVirtualaccountArgs): Promise<EntryTranVirtualaccountResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        Amount: undefined,
      }
      return this.post<EntryTranVirtualaccountArgs, EntryTranVirtualaccountResult>(
        '/payment/EntryTranVirtualaccount.idPass',
        {
          ...defaultData,
          ...args,
        }
      )
    }
  }
