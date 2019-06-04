import * as merge from 'deepmerge'
import Client from '../client'
import {Constructor} from '../util'
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

export default <T extends Constructor<Client>>(Base: T) => class extends Base {
  public defaultMemberData(): any {
    const {SiteID, SitePass} = this.config

    return {
      SiteID,
      SitePass,
      MemberID: undefined
    }
  }

  public async saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
    const data: ISaveMemberArgs = merge(this.defaultMemberData(), args)
    const parsed: any = await this.post('/payment/SaveMember.idPass', data)

    return <ISaveMemberResult>parsed
  }

  public async updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
    const data: IUpdateMemberArgs = merge(this.defaultMemberData(), args)
    const parsed: any = await this.post('/payment/UpdateMember.idPass', data)

    return <IUpdateMemberResult>parsed
  }

  public async deleteMember(args: IDeleteMemberArgs): Promise<IDeleteMemberResult> {
    const data: IDeleteMemberArgs = merge(this.defaultMemberData(), args)
    const parsed: any = await this.post('/payment/DeleteMember.idPass', data)

    return <IDeleteMemberResult>parsed
  }

  public async searchMember(args: ISearchMemberArgs): Promise<ISearchMemberResult | null> {
    const data: ISearchMemberArgs = merge(this.defaultMemberData(), args)
    const parsed: any = await this.post('/payment/SearchMember.idPass', data)

    return <ISearchMemberResult>parsed
  }
}
