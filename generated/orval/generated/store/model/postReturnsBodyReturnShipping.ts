/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */

/**
 * If the Return is to be handled by the store operator the Customer can choose a Return Shipping Method. Alternatvely the Customer can handle the Return themselves.
 */
export type PostReturnsBodyReturnShipping = {
  /** The id of the Shipping Option to create the Shipping Method from. */
  option_id: string;
};
