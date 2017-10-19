import {AxiosInstance, AxiosResponse} from 'axios'
import * as merge from 'deepmerge'
import * as qs from 'querystring'
import {IConfig} from '../config'
import {
  IDeleteCardArgs,
  IDeleteCardResult,
  ISaveCardArgs,
  ISaveCardResult,
  ISearchCardArgs,
  ISearchCardResult
} from './cardable.interface'

export default class Cardable {
  public config: IConfig
  public client: AxiosInstance
  public options: object = {}

  public defaultCardData(): any {
    let siteID
    let sitePass

    if (this.config !== undefined) {
      siteID = this.config.SiteID
      sitePass = this.config.SitePass
    }

    return {
      SiteID: siteID,
      SitePass: sitePass,
      MemberID: undefined
    }
  }

  /*
  public parseResponseData(data: string): { [key: string]: string } {
    const src: { [key: string]: string | string[] } = qs.parse(data)
    let newObject: object = {}

    Object.keys(src).forEach((key) => {
      newObject[<string> key] = <string> src[key]
    })

    return newObject
  }
  */

  public async saveCard(args: ISaveCardArgs): Promise<ISaveCardResult> {
    const data: ISaveCardArgs = merge(this.defaultCardData, args)
    const res: AxiosResponse = await this.client.post('/payment/SaveCard.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)

    return <ISaveCardResult> parsed
  }

  public async deleteCard(args: IDeleteCardArgs): Promise<IDeleteCardResult> {
    const data: IDeleteCardArgs = merge(this.defaultCardData, args)
    const res: AxiosResponse = await this.client.post('/payment/DeleteCard.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)

    return <IDeleteCardResult> parsed
  }

  public async searchCard(args: ISearchCardArgs): Promise<ISearchCardResult[]> {
    const data: ISearchCardArgs = merge(this.defaultCardData, args)
    const res: AxiosResponse = await this.client.post('/payment/SearchCard.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)

    const cardSeqArry: string[] = parsed.CardSeq.split('|')
    const defaultFlagArry: string[] = parsed.DefaultFlag.split('|')
    const cardNameArry: string[] = parsed.CardName.split('|')
    const cardNoArry: string[] = parsed.CardNo.split('|')
    const expireArry: string[] = parsed.Expire.split('|')
    const holderNameArry: string[] = parsed.HolderName.split('|')
    const deleteFlagArry: string[] = parsed.DeleteFlag.split('|')

    return cardSeqArry.map((cardSeq, index) => {
      return {
        CardSeq: cardSeq,
        DefaultFlag: defaultFlagArry[index],
        CardName: cardNameArry[index],
        CardNo: cardNoArry[index],
        Expire: expireArry[index],
        HolderName: holderNameArry[index],
        DeleteFlag: deleteFlagArry[index]
      }
    })
  }
}
