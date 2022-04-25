/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostShippingOptions200,
  PostShippingOptionsBody,
  GetShippingOptions200,
  GetShippingOptionsParams,
  DeleteShippingOptionsOption200,
  GetShippingOptionsOption200,
  PostShippingOptionsOption200,
  PostShippingOptionsOptionBody,
} from "../model"
import { getClient } from "../../../src/custom-instance"

/**
 * Creates a Shipping Option
 * @summary Create Shipping Option
 */
export const postShippingOptions = (
  postShippingOptionsBody: PostShippingOptionsBody
) => {
  return getClient<PostShippingOptions200>({
    url: `/admin/shipping-options`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postShippingOptionsBody,
  })
}
/**
 * Retrieves a list of Shipping Options.
 * @summary List Shipping Options
 */
export const getShippingOptions = (params?: GetShippingOptionsParams) => {
  return getClient<GetShippingOptions200>({
    url: `/admin/shipping-options`,
    method: "get",
    params,
  })
}
/**
 * Deletes a Shipping Option.
 * @summary Delete a Shipping Option
 */
export const deleteShippingOptionsOption = (id: string) => {
  return getClient<DeleteShippingOptionsOption200>({
    url: `/admin/shipping-options/${id}`,
    method: "delete",
  })
}
/**
 * Retrieves a Shipping Option.
 * @summary Retrieve a Shipping Option
 */
export const getShippingOptionsOption = (id: string) => {
  return getClient<GetShippingOptionsOption200>({
    url: `/admin/shipping-options/${id}`,
    method: "get",
  })
}
/**
 * Updates a Shipping Option
 * @summary Update Shipping Option
 */
export const postShippingOptionsOption = (
  id: string,
  postShippingOptionsOptionBody: PostShippingOptionsOptionBody
) => {
  return getClient<PostShippingOptionsOption200>({
    url: `/admin/shipping-options/${id}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postShippingOptionsOptionBody,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostShippingOptionsResult = NonNullable<
  AsyncReturnType<typeof postShippingOptions>
>
export type GetShippingOptionsResult = NonNullable<
  AsyncReturnType<typeof getShippingOptions>
>
export type DeleteShippingOptionsOptionResult = NonNullable<
  AsyncReturnType<typeof deleteShippingOptionsOption>
>
export type GetShippingOptionsOptionResult = NonNullable<
  AsyncReturnType<typeof getShippingOptionsOption>
>
export type PostShippingOptionsOptionResult = NonNullable<
  AsyncReturnType<typeof postShippingOptionsOption>
>
