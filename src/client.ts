import Axios, {AxiosInstance, AxiosResponse} from 'axios'
import {BadRequest} from './errors'
import {IConfig} from './config.interface'
import {buildByEnv, defaults} from './config'
import * as qs from 'qs'
import * as merge from 'deepmerge'

export default class Client {
  public client: AxiosInstance
  public config: IConfig

  constructor(config: IConfig = {}) {
    this.config = merge(merge(defaults, config), buildByEnv())
    this.client = Axios.create(this.config.axios)
  }

  public async post(endpoint: string, data: any): Promise<any> {
    const res: AxiosResponse = await this.client.post(endpoint, qs.stringify(data, {encode: false}), this.config.axios)
    const parsed: any = qs.parse(res.data)

    if (this.isError(parsed)) {
      throw new BadRequest(`Bad Request: ${endpoint}`).
        setResponse(res).parseError(parsed)
    }

    return parsed
  }

  public isError(res: any): boolean {
    return !(res !== undefined && res.ErrCode === undefined)
  }
}
