import * as enums from './client.enum'
import WithMemberable from './client/memberable'
import WithCardable from './client/cardable'
import WithTranable from './client/tranable'
import WithCvsTranable from './client/cvsTranable'
import WithMultiTranable from './client/multiTranable'
import WithPaypayTranable from './client/paypayTranable'
import WithVirtualaccountTranable from './client/virtualaccountTranable'
import { generateID } from './util'
import Client from './client'

export default WithVirtualaccountTranable(
  WithPaypayTranable(WithCardable(WithCvsTranable(WithMemberable(WithMultiTranable(WithTranable(Client))))))
)

export function GENERATE_MEMBER_ID(key: string): string {
  return generateID(key).substring(0, 60)
}

export { enums as ENUMS }

export * from './config.type'
export * from './client.type'
export * from './client.enum'
export * from './client/memberable.type'
export * from './client/cardable.type'
export * from './client/tranable.type'
export * from './client/cvsTranable.type'
export * from './client/multiTranable.type'
export * from './client/paypayTranable.type'
export * from './client/virtualaccountTranable.type'
