/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { FulfillmentItem } from './fulfillmentItem';
import type { TrackingLink } from './trackingLink';
import type { FulfillmentMetadata } from './fulfillmentMetadata';
/**
 * Fulfillments are created once store operators can prepare the purchased goods. Fulfillments will eventually be shipped and hold information about how to track shipments. Fulfillments are created through a provider, which is typically an external shipping aggregator, shipping partner og 3PL, most plugins will have asynchronous communications with these providers through webhooks in order to automatically update and synchronize the state of Fulfillments.
 */
export interface Fulfillment {
    /** The id of the Fulfillment. This value will be prefixed by `ful_`. */
    id?: string;
    /** The id of the Claim that the Fulfillment belongs to. */
    claim_order_id?: string;
    /** The id of the Swap that the Fulfillment belongs to. */
    swap_id?: string;
    /** The id of the Order that the Fulfillment belongs to. */
    order_id?: string;
    /** The id of the Fulfillment Provider responsible for handling the fulfillment */
    provider_id?: string;
    /** The Fulfillment Items in the Fulfillment - these hold information about how many of each Line Item has been fulfilled. */
    items?: FulfillmentItem[];
    /** The Tracking Links that can be used to track the status of the Fulfillment, these will usually be provided by the Fulfillment Provider. */
    tracking_links?: TrackingLink[];
    /**
     * The tracking numbers that can be used to track the status of the fulfillment.
     * @deprecated
     */
    tracking_numbers?: string[];
    /** The date with timezone at which the Fulfillment was shipped. */
    shipped_at?: string;
    /** Flag for describing whether or not notifications related to this should be send. */
    no_notification?: boolean;
    /** The date with timezone at which the Fulfillment was canceled. */
    canceled_at?: string;
    /** The date with timezone at which the resource was created. */
    created_at?: string;
    /** The date with timezone at which the resource was last updated. */
    updated_at?: string;
    /** An optional key-value map with additional information. */
    metadata?: FulfillmentMetadata;
}
