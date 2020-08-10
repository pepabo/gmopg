import * as encoding from 'encoding-japanese'
import * as merge from 'deepmerge'
import Client from '../client'
import { Constructor } from '../util'
import { CancelCvsArgs, CancelCvsResult, EntryTranCvsArgs, EntryTranCvsResult, ExecTranCvsArgs, ExecTranCvsResult } from './cvsTranable.interface'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async entryTranCvs(args: EntryTranCvsArgs): Promise<EntryTranCvsResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        Amount: undefined,
        Tax: undefined,
      }
      const data = merge(defaultData, args)
      return this.post<EntryTranCvsArgs, EntryTranCvsResult>('/payment/EntryTranCvs.idPass', data)
    }

    public async execTranCvs(args: ExecTranCvsArgs): Promise<ExecTranCvsResult> {
      return this.post<ExecTranCvsArgs, ExecTranCvsResult>('/payment/ExecTranCvs.idPass', {
        ...args,
        CustomerName: encoding.urlEncode(encoding.convert(args.CustomerName, 'SJIS')),
        CustomerKana: encoding.urlEncode(encoding.convert(args.CustomerKana, 'SJIS')),
      })
    }

    public async cancelCvs(args: CancelCvsArgs): Promise<CancelCvsResult> {
      const defaultData = {
        ShopID: this.config !== undefined ? this.config.ShopID : undefined,
        ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
        AccessID: undefined,
        AccessPass: undefined,
        OrderID: undefined,
      }
      const data = merge(defaultData, args)
      return this.post<CancelCvsArgs, CancelCvsResult>('/payment/CvsCancel.idPass', data)
    }
  }
