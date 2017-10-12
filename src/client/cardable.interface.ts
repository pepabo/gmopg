import {SeqMode} from '../client.enum'
import {ISiteArgs} from '../client.interface'

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
