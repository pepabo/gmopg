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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
      return this.post<SaveMemberArgs, SaveMemberResult>('/payment/SaveMember.idPass', {
        ...this.defaultMemberData(),
        ...args,
      })
    }

    public async updateMember(args: UpdateMemberArgs): Promise<UpdateMemberResult> {
      return this.post<UpdateMemberArgs, UpdateMemberResult>('/payment/UpdateMember.idPass', {
        ...this.defaultMemberData(),
        ...args,
      })
    }

    public async deleteMember(args: DeleteMemberArgs): Promise<DeleteMemberResult> {
      return this.post<DeleteMemberArgs, DeleteMemberResult>('/payment/DeleteMember.idPass', {
        ...this.defaultMemberData(),
        ...args,
      })
    }

    public async searchMember(args: SearchMemberArgs): Promise<SearchMemberResult | null> {
      return this.post<SearchMemberArgs, SearchMemberResult>('/payment/SearchMember.idPass', {
        ...this.defaultMemberData(),
        ...args,
      })
    }
  }
