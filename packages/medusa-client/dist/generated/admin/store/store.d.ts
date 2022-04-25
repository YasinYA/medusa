/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostStoreCurrenciesCode200, DeleteStoreCurrenciesCode200, GetStore200, PostStore200, PostStoreBody, GetStorePaymentProviders200, GetStoreTaxProviders200 } from '.././model';
/**
* Adds a Currency Code to the available currencies.
* @summary Add a Currency Code
*/
export declare const postStoreCurrenciesCode: (code: string) => Promise<PostStoreCurrenciesCode200>;
/**
* Removes a Currency Code from the available currencies.
* @summary Remove a Currency Code
*/
export declare const deleteStoreCurrenciesCode: (code: string) => Promise<DeleteStoreCurrenciesCode200>;
/**
* Retrieves the Store details
* @summary Retrieve Store details.
*/
export declare const getStore: () => Promise<GetStore200>;
/**
* Updates the Store details
* @summary Update Store details.
*/
export declare const postStore: (postStoreBody: PostStoreBody) => Promise<PostStore200>;
/**
* Retrieves the configured Payment Providers
* @summary Retrieve configured Payment Providers
*/
export declare const getStorePaymentProviders: () => Promise<GetStorePaymentProviders200>;
/**
* Retrieves the configured Tax Providers
* @summary Retrieve configured Tax Providers
*/
export declare const getStoreTaxProviders: () => Promise<GetStoreTaxProviders200>;
declare type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
export declare type PostStoreCurrenciesCodeResult = NonNullable<AsyncReturnType<typeof postStoreCurrenciesCode>>;
export declare type DeleteStoreCurrenciesCodeResult = NonNullable<AsyncReturnType<typeof deleteStoreCurrenciesCode>>;
export declare type GetStoreResult = NonNullable<AsyncReturnType<typeof getStore>>;
export declare type PostStoreResult = NonNullable<AsyncReturnType<typeof postStore>>;
export declare type GetStorePaymentProvidersResult = NonNullable<AsyncReturnType<typeof getStorePaymentProviders>>;
export declare type GetStoreTaxProvidersResult = NonNullable<AsyncReturnType<typeof getStoreTaxProviders>>;
export {};
