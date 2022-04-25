/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { SwapFulfillmentStatus } from './swapFulfillmentStatus';
import type { SwapPaymentStatus } from './swapPaymentStatus';
import type { LineItem } from './lineItem';
import type { Return } from './return';
import type { Fulfillment } from './fulfillment';
import type { Payment } from './payment';
import type { Address } from './address';
import type { ShippingMethod } from './shippingMethod';
import type { SwapMetadata } from './swapMetadata';
/**
 * Swaps can be created when a Customer wishes to exchange Products that they have purchased to different Products. Swaps consist of a Return of previously purchased Products and a Fulfillment of new Products, the amount paid for the Products being returned will be used towards payment for the new Products. In the case where the amount paid for the the Products being returned exceed the amount to be paid for the new Products, a Refund will be issued for the difference.
 */
export interface Swap {
    /** The id of the Swap. This value will be prefixed with `swap_`. */
    id?: string;
    /** The status of the Fulfillment of the Swap. */
    fulfillment_status?: SwapFulfillmentStatus;
    /** The status of the Payment of the Swap. The payment may either refer to the refund of an amount or the authorization of a new amount. */
    payment_status?: SwapPaymentStatus;
    /** The id of the Order where the Line Items to be returned where purchased. */
    order_id?: string;
    /** The new Line Items to ship to the Customer. */
    additional_items?: LineItem[];
    /** The Return that is issued for the return part of the Swap. */
    return_order?: Return;
    /** The Fulfillments used to send the new Line Items. */
    fulfillments?: Fulfillment[];
    /** The Payment authorized when the Swap requires an additional amount to be charged from the Customer. */
    payment?: Payment;
    /** The difference that is paid or refunded as a result of the Swap. May be negative when the amount paid for the returned items exceed the total of the new Products. */
    difference_due?: number;
    /** The Address to send the new Line Items to - in most cases this will be the same as the shipping address on the Order. */
    shipping_address?: Address;
    /** The Shipping Methods used to fulfill the addtional items purchased. */
    shipping_methods?: ShippingMethod[];
    /** The id of the Cart that the Customer will use to confirm the Swap. */
    cart_id?: string;
    /** If true, swaps can be completed with items out of stock */
    allow_backorder?: boolean;
    /** The date with timezone at which the Swap was confirmed by the Customer. */
    confirmed_at?: string;
    /** The date with timezone at which the resource was created. */
    created_at?: string;
    /** The date with timezone at which the resource was last updated. */
    updated_at?: string;
    /** The date with timezone at which the Swap was canceled. */
    canceled_at?: string;
    /** If set to true, no notification will be sent related to this swap */
    no_notification?: boolean;
    /** An optional key-value map with additional information. */
    metadata?: SwapMetadata;
}
