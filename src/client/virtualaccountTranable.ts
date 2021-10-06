import * as encoding from 'encoding-japanese'
import Client from '../client'
import { Constructor } from '../util'
import {
  AssignVirtualaccountArgs,
  AssignVirtualaccountResult,
  EntryTranVirtualaccountArgs,
  EntryTranVirtualaccountResult,
  ExecTranVirtualaccountArgs,
  ExecTranVirtualaccountResult,
  FreeVirtualaccountArgs,
  FreeVirtualaccountResult,
  InquiryVirtualaccountTransferArgs,
  InquiryVirtualaccountTransferResult,
  ListVirtualaccountArgs,
  ListVirtualaccountResult,
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
      if (args.TradeReason) {
        args.TradeReason = encoding.urlEncode(encoding.convert(args.TradeReason, { to: 'SJIS', type: 'array' }))
      }
      if (args.TradeClientName) {
        args.TradeClientName = encoding.urlEncode(encoding.convert(args.TradeClientName, { to: 'SJIS', type: 'array' }))
      }
      return this.post<ExecTranVirtualaccountArgs, ExecTranVirtualaccountResult>(
        '/payment/ExecTranVirtualaccount.idPass',
        {
          ...defaultData,
          ...args,
        }
      )
    }

    public async assignVirtualaccount(args: AssignVirtualaccountArgs): Promise<AssignVirtualaccountResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        ReserveID: undefined,
      }
      return this.post<AssignVirtualaccountArgs, AssignVirtualaccountResult>('/payment/AssignVirtualaccount.idPass', {
        ...defaultData,
        ...args,
      })
    }

    public async freeVirtualaccount(args: FreeVirtualaccountArgs): Promise<FreeVirtualaccountResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        ReserveID: undefined,
      }
      return this.post<FreeVirtualaccountArgs, FreeVirtualaccountResult>('/payment/FreeVirtualaccount.idPass', {
        ...defaultData,
        ...args,
      })
    }

    public async listVirtualaccount(args: ListVirtualaccountArgs): Promise<ListVirtualaccountResult[]> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
      }
      return this.post<ListVirtualaccountArgs, ListVirtualaccountResult[]>('/payment/ListVirtualaccount.idPass', {
        ...defaultData,
        ...args,
      })
    }

    public async inquiryVirtualaccountTransfer(
      args: InquiryVirtualaccountTransferArgs
    ): Promise<InquiryVirtualaccountTransferResult[]> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
      }
      return this.post<InquiryVirtualaccountTransferArgs, InquiryVirtualaccountTransferResult[]>(
        '/payment/InquiryVirtualaccountTransfer.idPass',
        {
          ...defaultData,
          ...args,
        }
      )
    }
  }
