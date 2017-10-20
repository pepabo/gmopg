import {AxiosInstance, AxiosResponse} from 'axios'
import * as merge from 'deepmerge'
import * as qs from 'querystring'
import Client from '../client'
import {IConfig} from '../config'
import {
  IDeleteMemberArgs,
  IDeleteMemberResult,
  ISaveMemberArgs,
  ISaveMemberResult,
  ISearchMemberArgs,
  ISearchMemberResult,
  IUpdateMemberArgs,
  IUpdateMemberResult
} from './memberable.interface'

export default class Memberable extends Client {
  public name: string = 'Memberable'
  public config: IConfig
  public client: AxiosInstance
  public options: object = {}

  public defaultMemberData(): any {
    let siteID
    let sitePass

    if (this.config !== undefined) {
      siteID = this.config.SiteID
      sitePass = this.config.SitePass
    }

    return {
      SiteID: siteID,
      SitePass: sitePass,
      MemberID: undefined
    }
  }

  public async saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
    const data: ISaveMemberArgs = merge(this.defaultMemberData(), args)
    const res: AxiosResponse = await this.client.post('/payment/SaveMember.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)
    const result: ISaveMemberResult = <ISaveMemberResult> parsed
    this.errorHandler(result)

    return result
  }

  public async updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
    const data: IUpdateMemberArgs = merge(this.defaultMemberData(), args)
    const res: AxiosResponse = await this.client.post('/payment/UpdateMember.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)
    const result: IUpdateMemberResult = <IUpdateMemberResult> parsed
    this.errorHandler(result)

    return result
  }

  public async deleteMember(args: IDeleteMemberArgs): Promise<IDeleteMemberResult> {
    const data: IDeleteMemberArgs = merge(this.defaultMemberData(), args)
    const res: AxiosResponse = await this.client.post('/payment/DeleteMember.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)
    const result: IDeleteMemberResult = <IDeleteMemberResult> parsed
    this.errorHandler(result)

    return result
  }

  public async searchMember(args: ISearchMemberArgs): Promise<ISearchMemberResult | null> {
    const data: ISearchMemberArgs = merge(this.defaultMemberData(), args)
    const res: AxiosResponse = await this.client.post('/payment/SearchMember.idPass', data, this.options)
    const parsed: any = qs.parse(res.data)
    const result: ISearchMemberResult = <ISearchMemberResult> parsed
    this.errorHandler(result)

    return result
  }
}
