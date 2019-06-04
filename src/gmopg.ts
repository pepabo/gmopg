import * as enums from './client.enum'
import WithMemberable from './client/memberable'
import WithCardable from './client/cardable'
import WithTranable from './client/tranable'
import WithCvsTranable from './client/cvsTranable'
import WithMultiTranable from './client/multiTranable'
import {generateID} from './util'
import Client from './client'

export default WithCardable(WithCvsTranable(WithMemberable(WithMultiTranable(WithTranable(Client)))))

export function GENERATE_MEMBER_ID(key: string): string {
  return generateID(key).substring(0, 60)
}

export {enums as ENUMS}

export * from './config.interface'
export * from './client.interface'
export * from './client.enum'
export * from './client/memberable.interface'
export * from './client/cardable.interface'
export * from './client/tranable.interface'
export * from './client/cvsTranable.interface'
export * from './client/multiTranable.interface'
