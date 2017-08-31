import * as createDebug from 'debug'
import * as querystring from 'querystring'
import * as request from 'request-promise-native'
import { BadRequestError } from '../error/badRequest'
import * as util from '../utils/util'

const debug = createDebug('gmo-service:services:card')

export interface ISaveCardArgs {
  siteId: string
  sitePass: string
  memberId: string
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
  debug('requesting...', args)
  const body = await request.post({
    url: `${process.env.GMOPG_ENDPOINT}/payment/SaveCard.idPass`,
    form: {
      SiteID: args.siteId,
      SitePass: args.sitePass,
      MemberID: args.memberId,
      SeqMode: args.seqMode,
      CardSeq: args.cardSeq,
      DefaultFlag: args.defaultFlag,
      CardName: args.cardName,
      CardNo: args.cardNo,
      CardPass: args.cardPass,
      Expire: args.expire,
      HolderName: args.holderName,
      Token: args.token
    }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
      throw new BadRequestError(body)
  }

  return {
    cardSeq: result.CardSeq,
    cardNo: result.CardNo,
    forward: result.Forward,
    brand: result.Brand,
    domesticFlag: result.DomesticFlag,
    issuerCode: result.IssuerCode,
    debitPrepaidFlag: result.DebitPrepaidFlag,
    debitPrepaidIssuerName: result.DebitPrepaidIssuerName,
    forwardFinal: result.ForwardFinal,
  }
}

export interface IDeleteCardArgs {
  siteId: string
  sitePass: string
  memberId: string
  seqMode?: util.SeqMode
  cardSeq: string
}

export interface IDeleteCardResult {
  cardSeq: string
}

export async function deleteCard(args: IDeleteCardArgs): Promise<IDeleteCardResult> {
  debug('requesting...', args)
  const body = await request.post({
    url: `${process.env.GMOPG_ENDPOINT}/payment/DeleteCard.idPass`,
    form: {
      SiteID: args.siteId,
      SitePass: args.sitePass,
      MemberID: args.memberId,
      SeqMode: args.seqMode,
      CardSeq: args.cardSeq
    }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
    throw new BadRequestError(body)
  }

  return {
    cardSeq: result.CardSeq
  }
}

export interface ISearchCardArgs {
  siteId: string
  sitePass: string
  memberId: string
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
  debug('requesting...', args)
  const body = await request.post({
    url: `${process.env.GMOPG_ENDPOINT}/payment/SearchCard.idPass`,
    form: {
      SiteID: args.siteId,
      SitePass: args.sitePass,
      MemberID: args.memberId,
      SeqMode: args.seqMode,
      CardSeq: args.cardSeq
    }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
    const error = new BadRequestError(body)

    if (error.errors.length === 1 && error.errors[0].info === 'E01240002') {
      return []
    }

    throw error
  }

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
