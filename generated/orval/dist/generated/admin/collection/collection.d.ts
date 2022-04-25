/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostProductsToCollectionBody, DeleteProductsFromCollectionBody, PostCollections200, PostCollectionsBody, GetCollections200, GetCollectionsParams, DeleteCollectionsCollection200, GetCollectionsCollection200, PostCollectionsCollection200, PostCollectionsCollectionBody } from '.././model';
/**
* Updates products associated with a Product Collection
* @summary Updates products associated with a Product Collection
*/
export declare const postProductsToCollection: (id: string, postProductsToCollectionBody: PostProductsToCollectionBody) => Promise<void>;
/**
* Removes products associated with a Product Collection
* @summary Removes products associated with a Product Collection
*/
export declare const deleteProductsFromCollection: (id: string, deleteProductsFromCollectionBody: DeleteProductsFromCollectionBody) => Promise<void>;
/**
* Creates a Product Collection.
* @summary Create a Product Collection
*/
export declare const postCollections: (postCollectionsBody: PostCollectionsBody) => Promise<PostCollections200>;
/**
* Retrieve a list of Product Collection.
* @summary List Product Collections
*/
export declare const getCollections: (params?: GetCollectionsParams | undefined) => Promise<GetCollections200>;
/**
* Deletes a Product Collection.
* @summary Delete a Product Collection
*/
export declare const deleteCollectionsCollection: (id: string) => Promise<DeleteCollectionsCollection200>;
/**
* Retrieves a Product Collection.
* @summary Retrieve a Product Collection
*/
export declare const getCollectionsCollection: (id: string) => Promise<GetCollectionsCollection200>;
/**
* Updates a Product Collection.
* @summary Update a Product Collection
*/
export declare const postCollectionsCollection: (id: string, postCollectionsCollectionBody: PostCollectionsCollectionBody) => Promise<PostCollectionsCollection200>;
declare type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
export declare type PostProductsToCollectionResult = NonNullable<AsyncReturnType<typeof postProductsToCollection>>;
export declare type DeleteProductsFromCollectionResult = NonNullable<AsyncReturnType<typeof deleteProductsFromCollection>>;
export declare type PostCollectionsResult = NonNullable<AsyncReturnType<typeof postCollections>>;
export declare type GetCollectionsResult = NonNullable<AsyncReturnType<typeof getCollections>>;
export declare type DeleteCollectionsCollectionResult = NonNullable<AsyncReturnType<typeof deleteCollectionsCollection>>;
export declare type GetCollectionsCollectionResult = NonNullable<AsyncReturnType<typeof getCollectionsCollection>>;
export declare type PostCollectionsCollectionResult = NonNullable<AsyncReturnType<typeof postCollectionsCollection>>;
export {};
