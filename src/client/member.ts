import { AxiosResponse } from 'axios'
import * as qs from 'querystring'
import Client, { ISiteArgs } from '../client'

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

export default class Member extends Client {
  public async save(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
    const res: AxiosResponse = await this.client.post('/payment/SaveMember.idPass', args)

    return qs.parse(res.data)
  }

  public async update(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
    const res: AxiosResponse = await this.client.post('/payment/UpdateMember.idPass', args)

    return qs.parse(res.data)
  }

  public async del(args: ISiteArgs): Promise<IDeleteMemberResult> {
    const res: AxiosResponse = await this.client.post('/payment/DeleteMember.idPass', args)

    return qs.parse(res.data)
  }

  public async search(args: ISiteArgs): Promise<ISearchMemberResult | null> {
    const res: AxiosResponse = await this.client.post('/payment/SearchMember.idPass', args)

    return qs.parse(res.data)
  }
}
