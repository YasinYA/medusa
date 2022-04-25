/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostDraftOrdersDraftOrderLineItemsItemBodyMetadata } from './postDraftOrdersDraftOrderLineItemsItemBodyMetadata';

export type PostDraftOrdersDraftOrderLineItemsItemBody = {
  /** The potential custom price of the item. */
  unit_price?: number;
  /** The potential custom title of the item. */
  title?: string;
  /** The quantity of the Line Item. */
  quantity?: number;
  /** The optional key-value map with additional details about the Line Item. */
  metadata?: PostDraftOrdersDraftOrderLineItemsItemBodyMetadata;
};
