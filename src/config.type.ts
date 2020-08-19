import {RequestInit} from 'node-fetch'

export type Config = {
  baseUrl?: string
  http?: RequestInit
  SiteID?: string
  SitePass?: string
  ShopID?: string
  ShopPass?: string
}
