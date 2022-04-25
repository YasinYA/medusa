/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type {
  GetCollectionsCollection200,
  GetCollections200,
  GetCollectionsParams,
} from "../model"
import { getClient } from "../../../src/custom-instance"

/**
 * Retrieves a Product Collection.
 * @summary Retrieve a Product Collection
 */
export const getCollectionsCollection = (id: string) => {
  return getClient<GetCollectionsCollection200>({
    url: `/collections/${id}`,
    method: "get",
  })
}
/**
 * Retrieve a list of Product Collection.
 * @summary List Product Collections
 */
export const getCollections = (params?: GetCollectionsParams) => {
  return getClient<GetCollections200>({
    url: `/collections`,
    method: "get",
    params,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type GetCollectionsCollectionResult = NonNullable<
  AsyncReturnType<typeof getCollectionsCollection>
>
export type GetCollectionsResult = NonNullable<
  AsyncReturnType<typeof getCollections>
>
