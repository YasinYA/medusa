/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { ClaimImage } from './claimImage';
import type { LineItem } from './lineItem';
import type { ProductVariant } from './productVariant';
import type { ClaimItemReason } from './claimItemReason';
import type { ClaimTag } from './claimTag';
import type { ClaimItemMetadata } from './claimItemMetadata';

/**
 * Represents a claimed item along with information about the reasons for the claim.
 */
export interface ClaimItem {
  id?: string;
  images?: ClaimImage[];
  claim_order_id?: string;
  item_id?: string;
  /** The Line Item that the claim refers to */
  item?: LineItem;
  variant_id?: string;
  /** The Product Variant that is claimed. */
  variant?: ProductVariant;
  /** The reason for the claim */
  reason?: ClaimItemReason;
  /** An optional note about the claim, for additional information */
  note?: string;
  /** The quantity of the item that is being claimed; must be less than or equal to the amount purchased in the original order. */
  quantity?: number;
  /** User defined tags for easy filtering and grouping. */
  tags?: ClaimTag[];
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  metadata?: ClaimItemMetadata;
}
