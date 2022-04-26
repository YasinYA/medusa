/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { ProductTypeMetadata } from "./productTypeMetadata"

/**
 * Product Type can be added to Products for filtering and reporting purposes.
 */
export interface ProductType {
  /** The id of the Product Type. This value will be prefixed with `ptyp_`. */
  id?: string
  /** The value that the Product Type represents (e.g. "Clothing"). */
  value?: string
  /** The date with timezone at which the resource was created. */
  created_at?: string
  /** The date with timezone at which the resource was last updated. */
  updated_at?: string
  /** The date with timezone at which the resource was deleted. */
  deleted_at?: string
  /** An optional key-value map with additional information. */
  metadata?: ProductTypeMetadata
}
