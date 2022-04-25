/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { DraftOrderStatus } from './draftOrderStatus';
import type { Cart } from './cart';
import type { Order } from './order';
import type { DraftOrderMetadata } from './draftOrderMetadata';

/**
 * Represents a draft order
 */
export interface DraftOrder {
  id?: string;
  status?: DraftOrderStatus;
  display_id?: string;
  cart_id?: string;
  cart?: Cart;
  order_id?: string;
  order?: Order;
  canceled_at?: string;
  created_at?: string;
  update_at?: string;
  deleted_at?: string;
  completed_at?: string;
  no_notification_order?: boolean;
  metadata?: DraftOrderMetadata;
  idempotency_key?: string;
}
