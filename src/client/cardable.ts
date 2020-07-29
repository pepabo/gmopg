import * as merge from 'deepmerge'
import Client from '../client'
import { Constructor } from '../util'
import {
  DeleteCardArgs,
  DeleteCardResult,
  SaveCardArgs,
  SaveCardResult,
  SearchCardArgs,
  SearchCardResult,
  SearchCardDetailArgs,
  SearchCardDetailResult,
} from './cardable.interface'

export default <T extends Constructor<Client>>(Base: T) =>
  class Cardable extends Base {
    public defaultCardData(): any {
      const { SiteID, SitePass } = this.config

      return {
        SiteID,
        SitePass,
        MemberID: undefined,
      }
    }

    public async saveCard(args: SaveCardArgs): Promise<SaveCardResult> {
      const data: SaveCardArgs = merge(this.defaultCardData(), args)
      const parsed: any = await this.post('/payment/SaveCard.idPass', data)

      return <SaveCardResult>parsed
    }

    public async deleteCard(args: DeleteCardArgs): Promise<DeleteCardResult> {
      const data: DeleteCardArgs = merge(this.defaultCardData(), args)
      const parsed: any = await this.post('/payment/DeleteCard.idPass', data)

      return <DeleteCardResult>parsed
    }

    public async searchCard(
      args: SearchCardArgs
    ): Promise<SearchCardResult[]> {
      const data: SearchCardArgs = merge(this.defaultCardData(), args)
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
          DeleteFlag: deleteFlagArry[index],
        }
      })
    }

    public async searchCardDetail(
      args: SearchCardDetailArgs
    ): Promise<SearchCardDetailResult[]> {
      const data: SearchCardDetailArgs = merge(this.defaultCardData(), args)
      const parsed: any = await this.post(
        '/payment/SearchCardDetail.idPass',
        data
      )

      const cardNoArry: string[] = parsed.CardNo.split('|')
      const brandArry: string[] = parsed.Brand.split('|')
      const domesticFlagArry: string[] = parsed.DomesticFlag.split('|')
      const issuerCodeArry: string[] = parsed.IssuerCode.split('|')
      const debitPrepaidFlagArry: string[] = parsed.DebitPrepaidFlag.split('|')
      const debitPrepaidIssuerNameArry: string[] = parsed.DebitPrepaidIssuerName.split(
        '|'
      )
      const forwardFianlArry: string[] = parsed.ForwardFinal.split('|')
      const errCodeArry: string[] = parsed.ErrCode.split('|')
      const errInfoArry: string[] = parsed.ErrInfo.split('|')

      return cardNoArry.map(
        (_, index): SearchCardDetailResult => {
          return {
            CardNo: cardNoArry[index],
            Brand: brandArry[index],
            DomesticFlag: domesticFlagArry[index],
            IssuerCode: issuerCodeArry[index],
            DebitPrepaidFlag: debitPrepaidFlagArry[index],
            DebitPrepaidIssuerName: debitPrepaidIssuerNameArry[index],
            ForwardFinal: forwardFianlArry[index],
            ErrCode: errCodeArry[index],
            ErrInfo: errInfoArry[index],
          }
        }
      )
    }
  }
