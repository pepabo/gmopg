import * as merge from 'deepmerge'
import Client from '../client'
import {Constructor} from '../util'
import {
  IDeleteCardArgs,
  IDeleteCardResult,
  ISaveCardArgs,
  ISaveCardResult,
  ISearchCardArgs,
  ISearchCardResult
} from './cardable.interface'

export default <T extends Constructor<Client>>(Base: T) => class Cardable extends Base {
  public defaultCardData(): any {
    const {SiteID, SitePass} = this.config

    return {
      SiteID,
      SitePass,
      MemberID: undefined
    }
  }

  public async saveCard(args: ISaveCardArgs): Promise<ISaveCardResult> {
    const data: ISaveCardArgs = merge(this.defaultCardData(), args)
    const parsed: any = await this.post('/payment/SaveCard.idPass', data)

    return <ISaveCardResult>parsed
  }

  public async deleteCard(args: IDeleteCardArgs): Promise<IDeleteCardResult> {
    const data: IDeleteCardArgs = merge(this.defaultCardData(), args)
    const parsed: any = await this.post('/payment/DeleteCard.idPass', data)

    return <IDeleteCardResult>parsed
  }

  public async searchCard(args: ISearchCardArgs): Promise<ISearchCardResult[]> {
    const data: ISearchCardArgs = merge(this.defaultCardData(), args)
    const parsed: any = await this.post('/payment/SearchCard.idPass', data)

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
