import { SeqMode } from '../client.enum'
import { Result, SiteArgs, ShopArgs } from '../client.type'

export type SaveCardArgs = SiteArgs & {
  SeqMode?: SeqMode
  CardSeq?: number
  DefaultFlag?: string
  CardName?: string
  CardNo?: string
  CardPass?: string
  Expire?: string
  HolderName?: string
  SecurityCode?: string
  Token?: string
}

export type SaveCardResult = Result & {
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

export type DeleteCardArgs = SiteArgs & {
  SeqMode?: SeqMode
  CardSeq: string
}

export type DeleteCardResult = Result & {
  CardSeq: string
}

export type SearchCardArgs = SiteArgs & {
  SeqMode: SeqMode
  CardSeq?: string
}

export type SearchCardResult = Result & {
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

export type SearchCardDetailArgs = ShopArgs &
  SiteArgs & {
    Token?: string
    SearchType?: string
    CardNo?: string
    OrderID?: string
    SeqMode?: SeqMode
    CardSeq?: string
  }

export type SearchCardDetailResult = Result & {
  CardNo: string
  Brand: string
  DomesticFlag: string
  IssuerCode: string
  DebitPrepaidFlag: string
  DebitPrepaidIssuerName: string
  ForwardFinal: string
  Info1?: string
  Info2?: string
  Info3?: string
  Info4?: string
  Info5?: string
}
