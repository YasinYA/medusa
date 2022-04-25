/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { LineItem } from './lineItem';
import type { ReturnReason } from './returnReason';
import type { ReturnItemMetadata } from './returnItemMetadata';

/**
 * Correlates a Line Item with a Return, keeping track of the quantity of the Line Item that will be returned.
 */
export interface ReturnItem {
  /** The id of the Return that the Return Item belongs to. */
  return_id?: string;
  /** The id of the Line Item that the Return Item references. */
  item_id?: string;
  /** The Line Item that the Return Item references. */
  item?: LineItem;
  /** The quantity of the Line Item that is included in the Return. */
  quantity?: number;
  /** Whether the Return Item was requested initially or received unexpectedly in the warehouse. */
  is_requested?: boolean;
  /** The quantity that was originally requested to be returned. */
  requested_quantity?: number;
  /** The quantity that was received in the warehouse. */
  recieved_quantity?: number;
  /** The reason for returning the item. */
  reason?: ReturnReason;
  /** An optional note with additional details about the Return. */
  note?: string;
  /** An optional key-value map with additional information. */
  metadata?: ReturnItemMetadata;
}
