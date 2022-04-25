/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type {
  GetVariantsVariant200,
  GetVariants200,
  GetVariantsParams
} from '.././model'
import { customInstance } from '../../../src/custom-instance'


  /**
 * Retrieves a Product Variant by id
 * @summary Retrieve a Product Variant
 */
export const getVariantsVariant = (
    variantId: string,
 ) => {
      return customInstance<GetVariantsVariant200>(
      {url: `/variants/${variantId}`, method: 'get'
    },
      );
    }
  /**
 * Retrieves a list of Product Variants
 * @summary Retrieve Product Variants
 */
export const getVariants = (
    params?: GetVariantsParams,
 ) => {
      return customInstance<GetVariants200>(
      {url: `/variants`, method: 'get',
        params,
    },
      );
    }
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;

export type GetVariantsVariantResult = NonNullable<AsyncReturnType<typeof getVariantsVariant>>
export type GetVariantsResult = NonNullable<AsyncReturnType<typeof getVariants>>