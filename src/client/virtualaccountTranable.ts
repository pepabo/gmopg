import Client from '../client'
import { Constructor } from '../util'
import {
  EntryTranVirtualaccountArgs,
  EntryTranVirtualaccountResult,
  ExecTranVirtualaccountArgs,
  ExecTranVirtualaccountResult,
} from './virtualaccountTranable.type'

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

    public async execTranVirtualaccount(args: ExecTranVirtualaccountArgs): Promise<ExecTranVirtualaccountResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        OrderID: undefined,
        TradeDays: undefined,
      }
      return this.post<ExecTranVirtualaccountArgs, ExecTranVirtualaccountResult>(
        '/payment/ExecTranVirtualaccount.idPass',
        {
          ...defaultData,
          ...args,
        }
      )
    }
  }
