import * as fs from 'fs'
const errorDefinition: { [key: string]: string } = JSON.parse(fs.readFileSync('./error-codes.json', 'utf-8'))

export class BadRequest extends Error {
  public errors: string[]
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
    this.errors = this.errInfo.map(code => errorDefinition[code])
    return this
  }

  public toString(): string {
    return `${this.name}: ${this.message}`
  }
}
