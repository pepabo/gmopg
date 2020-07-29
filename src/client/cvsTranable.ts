import * as encoding from 'encoding-japanese'
import * as merge from 'deepmerge'
import Client from '../client'
import { Constructor } from '../util'
import {
  CancelCvsArgs,
  CancelCvsResult,
  EntryTranCvsArgs,
  EntryTranCvsResult,
  ExecTranCvsArgs,
  ExecTranCvsResult,
} from './cvsTranable.interface'

export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async entryTranCvs(
      args: EntryTranCvsArgs
    ): Promise<EntryTranCvsResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        Amount: undefined,
        Tax: undefined,
      }
      const data: EntryTranCvsArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/EntryTranCvs.idPass', data)

      return <EntryTranCvsResult>parsed
    }

    public async execTranCvs(
      args: ExecTranCvsArgs
    ): Promise<ExecTranCvsResult> {
      const parsed: any = await this.post('/payment/ExecTranCvs.idPass', {
        ...args,
        CustomerName: encoding.urlEncode(
          encoding.convert(args.CustomerName, 'SJIS')
        ),
        CustomerKana: encoding.urlEncode(
          encoding.convert(args.CustomerKana, 'SJIS')
        ),
      })

      return <ExecTranCvsResult>parsed
    }

    public async cancelCvs(args: CancelCvsArgs): Promise<CancelCvsResult> {
      const defaultData = {
        ShopID: this.config !== undefined ? this.config.ShopID : undefined,
        ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
        AccessID: undefined,
        AccessPass: undefined,
        OrderID: undefined,
      }
      const data: CancelCvsArgs = merge(defaultData, args)
      const parsed: any = await this.post('/payment/CvsCancel.idPass', data)

      return <CancelCvsResult>parsed
    }
  }
