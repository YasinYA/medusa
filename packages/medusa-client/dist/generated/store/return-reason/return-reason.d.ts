/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type { GetReturnReasonsReason200, GetReturnReasons200 } from '.././model';
/**
* Retrieves a Return Reason.
* @summary Retrieve a Return Reason
*/
export declare const getReturnReasonsReason: (id: string) => Promise<GetReturnReasonsReason200>;
/**
* Retrieves a list of Return Reasons.
* @summary List Return Reasons
*/
export declare const getReturnReasons: () => Promise<GetReturnReasons200>;
declare type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
export declare type GetReturnReasonsReasonResult = NonNullable<AsyncReturnType<typeof getReturnReasonsReason>>;
export declare type GetReturnReasonsResult = NonNullable<AsyncReturnType<typeof getReturnReasons>>;
export {};
