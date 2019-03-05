import {AxiosInstance} from 'axios'
import * as encoding from 'encoding-japanese'
import * as merge from 'deepmerge'
import Client from '../client'
import {IConfig} from '../config.interface'
import {
  IEntryTranCvsArgs,
  IEntryTranCvsResult,
  IExecTranCvsArgs,
  IExecTranCvsResult
} from './cvsTranable.interface'

export default class CvsTranable extends Client {
  public name: string = 'CvsTranable'
  public config: IConfig
  public client: AxiosInstance
  public options: object = {}

  public async entryTranCvs(args: IEntryTranCvsArgs): Promise<IEntryTranCvsResult> {
    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      OrderID: undefined,
      Amount: undefined,
      Tax: undefined
    }
    const data: IEntryTranCvsArgs = merge(defaultData, args)
    const parsed: any = await this.post('/payment/EntryTranCvs.idPass', data)

    return <IEntryTranCvsResult> parsed
  }

  public async execTranCvs(args: IExecTranCvsArgs): Promise<IExecTranCvsResult> {
    const parsed: any = await this.post('/payment/ExecTranCvs.idPass', {
      ...args,
      CustomerName: encoding.urlEncode(encoding.convert(args.CustomerName, 'SJIS')),
      CustomerKana: encoding.urlEncode(encoding.convert(args.CustomerKana, 'SJIS'))
    })

    return <IExecTranCvsResult> parsed
  }

}
