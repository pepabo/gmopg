import { SeqMode } from '../client.enum'
import { Result, SiteArgs, ShopArgs } from '../client.interface'

export interface SaveCardArgs extends SiteArgs {
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

export interface SaveCardResult extends Result {
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

export interface DeleteCardArgs extends SiteArgs {
  SeqMode?: SeqMode
  CardSeq: string
}

export interface DeleteCardResult extends Result {
  CardSeq: string
}

export interface SearchCardArgs extends SiteArgs {
  SeqMode: SeqMode
  CardSeq?: string
}

export interface SearchCardResult extends Result {
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

export interface SearchCardDetailArgs extends ShopArgs, SiteArgs {
  Token?: string
  SearchType?: string
  CardNo?: string
  OrderID?: string
  SeqMode?: SeqMode
  CardSeq?: string
}

export interface SearchCardDetailResult extends Result {
  CardNo?: string
  Brand?: string
  DomesticFlag?: string
  IssuerCode?: string
  DebitPrepaidFlag?: string
  DebitPrepaidIssuerName?: string
  ForwardFinal?: string
}
