/**
 * Initial errors (total: 1688 https://github.com/pepabo/gmopg/blob/38d449841513096b40efbfc9c0a89dc8419e382f/src/errors.ts#L20) were added by user: linyows, with Japanese messages
 * We translated them to English with google-translate
 * The error ranges: E00000000-EX1000304, 42C010000-42G990000, M01330001-M01334011, AC2000001-AC2000004 (total: 283) were later added or updated by user: caub, with Japanese and English messages provided by gmo-pg engineers
 */
const errorDefinition: {[key: string]: {ja: string, en: string}} = require('../error-codes.json');

export class BadRequest extends Error {
  public errors: {ja: string, en: string}[]
  public errInfo: string[]
  public response: any

  constructor(message?: string) {
    super(message)
    this.name = this.constructor.name
    // Capture stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor)
  }

  public setResponse(obj: any): BadRequest {
    this.response = obj
    return this
  }

  public parseError(obj: any): BadRequest {
    this.errInfo = [...new Set<string>(obj.ErrInfo.split('|'))]
    this.errors = this.errInfo.map((code) => errorDefinition[code])
    return this
  }

  public toString(): string {
    return `${this.name}: ${this.message}`
  }
}
