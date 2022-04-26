/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */

/**
 * Optional details for the Return Shipping Method, if the items are to be sent back.
 */
export type PostOrdersOrderClaimsBodyReturnShipping = {
  /** The id of the Shipping Option to create the Shipping Method from. */
  option_id?: string
  /** The price to charge for the Shipping Method. */
  price?: number
}
