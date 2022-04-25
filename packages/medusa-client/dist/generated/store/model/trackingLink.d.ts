/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { TrackingLinkMetadata } from './trackingLinkMetadata';
/**
 * Tracking Link holds information about tracking numbers for a Fulfillment. Tracking Links can optionally contain a URL that can be visited to see the status of the shipment.
 */
export interface TrackingLink {
    /** The id of the Tracking Link. This value will be prefixed with `tlink_`. */
    id?: string;
    /** The URL at which the status of the shipment can be tracked. */
    url?: string;
    /** The tracking number given by the shipping carrier. */
    tracking_number?: string;
    /** The id of the Fulfillment that the Tracking Link references. */
    fulfillment_id?: string;
    /** The date with timezone at which the resource was created. */
    created_at?: string;
    /** The date with timezone at which the resource was last updated. */
    updated_at?: string;
    /** The date with timezone at which the resource was deleted. */
    deleted_at?: string;
    /** An optional key-value map with additional information. */
    metadata?: TrackingLinkMetadata;
}
