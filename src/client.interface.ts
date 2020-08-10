export interface SiteArgs {
  SiteID?: string
  SitePass?: string
  MemberID?: string
}

export interface ShopArgs {
  ShopID?: string
  ShopPass?: string
}

export interface Result {
  ErrCode?: string
  ErrInfo?: string
}

export type UnknownParams = {
  [key: string]: qs.UnknownFacade
}