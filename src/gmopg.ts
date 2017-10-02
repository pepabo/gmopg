import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import * as merge from 'deepmerge'
import Member from './client/member'
import Card from './client/card'
import Tran from './client/tran'
import Config, { TConfig } from './config'
import { defaults } from './defaults'

export default class GMOPG {
  public config: TConfig
  private axiosConfig: AxiosRequestConfig = {}
  private client: AxiosInstance

  constructor(config: TConfig) {
    this.config = config
    const configByEnv: TConfig = Config.buildByEnv()

    if (configByEnv !== {}) {
      this.config = merge(config, configByEnv)
    }

    this.axiosConfig.baseURL = this.config.endpoint || defaults.endpoint
    this.axiosConfig.timeout = this.config.timeout || defaults.timeout
    this.axiosConfig.headers = this.config.headers || defaults.headers
    this.client = axios.create(this.axiosConfig)
  }

  set endpoint(arg: string) {
    this.client.defaults.baseURL = arg
    this.refleshClient()
  }

  set headers(arg: object) {
    this.client.defaults.headers = arg
    this.refleshClient()
  }

  set timeout(arg: number) {
    this.client.defaults.timeout = arg
    this.refleshClient()
  }

  private memberIns: Member
  private cardIns: Card
  private tranIns: Tran

  get member(): Member {
    if (this.memberIns) {
      this.memberIns = new Member(this.client)
    }
    return this.memberIns
  }

  get card(): Card {
    if (this.cardIns) {
      this.cardIns = new Card(this.client)
    }
    return this.cardIns
  }

  get tran(): Tran {
    if (this.tranIns) {
      this.tranIns = new Tran(this.client)
    }
    return this.tranIns
  }

  private refleshClient() {
    this.memberIns.client = this.client
    this.cardIns.client = this.client
    this.tranIns.client = this.client
  }
}
