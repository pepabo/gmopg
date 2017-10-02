export interface IDefaults {
  timeout: number
  endpoint: string
  headers: object
}

export const defaults: IDefaults = {
  timeout: 3*60*1000,
  endpoint: 'https://pt01.mul-pay.jp',
  headers: {
    'user-agent': 'GMO PG Client: Unofficial',
    'content-length': '0',
  }
}
