export class BadRequest extends Error {
  public errors: string[]

  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
  }

  public parseError(obj: any): BadRequest {
    this.errors = obj.ErrInfo.split('|')
    return this
  }

  public toString(): string {
    return `${this.name}: ${this.message}`
  }
}
