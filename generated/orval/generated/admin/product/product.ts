/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostProductsProductOptions200,
  PostProductsProductOptionsBody,
  PostProducts200,
  PostProductsBody,
  GetProducts200,
  GetProductsParams,
  PostProductsProductVariants200,
  PostProductsProductVariantsBody,
  GetProductsProductVariants200,
  DeleteProductsProductOptionsOption200,
  PostProductsProductOptionsOption200,
  PostProductsProductOptionsOptionBody,
  DeleteProductsProduct200,
  GetProductsProduct200,
  PostProductsProduct200,
  PostProductsProductBody,
  DeleteProductsProductVariantsVariant200,
  PostProductsProductVariantsVariant200,
  PostProductsProductVariantsVariantBody,
  GetProductsTypes200,
  PostProductsProductMetadata200,
  PostProductsProductMetadataBody
} from '.././model'
import { customInstance } from '../../../src/custom-instance'


  /**
 * Adds a Product Option to a Product
 * @summary Add an Option
 */
export const postProductsProductOptions = (
    id: string,
    postProductsProductOptionsBody: PostProductsProductOptionsBody,
 ) => {
      return customInstance<PostProductsProductOptions200>(
      {url: `/products/${id}/options`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: postProductsProductOptionsBody
    },
      );
    }
  /**
 * Creates a Product
 * @summary Create a Product
 */
export const postProducts = (
    postProductsBody: PostProductsBody,
 ) => {
      return customInstance<PostProducts200>(
      {url: `/products`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: postProductsBody
    },
      );
    }
  /**
 * Retrieves a list of Product
 * @summary List Product
 */
export const getProducts = (
    params?: GetProductsParams,
 ) => {
      return customInstance<GetProducts200>(
      {url: `/products`, method: 'get',
        params,
    },
      );
    }
  /**
 * Creates a Product Variant. Each Product Variant must have a unique combination of Product Option Values.
 * @summary Create a Product Variant
 */
export const postProductsProductVariants = (
    id: string,
    postProductsProductVariantsBody: PostProductsProductVariantsBody,
 ) => {
      return customInstance<PostProductsProductVariants200>(
      {url: `/products/${id}/variants`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: postProductsProductVariantsBody
    },
      );
    }
  /**
 * Retrieves a list of the Product Variants associated with a Product.
 * @summary List a Product's Product Variants
 */
export const getProductsProductVariants = (
    id: string,
 ) => {
      return customInstance<GetProductsProductVariants200>(
      {url: `/products/${id}/variants`, method: 'get'
    },
      );
    }
  /**
 * Deletes a Product Option. Before a Product Option can be deleted all Option Values for the Product Option must be the same. You may, for example, have to delete some of your variants prior to deleting the Product Option
 * @summary Delete a Product Option
 */
export const deleteProductsProductOptionsOption = (
    id: string,
    optionId: string,
 ) => {
      return customInstance<DeleteProductsProductOptionsOption200>(
      {url: `/products/${id}/options/${optionId}`, method: 'delete'
    },
      );
    }
  /**
 * Updates a Product Option
 * @summary Update a Product Option.
 */
export const postProductsProductOptionsOption = (
    id: string,
    optionId: string,
    postProductsProductOptionsOptionBody: PostProductsProductOptionsOptionBody,
 ) => {
      return customInstance<PostProductsProductOptionsOption200>(
      {url: `/products/${id}/options/${optionId}`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: postProductsProductOptionsOptionBody
    },
      );
    }
  /**
 * Deletes a Product and it's associated Product Variants.
 * @summary Delete a Product
 */
export const deleteProductsProduct = (
    id: string,
 ) => {
      return customInstance<DeleteProductsProduct200>(
      {url: `/products/${id}`, method: 'delete'
    },
      );
    }
  /**
 * Retrieves a Product.
 * @summary Retrieve a Product
 */
export const getProductsProduct = (
    id: string,
 ) => {
      return customInstance<GetProductsProduct200>(
      {url: `/products/${id}`, method: 'get'
    },
      );
    }
  /**
 * Updates a Product
 * @summary Update a Product
 */
export const postProductsProduct = (
    id: string,
    postProductsProductBody: PostProductsProductBody,
 ) => {
      return customInstance<PostProductsProduct200>(
      {url: `/products/${id}`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: postProductsProductBody
    },
      );
    }
  /**
 * Deletes a Product Variant.
 * @summary Delete a Product Variant
 */
export const deleteProductsProductVariantsVariant = (
    id: string,
    variantId: string,
 ) => {
      return customInstance<DeleteProductsProductVariantsVariant200>(
      {url: `/products/${id}/variants/${variantId}`, method: 'delete'
    },
      );
    }
  /**
 * Update a Product Variant.
 * @summary Update a Product Variant
 */
export const postProductsProductVariantsVariant = (
    id: string,
    variantId: string,
    postProductsProductVariantsVariantBody: PostProductsProductVariantsVariantBody,
 ) => {
      return customInstance<PostProductsProductVariantsVariant200>(
      {url: `/products/${id}/variants/${variantId}`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: postProductsProductVariantsVariantBody
    },
      );
    }
  /**
 * Retrieves a list of Product Types.
 * @summary List Product Types
 */
export const getProductsTypes = (
    
 ) => {
      return customInstance<GetProductsTypes200>(
      {url: `/products/types`, method: 'get'
    },
      );
    }
  /**
 * Set metadata key/value pair for Product
 * @summary Set Product metadata
 */
export const postProductsProductMetadata = (
    id: string,
    postProductsProductMetadataBody: PostProductsProductMetadataBody,
 ) => {
      return customInstance<PostProductsProductMetadata200>(
      {url: `/products/${id}/metadata`, method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: postProductsProductMetadataBody
    },
      );
    }
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;

export type PostProductsProductOptionsResult = NonNullable<AsyncReturnType<typeof postProductsProductOptions>>
export type PostProductsResult = NonNullable<AsyncReturnType<typeof postProducts>>
export type GetProductsResult = NonNullable<AsyncReturnType<typeof getProducts>>
export type PostProductsProductVariantsResult = NonNullable<AsyncReturnType<typeof postProductsProductVariants>>
export type GetProductsProductVariantsResult = NonNullable<AsyncReturnType<typeof getProductsProductVariants>>
export type DeleteProductsProductOptionsOptionResult = NonNullable<AsyncReturnType<typeof deleteProductsProductOptionsOption>>
export type PostProductsProductOptionsOptionResult = NonNullable<AsyncReturnType<typeof postProductsProductOptionsOption>>
export type DeleteProductsProductResult = NonNullable<AsyncReturnType<typeof deleteProductsProduct>>
export type GetProductsProductResult = NonNullable<AsyncReturnType<typeof getProductsProduct>>
export type PostProductsProductResult = NonNullable<AsyncReturnType<typeof postProductsProduct>>
export type DeleteProductsProductVariantsVariantResult = NonNullable<AsyncReturnType<typeof deleteProductsProductVariantsVariant>>
export type PostProductsProductVariantsVariantResult = NonNullable<AsyncReturnType<typeof postProductsProductVariantsVariant>>
export type GetProductsTypesResult = NonNullable<AsyncReturnType<typeof getProductsTypes>>
export type PostProductsProductMetadataResult = NonNullable<AsyncReturnType<typeof postProductsProductMetadata>>