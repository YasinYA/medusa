/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { MoneyAmount } from './moneyAmount';
import type { ProductOptionValue } from './productOptionValue';
import type { ProductVariantMetadata } from './productVariantMetadata';

/**
 * Product Variants represent a Product with a specific set of Product Option configurations. The maximum number of Product Variants that a Product can have is given by the number of available Product Option combinations.
 */
export interface ProductVariant {
  /** The id of the Product Variant. This value will be prefixed with `variant_`. */
  id?: string;
  /** A title that can be displayed for easy identification of the Product Variant. */
  title?: string;
  /** The id of the Product that the Product Variant belongs to. */
  product_id?: string;
  /** The Money Amounts defined for the Product Variant. Each Money Amount represents a price in a given currency or a price in a specific Region. */
  prices?: MoneyAmount[];
  /** The unique stock keeping unit used to identify the Product Variant. This will usually be a unqiue identifer for the item that is to be shipped, and can be referenced across multiple systems. */
  sku?: string;
  /** A generic field for a GTIN number that can be used to identify the Product Variant. */
  barcode?: string;
  /** An EAN barcode number that can be used to identify the Product Variant. */
  ean?: string;
  /** A UPC barcode number that can be used to identify the Product Variant. */
  upc?: string;
  /** The current quantity of the item that is stocked. */
  inventory_quantity?: number;
  /** Whether the Product Variant should be purchasable when `inventory_quantity` is 0. */
  allow_backorder?: boolean;
  /** Whether Medusa should manage inventory for the Product Variant. */
  manage_inventory?: boolean;
  /** The Harmonized System code of the Product Variant. May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  hs_code?: string;
  /** The country in which the Product Variant was produced. May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  origin_country?: string;
  /** The Manufacturers Identification code that identifies the manufacturer of the Product Variant. May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  mid_code?: string;
  /** The material and composition that the Product Variant is made of, May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  material?: string;
  /** The weight of the Product Variant. May be used in shipping rate calculations. */
  weight?: string;
  /** The height of the Product Variant. May be used in shipping rate calculations. */
  height?: string;
  /** The width of the Product Variant. May be used in shipping rate calculations. */
  width?: string;
  /** The length of the Product Variant. May be used in shipping rate calculations. */
  length?: string;
  /** The Product Option Values specified for the Product Variant. */
  options?: ProductOptionValue[];
  /** The date with timezone at which the resource was created. */
  created_at?: string;
  /** The date with timezone at which the resource was last updated. */
  updated_at?: string;
  /** The date with timezone at which the resource was deleted. */
  deleted_at?: string;
  /** An optional key-value map with additional information. */
  metadata?: ProductVariantMetadata;
}
