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

export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public defaultMemberData(): any {
      const { SiteID, SitePass } = this.config

      return {
        SiteID,
        SitePass,
        MemberID: undefined,
      }
    }

    public async saveMember(args: SaveMemberArgs): Promise<SaveMemberResult> {
      const data: SaveMemberArgs = merge(this.defaultMemberData(), args)
      const parsed: any = await this.post('/payment/SaveMember.idPass', data)

      return <SaveMemberResult>parsed
    }

    public async updateMember(
      args: UpdateMemberArgs
    ): Promise<UpdateMemberResult> {
      const data: UpdateMemberArgs = merge(this.defaultMemberData(), args)
      const parsed: any = await this.post('/payment/UpdateMember.idPass', data)

      return <UpdateMemberResult>parsed
    }

    public async deleteMember(
      args: DeleteMemberArgs
    ): Promise<DeleteMemberResult> {
      const data: DeleteMemberArgs = merge(this.defaultMemberData(), args)
      const parsed: any = await this.post('/payment/DeleteMember.idPass', data)

      return <DeleteMemberResult>parsed
    }

    public async searchMember(
      args: SearchMemberArgs
    ): Promise<SearchMemberResult | null> {
      const data: SearchMemberArgs = merge(this.defaultMemberData(), args)
      const parsed: any = await this.post('/payment/SearchMember.idPass', data)

      return <SearchMemberResult>parsed
    }
  }
