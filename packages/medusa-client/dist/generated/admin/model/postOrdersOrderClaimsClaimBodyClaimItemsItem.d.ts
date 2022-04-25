/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostOrdersOrderClaimsClaimBodyClaimItemsItemReason } from './postOrdersOrderClaimsClaimBodyClaimItemsItemReason';
export declare type PostOrdersOrderClaimsClaimBodyClaimItemsItem = {
    /** The id of the Claim Item. */
    id?: string;
    /** The id of the Line Item that will be claimed. */
    item_id?: string;
    /** The number of items that will be returned */
    quantity?: number;
    /** Short text describing the Claim Item in further detail. */
    note?: string;
    /** The reason for the Claim */
    reason?: PostOrdersOrderClaimsClaimBodyClaimItemsItemReason;
    /** A list o tags to add to the Claim Item */
    tags?: string[];
    /** A list of image URL's that will be associated with the Claim */
    images?: string[];
};
