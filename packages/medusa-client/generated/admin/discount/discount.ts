/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostDiscountsDiscountRegionsRegion200,
  DeleteDiscountsDiscountRegionsRegion200,
  PostDiscountsDiscountProductsProduct200,
  DeleteDiscountsDiscountProductsProduct200,
  PostDiscounts200,
  PostDiscountsBody,
  GetDiscounts200,
  GetDiscountsParams,
  PostDiscountsDiscountDynamicCodes200,
  PostDiscountsDiscountDynamicCodesBody,
  DeleteDiscountsDiscount200,
  GetDiscountsDiscount200,
  PostDiscountsDiscount200,
  PostDiscountsDiscountBody,
  DeleteDiscountsDiscountDynamicCodesCode200,
  GetDiscountsDiscountCode200,
} from "../model"
import { getClient } from "../../../src/custom-instance"

/**
 * Adds a Region to the list of Regions that a Discount can be used in.
 * @summary Adds Region availability
 */
export const postDiscountsDiscountRegionsRegion = (
  id: string,
  regionId: string
) => {
  return getClient<PostDiscountsDiscountRegionsRegion200>({
    url: `/admin/discounts/${id}/regions/${regionId}`,
    method: "post",
  })
}
/**
 * Removes a Region from the list of Regions that a Discount can be used in.
 * @summary Remove Region availability
 */
export const deleteDiscountsDiscountRegionsRegion = (
  id: string,
  regionId: string
) => {
  return getClient<DeleteDiscountsDiscountRegionsRegion200>({
    url: `/admin/discounts/${id}/regions/${regionId}`,
    method: "delete",
  })
}
/**
 * Adds a Product to the list of Products that a Discount can be used for.
 * @summary Adds Product availability
 */
export const postDiscountsDiscountProductsProduct = (
  id: string,
  productId: string
) => {
  return getClient<PostDiscountsDiscountProductsProduct200>({
    url: `/admin/discounts/${id}/products/${productId}`,
    method: "post",
  })
}
/**
 * Removes a Product from the list of Products that a Discount can be used for.
 * @summary Remove Product availability
 */
export const deleteDiscountsDiscountProductsProduct = (
  id: string,
  productId: string
) => {
  return getClient<DeleteDiscountsDiscountProductsProduct200>({
    url: `/admin/discounts/${id}/products/${productId}`,
    method: "delete",
  })
}
/**
 * Creates a Discount with a given set of rules that define how the Discount behaves.
 * @summary Creates a Discount
 */
export const postDiscounts = (postDiscountsBody: PostDiscountsBody) => {
  return getClient<PostDiscounts200>({
    url: `/admin/discounts`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postDiscountsBody,
  })
}
/**
 * Retrieves a list of Discounts
 * @summary List Discounts
 */
export const getDiscounts = (params?: GetDiscountsParams) => {
  return getClient<GetDiscounts200>({
    url: `/admin/discounts`,
    method: "get",
    params,
  })
}
/**
 * Creates a unique code that can map to a parent Discount. This is useful if you want to automatically generate codes with the same behaviour.
 * @summary Create a dynamic Discount code
 */
export const postDiscountsDiscountDynamicCodes = (
  id: string,
  postDiscountsDiscountDynamicCodesBody: PostDiscountsDiscountDynamicCodesBody
) => {
  return getClient<PostDiscountsDiscountDynamicCodes200>({
    url: `/admin/discounts/${id}/dynamic-codes`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postDiscountsDiscountDynamicCodesBody,
  })
}
/**
 * Deletes a Discount.
 * @summary Delete a Discount
 */
export const deleteDiscountsDiscount = (id: string) => {
  return getClient<DeleteDiscountsDiscount200>({
    url: `/admin/discounts/${id}`,
    method: "delete",
  })
}
/**
 * Retrieves a Discount
 * @summary Retrieve a Discount
 */
export const getDiscountsDiscount = (id: string) => {
  return getClient<GetDiscountsDiscount200>({
    url: `/admin/discounts/${id}`,
    method: "get",
  })
}
/**
 * Updates a Discount with a given set of rules that define how the Discount behaves.
 * @summary Update a Discount
 */
export const postDiscountsDiscount = (
  id: string,
  postDiscountsDiscountBody: PostDiscountsDiscountBody
) => {
  return getClient<PostDiscountsDiscount200>({
    url: `/admin/discounts/${id}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postDiscountsDiscountBody,
  })
}
/**
 * Deletes a dynamic code from a Discount.
 * @summary Delete a dynamic code
 */
export const deleteDiscountsDiscountDynamicCodesCode = (
  id: string,
  code: string
) => {
  return getClient<DeleteDiscountsDiscountDynamicCodesCode200>({
    url: `/admin/discounts/${id}/dynamic-codes/${code}`,
    method: "delete",
  })
}
/**
 * Retrieves a Discount by its discount code
 * @summary Retrieve a Discount by code
 */
export const getDiscountsDiscountCode = (code: string) => {
  return getClient<GetDiscountsDiscountCode200>({
    url: `/admin/discounts/code/${code}`,
    method: "get",
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostDiscountsDiscountRegionsRegionResult = NonNullable<
  AsyncReturnType<typeof postDiscountsDiscountRegionsRegion>
>
export type DeleteDiscountsDiscountRegionsRegionResult = NonNullable<
  AsyncReturnType<typeof deleteDiscountsDiscountRegionsRegion>
>
export type PostDiscountsDiscountProductsProductResult = NonNullable<
  AsyncReturnType<typeof postDiscountsDiscountProductsProduct>
>
export type DeleteDiscountsDiscountProductsProductResult = NonNullable<
  AsyncReturnType<typeof deleteDiscountsDiscountProductsProduct>
>
export type PostDiscountsResult = NonNullable<
  AsyncReturnType<typeof postDiscounts>
>
export type GetDiscountsResult = NonNullable<
  AsyncReturnType<typeof getDiscounts>
>
export type PostDiscountsDiscountDynamicCodesResult = NonNullable<
  AsyncReturnType<typeof postDiscountsDiscountDynamicCodes>
>
export type DeleteDiscountsDiscountResult = NonNullable<
  AsyncReturnType<typeof deleteDiscountsDiscount>
>
export type GetDiscountsDiscountResult = NonNullable<
  AsyncReturnType<typeof getDiscountsDiscount>
>
export type PostDiscountsDiscountResult = NonNullable<
  AsyncReturnType<typeof postDiscountsDiscount>
>
export type DeleteDiscountsDiscountDynamicCodesCodeResult = NonNullable<
  AsyncReturnType<typeof deleteDiscountsDiscountDynamicCodesCode>
>
export type GetDiscountsDiscountCodeResult = NonNullable<
  AsyncReturnType<typeof getDiscountsDiscountCode>
>
