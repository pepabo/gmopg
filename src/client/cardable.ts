import Client from '../client'
import { Constructor } from '../util'
import { SiteArgs } from '../client.type'
import {
  DeleteCardArgs,
  DeleteCardResult,
  SaveCardArgs,
  SaveCardResult,
  SearchCardArgs,
  SearchCardResult,
  SearchCardDetailArgs,
  SearchCardDetailResult,
} from './cardable.type'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class Cardable extends Base {
    public defaultCardData(): SiteArgs {
      const { SiteID, SitePass } = this.config

      return {
        SiteID,
        SitePass,
        MemberID: undefined,
      }
    }

    public async saveCard(args: SaveCardArgs): Promise<SaveCardResult> {
      return this.post<SaveCardArgs, SaveCardResult>('/payment/SaveCard.idPass', {
        ...this.defaultCardData(),
        ...args,
      })
    }

    public async deleteCard(args: DeleteCardArgs): Promise<DeleteCardResult> {
      return this.post<DeleteCardArgs, DeleteCardResult>('/payment/DeleteCard.idPass', {
        ...this.defaultCardData(),
        ...args,
      })
    }

    public async searchCard(args: SearchCardArgs): Promise<SearchCardResult[]> {
      const parsed = await this.post<SearchCardArgs, SearchCardResult>('/payment/SearchCard.idPass', {
        ...this.defaultCardData(),
        ...args,
      })

      const cardSeqArry: string[] = parsed.CardSeq.split('|')
      const defaultFlagArry: string[] = parsed.DefaultFlag.split('|')
      const cardNameArry: string[] = parsed.CardName.split('|')
      const cardNoArry: string[] = parsed.CardNo.split('|')
      const expireArry: string[] = parsed.Expire.split('|')
      const holderNameArry: string[] = parsed.HolderName.split('|')
      const deleteFlagArry: string[] = parsed.DeleteFlag.split('|')
      const brandArry: string[] = parsed.Brand?.split('|') || []
      const domesticFlagArry: string[] = parsed.DomesticFlag?.split('|') || []
      const issuerCodeArry: string[] = parsed.IssuerCode?.split('|') || []
      const debitPrepaidFlagArry: string[] = parsed.DebitPrepaidFlag?.split('|') || []
      const debitPrepaidIssuerNameArry: string[] = parsed.DebitPrepaidIssuerName?.split('|') || []
      const forwardFinalArry: string[] = parsed.ForwardFinal?.split('|') || []

      return cardSeqArry.map((cardSeq, index) => {
        return {
          CardSeq: cardSeq,
          DefaultFlag: defaultFlagArry[index],
          CardName: cardNameArry[index],
          CardNo: cardNoArry[index],
          Expire: expireArry[index],
          HolderName: holderNameArry[index],
          DeleteFlag: deleteFlagArry[index],
          Brand: brandArry[index] || undefined,
          DomesticFlag: domesticFlagArry[index] || undefined,
          IssuerCode: issuerCodeArry[index] || undefined,
          DebitPrepaidFlag: debitPrepaidFlagArry[index] || undefined,
          DebitPrepaidIssuerName: debitPrepaidIssuerNameArry[index] || undefined,
          ForwardFinal: forwardFinalArry[index] || undefined,
        }
      })
    }

    public async searchCardDetail(args: SearchCardDetailArgs): Promise<SearchCardDetailResult[]> {
      const parsed = await this.post<SearchCardDetailArgs, SearchCardDetailResult>('/payment/SearchCardDetail.idPass', {
        ...this.defaultCardData(),
        ...args,
      })

      const cardNoArry: string[] = parsed.CardNo.split('|')
      const brandArry: string[] = parsed.Brand.split('|')
      const domesticFlagArry: string[] = parsed.DomesticFlag.split('|')
      const issuerCodeArry: string[] = parsed.IssuerCode.split('|')
      const debitPrepaidFlagArry: string[] = parsed.DebitPrepaidFlag.split('|')
      const debitPrepaidIssuerNameArry: string[] = parsed.DebitPrepaidIssuerName.split('|')
      const forwardFianlArry: string[] = parsed.ForwardFinal.split('|')
      const info1Arry: string[] = parsed.Info1?.split('|') || []
      const info2Arry: string[] = parsed.Info2?.split('|') || []
      const info3Arry: string[] = parsed.Info3?.split('|') || []
      const info4Arry: string[] = parsed.Info4?.split('|') || []
      const info5Arry: string[] = parsed.Info5?.split('|') || []

      return cardNoArry.map((_, index): SearchCardDetailResult => {
        return {
          CardNo: cardNoArry[index],
          Brand: brandArry[index],
          DomesticFlag: domesticFlagArry[index],
          IssuerCode: issuerCodeArry[index],
          DebitPrepaidFlag: debitPrepaidFlagArry[index],
          DebitPrepaidIssuerName: debitPrepaidIssuerNameArry[index],
          ForwardFinal: forwardFianlArry[index],
          Info1: info1Arry[index] || undefined,
          Info2: info2Arry[index] || undefined,
          Info3: info3Arry[index] || undefined,
          Info4: info4Arry[index] || undefined,
          Info5: info5Arry[index] || undefined,
        }
      })
    }
  }
