import * as encoding from 'encoding-japanese'
import * as merge from 'deepmerge'
import Client from '../client'
import {Constructor} from '../util'
import {
  IEntryTranCvsArgs,
  IEntryTranCvsResult,
  IExecTranCvsArgs,
  IExecTranCvsResult
} from './cvsTranable.interface'

export default <T extends Constructor<Client>>(Base: T) => class extends Base {
  public async entryTranCvs(args: IEntryTranCvsArgs): Promise<IEntryTranCvsResult> {
    const defaultData = {
      ShopID: this.config.ShopID,
      ShopPass: this.config.ShopPass,
      OrderID: undefined,
      Amount: undefined,
      Tax: undefined
    }
    const data: IEntryTranCvsArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/EntryTranCvs.idPass', data)

    return <IEntryTranCvsResult>parsed
  }

  public async execTranCvs(args: IExecTranCvsArgs): Promise<IExecTranCvsResult> {
    const parsed: any = await this.post('/payment/ExecTranCvs.idPass', {
      ...args,
      CustomerName: encoding.urlEncode(encoding.convert(args.CustomerName, 'SJIS')),
      CustomerKana: encoding.urlEncode(encoding.convert(args.CustomerKana, 'SJIS'))
    })

    return <IExecTranCvsResult>parsed
  }
}
