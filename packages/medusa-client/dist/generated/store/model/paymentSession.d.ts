/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { PaymentSessionStatus } from './paymentSessionStatus';
import type { PaymentSessionData } from './paymentSessionData';
/**
 * Payment Sessions are created when a Customer initilizes the checkout flow, and can be used to hold the state of a payment flow. Each Payment Session is controlled by a Payment Provider, who is responsible for the communication with external payment services. Authorized Payment Sessions will eventually get promoted to Payments to indicate that they are authorized for capture/refunds/etc.
 */
export interface PaymentSession {
    /** The id of the Payment Session. This value will be prefixed with `ps_`. */
    id?: string;
    /** The id of the Cart that the Payment Session is created for. */
    cart_id?: string;
    /** The id of the Payment Provider that is responsible for the Payment Session */
    provider_id?: string;
    /** A flag to indicate if the Payment Session has been selected as the method that will be used to complete the purchase. */
    is_selected?: boolean;
    /** Indicates the status of the Payment Session. Will default to `pending`, and will eventually become `authorized`. Payment Sessions may have the status of `requires_more` to indicate that further actions are to be completed by the Customer. */
    status?: PaymentSessionStatus;
    /** The data required for the Payment Provider to identify, modify and process the Payment Session. Typically this will be an object that holds an id to the external payment session, but can be an empty object if the Payment Provider doesn't hold any state. */
    data?: PaymentSessionData;
    /** The date with timezone at which the resource was created. */
    created_at?: string;
    /** The date with timezone at which the resource was last updated. */
    updated_at?: string;
}
