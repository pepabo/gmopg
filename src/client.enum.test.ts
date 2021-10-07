import test from 'ava'
import * as client from './client.enum'

test('exports PayType as enum', t => {
  const expect = {
    Cash: 'Z',
    Credit: '0',
    Suica: '1',
    Edy: '2',
    Cvs: '3',
    PayEasy: '4',
    NetiD: '6',
    Webmoney: '7',
    Au: '8',
    Docomo: '9',
    DocomoContinuance: '10',
    Sb: '11',
    AuContinuance: '13',
    JcbPreca: '14',
    Netcash: '16',
    BTC: '17',
    RakutenId: '18',
    Mcp: '19',
    Unionpay: '21',
    SbContinuance: '22',
    Virtualaccount: '23',
    Recruit: '24',
    RecruitContinuance: '25',
    DirectDebit: '28',
    PaidBuyer: '29',
    DocomoAccept: '31',
    AuAccept: '33',
    SbAccept: '34',
    Paysle: '35',
    Paypay: '45',
  }
  t.deepEqual(client.PayType, expect)
})

test('exports Method as enum', t => {
  const expect = {
    Lump: '1',
    Installment: '2',
    BonusLump: '3',
    Revolving: '4',
    BonusInstallment: '5',
  }
  t.deepEqual(client.Method, expect)
})

test('exports Status as enum', t => {
  const expect = {
    Unprocessed: 'UNPROCESSED',
    Authenticated: 'AUTHENTICATED',
    Check: 'CHECK',
    Capture: 'CAPTURE',
    Auth: 'AUTH',
    Sales: 'SALES',
    Void: 'VOID',
    Return: 'RETURN',
    Returnx: 'RETURNX',
    Sauth: 'SAUTH',
    Reqsuccess: 'REQSUCCESS',
    Paysuccess: 'PAYSUCCESS',
    Payfail: 'PAYFAIL',
    Expired: 'EXPIRED',
    Cancel: 'CANCEL',
    Authprocess: 'AUTHPROCESS',
    Reqsales: 'REQSALES',
    Reqpush: 'REQPUSH',
    Pushcancel: 'PUSHCANCEL',
    Pushexpired: 'PUSHEXPIRED',
    End: 'END',
    Register: 'REGISTER',
  }
  t.deepEqual(client.Status, expect)
})

test('exports JobCd as enum', t => {
  const expect = {
    Check: 'CHECK',
    Capture: 'CAPTURE',
    Auth: 'AUTH',
    Sales: 'SALES',
    Void: 'VOID',
    Return: 'RETURN',
    Returnx: 'RETURNX',
    Sauth: 'SAUTH',
    Cancel: 'CANCEL',
  }
  t.deepEqual(client.JobCd, expect)
})

test('exports SeqMode as enum', t => {
  const expect = {
    Logic: '0',
    Physics: '1',
  }
  t.deepEqual(client.SeqMode, expect)
})

test('exports DefaultFlag as enum', t => {
  const expect = {
    BillingObject: '0',
    NotSubjectToCharge: '1',
  }
  t.deepEqual(client.DefaultFlag, expect)
})

test('exports CvsCode as enum', t => {
  const expect = {
    _Lawson: '00001',
    _FamilyMart: '00002',
    _Sunkus: '00003',
    _CircleK: '00004',
    _MiniStop: '00005',
    _DailyYamazaki: '00006',
    _SeicoMart: '00008',
    Lawson: '10001',
    FamilyMart: '10002',
    Sunkus: '10003',
    CircleK: '10004',
    MiniStop: '10005',
    SevenEleven: '00007',
    SeicoMart: '10008',
  }
  t.deepEqual(client.CvsCode, expect)
})

test('exports AccountType as enum', t => {
  const expect = {
    Savings: '1',
    Checking: '2',
  }
  t.deepEqual(client.AccountType, expect)
})

test('exports AccountStatus as enum', t => {
  const expect = {
    Unused: 'UNUSED',
    Trading: 'TRADING',
    Transferred: 'TRANSFERRED',
    Expired: 'EXPIRED',
    Assigned: 'ASSIGNED',
  }
  t.deepEqual(client.AccountStatus, expect)
})

test('exports TransferStatus as enum', t => {
  const expect = {
    RelatedOnetime: 'RELATED_ONETIME',
    RelatedAssign: 'RELATED_ASSIGN',
    RelatedForce: 'RELATED_FORCE',
    Return: 'RETURN',
  }
  t.deepEqual(client.TransferStatus, expect)
})

test('exports PaymentType as enum', t => {
  const expect = {
    Accept: 1,
  }
  t.deepEqual(client.PaymentType, expect)
})
