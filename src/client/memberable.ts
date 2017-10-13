import {AxiosInstance, AxiosResponse} from 'axios'
import * as merge from 'deepmerge'
import * as qs from 'querystring'
import {ISiteArgs} from '../client.interface'
import {TConfig} from '../config'
import {
  IDeleteMemberResult,
  ISaveMemberArgs,
  ISaveMemberResult,
  ISearchMemberResult,
  IUpdateMemberArgs,
  IUpdateMemberResult
} from './memberable.interface'

export default class Memberable {
  public config: TConfig
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

    return qs.parse(res.data)
  }

  public async updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
    const data: IUpdateMemberArgs = merge(this.defaultMemberData(), args)
    const res: AxiosResponse = await this.client.post('/payment/UpdateMember.idPass', data, this.options)

    return qs.parse(res.data)
  }

  public async deleteMember(args: ISiteArgs): Promise<IDeleteMemberResult> {
    const data: ISiteArgs = merge(this.defaultMemberData(), args)
    const res: AxiosResponse = await this.client.post('/payment/DeleteMember.idPass', data, this.options)

    return qs.parse(res.data)
  }

  public async searchMember(args: ISiteArgs): Promise<ISearchMemberResult | null> {
    const data: ISiteArgs = merge(this.defaultMemberData(), args)
    const res: AxiosResponse = await this.client.post('/payment/SearchMember.idPass', data, this.options)

    return qs.parse(res.data)
  }
}
