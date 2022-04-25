/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostReturnReasonsBodyMetadata } from './postReturnReasonsBodyMetadata';

export type PostReturnReasonsBody = {
  /** The label to display to the Customer. */
  label: string;
  /** The value that the Return Reason will be identified by. Must be unique. */
  value: string;
  /** The id of the parent return reason. */
  parent_return_reason_id?: string;
  /** An optional description to for the Reason. */
  description?: string;
  /** An optional set of key-value pairs with additional information. */
  metadata?: PostReturnReasonsBodyMetadata;
};
