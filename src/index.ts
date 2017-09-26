import * as m from './client/member'
import * as c from './client/card'
import * as t from './client/tran'
import * as u from './util'

export import saveMember = m.saveMember
export import updateMember = m.updateMember
export import deleteMember = m.deleteMember
export import searchMember = m.searchMember

export import saveCard = c.saveCard
export import deleteCard = c.deleteCard
export import searchCard = c.searchCard

export import entryTran = t.entryTran
export import execTran = t.execTran
export import alterTran = t.alterTran
export import searchTrade = t.searchTrade
export import changeTran = t.changeTran

export import util = u

export interface IConfigArgs {
  endpoint: string
  siteID: string
  sitePass: string
  shopID: string
}

export interface IConfigResult {
  endpoint: string
  siteID: string
  sitePass: string
  shopID: string
}

var siteID: string
var sitePass: string
var shopID: string
var endpoint: string = 'https://pt01.mul-pay.jp'

export function config(): IConfigResult {
  return {
    endpoint: endpoint,
    siteID: siteID,
    sitePass: sitePass,
    shopID: shopID,
  }
}

export function setConfig(args: IConfigArgs): IConfigResult {
  if (args.endpoint) {
    endpoint = args.endpoint
  }
  if (args.siteID) {
    siteID = args.siteID
  }
  if (args.sitePass) {
    sitePass = args.sitePass
  }
  if (args.shopID) {
    shopID = args.shopID
  }
  return config()
}
