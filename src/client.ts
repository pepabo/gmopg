import {AxiosInstance, AxiosResponse} from 'axios'
import {BadRequest} from './errors'
import * as qs from 'querystring'

export default class Client {
  public client: AxiosInstance
  public options: object = {}

  public async post(endpoint: string, data: any): Promise<any> {
    const res: AxiosResponse = await this.client.post(endpoint, data, this.options)
    const parsed: any = qs.parse(res.data)

    if (this.isError(parsed)) {
      const req = {
        endpoint: endpoint,
        data: data
      }
      throw new BadRequest(`Bad Request: ${endpoint}`).
        setRequest(req).setResponse(res).parseError(parsed)
    }

    return parsed
  }

  public isError(res: any): boolean {
    return !(res !== undefined && res.ErrCode === undefined)
  }
}
