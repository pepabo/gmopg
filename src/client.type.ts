export type SiteArgs = {
  SiteID?: string
  SitePass?: string
  MemberID?: string
}

export type ShopArgs = {
  ShopID?: string
  ShopPass?: string
}

export type Result = {
  ErrCode?: string
  ErrInfo?: string
}

export type UnknownParams = {
  [key: string]: qs.UnknownFacade
}
