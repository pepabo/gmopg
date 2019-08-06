import {SeqMode} from '../client.enum'
import {IResult, ISiteArgs, IShopArgs} from '../client.interface'

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

export interface ISaveCardResult extends IResult {
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

export interface IDeleteCardResult extends IResult {
  CardSeq: string
}

export interface ISearchCardArgs extends ISiteArgs {
  SeqMode: SeqMode
  CardSeq?: string
}

export interface ISearchCardResult extends IResult {
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

export interface ISearchCardDetailArgs extends IShopArgs, ISiteArgs {
  Token?: string
  SearchType?: string
  CardNo?: string
  OrderID?: string
  SeqMode?: SeqMode
  CardSeq?: string
}

export interface ISearchCardDetailResult extends IResult {
  CardNo?: string
  Brand?: string
  DomesticFlag?: string
  IssuerCode?: string
  DebitPrepaidFlag?: string
  DebitPrepaidIssuerName?: string
  ForwardFinal?: string
}
