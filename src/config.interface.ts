import {AxiosRequestConfig} from 'axios'

export interface IConfig {
  axios?: AxiosRequestConfig
  SiteID?: string
  SitePass?: string
  ShopID?: string
  ShopPass?: string
}
