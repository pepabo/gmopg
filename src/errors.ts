/**
 * errors messages in error-codes.json were provided by gmo-pg engineers
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
