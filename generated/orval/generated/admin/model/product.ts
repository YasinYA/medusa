/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { Image } from './image';
import type { ProductOption } from './productOption';
import type { ProductVariant } from './productVariant';
import type { ProductType } from './productType';
import type { ProductCollection } from './productCollection';
import type { ProductTag } from './productTag';
import type { ProductMetadata } from './productMetadata';

/**
 * Products are a grouping of Product Variants that have common properties such as images and descriptions. Products can have multiple options which define the properties that Product Variants differ by.
 */
export interface Product {
  /** The id of the Product. This value will be prefixed with `prod_`. */
  id?: string;
  /** A title that can be displayed for easy identification of the Product. */
  title?: string;
  /** An optional subtitle that can be used to further specify the Product. */
  subtitle?: string;
  /** A short description of the Product. */
  description?: string;
  /** A unique identifier for the Product (e.g. for slug structure). */
  handle?: string;
  /** Whether the Product represents a Gift Card. Products that represent Gift Cards will automatically generate a redeemable Gift Card code once they are purchased. */
  is_giftcard?: boolean;
  /** Whether the Product can be discounted. Discounts will not apply to Line Items of this Product when this flag is set to `false`. */
  discountable?: boolean;
  /** Images of the Product */
  images?: Image[];
  /** A URL to an image file that can be used to identify the Product. */
  thumbnail?: string;
  /** The Product Options that are defined for the Product. Product Variants of the Product will have a unique combination of Product Option Values. */
  options?: ProductOption[];
  /** The Product Variants that belong to the Product. Each will have a unique combination of Product Option Values. */
  variants?: ProductVariant[];
  /** The id of the Shipping Profile that the Product belongs to. Shipping Profiles have a set of defined Shipping Options that can be used to Fulfill a given set of Products. */
  profile_id?: string;
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
  /** The Product Type of the Product (e.g. "Clothing") */
  type?: ProductType;
  /** The Product Collection that the Product belongs to (e.g. "SS20") */
  collection?: ProductCollection;
  /** The Product Tags assigned to the Product. */
  tags?: ProductTag[];
  /** The date with timezone at which the resource was created. */
  created_at?: string;
  /** The date with timezone at which the resource was last updated. */
  updated_at?: string;
  /** The date with timezone at which the resource was deleted. */
  deleted_at?: string;
  /** An optional key-value map with additional information. */
  metadata?: ProductMetadata;
}
