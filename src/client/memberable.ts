import * as merge from 'deepmerge'
import Client from '../client'
import { Constructor } from '../util'
import {
  DeleteMemberArgs,
  DeleteMemberResult,
  SaveMemberArgs,
  SaveMemberResult,
  SearchMemberArgs,
  SearchMemberResult,
  UpdateMemberArgs,
  UpdateMemberResult,
} from './memberable.interface'
import { SiteArgs } from '../client.interface'

export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public defaultMemberData(): SiteArgs {
      const { SiteID, SitePass } = this.config

      return {
        SiteID,
        SitePass,
        MemberID: undefined,
      }
    }

    public async saveMember(args: SaveMemberArgs): Promise<SaveMemberResult> {
      const data = merge(this.defaultMemberData(), args)
      return this.post<SaveMemberArgs, SaveMemberResult>('/payment/SaveMember.idPass', data)
    }

    public async updateMember(args: UpdateMemberArgs): Promise<UpdateMemberResult> {
      const data = merge(this.defaultMemberData(), args)
      return this.post<UpdateMemberArgs, UpdateMemberResult>('/payment/UpdateMember.idPass', data)
    }

    public async deleteMember(args: DeleteMemberArgs): Promise<DeleteMemberResult> {
      const data = merge(this.defaultMemberData(), args)
      return this.post<DeleteMemberArgs, DeleteMemberResult>('/payment/DeleteMember.idPass', data)
    }

    public async searchMember(args: SearchMemberArgs): Promise<SearchMemberResult | null> {
      const data = merge(this.defaultMemberData(), args)
      return this.post<SearchMemberArgs, SearchMemberResult>('/payment/SearchMember.idPass', data)
    }
  }
