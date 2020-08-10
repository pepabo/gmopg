import * as qs from 'qs'
import * as merge from 'deepmerge'
import fetch, {Response} from 'node-fetch';
import {BadRequest} from './errors'
import {IConfig} from './config.interface'
import {buildByEnv, defaults} from './config'
import {UnknownParams} from './client.interface'

export default class Client {
  public config: IConfig

  constructor(config: IConfig = {}) {
    this.config = merge(merge(defaults, config), buildByEnv())
  }

  public async post<T, U>(pathname: string, data: T): Promise<U> {
    const res: Response = await fetch(this.config.baseUrl + pathname, {
      method: 'POST',
      body: qs.stringify(data, {encode: false}),
      ...this.config.http,
    })

    const parsed = qs.parse(await res.text(), {decoder: decodeURIComponent})

    if (!res.ok || this.isError(parsed)) {
      throw new BadRequest(`Bad Request: ${pathname}`).
        setResponse(res).parseError(parsed)
    }

    return parsed as any as U
  }

  public isError(res: UnknownParams): boolean {
    return !(res !== undefined && res.ErrCode === undefined)
  }
}
