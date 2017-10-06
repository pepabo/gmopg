import {AxiosInstance, AxiosResponse} from 'axios'
import * as merge from 'deepmerge'
import * as qs from 'querystring'
import {ISiteArgs, SeqMode} from '../client'
import {TConfig} from '../config'

export interface ISaveCardArgs extends ISiteArgs {
  SeqMode?: SeqMode
  CardSeq?: number
  DefaultFlag?: string
  CardName?: string
  CardNo?: string
  CardPass?: string
  Expire?: string
  HolderName?: string
  Token?: string
}

export interface ISaveCardResult {
  CardSeq: string
  CardNo: string
  Forward: string
  Brand?: string
  DomesticFlag?: string
  IssuerCode?: string
  DebitPrepaidFlag?: string
  DebitPrepaidIssuerName?: string
  ForwardFinal?: string
}

export interface IDeleteCardArgs extends ISiteArgs {
  SeqMode?: SeqMode
  CardSeq: string
}

export interface IDeleteCardResult {
  CardSeq: string
}

export interface ISearchCardArgs extends ISiteArgs {
  SeqMode: SeqMode
  CardSeq?: string
}

export interface ISearchCardResult {
  CardSeq: string
  DefaultFlag: string
  CardName: string
  CardNo: string
  Expire: string
  HolderName: string
  DeleteFlag: string
  Brand?: string
  DomesticFlag?: string
  IssuerCode?: string
  DebitPrepaidFlag?: string
  DebitPrepaidIssuerName?: string
  ForwardFinal?: string
}

export default class Cardable {
  public config: TConfig
  public client: AxiosInstance

  public async saveCard(args: ISaveCardArgs): Promise<ISaveCardResult> {
    const data: ISaveCardArgs = merge({
      SiteID: this.config.SiteID,
      SitePass: this.config.SiteID,
      MemberID: undefined
    }, args)
    const res: AxiosResponse = await this.client.post('/payment/SaveCard.idPass', data)

    return qs.parse(res.data)
  }

  public async deleteCard(args: IDeleteCardArgs): Promise<IDeleteCardResult> {
    const data: IDeleteCardArgs = merge({
      SiteID: this.config.SiteID,
      SitePass: this.config.SiteID,
      MemberID: undefined
    }, args)
    const res: AxiosResponse = await this.client.post('/payment/DeleteCard.idPass', data)

    return qs.parse(res.data)
  }

  public async searchCard(args: ISearchCardArgs): Promise<ISearchCardResult[]> {
    const data: ISearchCardArgs = merge({
      SiteID: this.config.SiteID,
      SitePass: this.config.SiteID,
      MemberID: undefined
    }, args)
    const res: AxiosResponse = await this.client.post('/payment/SearchCard.idPass', data)
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
