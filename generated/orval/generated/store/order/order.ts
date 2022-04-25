/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type {
  GetOrdersOrderCartId200,
  GetOrdersOrder200,
  GetOrders200,
  GetOrdersParams
} from '.././model'
import { customInstance } from '../../../src/custom-instance'


  /**
 * Retrieves an Order by the id of the Cart that was used to create the Order.
 * @summary Retrieves Order by Cart id
 */
export const getOrdersOrderCartId = (
    cartId: string,
 ) => {
      return customInstance<GetOrdersOrderCartId200>(
      {url: `/orders/cart/${cartId}`, method: 'get'
    },
      );
    }
  /**
 * Retrieves an Order
 * @summary Retrieves an Order
 */
export const getOrdersOrder = (
    id: string,
 ) => {
      return customInstance<GetOrdersOrder200>(
      {url: `/orders/${id}`, method: 'get'
    },
      );
    }
  /**
 * Looks for an Order with a given `display_id`, `email` pair. The `display_id`, `email` pair must match in order for the Order to be returned.
 * @summary Look Up an Order
 */
export const getOrders = (
    params?: GetOrdersParams,
 ) => {
      return customInstance<GetOrders200>(
      {url: `/orders`, method: 'get',
        params,
    },
      );
    }
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;

export type GetOrdersOrderCartIdResult = NonNullable<AsyncReturnType<typeof getOrdersOrderCartId>>
export type GetOrdersOrderResult = NonNullable<AsyncReturnType<typeof getOrdersOrder>>
export type GetOrdersResult = NonNullable<AsyncReturnType<typeof getOrders>>