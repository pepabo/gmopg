export interface ISiteArgs {
  SiteID: string
  SitePass: string
  MemberID: string
}

export interface IShopArgs {
  ShopID: string
  ShopPass: string
}

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
