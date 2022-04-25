/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostOrdersOrderSwapsBodyReturnItemsItem } from './postOrdersOrderSwapsBodyReturnItemsItem';
import type { PostOrdersOrderSwapsBodyReturnShipping } from './postOrdersOrderSwapsBodyReturnShipping';
import type { PostOrdersOrderSwapsBodyAdditionalItemsItem } from './postOrdersOrderSwapsBodyAdditionalItemsItem';
import type { PostOrdersOrderSwapsBodyCustomShippingOptionsItem } from './postOrdersOrderSwapsBodyCustomShippingOptionsItem';
export declare type PostOrdersOrderSwapsBody = {
    /** The Line Items to return as part of the Swap. */
    return_items: PostOrdersOrderSwapsBodyReturnItemsItem[];
    /** How the Swap will be returned. */
    return_shipping?: PostOrdersOrderSwapsBodyReturnShipping;
    /** The new items to send to the Customer. */
    additional_items?: PostOrdersOrderSwapsBodyAdditionalItemsItem[];
    /** The custom shipping options to potentially create a Shipping Method from. */
    custom_shipping_options?: PostOrdersOrderSwapsBodyCustomShippingOptionsItem[];
    /** If set to true no notification will be send related to this Swap. */
    no_notification?: boolean;
    /** If true, swaps can be completed with items out of stock */
    allow_backorder?: boolean;
};
