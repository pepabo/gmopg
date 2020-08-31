import * as qs from 'qs'
import fetch, {Response} from 'node-fetch';
import {BadRequest} from './errors'
import {Config} from './config.type'
import {buildByEnv, defaults} from './config'
import {UnknownParams} from './client.type'

export default class Client {
  public config: Config

  constructor(config: Config = {}) {
    this.config = {
      ...defaults,
      ...config,
      ...buildByEnv(),
      http: {
        ...defaults.http,
        ...config.http,
        ...buildByEnv().http
      }
    }
  }

  public async post<T, U>(pathname: string, data: T): Promise<U> {
    const res: Response = await fetch(this.config.baseUrl + pathname, {
      method: 'POST',
      body: qs.stringify(data, {encode: false}),
      ...this.config.http,
    })

    const parsed: any = qs.parse(await res.text(), {decoder: decodeURIComponent})

    if (!res.ok || this.isError(parsed)) {
      throw new BadRequest(`Bad Request: ${pathname}`).
        setResponse(res).parseError(parsed)
    }

    return parsed as U
  }

  public isError(res: UnknownParams): boolean {
    return !(res !== undefined && res.ErrCode === undefined)
  }
}
