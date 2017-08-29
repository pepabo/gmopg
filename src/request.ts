import * as querystring from 'querystring'

export class BadRequestError extends Error {
  public errors: IError[]

  constructor(message?: string) {
      super(message)
      this.name = 'GMOServiceBadRequestError'
      this.errors = this.parseErrorMessage()
  }
                      private parseErrorMessage(): IError[] {
      // 継承元のErrorでmessageはstringに変換される
      if (this.message.length === 0) {
          return []
      }
      const errorMessage = querystring.parse(this.message)
      const codeArray: string[] = errorMessage.ErrCode.split('|')
      const infoArray: string[] = errorMessage.ErrInfo.split('|')

      return codeArray.map((value, index) => {
          const code = value
          const info = infoArray[index]
          const error = errors.list.find((data: IError) => {
              return (data.code === code && data.info === info)
          })
          if (error === undefined) {
              return {
                  errorNumber: '',
                  code: code,
                  info: info,
                  state: '',
                  billing: '',
                  content: notApplicable.content,
                  userMessage: notApplicable.userMessage
              }
          }

          return error
      })
  }
}

export interface IError {
  errorNumber: string
  code: string
  info: string
  state: string
  billing: string
  content: string
  userMessage: string
}
