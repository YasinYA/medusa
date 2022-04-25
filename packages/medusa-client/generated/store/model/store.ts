/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { Currency } from './currency';
import type { StoreMetadata } from './storeMetadata';

/**
 * Holds settings for the Store, such as name, currencies, etc.
 */
export interface Store {
  /** The id of the Store. This value will be prefixed with `store_`. */
  id?: string;
  /** The name of the Store - this may be displayed to the Customer. */
  name?: string;
  /** The default currency code used when no other currency code is specified. */
  default_currency_code?: string;
  /** The currencies that are enabled for the Store. */
  currencies?: Currency[];
  /** A template to generate Swap links from use {{cart_id}} to include the Swap's `cart_id` in the link. */
  swap_link_template?: string;
  /** The date with timezone at which the resource was created. */
  created_at?: string;
  /** The date with timezone at which the resource was last updated. */
  updated_at?: string;
  /** An optional key-value map with additional information. */
  metadata?: StoreMetadata;
}
