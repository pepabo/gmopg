import * as encoding from 'encoding-japanese'
import Client from '../client'
import { Constructor } from '../util'
import {
  CancelCvsArgs,
  CancelCvsResult,
  EntryTranCvsArgs,
  EntryTranCvsResult,
  ExecTranCvsArgs,
  ExecTranCvsResult,
} from './cvsTranable.type'

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
      return this.post<EntryTranCvsArgs, EntryTranCvsResult>('/payment/EntryTranCvs.idPass', {
        ...defaultData,
        ...args,
      })
    }

    public async execTranCvs(args: ExecTranCvsArgs): Promise<ExecTranCvsResult> {
      return this.post<ExecTranCvsArgs, ExecTranCvsResult>('/payment/ExecTranCvs.idPass', {
        ...args,
        CustomerName: encoding.urlEncode(encoding.convert(args.CustomerName, { to: 'SJIS', type: 'array' })),
        CustomerKana: encoding.urlEncode(encoding.convert(args.CustomerKana, { to: 'SJIS', type: 'array' })),
      })
    }

    public async cancelCvs(args: CancelCvsArgs): Promise<CancelCvsResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        OrderID: undefined,
      }
      return this.post<CancelCvsArgs, CancelCvsResult>('/payment/CvsCancel.idPass', {
        ...defaultData,
        ...args,
      })
    }
  }
