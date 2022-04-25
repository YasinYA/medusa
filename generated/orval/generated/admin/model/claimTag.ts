/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { ClaimTagMetadata } from './claimTagMetadata';

/**
 * Claim Tags are user defined tags that can be assigned to claim items for easy filtering and grouping.
 */
export interface ClaimTag {
  /** The id of the claim tag. Will be prefixed by `ctag_`. */
  id?: string;
  /** The value that the claim tag holds */
  value?: string;
  /** The date with timezone at which the resource was created. */
  created_at?: string;
  /** The date with timezone at which the resource was last updated. */
  update_at?: string;
  /** The date with timezone at which the resource was deleted. */
  deleted_at?: string;
  /** An optional key-value map with additional information. */
  metadata?: ClaimTagMetadata;
}
