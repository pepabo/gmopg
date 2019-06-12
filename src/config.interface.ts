import {RequestInit} from 'node-fetch'

export interface IConfig {
  baseUrl?: string
  http?: RequestInit
  SiteID?: string
  SitePass?: string
  ShopID?: string
  ShopPass?: string
}
