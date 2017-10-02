import { AxiosInstance } from 'axios'

export interface ISiteArgs {
  SiteID: string
  SitePass: string
  MemberID: string
}

export interface IShopArgs {
  ShopID: string
  ShopPass: string
}

export default class Client {
  public client: AxiosInstance
  constructor(client: AxiosInstance) {
    this.client = client
  }
}
