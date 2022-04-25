/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The status of the Fulfillment of the Swap.
 */
export type SwapFulfillmentStatus = 'not_fulfilled' | 'partially_fulfilled' | 'fulfilled' | 'partially_shipped' | 'shipped' | 'partially_returned' | 'returned' | 'canceled' | 'requires_action';


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SwapFulfillmentStatus = {
  not_fulfilled: 'not_fulfilled' as SwapFulfillmentStatus,
  partially_fulfilled: 'partially_fulfilled' as SwapFulfillmentStatus,
  fulfilled: 'fulfilled' as SwapFulfillmentStatus,
  partially_shipped: 'partially_shipped' as SwapFulfillmentStatus,
  shipped: 'shipped' as SwapFulfillmentStatus,
  partially_returned: 'partially_returned' as SwapFulfillmentStatus,
  returned: 'returned' as SwapFulfillmentStatus,
  canceled: 'canceled' as SwapFulfillmentStatus,
  requires_action: 'requires_action' as SwapFulfillmentStatus,
};
