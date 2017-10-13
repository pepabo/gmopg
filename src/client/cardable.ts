import {AxiosInstance, AxiosResponse} from 'axios'
import * as merge from 'deepmerge'
import * as qs from 'querystring'
import {TConfig} from '../config'
import {
  IDeleteCardArgs,
  IDeleteCardResult,
  ISaveCardArgs,
  ISaveCardResult,
  ISearchCardArgs,
  ISearchCardResult
} from './cardable.interface'

export default class Cardable {
  public config: TConfig
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

  public async saveCard(args: ISaveCardArgs): Promise<ISaveCardResult> {
    const data: ISaveCardArgs = merge(this.defaultCardData, args)
    const res: AxiosResponse = await this.client.post('/payment/SaveCard.idPass', data, this.options)

    return qs.parse(res.data)
  }

  public async deleteCard(args: IDeleteCardArgs): Promise<IDeleteCardResult> {
    const data: IDeleteCardArgs = merge(this.defaultCardData, args)
    const res: AxiosResponse = await this.client.post('/payment/DeleteCard.idPass', data, this.options)

    return qs.parse(res.data)
  }

  public async searchCard(args: ISearchCardArgs): Promise<ISearchCardResult[]> {
    const data: ISearchCardArgs = merge(this.defaultCardData, args)
    const res: AxiosResponse = await this.client.post('/payment/SearchCard.idPass', data, this.options)
    const result = qs.parse(res.data)

    const cardSeqArry: string[] = result.CardSeq.split('|')
    const defaultFlagArry: string[] = result.DefaultFlag.split('|')
    const cardNameArry: string[] = result.CardName.split('|')
    const cardNoArry: string[] = result.CardNo.split('|')
    const expireArry: string[] = result.Expire.split('|')
    const holderNameArry: string[] = result.HolderName.split('|')
    const deleteFlagArry: string[] = result.DeleteFlag.split('|')

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
