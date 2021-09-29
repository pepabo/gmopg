import Client from '../client'
import { Constructor } from '../util'
import {
  EntryTranPaypayArgs,
  EntryTranPaypayResult,
  ExecTranPaypayArgs,
  ExecTranPaypayResult,
  PaypayCancelReturnArgs,
  PaypayCancelReturnResult,
  PaypaySalesArgs,
  PaypaySalesResult,
} from './paypayTranable.type'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default <T extends Constructor<Client>>(Base: T) =>
  class extends Base {
    public async entryTranPaypay(args: EntryTranPaypayArgs): Promise<EntryTranPaypayResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        OrderID: undefined,
        JobCd: undefined,
        Amount: undefined,
      }
      return this.post<EntryTranPaypayArgs, EntryTranPaypayResult>('/payment/EntryTranPaypay.idPass', {
        ...defaultData,
        ...args,
      })
    }

    public async execTranPaypay(args: ExecTranPaypayArgs): Promise<ExecTranPaypayResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        OrderID: undefined,
        RetURL: undefined,
      }
      return this.post<ExecTranPaypayArgs, ExecTranPaypayResult>('/payment/ExecTranPaypay.idPass', {
        ...defaultData,
        ...args,
      })
    }

    public async paypaySales(args: PaypaySalesArgs): Promise<PaypaySalesResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        OrderID: undefined,
        Amount: undefined,
      }
      return this.post<PaypaySalesArgs, PaypaySalesResult>('/payment/PaypaySales.idPass', {
        ...defaultData,
        ...args,
      })
    }

    public async paypayCancelReturn(args: PaypayCancelReturnArgs): Promise<PaypayCancelReturnResult> {
      const defaultData = {
        ShopID: this.config.ShopID,
        ShopPass: this.config.ShopPass,
        AccessID: undefined,
        AccessPass: undefined,
        OrderID: undefined,
        CancelAmount: undefined,
        CancelTax: undefined,
      }
      return this.post<PaypayCancelReturnArgs, PaypayCancelReturnResult>('/payment/PaypayCancelReturn.idPass', {
        ...defaultData,
        ...args,
      })
    }
  }