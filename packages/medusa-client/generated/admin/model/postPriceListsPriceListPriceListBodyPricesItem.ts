/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */

export type PostPriceListsPriceListPriceListBodyPricesItem = {
  /** The id of the price. */
  id?: string
  /** The id of the Region for which the price is used. */
  region_id?: string
  /** The 3 character ISO currency code for which the price will be used. */
  currency_code?: string
  /** The amount to charge for the Product Variant. */
  amount?: number
  /** The minimum quantity for which the price will be used. */
  min_quantity?: number
  /** The maximum quantity for which the price will be used. */
  max_quantity?: number
}
