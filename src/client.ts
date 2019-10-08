import * as qs from 'qs'
import * as merge from 'deepmerge'
import fetch, {Response} from 'node-fetch';
import {BadRequest} from './errors'
import {IConfig} from './config.interface'
import {buildByEnv, defaults} from './config'


export default class Client {
  public config: IConfig

  constructor(config: IConfig = {}) {
    this.config = merge(merge(defaults, config), buildByEnv())
  }

  public async post(pathname: string, data: any): Promise<any> {
    const res: Response = await fetch(this.config.baseUrl + pathname, {
      method: 'POST',
      body: qs.stringify(data, {encode: false}),
      ...this.config.http,
    })

    const parsed: any = qs.parse(await res.text());

    if (!res.ok || this.isError(parsed)) {
      throw new BadRequest(`Bad Request: ${pathname}`).
        setResponse(res).parseError(parsed)
    }

    return parsed
  }

  public isError(res: any): boolean {
    return !(res !== undefined && res.ErrCode === undefined)
  }
}
