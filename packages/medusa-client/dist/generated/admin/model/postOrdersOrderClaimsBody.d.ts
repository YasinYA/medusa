/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostOrdersOrderClaimsBodyType } from './postOrdersOrderClaimsBodyType';
import type { PostOrdersOrderClaimsBodyClaimItemsItem } from './postOrdersOrderClaimsBodyClaimItemsItem';
import type { PostOrdersOrderClaimsBodyReturnShipping } from './postOrdersOrderClaimsBodyReturnShipping';
import type { PostOrdersOrderClaimsBodyAdditionalItemsItem } from './postOrdersOrderClaimsBodyAdditionalItemsItem';
import type { PostOrdersOrderClaimsBodyShippingMethodsItem } from './postOrdersOrderClaimsBodyShippingMethodsItem';
import type { PostOrdersOrderClaimsBodyShippingAddress } from './postOrdersOrderClaimsBodyShippingAddress';
import type { PostOrdersOrderClaimsBodyMetadata } from './postOrdersOrderClaimsBodyMetadata';
export declare type PostOrdersOrderClaimsBody = {
    /** The type of the Claim. This will determine how the Claim is treated: `replace` Claims will result in a Fulfillment with new items being created, while a `refund` Claim will refund the amount paid for the claimed items. */
    type: PostOrdersOrderClaimsBodyType;
    /** The Claim Items that the Claim will consist of. */
    claim_items: PostOrdersOrderClaimsBodyClaimItemsItem[];
    /** Optional details for the Return Shipping Method, if the items are to be sent back. */
    return_shipping?: PostOrdersOrderClaimsBodyReturnShipping;
    /** The new items to send to the Customer when the Claim type is Replace. */
    additional_items?: PostOrdersOrderClaimsBodyAdditionalItemsItem[];
    /** The Shipping Methods to send the additional Line Items with. */
    shipping_methods?: PostOrdersOrderClaimsBodyShippingMethodsItem[];
    /** An optional shipping address to send the claim to. Defaults to the parent order's shipping address */
    shipping_address?: PostOrdersOrderClaimsBodyShippingAddress;
    /** The amount to refund the Customer when the Claim type is `refund`. */
    refund_amount?: number;
    /** If set to true no notification will be send related to this Claim. */
    no_notification?: boolean;
    /** An optional set of key-value pairs to hold additional information. */
    metadata?: PostOrdersOrderClaimsBodyMetadata;
};
