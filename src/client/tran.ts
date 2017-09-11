import axios, { AxiosResponse } from 'axios'
import * as querystring from 'querystring'
import * as util from '../util'

export interface IEntryTranArgs {
  shopID: string
  shopPass: string
  orderID: string
  jobCd: util.JobCd
  amount: number
}

export interface IEntryTranResult {
  accessID: string
  accessPass: string
}

export async function entryTran(args: IEntryTranArgs): Promise<IEntryTranResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/EntryTran.idPass`, {
    ShopID: args.shopID,
    ShopPass: args.shopPass,
    OrderID: args.orderID,
    JobCd: args.jobCd,
    Amount: args.amount
  })

  const result = querystring.parse(res.data)

  return {
    accessID: result.AccessID,
    accessPass: result.AccessPass
  }
}

export interface IExecTranArgs {
  accessID: string
  accessPass: string
  orderID: string
  method?: util.Method
  payTimes?: number
  cardNo?: string
  expire?: string
  securityCode?: string
  token?: string
  pin?: string
  siteID?: string
  sitePass?: string
  memberID?: string
  seqMode?: util.SeqMode
  cardSeq?: number
  cardPass?: string
  clientField1?: string
  clientField2?: string
  clientField3?: string
}

export interface IExecTranResult {
  acs: string
  orderID: string
  forward: string
  method: util.Method
  payTimes: string
  approve: string
  tranID: string
  tranDate: string
  checkString: string
  clientField1: string
  clientField2: string
  clientField3: string
}

export async function execTran(args: IExecTranArgs): Promise<IExecTranResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/ExecTran.idPass`, {
    AccessID: args.accessID,
    AccessPass: args.accessPass,
    OrderID: args.orderID,
    Method: args.method,
    PayTimes: args.payTimes,
    CardNo: args.cardNo,
    Expire: args.expire,
    SecurityCode: args.securityCode,
    Token: args.token,
    PIN: args.pin,
    SiteID: args.siteID,
    SitePass: args.sitePass,
    MemberID: args.memberID,
    SeqMode: args.seqMode,
    CardSeq: args.cardSeq,
    CardPass: args.cardPass,
    ClientField1: args.clientField1,
    ClientField2: args.clientField2,
    ClientField3: args.clientField3
  })

  const result = querystring.parse(res.data)

  return {
    acs: result.ACS,
    orderID: result.OrderID,
    forward: result.Forward,
    method: result.Method,
    payTimes: result.PayTimes,
    approve: result.Approve,
    tranID: result.TranID,
    tranDate: result.TranDate,
    checkString: result.CheckString,
    clientField1: result.ClientField1,
    clientField2: result.ClientField2,
    clientField3: result.ClientField3
  }
}

export interface IAlterTranArgs {
  shopID: string
  shopPass: string
  accessID: string
  accessPass: string
  jobCd: util.JobCd
  amount?: number
  method?: util.Method
}
export interface IAlterTranResult {
  accessID: string
  accessPass: string
  forward: string
  approve: string
  tranID: string
  tranDate: string
}

export async function alterTran(args: IAlterTranArgs): Promise<IAlterTranResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/AlterTran.idPass`, {
    ShopID: args.shopID,
    ShopPass: args.shopPass,
    AccessID: args.accessID,
    AccessPass: args.accessPass,
    JobCd: args.jobCd,
    Amount: args.amount,
    Method: args.method
  })

  const result = querystring.parse(res.data)

  return {
    accessID: result.AccessID,
    accessPass: result.AccessPass,
    forward: result.Forward,
    approve: result.Approve,
    tranID: result.TranID,
    tranDate: result.TranDate
  }
}

export interface ISearchTradeArgs {
  shopID: string
  shopPass: string
  orderID: string
}

export interface ISearchTradeResult {
  orderID: string
  status: string
  processDate: string
  jobCd: util.JobCd
  accessID: string
  accessPass: string
  itemCode: string
  amount: string
  tax: string
  siteID: string
  memberID: string
  cardNo: string
  expire: string
  method: util.Method
  payTimes: string
  forward: string
  tranID: string
  approve: string
  clientField1: string
  clientField2: string
  clientField3: string
  errCode: string
  errInfo: string
}

export async function searchTrade(args: ISearchTradeArgs): Promise<ISearchTradeResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/SearchTrade.idPass`, {
    ShopID: args.shopID,
    ShopPass: args.shopPass,
    OrderID: args.orderID
  })

  const result = querystring.parse(res.data)

  return {
    orderID: result.OrderID,
    status: result.Status,
    processDate: result.ProcessDate,
    jobCd: result.JobCd,
    accessID: result.AccessID,
    accessPass: result.AccessPass,
    itemCode: result.ItemCode,
    amount: result.Amount,
    tax: result.Tax,
    siteID: result.SiteID,
    memberID: result.MemberID,
    cardNo: result.CardNo,
    expire: result.Expire,
    method: result.Method,
    payTimes: result.PayTimes,
    forward: result.Forward,
    tranID: result.TranID,
    approve: result.Approve,
    clientField1: result.ClientField1,
    clientField2: result.ClientField2,
    clientField3: result.ClientField3,
    errCode: result.ErrCode,
    errInfo: result.ErrInfo
  }
}

export interface IChangeTranArgs {
  shopID: string
  shopPass: string
  accessID: string
  accessPass: string
  jobCd: util.JobCd
  amount: number
  tax?: string
}
export interface IChangeTranResult {
  accessID: string
  accessPass: string
  forward: string
  approve: string
  tranID: string
  tranDate: string
}

export async function changeTran(args: IChangeTranArgs): Promise<IChangeTranResult> {
  const res: AxiosResponse = await axios.post(`${process.env.GMOPG_ENDPOINT}/payment/ChangeTran.idPass`, {
    ShopID: args.shopID,
    ShopPass: args.shopPass,
    AccessID: args.accessID,
    AccessPass: args.accessPass,
    JobCd: args.jobCd,
    Amount: args.amount,
    Tax: args.tax
  })

  const result = querystring.parse(res.data)

  return {
    accessID: result.AccessID,
    accessPass: result.AccessPass,
    forward: result.Forward,
    approve: result.Approve,
    tranID: result.TranID,
    tranDate: result.TranDate
  }
}
