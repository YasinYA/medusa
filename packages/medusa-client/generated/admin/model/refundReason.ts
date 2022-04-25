/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The reason given for the Refund, will automatically be set when processed as part of a Swap, Claim or Return.
 */
export type RefundReason = 'discount' | 'return' | 'swap' | 'claim' | 'other';


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RefundReason = {
  discount: 'discount' as RefundReason,
  return: 'return' as RefundReason,
  swap: 'swap' as RefundReason,
  claim: 'claim' as RefundReason,
  other: 'other' as RefundReason,
};
