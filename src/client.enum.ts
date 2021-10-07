export enum PayType {
  Cash = 'Z',
  Credit = '0',
  Suica = '1',
  Edy = '2',
  Cvs = '3',
  PayEasy = '4',
  NetiD = '6',
  Webmoney = '7',
  Au = '8',
  Docomo = '9',
  DocomoContinuance = '10',
  Sb = '11',
  AuContinuance = '13',
  JcbPreca = '14',
  Netcash = '16',
  BTC = '17',
  RakutenId = '18',
  Mcp = '19',
  Unionpay = '21',
  SbContinuance = '22',
  Virtualaccount = '23',
  Recruit = '24',
  RecruitContinuance = '25',
  DirectDebit = '28',
  PaidBuyer = '29',
  DocomoAccept = '31',
  AuAccept = '33',
  SbAccept = '34',
  Paysle = '35',
  Paypay = '45',
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
  Authprocess = 'AUTHPROCESS',
  Reqsales = 'REQSALES',
  Reqpush = 'REQPUSH',
  Pushcancel = 'PUSHCANCEL',
  Pushexpired = 'PUSHEXPIRED',
  End = 'END',
  Register = 'REGISTER',
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
  Cancel = 'CANCEL',
}

export enum SeqMode {
  Logic = '0',
  Physics = '1',
}

export enum DefaultFlag {
  BillingObject = '0',
  NotSubjectToCharge = '1',
}

export enum CvsCode {
  _Lawson = '00001',
  _FamilyMart = '00002',
  _Sunkus = '00003',
  _CircleK = '00004',
  _MiniStop = '00005',
  _DailyYamazaki = '00006',
  _SeicoMart = '00008',
  Lawson = '10001',
  FamilyMart = '10002',
  Sunkus = '10003',
  CircleK = '10004',
  MiniStop = '10005',
  SevenEleven = '00007',
  SeicoMart = '10008',
}

export enum AccountType {
  Savings = '1',
  Checking = '2',
}

export enum AccountStatus {
  Unused = 'UNUSED',
  Trading = 'TRADING',
  Transferred = 'TRANSFERRED',
  Expired = 'EXPIRED',
  Assigned = 'ASSIGNED',
}

export enum TransferStatus {
  RelatedOnetime = 'RELATED_ONETIME',
  RelatedAssign = 'RELATED_ASSIGN',
  RelatedForce = 'RELATED_FORCE',
  Return = 'RETURN',
}

export enum PaymentType {
  Accept = 1,
}
