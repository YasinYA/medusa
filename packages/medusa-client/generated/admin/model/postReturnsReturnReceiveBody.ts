/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostReturnsReturnReceiveBodyItemsItem } from './postReturnsReturnReceiveBodyItemsItem';

export type PostReturnsReturnReceiveBody = {
  /** The Line Items that have been received. */
  items: PostReturnsReturnReceiveBodyItemsItem[];
  /** The amount to refund. */
  refund?: number;
};
