/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostTaxRatesTaxRateProductTypes200,
  DeleteTaxRatesTaxRateProductTypes200,
  PostTaxRatesTaxRateProducts200,
  DeleteTaxRatesTaxRateProducts200,
  PostTaxRatesTaxRateShippingOptions200,
  DeleteTaxRatesTaxRateShippingOptions200,
  PostTaxRates200,
  DeleteTaxRatesTaxRate200,
  GetTaxRatesTaxRate200,
  PostTaxRatesTaxRate200,
} from "../model"
import { getClient } from "../../../src/custom-instance"

/**
 * Associates a Tax Rate with a list of Product Types
 * @summary Add Tax Rate to Product Types
 */
export const postTaxRatesTaxRateProductTypes = () => {
  return getClient<PostTaxRatesTaxRateProductTypes200>({
    url: `/admin/tax-rates/:id/product-types/batch`,
    method: "post",
  })
}
/**
 * Removes a Tax Rate from a list of Product Types
 * @summary Remove Tax Rate from Product Types
 */
export const deleteTaxRatesTaxRateProductTypes = () => {
  return getClient<DeleteTaxRatesTaxRateProductTypes200>({
    url: `/admin/tax-rates/:id/product-types/batch`,
    method: "delete",
  })
}
/**
 * Associates a Tax Rate with a list of Products
 * @summary Add Tax Rate to Products
 */
export const postTaxRatesTaxRateProducts = () => {
  return getClient<PostTaxRatesTaxRateProducts200>({
    url: `/admin/tax-rates/:id/products/batch`,
    method: "post",
  })
}
/**
 * Removes a Tax Rate from a list of Products
 * @summary Removes Tax Rate from Products
 */
export const deleteTaxRatesTaxRateProducts = () => {
  return getClient<DeleteTaxRatesTaxRateProducts200>({
    url: `/admin/tax-rates/:id/products/batch`,
    method: "delete",
  })
}
/**
 * Associates a Tax Rate with a list of Product Types
 * @summary Add Tax Rate to Product Types
 */
export const postTaxRatesTaxRateShippingOptions = () => {
  return getClient<PostTaxRatesTaxRateShippingOptions200>({
    url: `/admin/tax-rates/:id/shipping-options/batch`,
    method: "post",
  })
}
/**
 * Removes a Tax Rate from a list of Product Types
 * @summary Removes a Tax Rate from Product Types
 */
export const deleteTaxRatesTaxRateShippingOptions = () => {
  return getClient<DeleteTaxRatesTaxRateShippingOptions200>({
    url: `/admin/tax-rates/:id/shipping-options/batch`,
    method: "delete",
  })
}
/**
 * Creates a Tax Rate
 * @summary Create a Tax Rate
 */
export const postTaxRates = () => {
  return getClient<PostTaxRates200>({ url: `/admin/tax-rates`, method: "post" })
}
/**
 * Deletes a Tax Rate
 * @summary Delete a Tax Rate
 */
export const deleteTaxRatesTaxRate = (id: string) => {
  return getClient<DeleteTaxRatesTaxRate200>({
    url: `/admin/tax-rates/${id}`,
    method: "delete",
  })
}
/**
 * Retrieves a TaxRate
 * @summary Get Tax Rate
 */
export const getTaxRatesTaxRate = () => {
  return getClient<GetTaxRatesTaxRate200>({
    url: `/admin/tax-rates/:id`,
    method: "get",
  })
}
/**
 * Updates a Tax Rate
 * @summary Update a Tax Rate
 */
export const postTaxRatesTaxRate = () => {
  return getClient<PostTaxRatesTaxRate200>({
    url: `/admin/tax-rates/:id`,
    method: "post",
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostTaxRatesTaxRateProductTypesResult = NonNullable<
  AsyncReturnType<typeof postTaxRatesTaxRateProductTypes>
>
export type DeleteTaxRatesTaxRateProductTypesResult = NonNullable<
  AsyncReturnType<typeof deleteTaxRatesTaxRateProductTypes>
>
export type PostTaxRatesTaxRateProductsResult = NonNullable<
  AsyncReturnType<typeof postTaxRatesTaxRateProducts>
>
export type DeleteTaxRatesTaxRateProductsResult = NonNullable<
  AsyncReturnType<typeof deleteTaxRatesTaxRateProducts>
>
export type PostTaxRatesTaxRateShippingOptionsResult = NonNullable<
  AsyncReturnType<typeof postTaxRatesTaxRateShippingOptions>
>
export type DeleteTaxRatesTaxRateShippingOptionsResult = NonNullable<
  AsyncReturnType<typeof deleteTaxRatesTaxRateShippingOptions>
>
export type PostTaxRatesResult = NonNullable<
  AsyncReturnType<typeof postTaxRates>
>
export type DeleteTaxRatesTaxRateResult = NonNullable<
  AsyncReturnType<typeof deleteTaxRatesTaxRate>
>
export type GetTaxRatesTaxRateResult = NonNullable<
  AsyncReturnType<typeof getTaxRatesTaxRate>
>
export type PostTaxRatesTaxRateResult = NonNullable<
  AsyncReturnType<typeof postTaxRatesTaxRate>
>
