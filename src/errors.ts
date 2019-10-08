const errorDefinition: {[key: string]: {jp: string, en: string}} = require('./error-codes.json');

export class BadRequest extends Error {
  public errors: {jp: string, en: string}[]
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
    this.errInfo = obj.ErrInfo.split('|')
    this.errors = this.errInfo.map((code) => errorDefinition[code])
    return this
  }

  public toString(): string {
    return `${this.name}: ${this.message}`
  }
}
