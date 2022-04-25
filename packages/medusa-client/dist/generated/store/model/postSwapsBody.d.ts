/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { PostSwapsBodyReturnItemsItem } from './postSwapsBodyReturnItemsItem';
import type { PostSwapsBodyAdditionalItemsItem } from './postSwapsBodyAdditionalItemsItem';
export declare type PostSwapsBody = {
    /** The id of the Order to create the Swap for. */
    order_id: string;
    /** The items to include in the Return. */
    return_items: PostSwapsBodyReturnItemsItem[];
    /** The id of the Shipping Option to create the Shipping Method from. */
    return_shipping_option?: string;
    /** The items to exchange the returned items to. */
    additional_items: PostSwapsBodyAdditionalItemsItem[];
};
