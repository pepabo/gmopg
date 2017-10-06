import {AxiosInstance, AxiosResponse} from 'axios'
import {createHash} from 'crypto'
import * as merge from 'deepmerge'
import * as qs from 'querystring'
import {ISiteArgs} from '../client'
import {TConfig} from '../config'

export interface ISaveMemberArgs extends ISiteArgs {
  MemberName?: string
}

export interface ISaveMemberResult {
  MemberID: string
}

export interface IUpdateMemberArgs extends ISiteArgs {
  MemberName?: string
}

export interface IUpdateMemberResult {
  MemberID: string
}

export interface IDeleteMemberResult {
  MemberID: string
}

export interface ISearchMemberResult {
  MemberID: string
  MemberName: string
  DeleteFlag: string
}

export default class Memberable {
  public config: TConfig
  public client: AxiosInstance

  public async saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
    const data: ISaveMemberArgs = merge(
    {
      SiteID: this.config.SiteID,
      SitePass: this.config.SiteID,
      MemberID: undefined
    },
    args)
    const res: AxiosResponse = await this.client.post('/payment/SaveMember.idPass', data)

    return qs.parse(res.data)
  }

  public async updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
    const data: IUpdateMemberArgs = merge(
    {
      SiteID: this.config.SiteID,
      SitePass: this.config.SiteID,
      MemberID: undefined
    },
    args)
    const res: AxiosResponse = await this.client.post('/payment/UpdateMember.idPass', data)

    return qs.parse(res.data)
  }

  public async deleteMember(args: ISiteArgs): Promise<IDeleteMemberResult> {
    const data: ISiteArgs = merge(
    {
      SiteID: this.config.SiteID,
      SitePass: this.config.SiteID,
      MemberID: undefined
    },
    args)
    const res: AxiosResponse = await this.client.post('/payment/DeleteMember.idPass', data)

    return qs.parse(res.data)
  }

  public async searchMember(args: ISiteArgs): Promise<ISearchMemberResult | null> {
    const data: ISiteArgs = merge(
    {
      SiteID: this.config.SiteID,
      SitePass: this.config.SiteID,
      MemberID: undefined
    },
    args)
    const res: AxiosResponse = await this.client.post('/payment/SearchMember.idPass', data)

    return qs.parse(res.data)
  }

  public generateMemberID(key: string): string {
    const suffix: string = createHash('md5').update(`${key}-${new Date().toISOString()}`).digest('hex')
    return `${key}-${suffix}`
  }
}
