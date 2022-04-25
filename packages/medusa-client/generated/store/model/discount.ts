/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { DiscountRule } from './discountRule';
import type { Region } from './region';
import type { DiscountMetadata } from './discountMetadata';

/**
 * Represents a discount that can be applied to a cart for promotional purposes.
 */
export interface Discount {
  /** The id of the Discount. Will be prefixed by `disc_`. */
  id?: string;
  /** A unique code for the discount - this will be used by the customer to apply the discount */
  code?: string;
  /** A flag to indicate if multiple instances of the discount can be generated. I.e. for newsletter discounts */
  is_dynamic?: boolean;
  /** The Discount Rule that governs the behaviour of the Discount */
  rule?: DiscountRule;
  /** Whether the Discount has been disabled. Disabled discounts cannot be applied to carts */
  is_disabled?: boolean;
  /** The Discount that the discount was created from. This will always be a dynamic discount */
  parent_discount_id?: string;
  /** The time at which the discount can be used. */
  starts_at?: string;
  /** The time at which the discount can no longer be used. */
  ends_at?: string;
  /** The Regions in which the Discount can be used */
  regions?: Region[];
  /** The maximum number of times that a discount can be used. */
  usage_limit?: number;
  /** The number of times a discount has been used. */
  usage_count?: number;
  /** The date with timezone at which the resource was created. */
  created_at?: string;
  /** The date with timezone at which the resource was last updated. */
  updated_at?: string;
  /** The date with timezone at which the resource was deleted. */
  deleted_at?: string;
  /** An optional key-value map with additional information. */
  metadata?: DiscountMetadata;
}
