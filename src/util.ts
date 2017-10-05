import * as crypto from 'crypto'

export enum PayType {
  Cash = 'Z',
  Credit = '0',
  Suica = '1',
  Edy = '2',
  Cvs = '3',
}

export enum Method {
  Lump = '1',
  Installment = '2',
  BonusLump = '3',
  Revolving = '4',
  BonusInstallment = '5',
}

export enum Status {
  Unprocessed = 'UNPROCESSED',
  Authenticated = 'AUTHENTICATED',
  Check = 'CHECK',
  Capture = 'CAPTURE',
  Auth = 'AUTH',
  Sales = 'SALES',
  Void = 'VOID',
  Return = 'RETURN',
  Returnx = 'RETURNX',
  Sauth = 'SAUTH',
  Reqsuccess = 'REQSUCCESS',
  Paysuccess = 'PAYSUCCESS',
  Payfail = 'PAYFAIL',
  Expired = 'EXPIRED',
  Cancel = 'CANCEL',
}

export enum JobCd {
  Check = 'CHECK',
  Capture = 'CAPTURE',
  Auth = 'AUTH',
  Sales = 'SALES',
  Void = 'VOID',
  Return = 'RETURN',
  Returnx = 'RETURNX',
  Sauth = 'SAUTH',
}

export enum SeqMode {
  Logic = '0',
  Physics = '1',
}

export enum DefaultFlag {
  BillingObject = '0',
  NotSubjectToCharge = '1',
}

export interface ICreateShopPassStringArgs {
  shopId: string
  shopPass: string
  orderId: string
  amount: number
  dateTime: string
}

export function createShopPassString(args: ICreateShopPassStringArgs) {
  const md5hash = crypto.createHash('md5')
  md5hash.update(`${args.shopId}${args.orderId}${args.amount.toString()}${args.shopPass}${args.dateTime}`, 'utf8')
  return md5hash.digest('hex')
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name]
    })
  })
}
