/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { Address } from "./address"
import type { LineItem } from "./lineItem"
import type { PostOrdersOrderBodyPaymentMethod } from "./postOrdersOrderBodyPaymentMethod"
import type { PostOrdersOrderBodyShippingMethod } from "./postOrdersOrderBodyShippingMethod"

export type PostOrdersOrderBody = {
  /** the email for the order */
  email?: string
  /** Billing address */
  billing_address?: Address
  /** Shipping address */
  shipping_address?: Address
  /** The Line Items for the order */
  items?: LineItem[]
  /** Region where the order belongs */
  region?: string
  /** Discounts applied to the order */
  discounts?: LineItem[]
  /** id of the customer */
  customer_id?: string
  /** payment method chosen for the order */
  payment_method?: PostOrdersOrderBodyPaymentMethod
  /** The Shipping Method used for shipping the order. */
  shipping_method?: PostOrdersOrderBodyShippingMethod
  /** A flag to indicate if no notifications should be emitted related to the updated order. */
  no_notification?: boolean
}
