import axios, { AxiosResponse } from 'axios'
import * as querystring from 'querystring'
import * as util from '../util'

export interface ISaveCardArgs {
  siteID: string
  sitePass: string
  memberID: string
  seqMode?: util.SeqMode
  cardSeq?: number
  defaultFlag?: string
  cardName?: string
  cardNo?: string
  cardPass?: string
  expire?: string
  holderName?: string
  token?: string
}

export interface ISaveCardResult {
  cardSeq: string
  cardNo: string
  forward: string
  brand?: string
  domesticFlag?: string
  issuerCode?: string
  debitPrepaidFlag?: string
  debitPrepaidIssuerName?: string
  forwardFinal?: string
}

export async function saveCard(args: ISaveCardArgs): Promise<ISaveCardResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/SaveCard.idPass`, {
    SiteID: args.siteID,
    SitePass: args.sitePass,
    MemberID: args.memberID,
    SeqMode: args.seqMode,
    CardSeq: args.cardSeq,
    DefaultFlag: args.defaultFlag,
    CardName: args.cardName,
    CardNo: args.cardNo,
    CardPass: args.cardPass,
    Expire: args.expire,
    HolderName: args.holderName,
    Token: args.token
  })

  const result = querystring.parse(res.data)

  return {
    cardSeq: result.CardSeq,
    cardNo: result.CardNo,
    forward: result.Forward,
    brand: result.Brand,
    domesticFlag: result.DomesticFlag,
    issuerCode: result.IssuerCode,
    debitPrepaidFlag: result.DebitPrepaidFlag,
    debitPrepaidIssuerName: result.DebitPrepaidIssuerName,
    forwardFinal: result.ForwardFinal
  }
}

export interface IDeleteCardArgs {
  siteID: string
  sitePass: string
  memberID: string
  seqMode?: util.SeqMode
  cardSeq: string
}

export interface IDeleteCardResult {
  cardSeq: string
}

export async function deleteCard(args: IDeleteCardArgs): Promise<IDeleteCardResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/DeleteCard.idPass`, {
    SiteID: args.siteID,
    SitePass: args.sitePass,
    MemberID: args.memberID,
    SeqMode: args.seqMode,
    CardSeq: args.cardSeq
  })

  const result = querystring.parse(res.data)

  return {
    cardSeq: result.CardSeq
  }
}

export interface ISearchCardArgs {
  siteID: string
  sitePass: string
  memberID: string
  seqMode: util.SeqMode
  cardSeq?: string
}

export interface ISearchCardResult {
  cardSeq: string
  defaultFlag: string
  cardName: string
  cardNo: string
  expire: string
  holderName: string
  deleteFlag: string
  brand?: string
  domesticFlag?: string
  issuerCode?: string
  debitPrepaidFlag?: string
  debitPrepaidIssuerName?: string
  forwardFinal?: string
}

export async function searchCard(args: ISearchCardArgs): Promise<ISearchCardResult[]> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/SearchCard.idPass`, {
    SiteID: args.siteID,
    SitePass: args.sitePass,
    MemberID: args.memberID,
    SeqMode: args.seqMode,
    CardSeq: args.cardSeq
  })

  const result = querystring.parse(res.data)

  const cardSeqArry: string[] = result.CardSeq.split('|')
  const defaultFlagArry: string[] = result.DefaultFlag.split('|')
  const cardNameArry: string[] = result.CardName.split('|')
  const cardNoArry: string[] = result.CardNo.split('|')
  const expireArry: string[] = result.Expire.split('|')
  const holderNameArry: string[] = result.HolderName.split('|')
  const deleteFlagArry: string[] = result.DeleteFlag.split('|')

  return cardSeqArry.map((cardSeq, index) => {
    return {
      cardSeq: cardSeq,
      defaultFlag: defaultFlagArry[index],
      cardName: cardNameArry[index],
      cardNo: cardNoArry[index],
      expire: expireArry[index],
      holderName: holderNameArry[index],
      deleteFlag: deleteFlagArry[index]
    }
  })
}
