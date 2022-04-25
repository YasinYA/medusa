/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostProductsProductBodyType } from './postProductsProductBodyType';
import type { PostProductsProductBodyTagsItem } from './postProductsProductBodyTagsItem';
import type { PostProductsProductBodyOptionsItem } from './postProductsProductBodyOptionsItem';
import type { PostProductsProductBodyVariantsItem } from './postProductsProductBodyVariantsItem';
import type { PostProductsProductBodyMetadata } from './postProductsProductBodyMetadata';

export type PostProductsProductBody = {
  /** The title of the Product */
  title?: string;
  /** The subtitle of the Product */
  subtitle?: string;
  /** A description of the Product. */
  description?: string;
  /** A flag to indicate if the Product represents a Gift Card. Purchasing Products with this flag set to `true` will result in a Gift Card being created. */
  is_giftcard?: boolean;
  /** A flag to indicate if discounts can be applied to the LineItems generated from this Product */
  discountable?: boolean;
  /** Images of the Product. */
  images?: string[];
  /** The thumbnail to use for the Product. */
  thumbnail?: string;
  /** A unique handle to identify the Product by. */
  handle?: string;
  /** The Product Type to associate the Product with. */
  type?: PostProductsProductBodyType;
  /** The id of the Collection the Product should belong to. */
  collection_id?: string;
  /** Tags to associate the Product with. */
  tags?: PostProductsProductBodyTagsItem[];
  /** The Options that the Product should have. These define on which properties the Product's Product Variants will differ. */
  options?: PostProductsProductBodyOptionsItem[];
  /** A list of Product Variants to create with the Product. */
  variants?: PostProductsProductBodyVariantsItem[];
  /** The wieght of the Product. */
  weight?: string;
  /** The length of the Product. */
  length?: string;
  /** The height of the Product. */
  height?: string;
  /** The width of the Product. */
  width?: string;
  /** The country of origin of the Product. */
  origin_country?: string;
  /** The Manufacturer Identification code for the Product. */
  mid_code?: string;
  /** The material composition of the Product. */
  material?: string;
  /** An optional set of key-value pairs with additional information. */
  metadata?: PostProductsProductBodyMetadata;
};
