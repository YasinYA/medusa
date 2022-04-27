/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostProductsBodyVariantsItemMetadata } from "./postProductsBodyVariantsItemMetadata"
import type { PostProductsBodyVariantsItemPricesItem } from "./postProductsBodyVariantsItemPricesItem"
import type { PostProductsBodyVariantsItemOptionsItem } from "./postProductsBodyVariantsItemOptionsItem"

export type PostProductsBodyVariantsItem = {
  /** The title to identify the Product Variant by. */
  title?: string
  /** The unique SKU for the Product Variant. */
  sku?: string
  /** The EAN number of the item. */
  ean?: string
  /** The UPC number of the item. */
  upc?: string
  /** A generic GTIN field for the Product Variant. */
  barcode?: string
  /** The Harmonized System code for the Product Variant. */
  hs_code?: string
  /** The amount of stock kept for the Product Variant. */
  inventory_quantity?: number
  /** Whether the Product Variant can be purchased when out of stock. */
  allow_backorder?: boolean
  /** Whether Medusa should keep track of the inventory for this Product Variant. */
  manage_inventory?: boolean
  /** The wieght of the Product Variant. */
  weight?: string
  /** The length of the Product Variant. */
  length?: string
  /** The height of the Product Variant. */
  height?: string
  /** The width of the Product Variant. */
  width?: string
  /** The country of origin of the Product Variant. */
  origin_country?: string
  /** The Manufacturer Identification code for the Product Variant. */
  mid_code?: string
  /** The material composition of the Product Variant. */
  material?: string
  /** An optional set of key-value pairs with additional information. */
  metadata?: PostProductsBodyVariantsItemMetadata
  prices?: PostProductsBodyVariantsItemPricesItem[]
  options?: PostProductsBodyVariantsItemOptionsItem[]
}
