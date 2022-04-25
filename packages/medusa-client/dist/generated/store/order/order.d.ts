/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { GetOrdersOrderCartId200, GetOrdersOrder200, GetOrders200, GetOrdersParams } from '.././model';
/**
* Retrieves an Order by the id of the Cart that was used to create the Order.
* @summary Retrieves Order by Cart id
*/
export declare const getOrdersOrderCartId: (cartId: string) => Promise<GetOrdersOrderCartId200>;
/**
* Retrieves an Order
* @summary Retrieves an Order
*/
export declare const getOrdersOrder: (id: string) => Promise<GetOrdersOrder200>;
/**
* Looks for an Order with a given `display_id`, `email` pair. The `display_id`, `email` pair must match in order for the Order to be returned.
* @summary Look Up an Order
*/
export declare const getOrders: (params?: GetOrdersParams | undefined) => Promise<GetOrders200>;
declare type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
export declare type GetOrdersOrderCartIdResult = NonNullable<AsyncReturnType<typeof getOrdersOrderCartId>>;
export declare type GetOrdersOrderResult = NonNullable<AsyncReturnType<typeof getOrdersOrder>>;
export declare type GetOrdersResult = NonNullable<AsyncReturnType<typeof getOrders>>;
export {};
