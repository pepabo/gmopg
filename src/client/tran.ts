import * as createDebug from 'debug'
import * as querystring from 'querystring'
import * as request from 'request-promise-native'
import { BadRequestError } from '../error/badRequest'
import * as util from '../utils/util'

const debug = createDebug('gmo-service:credit')

export interface IEntryTranArgs {
  shopId: string
  shopPass: string
  orderId: string
  jobCd: util.JobCd
  amount: number
}

export interface IEntryTranResult {
  accessId: string
  accessPass: string
}

export async function entryTran(args: IEntryTranArgs): Promise<IEntryTranResult> {
  debug('requesting...', args)
  const body = await request.post({
  url: `${process.env.GMO_ENDPOINT}/payment/EntryTran.idPass`,
  form: {
    ShopID: args.shopId,
    ShopPass: args.shopPass,
    OrderID: args.orderId,
    JobCd: args.jobCd,
    Amount: args.amount
  }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
  throw new BadRequestError(body)
  }

  return {
  accessId: result.AccessID,
  accessPass: result.AccessPass
  }
}

export interface IExecTranArgs {
  accessId: string
  accessPass: string
  orderId: string
  method?: util.Method
  payTimes?: number
  cardNo?: string
  expire?: string
  securityCode?: string
  token?: string
  pin?: string
  siteId?: string
  sitePass?: string
  memberId?: string
  seqMode?: util.SeqMode
  cardSeq?: number
  cardPass?: string
  clientField1?: string
  clientField2?: string
  clientField3?: string
}

export interface IExecTranResult {
  acs: string
  orderId: string
  forward: string
  method: util.Method
  payTimes: string
  approve: string
  tranId: string
  tranDate: string
  checkString: string
  clientField1: string
  clientField2: string
  clientField3: string
}

export async function execTran(args: IExecTranArgs): Promise<IExecTranResult> {
  debug('requesting...', args)
  const body = await request.post({
  url: `${process.env.GMO_ENDPOINT}/payment/ExecTran.idPass`,
  form: {
    AccessID: args.accessId,
    AccessPass: args.accessPass,
    OrderID: args.orderId,
    Method: args.method,
    PayTimes: args.payTimes,
    CardNo: args.cardNo,
    Expire: args.expire,
    SecurityCode: args.securityCode,
    Token: args.token,
    PIN: args.pin,
    SiteID: args.siteId,
    SitePass: args.sitePass,
    MemberID: args.memberId,
    SeqMode: args.seqMode,
    CardSeq: args.cardSeq,
    CardPass: args.cardPass,
    ClientField1: args.clientField1,
    ClientField2: args.clientField2,
    ClientField3: args.clientField3
  }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
  throw new BadRequestError(body)
  }

  return {
  acs: result.ACS,
  orderId: result.OrderID,
  forward: result.Forward,
  method: result.Method,
  payTimes: result.PayTimes,
  approve: result.Approve,
  tranId: result.TranID,
  tranDate: result.TranDate,
  checkString: result.CheckString,
  clientField1: result.ClientField1,
  clientField2: result.ClientField2,
  clientField3: result.ClientField3
  }
}

export interface IAlterTranArgs {
  shopId: string
  shopPass: string
  accessId: string
  accessPass: string
  jobCd: util.JobCd
  amount?: number
  method?: util.Method
}
export interface IAlterTranResult {
  accessId: string
  accessPass: string
  forward: string
  approve: string
  tranId: string
  tranDate: string
}

export async function alterTran(args: IAlterTranArgs): Promise<IAlterTranResult> {
  debug('requesting...', args)
  const body = await request.post({
  url: `${process.env.GMO_ENDPOINT}/payment/AlterTran.idPass`,
  form: {
    ShopID: args.shopId,
    ShopPass: args.shopPass,
    AccessID: args.accessId,
    AccessPass: args.accessPass,
    JobCd: args.jobCd,
    Amount: args.amount,
    Method: args.method
  }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
  throw new BadRequestError(body)
  }

  return {
  accessId: result.AccessID,
  accessPass: result.AccessPass,
  forward: result.Forward,
  approve: result.Approve,
  tranId: result.TranID,
  tranDate: result.TranDate
  }
}

export interface ISearchTradeArgs {
      shopId: string
      shopPass: string
      orderId: string
}

export interface ISearchTradeResult {
      orderId: string
      status: string
      processDate: string
      jobCd: util.JobCd
      accessId: string
      accessPass: string
      itemCode: string
      amount: string
      tax: string
      siteId: string
      memberId: string
      cardNo: string
      expire: string
      method: util.Method
      payTimes: string
      forward: string
      tranId: string
      approve: string
      clientField1: string
      clientField2: string
      clientField3: string
      errCode: string
      errInfo: string
}

export async function searchTrade(args: ISearchTradeArgs): Promise<ISearchTradeResult> {
  debug('requesting...', args)
  const body = await request.post({
  url: `${process.env.GMO_ENDPOINT}/payment/SearchTrade.idPass`,
  form: {
    ShopID: args.shopId,
    ShopPass: args.shopPass,
    OrderID: args.orderId
  }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
  throw new BadRequestError(body)
  }

  return {
  orderId: result.OrderID,
  status: result.Status,
  processDate: result.ProcessDate,
  jobCd: result.JobCd,
  accessId: result.AccessID,
  accessPass: result.AccessPass,
  itemCode: result.ItemCode,
  amount: result.Amount,
  tax: result.Tax,
  siteId: result.SiteID,
  memberId: result.MemberID,
  cardNo: result.CardNo,
  expire: result.Expire,
  method: result.Method,
  payTimes: result.PayTimes,
  forward: result.Forward,
  tranId: result.TranID,
  approve: result.Approve,
  clientField1: result.ClientField1,
  clientField2: result.ClientField2,
  clientField3: result.ClientField3,
  errCode: result.ErrCode,
  errInfo: result.ErrInfo
  }
}

export interface IChangeTranArgs {
  shopId: string
  shopPass: string
  accessId: string
  accessPass: string
  jobCd: util.JobCd
  amount: number
  tax?: string
}
export interface IChangeTranResult {
  accessId: string
  accessPass: string
  forward: string
  approve: string
  tranId: string
  tranDate: string
}

export async function changeTran(args: IChangeTranArgs): Promise<IChangeTranResult> {
  debug('requesting...', args)
  const body = await request.post({
  url: `${process.env.GMO_ENDPOINT}/payment/ChangeTran.idPass`,
  form: {
    ShopID: args.shopId,
    ShopPass: args.shopPass,
    AccessID: args.accessId,
    AccessPass: args.accessPass,
    JobCd: args.jobCd,
    Amount: args.amount,
    Tax: args.tax
  }
  }).promise()
  debug('request processed.', body)

  const result = querystring.parse(body)
  if (result.ErrCode !== undefined) {
  throw new BadRequestError(body)
  }

  return {
  accessId: result.AccessID,
  accessPass: result.AccessPass,
  forward: result.Forward,
  approve: result.Approve,
  tranId: result.TranID,
  tranDate: result.TranDate
  }
}
