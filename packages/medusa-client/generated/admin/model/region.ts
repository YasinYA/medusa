/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { Country } from "./country"
import type { PaymentProvider } from "./paymentProvider"
import type { FulfillmentProvider } from "./fulfillmentProvider"
import type { RegionMetadata } from "./regionMetadata"

/**
 * Regions hold settings for how Customers in a given geographical location shop. The is, for example, where currencies and tax rates are defined. A Region can consist of multiple countries to accomodate common shopping settings across countries.
 */
export interface Region {
  /** The id of the Region. This value will be prefixed with `reg_`. */
  id?: string
  /** The name of the region as displayed to the customer. If the Region only has one country it is recommended to write the country name. */
  name?: string
  /** The 3 character ISO currency code that Customers will shop in in the Region. */
  currency_code?: string
  /** The tax rate that should be charged on purchases in the Region. */
  tax_rate?: number
  /** The tax code used on purchases in the Region. This may be used by other systems for accounting purposes. */
  tax_code?: string
  /** The countries that are included in the Region. */
  countries?: Country[]
  /** The Payment Providers that can be used to process Payments in the Region. */
  payment_providers?: PaymentProvider[]
  /** The Fulfillment Providers that can be used to fulfill orders in the Region. */
  fulfillment_providers?: FulfillmentProvider[]
  /** The date with timezone at which the resource was created. */
  created_at?: string
  /** The date with timezone at which the resource was last updated. */
  updated_at?: string
  /** The date with timezone at which the resource was deleted. */
  deleted_at?: string
  /** An optional key-value map with additional information. */
  metadata?: RegionMetadata
}
