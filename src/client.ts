import {BadRequest} from './errors'

export default class Client {
  public errorHandler(obj: any): void {
    if (obj !== undefined && obj.ErrCode === undefined) {
      return
    }
    throw new BadRequest('Error: Bad Request').parseError(obj)
  }
}
