/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { DiscountRule } from './discountRule';
import type { PostDiscountsBodyMetadata } from './postDiscountsBodyMetadata';

export type PostDiscountsBody = {
  /** A unique code that will be used to redeem the Discount */
  code: string;
  /** Whether the Discount should have multiple instances of itself, each with a different code. This can be useful for automatically generated codes that all have to follow a common set of rules. */
  is_dynamic?: string;
  /** The Discount Rule that defines how Discounts are calculated */
  rule: DiscountRule;
  /** Whether the Discount code is disabled on creation. You will have to enable it later to make it available to Customers. */
  is_disabled?: boolean;
  /** The time at which the Discount should be available. */
  starts_at?: string;
  /** The time at which the Discount should no longer be available. */
  ends_at?: string;
  /** A list of Region ids representing the Regions in which the Discount can be used. */
  regions?: string[];
  /** Maximum times the discount can be used */
  usage_limit?: number;
  /** An optional set of key-value pairs to hold additional information. */
  metadata?: PostDiscountsBodyMetadata;
};
