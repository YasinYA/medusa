/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { DiscountRuleType } from "./discountRuleType"
import type { DiscountRuleAllocation } from "./discountRuleAllocation"
import type { Product } from "./product"
import type { DiscountRuleMetadata } from "./discountRuleMetadata"

/**
 * Holds the rules that governs how a Discount is calculated when applied to a Cart.
 */
export interface DiscountRule {
  /** The id of the Discount Rule. Will be prefixed by `dru_`. */
  id?: string
  /** The type of the Discount, can be `fixed` for discounts that reduce the price by a fixed amount, `percentage` for percentage reductions or `free_shipping` for shipping vouchers. */
  type?: DiscountRuleType
  /** A short description of the discount */
  description?: string
  /** The value that the discount represents; this will depend on the type of the discount */
  value?: number
  /** The scope that the discount should apply to. */
  allocation?: DiscountRuleAllocation
  /** A set of Products that the discount can be used for. */
  valid_for?: Product[]
  /** The date with timezone at which the resource was created. */
  created_at?: string
  /** The date with timezone at which the resource was last updated. */
  update_at?: string
  /** The date with timezone at which the resource was deleted. */
  deleted_at?: string
  /** An optional key-value map with additional information. */
  metadata?: DiscountRuleMetadata
}
