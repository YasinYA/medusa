/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * An address.
 */
export interface Address {
  id?: string
  customer_id?: string
  company?: string
  first_name?: string
  last_name?: string
  address_1?: string
  address_2?: string
  city?: string
  country_code?: string

  /** Country details */
  country?: Country
}

/**
 * Represents a user cart
 */
export interface Cart {
  id?: string
  email?: string
  billing_address_id?: string

  /** An address. */
  billing_address?: Address
  shipping_address_id?: string

  /** An address. */
  shipping_address?: Address
  items?: LineItem[]
  region_id?: string

  /** Regions hold settings for how Customers in a given geographical location shop. The is, for example, where currencies and tax rates are defined. A Region can consist of multiple countries to accomodate common shopping settings across countries. */
  region?: Region
  discounts?: Region[]
  gift_cards?: GiftCard[]
  customer_id?: string

  /** Represents a customer */
  customer?: Customer

  /** Payment Sessions are created when a Customer initilizes the checkout flow, and can be used to hold the state of a payment flow. Each Payment Session is controlled by a Payment Provider, who is responsible for the communication with external payment services. Authorized Payment Sessions will eventually get promoted to Payments to indicate that they are authorized for capture/refunds/etc. */
  payment_session?: PaymentSession
  payment_sessions?: PaymentSession[]

  /** Payments represent an amount authorized with a given payment method, Payments can be captured, canceled or refunded. */
  payment?: Payment
  shipping_methods?: ShippingMethod[]
  type?: "default" | "swap" | "payment_link"

  /** @format date-time */
  completed_at?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  updated_at?: string

  /** @format date-time */
  deleted_at?: string
  metadata?: object
  shipping_total?: number
  discount_total?: number
  tax_total?: number
  subtotal?: number
  refundable_amount?: number
  gift_card_total?: number
}

/**
 * Represents photo documentation of a claim.
 */
export interface ClaimImage {
  id?: string
  claim_item_id?: string
  url?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  updated_at?: string

  /** @format date-time */
  deleted_at?: string
  metadata?: object
}

/**
 * Represents a claimed item along with information about the reasons for the claim.
 */
export interface ClaimItem {
  id?: string
  images?: ClaimImage[]
  claim_order_id?: string
  item_id?: string

  /** The Line Item that the claim refers to */
  item?: LineItem
  variant_id?: string

  /** The Product Variant that is claimed. */
  variant?: ProductVariant

  /** The reason for the claim */
  reason?: "missing_item" | "wrong_item" | "production_failure" | "other"

  /** An optional note about the claim, for additional information */
  note?: string

  /** The quantity of the item that is being claimed; must be less than or equal to the amount purchased in the original order. */
  quantity?: number

  /** User defined tags for easy filtering and grouping. */
  tags?: ClaimTag[]

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  updated_at?: string

  /** @format date-time */
  deleted_at?: string
  metadata?: object
}

/**
 * Claim Orders represent a group of faulty or missing items. Each claim order consists of a subset of items associated with an original order, and can contain additional information about fulfillments and returns.
 */
export interface ClaimOrder {
  id?: string
  type?: "refund" | "replace"
  payment_status?: "na" | "not_refunded" | "refunded"
  fulfillment_status?:
    | "not_fulfilled"
    | "partially_fulfilled"
    | "fulfilled"
    | "partially_shipped"
    | "shipped"
    | "partially_returned"
    | "returned"
    | "canceled"
    | "requires_action"

  /** The items that have been claimed */
  claim_items?: ClaimItem[]

  /** Refers to the new items to be shipped when the claim order has the type `replace` */
  additional_items?: LineItem[]

  /** The id of the order that the claim comes from. */
  order_id?: string

  /** Holds information about the return if the claim is to be returned */
  return_order?: Return

  /** The id of the address that the new items should be shipped to */
  shipping_address_id?: string

  /** The address that the new items should be shipped to */
  shipping_address?: Address

  /** The shipping methods that the claim order will be shipped with. */
  shipping_methods?: ShippingMethod[]

  /** The fulfillments of the new items to be shipped */
  fulfillments?: Fulfillment[]

  /** The amount that will be refunded in conjunction with the claim */
  refund_amount?: number

  /**
   * The date with timezone at which the Swap was canceled.
   * @format date-time
   */
  canceled_at?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  updated_at?: string

  /** @format date-time */
  deleted_at?: string

  /** Flag for describing whether or not notifications related to this should be send. */
  no_notification?: boolean
  metadata?: object
}

/**
 * Claim Tags are user defined tags that can be assigned to claim items for easy filtering and grouping.
 */
export interface ClaimTag {
  /** The id of the claim tag. Will be prefixed by `ctag_`. */
  id?: string

  /** The value that the claim tag holds */
  value?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  update_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Country details
 */
export interface Country {
  /** The database id of the country */
  id?: number

  /** The 2 character ISO code for the country. */
  iso_2?: string

  /** The 3 character ISO code for the country. */
  iso_3?: string

  /** The numerical ISO code for the country. */
  num_code?: string

  /** The normalized country name; in upper case. */
  name?: string

  /** The country name appropriate for display. */
  display_name?: string
}

/**
 * Currency
 */
export interface Currency {
  /** The 3 character ISO code for the currency. */
  code?: string

  /** The symbol used to indicate the currency. */
  symbol?: string

  /** The native symbol used to indicate the currency. */
  symbol_native?: string

  /** The written name of the currency */
  name?: string
}

/**
 * Custom Shipping Options are 'overriden' Shipping Options. Store managers can attach a Custom Shipping Option to a cart in order to set a custom price for a particular Shipping Option
 */
export interface CustomShippingOption {
  /** The id of the Custom Shipping Option. This value will be prefixed with `cso_`. */
  id?: string

  /** The custom price set that will override the shipping option's original price */
  price?: number

  /** The id of the Shipping Option that the custom shipping option overrides */
  shipping_option_id?: ShippingOption

  /** The id of the Cart that the custom shipping option is attached to */
  cart_id?: Cart

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Represents a customer group
 */
export interface CustomerGroup {
  id?: string
  name?: string
  customers?: object[]

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  updated_at?: string

  /** @format date-time */
  deleted_at?: string
  metadata?: object
}

/**
 * Represents a customer
 */
export interface Customer {
  id?: string
  email?: string
  billing_address_id?: string

  /** The Customer's billing address. */
  billing_address?: Address
  shipping_addresses?: Address[]
  first_name?: string
  last_name?: string
  phone?: string
  has_account?: boolean

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  updated_at?: string

  /** @format date-time */
  deleted_at?: string
  metadata?: object
}

/**
 * Holds the rules that governs how a Discount is calculated when applied to a Cart.
 */
export interface DiscountRule {
  /** The id of the Discount Rule. Will be prefixed by `dru_`. */
  id?: string

  /** The type of the Discount, can be `fixed` for discounts that reduce the price by a fixed amount, `percentage` for percentage reductions or `free_shipping` for shipping vouchers. */
  type?: "fixed" | "percentage" | "free_shipping"

  /** A short description of the discount */
  description?: string

  /** The value that the discount represents; this will depend on the type of the discount */
  value?: number

  /** The scope that the discount should apply to. */
  allocation?: "total" | "item"

  /** A set of Products that the discount can be used for. */
  valid_for?: Product[]

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  update_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Represents a discount that can be applied to a cart for promotional purposes.
 */
export interface Discount {
  /** The id of the Discount. Will be prefixed by `disc_`. */
  id?: string

  /** A unique code for the discount - this will be used by the customer to apply the discount */
  code?: string

  /** A flag to indicate if multiple instances of the discount can be generated. I.e. for newsletter discounts */
  is_dynamic?: boolean

  /** The Discount Rule that governs the behaviour of the Discount */
  rule?: DiscountRule

  /** Whether the Discount has been disabled. Disabled discounts cannot be applied to carts */
  is_disabled?: boolean

  /** The Discount that the discount was created from. This will always be a dynamic discount */
  parent_discount_id?: string

  /**
   * The time at which the discount can be used.
   * @format date-time
   */
  starts_at?: string

  /**
   * The time at which the discount can no longer be used.
   * @format date-time
   */
  ends_at?: string

  /** The Regions in which the Discount can be used */
  regions?: Region[]

  /** The maximum number of times that a discount can be used. */
  usage_limit?: number

  /** The number of times a discount has been used. */
  usage_count?: number

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Represents a draft order
 */
export interface DraftOrder {
  id?: string
  status?: "open" | "completed"
  display_id?: string
  cart_id?: string
  cart?: Cart
  order_id?: string
  order?: Order

  /** @format date-time */
  canceled_at?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  update_at?: string

  /** @format date-time */
  deleted_at?: string

  /** @format date-time */
  completed_at?: string
  no_notification_order?: boolean
  metadata?: object
  idempotency_key?: string
}

/**
 * Correlates a Line Item with a Fulfillment, keeping track of the quantity of the Line Item.
 */
export interface FulfillmentItem {
  /** The id of the Fulfillment that the Fulfillment Item belongs to. */
  fulfillment_id?: string

  /** The id of the Line Item that the Fulfillment Item references. */
  item_id?: string

  /** The Line Item that the Fulfillment Item references. */
  item?: LineItem

  /** The quantity of the Line Item that is included in the Fulfillment. */
  quantity?: number
}

/**
 * Represents a fulfillment provider plugin and holds its installation status.
 */
export interface FulfillmentProvider {
  /** The id of the fulfillment provider as given by the plugin. */
  id?: string

  /** Whether the plugin is installed in the current version. Plugins that are no longer installed are not deleted by will have this field set to `false`. */
  is_installed?: boolean
}

/**
 * Fulfillments are created once store operators can prepare the purchased goods. Fulfillments will eventually be shipped and hold information about how to track shipments. Fulfillments are created through a provider, which is typically an external shipping aggregator, shipping partner og 3PL, most plugins will have asynchronous communications with these providers through webhooks in order to automatically update and synchronize the state of Fulfillments.
 */
export interface Fulfillment {
  /** The id of the Fulfillment. This value will be prefixed by `ful_`. */
  id?: string

  /** The id of the Claim that the Fulfillment belongs to. */
  claim_order_id?: string

  /** The id of the Swap that the Fulfillment belongs to. */
  swap_id?: string

  /** The id of the Order that the Fulfillment belongs to. */
  order_id?: string

  /** The id of the Fulfillment Provider responsible for handling the fulfillment */
  provider_id?: string

  /** The Fulfillment Items in the Fulfillment - these hold information about how many of each Line Item has been fulfilled. */
  items?: FulfillmentItem[]

  /** The Tracking Links that can be used to track the status of the Fulfillment, these will usually be provided by the Fulfillment Provider. */
  tracking_links?: TrackingLink[]

  /** The tracking numbers that can be used to track the status of the fulfillment. */
  tracking_numbers?: string[]

  /**
   * The date with timezone at which the Fulfillment was shipped.
   * @format date-time
   */
  shipped_at?: string

  /** Flag for describing whether or not notifications related to this should be send. */
  no_notification?: boolean

  /**
   * The date with timezone at which the Fulfillment was canceled.
   * @format date-time
   */
  canceled_at?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Gift Card Transactions are created once a Customer uses a Gift Card to pay for their Order
 */
export interface GiftCardTransaction {
  /** The id of the Gift Card Transaction. This value will be prefixed by `gct_`. */
  id?: string

  /** The id of the Gift Card that was used in the transaction. */
  gift_card_id?: string

  /** The Gift Card that was used in the transaction. */
  gift_card?: GiftCard

  /** The id of the Order that the Gift Card was used to pay for. */
  order_id?: string

  /** The amount that was used from the Gift Card. */
  amount?: number

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string
}

/**
 * Gift Cards are redeemable and represent a value that can be used towards the payment of an Order.
 */
export interface GiftCard {
  /** The id of the Gift Card. This value will be prefixed by `gift_`. */
  id?: string

  /** The unique code that identifies the Gift Card. This is used by the Customer to redeem the value of the Gift Card. */
  code?: string

  /** The value that the Gift Card represents. */
  value?: number

  /** The remaining value on the Gift Card. */
  balance?: number

  /** The id of the Region in which the Gift Card is available. */
  region_id?: string

  /** The Region in which the Gift Card is available. */
  region?: Region

  /** The id of the Order that the Gift Card was purchased in. */
  order_id?: string

  /** Whether the Gift Card has been disabled. Disabled Gift Cards cannot be applied to carts. */
  is_disabled?: boolean

  /**
   * The time at which the Gift Card can no longer be used.
   * @format date-time
   */
  ends_at?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Images holds a reference to a URL at which the image file can be found.
 */
export interface Image {
  /** The id of the Image. This value will be prefixed by `img_`. */
  id?: string

  /** The URL at which the image file can be found. */
  url?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  update_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Represents an invite
 */
export interface Invite {
  id?: string
  user_email?: string
  role?: "admin" | "member" | "developer"
  accepted?: boolean
  token?: string

  /** @format date-time */
  expores_at?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  updated_at?: string

  /** @format date-time */
  deleted_at?: string
  metadata?: object
}

/**
 * Line Items represent purchasable units that can be added to a Cart for checkout. When Line Items are purchased they will get copied to the resulting order and can eventually be referenced in Fulfillments and Returns. Line Items may also be created when processing Swaps and Claims.
 */
export interface LineItem {
  /** The id of the Line Item. This value will be prefixed by `item_`. */
  id?: string

  /** The id of the Cart that the Line Item belongs to. */
  cart_id?: string

  /** The id of the Order that the Line Item belongs to. */
  order_id?: string

  /** The id of the Swap that the Line Item belongs to. */
  swap_id?: string

  /** The id of the Claim that the Line Item belongs to. */
  claim_order_id?: string

  /** The title of the Line Item, this should be easily identifiable by the Customer. */
  title?: string

  /** A more detailed description of the contents of the Line Item. */
  description?: string

  /** A URL string to a small image of the contents of the Line Item. */
  thumbnail?: string

  /** Flag to indicate if the Line Item is a Gift Card. */
  is_giftcard?: boolean

  /** Flag to indicate if new Line Items with the same variant should be merged or added as an additional Line Item. */
  should_merge?: boolean

  /** Flag to indicate if the Line Item should be included when doing discount calculations. */
  allow_discounts?: boolean

  /** The price of one unit of the content in the Line Item. This should be in the currency defined by the Cart/Order/Swap/Claim that the Line Item belongs to. */
  unit_price?: boolean

  /** The id of the Product Variant contained in the Line Item. */
  variant_id?: string

  /** The Product Variant contained in the Line Item. */
  variant?: ProductVariant

  /** The quantity of the content in the Line Item. */
  quantity?: number

  /** The quantity of the Line Item that has been fulfilled. */
  fulfilled_quantity?: number

  /** The quantity of the Line Item that has been returned. */
  returned_quantity?: number

  /** The quantity of the Line Item that has been shipped. */
  shipped_quantity?: number

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object

  /** The amount that can be refunded from the given Line Item. Takes taxes and discounts into consideration. */
  refundable?: number
}

/**
 * Money Amounts represents an amount that a given Product Variant can be purcased for. Each Money Amount either has a Currency or Region associated with it to indicate the pricing in a given Currency or, for fully region-based pricing, the given price in a specific Region. If region-based pricing is used the amount will be in the currency defined for the Reigon.
 */
export interface MoneyAmount {
  /** The id of the Money Amount. This value will be prefixed by `ma_`. */
  id?: string

  /** The 3 character currency code that the Money Amount is given in. */
  currency_code?: string

  /** The amount in the smallest currecny unit (e.g. cents 100 cents to charge $1) that the Product Variant will cost. */
  amount?: number

  /** An optional sale amount that the Product Variant will be available for when defined. */
  sale_amount?: number

  /** The id of the Product Variant that the Money Amount belongs to. */
  variant_id?: string

  /** The id of the Region that the Money Amount is defined for. */
  region_id?: string

  /** The Region that the Money Amount is defined for. */
  region?: Region

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string
}

/**
 * Notes are elements which we can use in association with different resources to allow users to describe additional information in relation to these.
 */
export interface Note {
  /** The id of the Note. This value will be prefixed by `note_`. */
  id?: string

  /** The type of resource that the Note refers to. */
  resource_type?: string

  /** The id of the resource that the Note refers to. */
  resource_id?: string

  /** The contents of the note. */
  value?: string

  /** The author of the note. */
  author?: User

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Represents a notification provider plugin and holds its installation status.
 */
export interface NotificationProvider {
  /** The id of the notification provider as given by the plugin. */
  id?: string

  /** Whether the plugin is installed in the current version. Plugins that are no longer installed are not deleted by will have this field set to `false`. */
  is_installed?: boolean
}

/**
 * Notifications a communications sent via Notification Providers as a reaction to internal events such as `order.placed`. Notifications can be used to show a chronological timeline for communications sent to a Customer regarding an Order, and enables resends.
 */
export interface Notification {
  /** The id of the Notification. This value will be prefixed by `noti_`. */
  id?: string

  /** The name of the event that the notification was sent for. */
  event_name?: string

  /** The type of resource that the Notification refers to. */
  resource_type?: string

  /** The id of the resource that the Notification refers to. */
  resource_id?: string

  /** The id of the Customer that the Notification was sent to. */
  customer_id?: string

  /** The Customer that the Notification was sent to. */
  customer?: Customer

  /** The address that the Notification was sent to. This will usually be an email address, but represent other addresses such as a chat bot user id */
  to?: string

  /** The data that the Notification was sent with. This contains all the data necessary for the Notification Provider to initiate a resend. */
  data?: object

  /** The id of the Notification that was originally sent. */
  parent_id?: string

  /** The resends that have been completed after the original Notification. */
  resends?: NotificationResend[]

  /** The id of the Notification Provider that handles the Notification. */
  provider_id?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string
}

/**
 * A resend of a Notification.
 */
export interface NotificationResend {
  /** The id of the Notification. This value will be prefixed by `noti_`. */
  id?: string

  /** The name of the event that the notification was sent for. */
  event_name?: string

  /** The type of resource that the Notification refers to. */
  resource_type?: string

  /** The id of the resource that the Notification refers to. */
  resource_id?: string

  /** The address that the Notification was sent to. This will usually be an email address, but represent other addresses such as a chat bot user id */
  to?: string

  /** The data that the Notification was sent with. This contains all the data necessary for the Notification Provider to initiate a resend. */
  data?: object

  /** The id of the Notification that was originally sent. */
  parent_id?: string

  /** The id of the Notification Provider that handles the Notification. */
  provider_id?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string
}

/**
 * Represent an OAuth app
 */
export interface OAuth {
  id?: string
  display_name?: string
  application_name?: string
  install_url?: string
  uninstall_url?: number
  data?: object
}

/**
 * Represents an order
 */
export interface Order {
  id?: string
  status?: "pending" | "completed" | "archived" | "canceled" | "requires_action"
  fulfillment_status?:
    | "not_fulfilled"
    | "partially_fulfilled"
    | "fulfilled"
    | "partially_shipped"
    | "shipped"
    | "partially_returned"
    | "returned"
    | "canceled"
    | "requires_action"
  payment_status?:
    | "not_paid"
    | "awaiting"
    | "captured"
    | "partially_refunded"
    | "refuneded"
    | "canceled"
    | "requires_action"
  display_id?: number
  cart_id?: string
  currency_code?: string
  tax_rate?: number
  discounts?: Discount[]
  email?: string
  billing_address_id?: string
  billing_address?: Address
  shipping_address_id?: string
  shipping_address?: Address
  items?: LineItem[]
  region_id?: string
  region?: Region
  gift_cards?: GiftCard[]
  customer_id?: string
  customer?: Customer
  payment_session?: PaymentSession
  payment_sessions?: PaymentSession[]
  payments?: Payment[]
  shipping_methods?: ShippingMethod[]
  fulfillments?: Fulfillment[]
  returns?: Return[]
  claims?: ClaimOrder[]
  refunds?: Refund[]
  swaps?: Refund[]
  gift_card_transactions?: GiftCardTransaction[]

  /** @format date-time */
  canceled_at?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  update_at?: string

  /** @format date-time */
  deleted_at?: string
  metadata?: object
  shipping_total?: number
  discount_total?: number
  tax_total?: number
  subtotal?: number
  refundable_amount?: number
  gift_card_total?: number
  paid_total?: number

  /** Flag for describing whether or not notifications related to this should be send. */
  no_notification?: boolean
}

/**
 * Represents a Payment Provider plugin and holds its installation status.
 */
export interface PaymentProvider {
  /** The id of the payment provider as given by the plugin. */
  id?: string

  /** Whether the plugin is installed in the current version. Plugins that are no longer installed are not deleted by will have this field set to `false`. */
  is_installed?: boolean
}

/**
 * Payment Sessions are created when a Customer initilizes the checkout flow, and can be used to hold the state of a payment flow. Each Payment Session is controlled by a Payment Provider, who is responsible for the communication with external payment services. Authorized Payment Sessions will eventually get promoted to Payments to indicate that they are authorized for capture/refunds/etc.
 */
export interface PaymentSession {
  /** The id of the Payment Session. This value will be prefixed with `ps_`. */
  id?: string

  /** The id of the Cart that the Payment Session is created for. */
  cart_id?: string

  /** The id of the Payment Provider that is responsible for the Payment Session */
  provider_id?: string

  /** A flag to indicate if the Payment Session has been selected as the method that will be used to complete the purchase. */
  is_selected?: boolean

  /** Indicates the status of the Payment Session. Will default to `pending`, and will eventually become `authorized`. Payment Sessions may have the status of `requires_more` to indicate that further actions are to be completed by the Customer. */
  status?: "authorized" | "pending" | "requires_more" | "error" | "canceled"

  /** The data required for the Payment Provider to identify, modify and process the Payment Session. Typically this will be an object that holds an id to the external payment session, but can be an empty object if the Payment Provider doesn't hold any state. */
  data?: object

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string
}

/**
 * Payments represent an amount authorized with a given payment method, Payments can be captured, canceled or refunded.
 */
export interface Payment {
  /** The id of the Payment. This value will be prefixed with `pay_`. */
  id?: string

  /** The id of the Swap that the Payment is used for. */
  swap_id?: string

  /** The id of the Order that the Payment is used for. */
  order_id?: string

  /** The id of the Cart that the Payment Session is created for. */
  cart_id?: string

  /** The amount that the Payment has been authorized for. */
  amount?: number

  /** The 3 character ISO currency code that the Payment is completed in. */
  currency_code?: string

  /** The amount of the original Payment amount that has been refunded back to the Customer. */
  amount_refunded?: number

  /** The id of the Payment Provider that is responsible for the Payment */
  provider_id?: string

  /** The data required for the Payment Provider to identify, modify and process the Payment. Typically this will be an object that holds an id to the external payment session, but can be an empty object if the Payment Provider doesn't hold any state. */
  data?: object

  /**
   * The date with timezone at which the Payment was captured.
   * @format date-time
   */
  captured_at?: string

  /**
   * The date with timezone at which the Payment was canceled.
   * @format date-time
   */
  canceled_at?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Product Collections represents a group of Products that are related.
 */
export interface ProductCollection {
  /** The id of the Product Collection. This value will be prefixed with `pcol_`. */
  id?: string

  /** The title that the Product Collection is identified by. */
  title?: string

  /** A unique string that identifies the Product Collection - can for example be used in slug structures. */
  handle?: string

  /** The Products contained in the Product Collection. */
  products?: object[]

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * A value given to a Product Variant's option set. Product Variant have a Product Option Value for each of the Product Options defined on the Product.
 */
export interface ProductOptionValue {
  /** The id of the Product Option Value. This value will be prefixed with `optval_`. */
  id?: string

  /** The value that the Product Variant has defined for the specific Product Option (e.g. if the Product Option is "Size" this value could be "Small", "Medium" or "Large"). */
  value?: string

  /** The id of the Product Option that the Product Option Value is defined for. */
  option_id?: string

  /** The id of the Product Variant that the Product Option Value is defined for. */
  variant_id?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Product Options define properties that may vary between different variants of a Product. Common Product Options are "Size" and "Color", but Medusa doesn't limit what Product Options that can be defined.
 */
export interface ProductOption {
  /** The id of the Product Option. This value will be prefixed with `opt_`. */
  id?: string

  /** The title that the Product Option is defined by (e.g. "Size"). */
  title?: string

  /** The Product Option Values that are defined for the Product Option. */
  values?: ProductOptionValue[]

  /** The id of the Product that the Product Option is defined for. */
  product_id?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Product Tags can be added to Products for easy filtering and grouping.
 */
export interface ProductTag {
  /** The id of the Product Tag. This value will be prefixed with `ptag_`. */
  id?: string

  /** The value that the Product Tag represents (e.g. "Pants"). */
  value?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Associates a tax rate with a product to indicate that the product is taxed in a certain way
 */
export interface ProductTaxRate {
  /** The id of the Product */
  product_id?: string

  /** The id of the Tax Rate */
  rate_id?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Associates a tax rate with a product type to indicate that the product type is taxed in a certain way
 */
export interface ProductTypeTaxRate {
  /** The id of the Product type */
  product_type_id?: string

  /** The id of the Tax Rate */
  rate_id?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Product Type can be added to Products for filtering and reporting purposes.
 */
export interface ProductType {
  /** The id of the Product Type. This value will be prefixed with `ptyp_`. */
  id?: string

  /** The value that the Product Type represents (e.g. "Clothing"). */
  value?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Product Variants represent a Product with a specific set of Product Option configurations. The maximum number of Product Variants that a Product can have is given by the number of available Product Option combinations.
 */
export interface ProductVariant {
  /** The id of the Product Variant. This value will be prefixed with `variant_`. */
  id?: string

  /** A title that can be displayed for easy identification of the Product Variant. */
  title?: string

  /** The id of the Product that the Product Variant belongs to. */
  product_id?: string

  /** The Money Amounts defined for the Product Variant. Each Money Amount represents a price in a given currency or a price in a specific Region. */
  prices?: MoneyAmount[]

  /** The unique stock keeping unit used to identify the Product Variant. This will usually be a unqiue identifer for the item that is to be shipped, and can be referenced across multiple systems. */
  sku?: string

  /** A generic field for a GTIN number that can be used to identify the Product Variant. */
  barcode?: string

  /** An EAN barcode number that can be used to identify the Product Variant. */
  ean?: string

  /** A UPC barcode number that can be used to identify the Product Variant. */
  upc?: string

  /** The current quantity of the item that is stocked. */
  inventory_quantity?: number

  /** Whether the Product Variant should be purchasable when `inventory_quantity` is 0. */
  allow_backorder?: boolean

  /** Whether Medusa should manage inventory for the Product Variant. */
  manage_inventory?: boolean

  /** The Harmonized System code of the Product Variant. May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  hs_code?: string

  /** The country in which the Product Variant was produced. May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  origin_country?: string

  /** The Manufacturers Identification code that identifies the manufacturer of the Product Variant. May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  mid_code?: string

  /** The material and composition that the Product Variant is made of, May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  material?: string

  /** The weight of the Product Variant. May be used in shipping rate calculations. */
  weight?: string

  /** The height of the Product Variant. May be used in shipping rate calculations. */
  height?: string

  /** The width of the Product Variant. May be used in shipping rate calculations. */
  width?: string

  /** The length of the Product Variant. May be used in shipping rate calculations. */
  length?: string

  /** The Product Option Values specified for the Product Variant. */
  options?: ProductOptionValue[]

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Products are a grouping of Product Variants that have common properties such as images and descriptions. Products can have multiple options which define the properties that Product Variants differ by.
 */
export interface Product {
  /** The id of the Product. This value will be prefixed with `prod_`. */
  id?: string

  /** A title that can be displayed for easy identification of the Product. */
  title?: string

  /** An optional subtitle that can be used to further specify the Product. */
  subtitle?: string

  /** A short description of the Product. */
  description?: string

  /** A unique identifier for the Product (e.g. for slug structure). */
  handle?: string

  /** Whether the Product represents a Gift Card. Products that represent Gift Cards will automatically generate a redeemable Gift Card code once they are purchased. */
  is_giftcard?: boolean

  /** Whether the Product can be discounted. Discounts will not apply to Line Items of this Product when this flag is set to `false`. */
  discountable?: boolean

  /** Images of the Product */
  images?: Image[]

  /** A URL to an image file that can be used to identify the Product. */
  thumbnail?: string

  /** The Product Options that are defined for the Product. Product Variants of the Product will have a unique combination of Product Option Values. */
  options?: ProductOption[]

  /** The Product Variants that belong to the Product. Each will have a unique combination of Product Option Values. */
  variants?: ProductVariant[]

  /** The id of the Shipping Profile that the Product belongs to. Shipping Profiles have a set of defined Shipping Options that can be used to Fulfill a given set of Products. */
  profile_id?: string

  /** The Harmonized System code of the Product Variant. May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  hs_code?: string

  /** The country in which the Product Variant was produced. May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  origin_country?: string

  /** The Manufacturers Identification code that identifies the manufacturer of the Product Variant. May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  mid_code?: string

  /** The material and composition that the Product Variant is made of, May be used by Fulfillment Providers to pass customs information to shipping carriers. */
  material?: string

  /** The weight of the Product Variant. May be used in shipping rate calculations. */
  weight?: string

  /** The height of the Product Variant. May be used in shipping rate calculations. */
  height?: string

  /** The width of the Product Variant. May be used in shipping rate calculations. */
  width?: string

  /** The length of the Product Variant. May be used in shipping rate calculations. */
  length?: string

  /** The Product Type of the Product (e.g. "Clothing") */
  type?: ProductType

  /** The Product Collection that the Product belongs to (e.g. "SS20") */
  collection?: ProductCollection

  /** The Product Tags assigned to the Product. */
  tags?: ProductTag[]

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Refund represent an amount of money transfered back to the Customer for a given reason. Refunds may occur in relation to Returns, Swaps and Claims, but can also be initiated by a store operator.
 */
export interface Refund {
  /** The id of the Refund. This value will be prefixed with `ref_`. */
  id?: string

  /** The id of the Order that the Refund is related to. */
  order_id?: string

  /** The amount that has be refunded to the Customer. */
  amount?: number

  /** An optional note explaining why the amount was refunded. */
  note?: string

  /** The reason given for the Refund, will automatically be set when processed as part of a Swap, Claim or Return. */
  reason?: "discount" | "return" | "swap" | "claim" | "other"

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Regions hold settings for how Customers in a given geographical location shop. The is, for example, where currencies and tax rates are defined. A Region can consist of multiple countries to accomodate common shopping settings across countries.
 */
export interface Region {
  /** The id of the Region. This value will be prefixed with `reg_`. */
  id?: string

  /** The name of the region as displayed to the customer. If the Region only has one country it is recommended to write the country name. */
  name?: string

  /** The 3 character ISO currency code that Customers will shop in in the Region. */
  currency_code?: string

  /** The tax rate that should be charged on purchases in the Region. */
  tax_rate?: number

  /** The tax code used on purchases in the Region. This may be used by other systems for accounting purposes. */
  tax_code?: string

  /** The countries that are included in the Region. */
  countries?: Country[]

  /** The Payment Providers that can be used to process Payments in the Region. */
  payment_providers?: PaymentProvider[]

  /** The Fulfillment Providers that can be used to fulfill orders in the Region. */
  fulfillment_providers?: FulfillmentProvider[]

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Correlates a Line Item with a Return, keeping track of the quantity of the Line Item that will be returned.
 */
export interface ReturnItem {
  /** The id of the Return that the Return Item belongs to. */
  return_id?: string

  /** The id of the Line Item that the Return Item references. */
  item_id?: string

  /** The Line Item that the Return Item references. */
  item?: LineItem

  /** The quantity of the Line Item that is included in the Return. */
  quantity?: number

  /** Whether the Return Item was requested initially or received unexpectedly in the warehouse. */
  is_requested?: boolean

  /** The quantity that was originally requested to be returned. */
  requested_quantity?: number

  /** The quantity that was received in the warehouse. */
  recieved_quantity?: number

  /** The reason for returning the item. */
  reason?: ReturnReason

  /** An optional note with additional details about the Return. */
  note?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * A Reason for why a given product is returned. A Return Reason can be used on Return Items in order to indicate why a Line Item was returned.
 */
export interface ReturnReason {
  /** The id of the Return Reason will start with `rr_`. */
  id?: string

  /** A description of the Reason. */
  description?: string

  /** A text that can be displayed to the Customer as a reason. */
  label?: string

  /** The value to identify the reason by. */
  value?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Return orders hold information about Line Items that a Customer wishes to send back, along with how the items will be returned. Returns can be used as part of a Swap.
 */
export interface Return {
  /** The id of the Return. This value will be prefixed with `ret_`. */
  id?: string

  /** Status of the Return. */
  status?: "requested" | "received" | "requires_action"

  /** The Return Items that will be shipped back to the warehouse. type: array items: $ref: */
  items?: any

  /** The id of the Swap that the Return is a part of. */
  swap_id?: string

  /** The id of the Order that the Return is made from. */
  order_id?: string

  /** The id of the Claim that the Return is a part of. */
  claim_order_id?: string

  /** The Shipping Method that will be used to send the Return back. Can be null if the Customer facilitates the return shipment themselves. */
  shipping_method?: ShippingMethod

  /** Data about the return shipment as provided by the Fulfilment Provider that handles the return shipment. */
  shipping_data?: object

  /** The amount that should be refunded as a result of the return. */
  refund_amount?: number

  /**
   * The date with timezone at which the return was received.
   * @format date-time
   */
  received_at?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /** When set to true, no notification will be sent related to this return. */
  no_notification?: boolean

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Shipping Methods represent a way in which an Order or Return can be shipped. Shipping Methods are built from a Shipping Option, but may contain additional details, that can be necessary for the Fulfillment Provider to handle the shipment.
 */
export interface ShippingMethod {
  /** The id of the Shipping Method. This value will be prefixed with `sm_`. */
  id?: string

  /** The id of the Shipping Option that the Shipping Method is built from. */
  shipping_option_id?: string

  /** The Shipping Option that the Shipping Method is built from. */
  shipping_option?: ShippingOption

  /** The id of the Order that the Shipping Method is used on. */
  order_id?: string

  /** The id of the Return that the Shipping Method is used on. */
  return_id?: string

  /** The id of the Swap that the Shipping Method is used on. */
  swap_id?: string

  /** The id of the Cart that the Shipping Method is used on. */
  cart_id?: string

  /** The id of the Claim that the Shipping Method is used on. */
  claim_order_id?: string

  /** The amount to charge for the Shipping Method. The currency of the price is defined by the Region that the Order that the Shipping Method belongs to is a part of. */
  price?: number

  /** Additional data that the Fulfillment Provider needs to fulfill the shipment. This is used in combination with the Shipping Options data, and may contain information such as a drop point id. */
  data?: object
}

/**
 * A requirement that a Cart must satisfy for the Shipping Option to be available to the Cart.
 */
export interface ShippingOptionRequirement {
  /** The id of the Shipping Option Requirement. This value will be prefixed with `sor_`. */
  id?: string

  /** The id of the Shipping Option that the Shipping Option Requirement belongs to. */
  shipping_option_id?: string

  /** The type of the requirement, this defines how the value will be compared to the Cart's total. `min_subtotal` requirements define the minimum subtotal that is needed for the Shipping Option to be available, while the `max_subtotal` defines the maximum subtotal that the Cart can have for the Shipping Option to be available. */
  type?: "min_subtotal" | "max_subtotal"

  /** The amount to compare the Cart subtotal to. */
  amount?: number
}

/**
 * Shipping Options represent a way in which an Order or Return can be shipped. Shipping Options have an associated Fulfillment Provider that will be used when the fulfillment of an Order is initiated. Shipping Options themselves cannot be added to Carts, but serve as a template for Shipping Methods. This distinction makes it possible to customize individual Shipping Methods with additional information.
 */
export interface ShippingOption {
  /** The id of the Shipping Option. This value will be prefixed with `so_`. */
  id?: string

  /** The name given to the Shipping Option - this may be displayed to the Customer. */
  name?: string

  /** The id of the Region that the Shipping Option belongs to. */
  region_id?: string

  /** The id of the Region that the Shipping Option belongs to. */
  region?: Region

  /** The id of the Shipping Profile that the Shipping Option belongs to. Shipping Profiles have a set of defined Shipping Options that can be used to Fulfill a given set of Products. */
  profile_id?: string

  /** The id of the Fulfillment Provider, that will be used to process Fulfillments from the Shipping Option. */
  provider_id?: string

  /** The type of pricing calculation that is used when creatin Shipping Methods from the Shipping Option. Can be `flat_rate` for fixed prices or `calculated` if the Fulfillment Provider can provide price calulations. */
  price_type?: "flat_rate" | "calculated"

  /** The amount to charge for shipping when the Shipping Option price type is `flat_rate`. */
  amount?: number

  /** Flag to indicate if the Shipping Option can be used for Return shipments. */
  is_return?: boolean

  /** The requirements that must be satisfied for the Shipping Option to be available for a Cart. */
  requirements?: ShippingOptionRequirement[]

  /** The data needed for the Fulfillment Provider to identify the Shipping Option. */
  data?: object

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Shipping Profiles have a set of defined Shipping Options that can be used to fulfill a given set of Products.
 */
export interface ShippingProfile {
  /** The id of the Shipping Profile. This value will be prefixed with `sp_`. */
  id?: string

  /** The name given to the Shipping profile - this may be displayed to the Customer. */
  name?: string

  /** The type of the Shipping Profile, may be `default`, `gift_card` or `custom`. */
  type?: "default" | "gift_card" | "custom"

  /** The Products that the Shipping Profile defines Shipping Options for. */
  products?: Product[]

  /** The Shipping Options that can be used to fulfill the Products in the Shipping Profile. */
  shipping_options?: ShippingOption[]

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Associates a tax rate with a shipping option to indicate that the shipping option is taxed in a certain way
 */
export interface ShippingTaxRate {
  /** The id of the Shipping Option */
  shipping_option_id?: string

  /** The id of the Tax Rate */
  rate_id?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Holds settings for the Store, such as name, currencies, etc.
 */
export interface Store {
  /** The id of the Store. This value will be prefixed with `store_`. */
  id?: string

  /** The name of the Store - this may be displayed to the Customer. */
  name?: string

  /** The default currency code used when no other currency code is specified. */
  default_currency_code?: string

  /** The currencies that are enabled for the Store. */
  currencies?: Currency[]

  /** A template to generate Swap links from use {{cart_id}} to include the Swap's `cart_id` in the link. */
  swap_link_template?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Swaps can be created when a Customer wishes to exchange Products that they have purchased to different Products. Swaps consist of a Return of previously purchased Products and a Fulfillment of new Products, the amount paid for the Products being returned will be used towards payment for the new Products. In the case where the amount paid for the the Products being returned exceed the amount to be paid for the new Products, a Refund will be issued for the difference.
 */
export interface Swap {
  /** The id of the Swap. This value will be prefixed with `swap_`. */
  id?: string

  /** The status of the Fulfillment of the Swap. */
  fulfillment_status?:
    | "not_fulfilled"
    | "partially_fulfilled"
    | "fulfilled"
    | "partially_shipped"
    | "shipped"
    | "partially_returned"
    | "returned"
    | "canceled"
    | "requires_action"

  /** The status of the Payment of the Swap. The payment may either refer to the refund of an amount or the authorization of a new amount. */
  payment_status?:
    | "not_paid"
    | "awaiting"
    | "captured"
    | "canceled"
    | "difference_refunded"
    | "requires_action"

  /** The id of the Order where the Line Items to be returned where purchased. */
  order_id?: string

  /** The new Line Items to ship to the Customer. */
  additional_items?: LineItem[]

  /** The Return that is issued for the return part of the Swap. */
  return_order?: Return

  /** The Fulfillments used to send the new Line Items. */
  fulfillments?: Fulfillment[]

  /** The Payment authorized when the Swap requires an additional amount to be charged from the Customer. */
  payment?: Payment

  /** The difference that is paid or refunded as a result of the Swap. May be negative when the amount paid for the returned items exceed the total of the new Products. */
  difference_due?: number

  /** The Address to send the new Line Items to - in most cases this will be the same as the shipping address on the Order. */
  shipping_address?: Address

  /** The Shipping Methods used to fulfill the addtional items purchased. */
  shipping_methods?: ShippingMethod[]

  /** The id of the Cart that the Customer will use to confirm the Swap. */
  cart_id?: string

  /** If true, swaps can be completed with items out of stock */
  allow_backorder?: boolean

  /**
   * The date with timezone at which the Swap was confirmed by the Customer.
   * @format date-time
   */
  confirmed_at?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the Swap was canceled.
   * @format date-time
   */
  canceled_at?: string

  /** If set to true, no notification will be sent related to this swap */
  no_notification?: boolean

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Line item that specifies an amount of tax to add to a line item.
 */
export interface TaxLine {
  /** The id of the Tax Line. This value will be prefixed by `tl_`. */
  id?: string

  /** A code to identify the tax type by */
  code?: string

  /** A human friendly name for the tax */
  name?: string

  /** The numeric rate to charge tax by */
  rate?: number

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * The tax service used to calculate taxes
 */
export interface TaxProvider {
  /** The id of the tax provider as given by the plugin. */
  id?: string

  /** Whether the plugin is installed in the current version. Plugins that are no longer installed are not deleted by will have this field set to `false`. */
  is_installed?: boolean
}

/**
 * A Tax Rate can be used to associate a certain rate to charge on products within a given Region
 */
export interface TaxRate {
  /** The id of the Tax Rate. This value will be prefixed by `txr_`. */
  id?: string

  /** The numeric rate to charge */
  rate?: number

  /** A code to identify the tax type by */
  code?: string

  /** A human friendly name for the tax */
  name?: string

  /** The id of the Region that the rate belongs to */
  region_id?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object

  /** The amount that can be refunded from the given Line Item. Takes taxes and discounts into consideration. */
  refundable?: number
}

/**
 * Tracking Link holds information about tracking numbers for a Fulfillment. Tracking Links can optionally contain a URL that can be visited to see the status of the shipment.
 */
export interface TrackingLink {
  /** The id of the Tracking Link. This value will be prefixed with `tlink_`. */
  id?: string

  /** The URL at which the status of the shipment can be tracked. */
  url?: string

  /** The tracking number given by the shipping carrier. */
  tracking_number?: string

  /** The id of the Fulfillment that the Tracking Link references. */
  fulfillment_id?: string

  /**
   * The date with timezone at which the resource was created.
   * @format date-time
   */
  created_at?: string

  /**
   * The date with timezone at which the resource was last updated.
   * @format date-time
   */
  updated_at?: string

  /**
   * The date with timezone at which the resource was deleted.
   * @format date-time
   */
  deleted_at?: string

  /** An optional key-value map with additional information. */
  metadata?: object
}

/**
 * Represents a User who can manage store settings.
 */
export interface User {
  /** The unique id of the User. This will be prefixed with `usr_` */
  id?: string

  /** The email of the User */
  email?: string
  first_name?: string

  /** The Customer's billing address. */
  last_name?: Address

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  updated_at?: string

  /** @format date-time */
  deleted_at?: string
  metadata?: object
}

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  ResponseType,
} from "axios"

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"]
  private secure?: boolean
  private format?: ResponseType

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://api.medusa-commerce.com/admin",
    })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  private mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      // @ts-ignore
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`
      )
      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = (format && this.format) || void 0

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      requestParams.headers.common = { Accept: "*/*" }
      requestParams.headers.post = {}
      requestParams.headers.put = {}

      body = this.createFormData(body as Record<string, unknown>)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title Medusa Admin API
 * @version 1.0.0
 * @license MIT
 * @baseUrl https://api.medusa-commerce.com/admin
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Uploads an array of files to the specific fileservice that is installed in medusa.
   *
   * @tags Uploads
   * @name PostUploads
   * @summary Uploads an array of files
   * @request POST:/
   */
  postUploads = (data: { files?: File[] }, params: RequestParams = {}) =>
    this.request<{ uploads?: string[] }, any>({
      path: `/`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    })

  apps = {
    /**
     * @description Generates a token for an application.
     *
     * @tags Apps
     * @name PostApps
     * @summary Generates a token for an application.
     * @request POST:/apps
     */
    postApps: (
      data: { application_name: string; state: string; code: string },
      params: RequestParams = {}
    ) =>
      this.request<{ apps?: OAuth }, any>({
        path: `/apps`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a list of applications.
     *
     * @tags Apps
     * @name GetApps
     * @summary List applications
     * @request GET:/apps
     */
    getApps: (params: RequestParams = {}) =>
      this.request<{ collection?: OAuth }, any>({
        path: `/apps`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  auth = {
    /**
     * @description Logs a User in and authorizes them to manage Store settings.
     *
     * @tags Auth
     * @name PostAuth
     * @summary Authenticate a User
     * @request POST:/auth
     */
    postAuth: (
      data: { email: string; password: string },
      params: RequestParams = {}
    ) =>
      this.request<{ user?: User }, any>({
        path: `/auth`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets the currently logged in User.
     *
     * @tags Auth
     * @name GetAuth
     * @summary Get Session
     * @request GET:/auth
     */
    getAuth: (params: RequestParams = {}) =>
      this.request<{ user?: User }, any>({
        path: `/auth`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  collections = {
    /**
     * @description Updates products associated with a Product Collection
     *
     * @tags Collection
     * @name PostProductsToCollection
     * @summary Updates products associated with a Product Collection
     * @request POST:/collections/{id}/products/batch
     */
    postProductsToCollection: (
      id: string,
      data: { product_ids?: { id?: string }[] },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/collections/${id}/products/batch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Removes products associated with a Product Collection
     *
     * @tags Collection
     * @name DeleteProductsFromCollection
     * @summary Removes products associated with a Product Collection
     * @request DELETE:/collections/{id}/products/batch
     */
    deleteProductsFromCollection: (
      id: string,
      data: { product_ids?: { id?: string }[] },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/collections/${id}/products/batch`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Creates a Product Collection.
     *
     * @tags Collection
     * @name PostCollections
     * @summary Create a Product Collection
     * @request POST:/collections
     */
    postCollections: (
      data: { title: string; handle?: string; metadata?: object },
      params: RequestParams = {}
    ) =>
      this.request<{ collection?: ProductCollection }, any>({
        path: `/collections`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a list of Product Collection.
     *
     * @tags Collection
     * @name GetCollections
     * @summary List Product Collections
     * @request GET:/collections
     */
    getCollections: (
      query?: {
        limit?: string
        offset?: string
        title?: string
        handle?: string
        deleted_at?: object
        created_at?: object
        updated_at?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ collection?: ProductCollection }, any>({
        path: `/collections`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Product Collection.
     *
     * @tags Collection
     * @name DeleteCollectionsCollection
     * @summary Delete a Product Collection
     * @request DELETE:/collections/{id}
     */
    deleteCollectionsCollection: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/collections/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Product Collection.
     *
     * @tags Collection
     * @name GetCollectionsCollection
     * @summary Retrieve a Product Collection
     * @request GET:/collections/{id}
     */
    getCollectionsCollection: (id: string, params: RequestParams = {}) =>
      this.request<{ collection?: ProductCollection }, any>({
        path: `/collections/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Product Collection.
     *
     * @tags Collection
     * @name PostCollectionsCollection
     * @summary Update a Product Collection
     * @request POST:/collections/{id}
     */
    postCollectionsCollection: (
      id: string,
      data: { title?: string; handle?: string; metadata?: object },
      params: RequestParams = {}
    ) =>
      this.request<{ collection?: ProductCollection }, any>({
        path: `/collections/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  customers = {
    /**
     * @description Creates a Customer.
     *
     * @tags Customer
     * @name PostCustomers
     * @summary Create a Customer
     * @request POST:/customers
     */
    postCustomers: (
      data: {
        email: string
        first_name: string
        last_name: string
        phone?: string
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Customers.
     *
     * @tags Customer
     * @name GetCustomers
     * @summary List Customers
     * @request GET:/customers
     */
    getCustomers: (params: RequestParams = {}) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Customer.
     *
     * @tags Customer
     * @name GetCustomersCustomer
     * @summary Retrieve a Customer
     * @request GET:/customers/{id}
     */
    getCustomersCustomer: (id: string, params: RequestParams = {}) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Customer.
     *
     * @tags Customer
     * @name PostCustomersCustomer
     * @summary Update a Customer
     * @request POST:/customers/{id}
     */
    postCustomersCustomer: (
      id: string,
      data: {
        email?: string
        first_name?: string
        last_name?: string
        phone?: string
        password?: string
        groups?: { id: string }[]
        metadata?: object
      },
      query?: { expand?: string[] },
      params: RequestParams = {}
    ) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers/${id}`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  customerGroups = {
    /**
     * @description Creates a CustomerGroup.
     *
     * @tags CustomerGroup
     * @name PostCustomerGroups
     * @summary Create a CustomerGroup
     * @request POST:/customer-groups
     */
    postCustomerGroups: (
      data: { name: string; metadata?: object },
      params: RequestParams = {}
    ) =>
      this.request<{ customer_group?: CustomerGroup }, any>({
        path: `/customer-groups`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a CustomerGroup.
     *
     * @tags CustomerGroup
     * @name DeleteCustomerGroupsCustomerGroup
     * @summary Delete a CustomerGroup
     * @request DELETE:/customer-groups/{id}
     */
    deleteCustomerGroupsCustomerGroup: (
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/customer-groups/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Update a CustomerGroup.
     *
     * @tags CustomerGroup
     * @name PostCustomerGroupsGroup
     * @summary Update a CustomerGroup
     * @request POST:/customer-groups/{id}
     */
    postCustomerGroupsGroup: (
      id: string,
      data: { name: string; metadata?: object },
      params: RequestParams = {}
    ) =>
      this.request<{ customer_group?: CustomerGroup }, any>({
        path: `/customer-groups/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  customerGroup = {
    /**
     * @description Retrieves a Customer Group.
     *
     * @tags CustomerGroup
     * @name GetCustomerGroupsGroup
     * @summary Retrieve a CustomerGroup
     * @request GET:/customer-group/{id}
     */
    getCustomerGroupsGroup: (id: string, params: RequestParams = {}) =>
      this.request<{ customer_group?: CustomerGroup }, any>({
        path: `/customer-group/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  discounts = {
    /**
     * @description Adds a Region to the list of Regions that a Discount can be used in.
     *
     * @tags Discount
     * @name PostDiscountsDiscountRegionsRegion
     * @summary Adds Region availability
     * @request POST:/discounts/{id}/regions/{region_id}
     */
    postDiscountsDiscountRegionsRegion: (
      id: string,
      regionId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts/${id}/regions/${regionId}`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Region from the list of Regions that a Discount can be used in.
     *
     * @tags Discount
     * @name DeleteDiscountsDiscountRegionsRegion
     * @summary Remove Region availability
     * @request DELETE:/discounts/{id}/regions/{region_id}
     */
    deleteDiscountsDiscountRegionsRegion: (
      id: string,
      regionId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts/${id}/regions/${regionId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a Product to the list of Products that a Discount can be used for.
     *
     * @tags Discount
     * @name PostDiscountsDiscountProductsProduct
     * @summary Adds Product availability
     * @request POST:/discounts/{id}/products/{product_id}
     */
    postDiscountsDiscountProductsProduct: (
      id: string,
      productId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts/${id}/products/${productId}`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Product from the list of Products that a Discount can be used for.
     *
     * @tags Discount
     * @name DeleteDiscountsDiscountProductsProduct
     * @summary Remove Product availability
     * @request DELETE:/discounts/{id}/products/{product_id}
     */
    deleteDiscountsDiscountProductsProduct: (
      id: string,
      productId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts/${id}/products/${productId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Discount with a given set of rules that define how the Discount behaves.
     *
     * @tags Discount
     * @name PostDiscounts
     * @summary Creates a Discount
     * @request POST:/discounts
     */
    postDiscounts: (
      data: {
        code: string
        is_dynamic?: string
        rule: DiscountRule
        is_disabled?: boolean
        starts_at?: string
        ends_at?: string
        regions?: string[]
        usage_limit?: number
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Discounts
     *
     * @tags Discount
     * @name GetDiscounts
     * @summary List Discounts
     * @request GET:/discounts
     */
    getDiscounts: (
      query?: {
        q?: string
        is_dynamic?: boolean
        is_disabled?: boolean
        limit?: number
        offset?: number
        expand?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a unique code that can map to a parent Discount. This is useful if you want to automatically generate codes with the same behaviour.
     *
     * @tags Discount
     * @name PostDiscountsDiscountDynamicCodes
     * @summary Create a dynamic Discount code
     * @request POST:/discounts/{id}/dynamic-codes
     */
    postDiscountsDiscountDynamicCodes: (
      id: string,
      data: { code: string; metadata?: object },
      params: RequestParams = {}
    ) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts/${id}/dynamic-codes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Discount.
     *
     * @tags Discount
     * @name DeleteDiscountsDiscount
     * @summary Delete a Discount
     * @request DELETE:/discounts/{id}
     */
    deleteDiscountsDiscount: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/discounts/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Discount
     *
     * @tags Discount
     * @name GetDiscountsDiscount
     * @summary Retrieve a Discount
     * @request GET:/discounts/{id}
     */
    getDiscountsDiscount: (id: string, params: RequestParams = {}) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Discount with a given set of rules that define how the Discount behaves.
     *
     * @tags Discount
     * @name PostDiscountsDiscount
     * @summary Update a Discount
     * @request POST:/discounts/{id}
     */
    postDiscountsDiscount: (
      id: string,
      data: {
        code?: string
        is_dynamic?: string
        rule?: DiscountRule
        is_disabled?: boolean
        starts_at?: string
        ends_at?: string
        regions?: string[]
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a dynamic code from a Discount.
     *
     * @tags Discount
     * @name DeleteDiscountsDiscountDynamicCodesCode
     * @summary Delete a dynamic code
     * @request DELETE:/discounts/{id}/dynamic-codes/{code}
     */
    deleteDiscountsDiscountDynamicCodesCode: (
      id: string,
      code: string,
      params: RequestParams = {}
    ) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts/${id}/dynamic-codes/${code}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Discount by its discount code
     *
     * @tags Discount
     * @name GetDiscountsDiscountCode
     * @summary Retrieve a Discount by code
     * @request GET:/discounts/code/{code}
     */
    getDiscountsDiscountCode: (code: string, params: RequestParams = {}) =>
      this.request<{ discount?: Discount }, any>({
        path: `/discounts/code/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  draftOrders = {
    /**
     * @description Creates a Draft Order
     *
     * @tags Draft Order
     * @name PostDraftOrders
     * @summary Create a Draft Order
     * @request POST:/draft-orders
     */
    postDraftOrders: (
      data: {
        status?: string
        email: string
        billing_address?: Address
        shipping_address?: Address
        items: {
          variant_id?: string
          unit_price?: number
          title?: string
          quantity?: number
          metadata?: object
        }[]
        region_id: string
        discounts?: { code?: string }[]
        customer_id?: string
        no_notification_order?: boolean
        shipping_methods: {
          option_id?: string
          data?: object
          price?: number
        }[]
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ draft_order?: DraftOrder }, any>({
        path: `/draft-orders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves an list of Draft Orders
     *
     * @tags Draft Order
     * @name GetDraftOrders
     * @summary List Draft Orders
     * @request GET:/draft-orders
     */
    getDraftOrders: (params: RequestParams = {}) =>
      this.request<{ draft_order?: DraftOrder }, any>({
        path: `/draft-orders`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Line Item for the Draft Order
     *
     * @tags Draft Order
     * @name PostDraftOrdersDraftOrderLineItems
     * @summary Create a Line Item for Draft Order
     * @request POST:/draft-orders/{id}/line-items
     */
    postDraftOrdersDraftOrderLineItems: (
      id: string,
      data: {
        variant_id?: string
        unit_price?: number
        title?: string
        quantity: number
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ draft_order?: DraftOrder }, any>({
        path: `/draft-orders/${id}/line-items`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Draft Order
     *
     * @tags Draft Order
     * @name DeleteDraftOrdersDraftOrder
     * @summary Delete a Draft Order
     * @request DELETE:/draft-orders/{id}
     */
    deleteDraftOrdersDraftOrder: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/draft-orders/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Draft Order.
     *
     * @tags Draft Order
     * @name GetDraftOrdersDraftOrder
     * @summary Retrieve a Draft Order
     * @request GET:/draft-orders/{id}
     */
    getDraftOrdersDraftOrder: (id: string, params: RequestParams = {}) =>
      this.request<{ draft_order?: DraftOrder }, any>({
        path: `/draft-orders/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Line Item from a Draft Order.
     *
     * @tags Draft Order
     * @name DeleteDraftOrdersDraftOrderLineItemsItem
     * @summary Delete a Line Item
     * @request DELETE:/draft-orders/{id}/line-items/{line_id}
     */
    deleteDraftOrdersDraftOrderLineItemsItem: (
      id: string,
      lineId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ draft_order?: DraftOrder }, any>({
        path: `/draft-orders/${id}/line-items/${lineId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Line Item for a Draft Order
     *
     * @tags Draft Order
     * @name PostDraftOrdersDraftOrderLineItemsItem
     * @summary Update a Line Item for a Draft Order
     * @request POST:/draft-orders/{id}/line-items/{line_id}
     */
    postDraftOrdersDraftOrderLineItemsItem: (
      id: string,
      lineId: string,
      data: {
        unit_price?: number
        title?: string
        quantity?: number
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ draft_order?: DraftOrder }, any>({
        path: `/draft-orders/${id}/line-items/${lineId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a payment for a Draft Order.
     *
     * @tags Draft Order
     * @name PostDraftOrdersDraftOrderRegisterPayment
     * @summary Registers a payment for a Draft Order
     * @request POST:/draft-orders/{id}/register-payment
     */
    postDraftOrdersDraftOrderRegisterPayment: (
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<{ draft_order?: DraftOrder }, any>({
        path: `/draft-orders/${id}/register-payment`,
        method: "POST",
        format: "json",
        ...params,
      }),
  }
  admin = {
    /**
     * @description Updates a Draft Order.
     *
     * @tags Draft Order
     * @name PostDraftOrdersDraftOrder
     * @summary Update a Draft Order"
     * @request POST:/admin/draft-orders/{id}
     */
    postDraftOrdersDraftOrder: (
      id: string,
      data: {
        region_id?: string
        email?: string
        billing_address?: Address
        shipping_address?: Address
        discounts?: { code?: string }[]
        no_notification_order?: boolean
        customer_id?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<{ draft_order?: DraftOrder }, any>({
        path: `/admin/draft-orders/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  giftCards = {
    /**
     * @description Creates a Gift Card that can redeemed by its unique code. The Gift Card is only valid within 1 region.
     *
     * @tags Gift Card
     * @name PostGiftCards
     * @summary Create a Gift Card
     * @request POST:/gift-cards
     */
    postGiftCards: (
      data: {
        value?: number
        is_disabled?: boolean
        ends_at?: string
        region_id?: string[]
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ gift_card?: GiftCard }, any>({
        path: `/gift-cards`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Gift Cards.
     *
     * @tags Gift Card
     * @name GetGiftCards
     * @summary List Gift Cards
     * @request GET:/gift-cards
     */
    getGiftCards: (params: RequestParams = {}) =>
      this.request<{ gift_cards?: GiftCard[] }, any>({
        path: `/gift-cards`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Gift Card
     *
     * @tags Gift Card
     * @name DeleteGiftCardsGiftCard
     * @summary Delete a Gift Card
     * @request DELETE:/gift-cards/{id}
     */
    deleteGiftCardsGiftCard: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/gift-cards/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Gift Card.
     *
     * @tags Gift Card
     * @name GetGiftCardsGiftCard
     * @summary Retrieve a Gift Card
     * @request GET:/gift-cards/{id}
     */
    getGiftCardsGiftCard: (id: string, params: RequestParams = {}) =>
      this.request<{ gift_card?: GiftCard }, any>({
        path: `/gift-cards/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Gift Card that can redeemed by its unique code. The Gift Card is only valid within 1 region.
     *
     * @tags Gift Card
     * @name PostGiftCardsGiftCard
     * @summary Create a Gift Card
     * @request POST:/gift-cards/{id}
     */
    postGiftCardsGiftCard: (
      id: string,
      data: {
        balance?: number
        is_disabled?: boolean
        ends_at?: string
        region_id?: string[]
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ gift_card?: GiftCard }, any>({
        path: `/gift-cards/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  invites = {
    /**
     * @description Accepts an Invite and creates a corresponding user
     *
     * @tags Invites
     * @name PostInvitesInviteAccept
     * @summary Accept an Invite
     * @request POST:/invites/accept
     */
    postInvitesInviteAccept: (
      data: {
        token: string
        user: { first_name: string; last_name: string; password: string }
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/invites/accept`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Creates an Invite and triggers an 'invite' created event
     *
     * @tags Invites
     * @name PostInvites
     * @summary Create an Invite
     * @request POST:/invites
     */
    postInvites: (
      data: { user: string; role: string },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/invites`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Lists all Invites
     *
     * @tags Invites
     * @name GetInvites
     * @summary Lists all Invites
     * @request GET:/invites
     */
    getInvites: (params: RequestParams = {}) =>
      this.request<{ invites?: Invite[] }, any>({
        path: `/invites`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Creates an Invite and triggers an 'invite' created event
     *
     * @tags Invites
     * @name DeleteInvitesInvite
     * @summary Create an Invite
     * @request DELETE:/invites/{invite_id}
     */
    deleteInvitesInvite: (inviteId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/invites/${inviteId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Resends an Invite by triggering the 'invite' created event again
     *
     * @tags Invites
     * @name PostInvitesInviteResend
     * @summary Resend an Invite
     * @request POST:/invites/{invite_id}/resend
     */
    postInvitesInviteResend: (inviteId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/invites/${inviteId}/resend`,
        method: "POST",
        ...params,
      }),
  }
  notes = {
    /**
     * @description Creates a Note which can be associated with any resource as required.
     *
     * @tags Note
     * @name PostNotes
     * @summary Creates a Note
     * @request POST:/notes
     */
    postNotes: (
      data: { resource_id?: string; resource_type?: string; value?: string },
      params: RequestParams = {}
    ) =>
      this.request<{ note?: Note }, any>({
        path: `/notes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of notes
     *
     * @tags Note
     * @name GetNotes
     * @summary List Notes
     * @request GET:/notes
     */
    getNotes: (
      limit: number,
      offset: number,
      resourceId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ notes?: Note[] }, any>({
        path: `/notes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Note.
     *
     * @tags Note
     * @name DeleteNotesNote
     * @summary Deletes a Note
     * @request DELETE:/notes/{id}
     */
    deleteNotesNote: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; deleted?: boolean }, any>({
        path: `/notes/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a single note using its id
     *
     * @tags Note
     * @name GetNotesNote
     * @summary Get Note
     * @request GET:/notes/{id}
     */
    getNotesNote: (id: string, params: RequestParams = {}) =>
      this.request<{ note?: Note }, any>({
        path: `/notes/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Note associated with some resource
     *
     * @tags Note
     * @name PostNotesNote
     * @summary Updates a Note
     * @request POST:/notes/{id}
     */
    postNotesNote: (
      id: string,
      data: { value: string },
      params: RequestParams = {}
    ) =>
      this.request<{ note?: Note }, any>({
        path: `/notes/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  notifications = {
    /**
     * @description Retrieves a list of Notifications.
     *
     * @tags Notification
     * @name GetNotifications
     * @summary List Notifications
     * @request GET:/notifications
     */
    getNotifications: (
      query?: {
        offset?: number
        limit?: number
        fields?: string
        expand?: string
        event_name?: string
        resource_type?: string
        resource_id?: string
        to?: string
        include_resends?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<{ notifications?: Notification[] }, any>({
        path: `/notifications`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Resends a previously sent notifications, with the same data but optionally to a different address
     *
     * @tags Notification
     * @name PostNotificationsNotificationResend
     * @summary Resend Notification
     * @request POST:/notifications/{id}/resend
     */
    postNotificationsNotificationResend: (
      id: string,
      data: { to?: string },
      params: RequestParams = {}
    ) =>
      this.request<{ notification?: Notification }, any>({
        path: `/notifications/${id}/resend`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  orders = {
    /**
     * @description Adds a Shipping Method to an Order. If another Shipping Method exists with the same Shipping Profile, the previous Shipping Method will be replaced.
     *
     * @tags Order
     * @name PostOrdersOrderShippingMethods
     * @summary Add a Shipping Method
     * @request POST:/orders/{id}/shipping-methods
     */
    postOrdersOrderShippingMethods: (
      id: string,
      data: { price: number; option_id: string; data: object },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/shipping-methods`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Archives the order with the given id.
     *
     * @tags Order
     * @name PostOrdersOrderArchive
     * @summary Archive order
     * @request POST:/orders/{id}/archive
     */
    postOrdersOrderArchive: (id: string, params: RequestParams = {}) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/archive`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Cancels a Claim
     *
     * @tags Claim
     * @name PostOrdersClaimCancel
     * @summary Cancels a Claim
     * @request POST:/orders/{id}/claims/{claim_id}/cancel
     */
    postOrdersClaimCancel: (
      id: string,
      claimId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ order?: ClaimOrder }, any>({
        path: `/orders/${id}/claims/${claimId}/cancel`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a Fulfillment as canceled.
     *
     * @tags Fulfillment
     * @name PostOrdersClaimFulfillmentsCancel
     * @summary Cancels a fulfilmment related to a Claim
     * @request POST:/orders/{id}/claims/{claim_id}/fulfillments/{fulfillment_id}/cancel
     */
    postOrdersClaimFulfillmentsCancel: (
      id: string,
      claimId: string,
      fulfillmentId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ fulfillment?: Fulfillment }, any>({
        path: `/orders/${id}/claims/${claimId}/fulfillments/${fulfillmentId}/cancel`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a Fulfillment as canceled.
     *
     * @tags Fulfillment
     * @name PostOrdersSwapFulfillmentsCancel
     * @summary Cancels a fulfilmment related to a Swap
     * @request POST:/orders/{id}/swaps/{swap_id}/fulfillments/{fulfillment_id}/cancel
     */
    postOrdersSwapFulfillmentsCancel: (
      id: string,
      swapId: string,
      fulfillmentId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ fulfillment?: Fulfillment }, any>({
        path: `/orders/${id}/swaps/${swapId}/fulfillments/${fulfillmentId}/cancel`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a Fulfillment as canceled.
     *
     * @tags Fulfillment
     * @name PostOrdersOrderFulfillmentsCancel
     * @summary Cancels a fulfilmment
     * @request POST:/orders/{id}/fulfillments/{fulfillment_id}/cancel
     */
    postOrdersOrderFulfillmentsCancel: (
      id: string,
      fulfillmentId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ fulfillment?: Fulfillment }, any>({
        path: `/orders/${id}/fulfillments/${fulfillmentId}/cancel`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Registers an Order as canceled. This triggers a flow that will cancel any created Fulfillments and Payments, may fail if the Payment or Fulfillment Provider is unable to cancel the Payment/Fulfillment.
     *
     * @tags Order
     * @name PostOrdersOrderCancel
     * @summary Cancel an Order
     * @request POST:/orders/{id}/cancel
     */
    postOrdersOrderCancel: (id: string, params: RequestParams = {}) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/cancel`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Cancels a Swap
     *
     * @tags Swap
     * @name PostOrdersSwapCancel
     * @summary Cancels a Swap
     * @request POST:/orders/{id}/swaps/{swap_id}/cancel
     */
    postOrdersSwapCancel: (
      id: string,
      swapId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Swap }, any>({
        path: `/orders/${id}/swaps/${swapId}/cancel`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Captures all the Payments associated with an Order.
     *
     * @tags Order
     * @name PostOrdersOrderCapture
     * @summary Capture an Order
     * @request POST:/orders/{id}/capture
     */
    postOrdersOrderCapture: (id: string, params: RequestParams = {}) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/capture`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Completes an Order
     *
     * @tags Order
     * @name PostOrdersOrderComplete
     * @summary Complete an Order
     * @request POST:/orders/{id}/complete
     */
    postOrdersOrderComplete: (id: string, params: RequestParams = {}) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/complete`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a Claim Fulfillment as shipped.
     *
     * @tags Order
     * @name PostOrdersOrderClaimsClaimShipments
     * @summary Create Claim Shipment
     * @request POST:/orders/{id}/claims/{claim_id}/shipments
     */
    postOrdersOrderClaimsClaimShipments: (
      id: string,
      claimId: string,
      data: { fulfillment_id: string; tracking_numbers?: string[] },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/claims/${claimId}/shipments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Fulfillment of an Order - will notify Fulfillment Providers to prepare a shipment.
     *
     * @tags Order
     * @name PostOrdersOrderFulfillments
     * @summary Create a Fulfillment
     * @request POST:/orders/{id}/fulfillments
     */
    postOrdersOrderFulfillments: (
      id: string,
      data: {
        items: { item_id?: string; quantity?: number }[]
        no_notification?: boolean
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/fulfillments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates and order
     *
     * @tags Order
     * @name PostOrders
     * @summary Create an order
     * @request POST:/orders
     */
    postOrders: (
      data: {
        status?: string
        email: string
        billing_address: Address
        shipping_address: Address
        items: any[]
        region: string
        discounts?: any[]
        customer_id: string
        payment_method: { provider_id: string; data?: object }
        shipping_method: {
          provider_id: string
          profile_id: string
          price: number
          data?: object
          items?: any[]
        }
        no_notification?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Orders
     *
     * @tags Order
     * @name GetOrders
     * @summary List Orders
     * @request GET:/orders
     */
    getOrders: (
      query?: {
        q?: string
        id?: string
        status?: any[]
        fulfillment_status?: string
        payment_status?: string
        display_id?: string
        cart_id?: string
        customer_id?: string
        email?: string
        region_id?: string
        currency_code?: string
        tax_rate?: string
        cancelled_at?: object
        created_at?: object
        updated_at?: object
        offset?: string
        limit?: string
        expand?: string
        fields?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<{ orders?: Order[] }, any>({
        path: `/orders`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a Fulfillment as shipped.
     *
     * @tags Order
     * @name PostOrdersOrderShipment
     * @summary Create a Shipment
     * @request POST:/orders/{id}/shipment
     */
    postOrdersOrderShipment: (
      id: string,
      data: {
        fulfillment_id: string
        tracking_numbers?: string[]
        no_notification?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/shipment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a Swap Fulfillment as shipped.
     *
     * @tags Order
     * @name PostOrdersOrderSwapsSwapShipments
     * @summary Create Swap Shipment
     * @request POST:/orders/{id}/swaps/{swap_id}/shipments
     */
    postOrdersOrderSwapsSwapShipments: (
      id: string,
      swapId: string,
      data: {
        fulfillment_id: string
        tracking_numbers?: string[]
        no_notification?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/swaps/${swapId}/shipments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Fulfillment for a Claim.
     *
     * @tags Order
     * @name PostOrdersOrderClaimsClaimFulfillments
     * @summary Create a Claim Fulfillment
     * @request POST:/orders/{id}/claims/{claim_id}/fulfillments
     */
    postOrdersOrderClaimsClaimFulfillments: (
      id: string,
      claimId: string,
      data: { metadata?: object; no_notification?: boolean },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/claims/${claimId}/fulfillments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Fulfillment for a Swap.
     *
     * @tags Order
     * @name PostOrdersOrderSwapsSwapFulfillments
     * @summary Create a Swap Fulfillment
     * @request POST:/orders/{id}/swaps/{swap_id}/fulfillments
     */
    postOrdersOrderSwapsSwapFulfillments: (
      id: string,
      swapId: string,
      data: { metadata?: object; no_notification?: boolean },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/swaps/${swapId}/fulfillments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves an Order
     *
     * @tags Order
     * @name GetOrdersOrder
     * @summary Retrieve an Order
     * @request GET:/orders/{id}
     */
    getOrdersOrder: (id: string, params: RequestParams = {}) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates and order
     *
     * @tags Order
     * @name PostOrdersOrder
     * @summary Update an order
     * @request POST:/orders/{id}
     */
    postOrdersOrder: (
      id: string,
      data: {
        email?: string
        billing_address?: Address
        shipping_address?: Address
        items?: any[]
        region?: string
        discounts?: any[]
        customer_id?: string
        payment_method?: { provider_id?: string; data?: object }
        shipping_method?: {
          provider_id?: string
          profile_id?: string
          price?: number
          data?: object
          items?: any[]
        }
        no_notification?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description When there are differences between the returned and shipped Products in a Swap, the difference must be processed. Either a Refund will be issued or a Payment will be captured.
     *
     * @tags Order
     * @name PostOrdersOrderSwapsSwapProcessPayment
     * @summary Process a Swap difference
     * @request POST:/orders/{id}/swaps/{swap_id}/process-payment
     */
    postOrdersOrderSwapsSwapProcessPayment: (
      id: string,
      swapId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/swaps/${swapId}/process-payment`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Issues a Refund.
     *
     * @tags Order
     * @name PostOrdersOrderRefunds
     * @summary Create a Refund
     * @request POST:/orders/{id}/refunds
     */
    postOrdersOrderRefunds: (
      id: string,
      data: {
        amount: number
        reason: string
        note?: string
        no_notification?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/refunds`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Requests a Return. If applicable a return label will be created and other plugins notified.
     *
     * @tags Order
     * @name PostOrdersOrderReturns
     * @summary Request a Return
     * @request POST:/orders/{id}/returns
     */
    postOrdersOrderReturns: (
      id: string,
      data: {
        items: {
          item_id?: string
          reason_id?: string
          note?: string
          quantity?: number
        }[]
        return_shipping?: { option_id?: string; price?: number }
        receive_now?: boolean
        no_notification?: boolean
        refund?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/${id}/returns`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  order = {
    /**
     * @description Creates a Claim.
     *
     * @tags Order
     * @name PostOrdersOrderClaims
     * @summary Create a Claim
     * @request POST:/order/{id}/claims
     */
    postOrdersOrderClaims: (
      id: string,
      data: {
        type: "replace" | "refund"
        claim_items: {
          item_id?: string
          quantity?: number
          note?: string
          reason?:
            | "missing_item"
            | "wrong_item"
            | "production_failure"
            | "other"
          tags?: string[]
          images?: string[]
        }[]
        return_shipping?: { option_id?: string; price?: number }
        additional_items?: { variant_id?: string; quantity?: number }[]
        shipping_methods?: { id?: string; option_id?: string; price?: number }[]
        shipping_address?: object
        refund_amount?: number
        no_notification?: boolean
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/order/${id}/claims`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Swap. Swaps are used to handle Return of previously purchased goods and Fulfillment of replacements simultaneously.
     *
     * @tags Order
     * @name PostOrdersOrderSwaps
     * @summary Create a Swap
     * @request POST:/order/{id}/swaps
     */
    postOrdersOrderSwaps: (
      id: string,
      data: {
        return_items: { item_id: string; quantity: number }[]
        return_shipping?: { option_id?: string; price?: number }
        additional_items?: { variant_id: string; quantity: number }[]
        custom_shipping_options?: { option_id: string; price: number }[]
        no_notification?: boolean
        allow_backorder?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/order/${id}/swaps`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a metadata key.
     *
     * @tags Order
     * @name DeleteOrdersOrderMetadataKey
     * @summary Delete Metadata
     * @request DELETE:/order/{id}/metadata/{key}
     */
    deleteOrdersOrderMetadataKey: (
      id: string,
      key: string,
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/order/${id}/metadata/${key}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Claim.
     *
     * @tags Order
     * @name PostOrdersOrderClaimsClaim
     * @summary Update a Claim
     * @request POST:/order/{id}/claims/{claim_id}
     */
    postOrdersOrderClaimsClaim: (
      id: string,
      claimId: string,
      data: {
        claim_items?: {
          id?: string
          item_id?: string
          quantity?: number
          note?: string
          reason?:
            | "missing_item"
            | "wrong_item"
            | "production_failure"
            | "other"
          tags?: string[]
          images?: string[]
        }[]
        shipping_methods?: { id?: string; option_id?: string; price?: number }[]
        no_notification?: boolean
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/order/${id}/claims/${claimId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  productTags = {
    /**
     * @description Retrieve a list of Product Tags.
     *
     * @tags Product Tag
     * @name GetProductTags
     * @summary List Product Tags
     * @request GET:/product-tags
     */
    getProductTags: (
      query?: {
        limit?: string
        offset?: string
        value?: string
        id?: string
        created_at?: object
        updated_at?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ tags?: ProductTag }, any>({
        path: `/product-tags`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
  productTypes = {
    /**
     * @description Retrieve a list of Product Types.
     *
     * @tags Product Tag
     * @name GetProductTypes
     * @summary List Product Types
     * @request GET:/product-types
     */
    getProductTypes: (
      query?: {
        limit?: string
        offset?: string
        value?: string
        id?: string
        created_at?: object
        updated_at?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ types?: ProductTag }, any>({
        path: `/product-types`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
  products = {
    /**
     * @description Adds a Product Option to a Product
     *
     * @tags Product
     * @name PostProductsProductOptions
     * @summary Add an Option
     * @request POST:/products/{id}/options
     */
    postProductsProductOptions: (
      id: string,
      data: { title: string },
      params: RequestParams = {}
    ) =>
      this.request<{ product?: Product }, any>({
        path: `/products/${id}/options`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Product
     *
     * @tags Product
     * @name PostProducts
     * @summary Create a Product
     * @request POST:/products
     */
    postProducts: (
      data: {
        title: string
        subtitle: string
        description: string
        is_giftcard?: boolean
        discountable?: boolean
        images?: string[]
        thumbnail?: string
        handle?: string
        type?: { value?: string }
        collection_id?: string
        tags?: { id?: string; value?: string }[]
        options?: { title?: string }[]
        variants?: {
          title?: string
          sku?: string
          ean?: string
          upc?: string
          barcode?: string
          hs_code?: string
          inventory_quantity?: number
          allow_backorder?: boolean
          manage_inventory?: boolean
          weight?: string
          length?: string
          height?: string
          width?: string
          origin_country?: string
          mid_code?: string
          material?: string
          metadata?: object
          prices?: {
            region_id?: string
            currency_code?: string
            amount?: number
            sale_amount?: number
          }[]
          options?: { value?: string }[]
        }[]
        weight?: string
        length?: string
        height?: string
        width?: string
        origin_country?: string
        mid_code?: string
        material?: string
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ product?: Product }, any>({
        path: `/products`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Product
     *
     * @tags Product
     * @name GetProducts
     * @summary List Product
     * @request GET:/products
     */
    getProducts: (
      query?: {
        q?: string
        id?: string
        status?: any[]
        collection_id?: any[]
        tags?: any[]
        title?: string
        description?: string
        handle?: string
        is_giftcard?: string
        type?: string
        order?: string
        deleted_at?: object
        created_at?: object
        updated_at?: object
        offset?: string
        limit?: string
        expand?: string
        fields?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count?: number
          offset?: number
          limit?: number
          products?: Product[]
        },
        any
      >({
        path: `/products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Product Variant. Each Product Variant must have a unique combination of Product Option Values.
     *
     * @tags Product
     * @name PostProductsProductVariants
     * @summary Create a Product Variant
     * @request POST:/products/{id}/variants
     */
    postProductsProductVariants: (
      id: string,
      data: {
        title: string
        sku?: string
        ean?: string
        upc?: string
        barcode?: string
        hs_code?: string
        inventory_quantity?: number
        allow_backorder?: boolean
        manage_inventory?: boolean
        weight?: string
        length?: string
        height?: string
        width?: string
        origin_country?: string
        mid_code?: string
        material?: string
        metadata?: object
        prices: {
          region_id?: string
          currency_code?: string
          amount?: number
          sale_amount?: number
        }[]
        options: { option_id?: string; value?: string }[]
      },
      params: RequestParams = {}
    ) =>
      this.request<{ product?: Product }, any>({
        path: `/products/${id}/variants`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of the Product Variants associated with a Product.
     *
     * @tags Product
     * @name GetProductsProductVariants
     * @summary List a Product's Product Variants
     * @request GET:/products/{id}/variants
     */
    getProductsProductVariants: (id: string, params: RequestParams = {}) =>
      this.request<{ variants?: ProductVariant[] }, any>({
        path: `/products/${id}/variants`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Product Option. Before a Product Option can be deleted all Option Values for the Product Option must be the same. You may, for example, have to delete some of your variants prior to deleting the Product Option
     *
     * @tags Product
     * @name DeleteProductsProductOptionsOption
     * @summary Delete a Product Option
     * @request DELETE:/products/{id}/options/{option_id}
     */
    deleteProductsProductOptionsOption: (
      id: string,
      optionId: string,
      params: RequestParams = {}
    ) =>
      this.request<
        { id?: string; object?: string; deleted?: boolean; product?: Product },
        any
      >({
        path: `/products/${id}/options/${optionId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Product Option
     *
     * @tags Product
     * @name PostProductsProductOptionsOption
     * @summary Update a Product Option.
     * @request POST:/products/{id}/options/{option_id}
     */
    postProductsProductOptionsOption: (
      id: string,
      optionId: string,
      data: { title: string },
      params: RequestParams = {}
    ) =>
      this.request<{ product?: Product }, any>({
        path: `/products/${id}/options/${optionId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Product and it's associated Product Variants.
     *
     * @tags Product
     * @name DeleteProductsProduct
     * @summary Delete a Product
     * @request DELETE:/products/{id}
     */
    deleteProductsProduct: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/products/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Product.
     *
     * @tags Product
     * @name GetProductsProduct
     * @summary Retrieve a Product
     * @request GET:/products/{id}
     */
    getProductsProduct: (id: string, params: RequestParams = {}) =>
      this.request<{ product?: Product }, any>({
        path: `/products/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Product
     *
     * @tags Product
     * @name PostProductsProduct
     * @summary Update a Product
     * @request POST:/products/{id}
     */
    postProductsProduct: (
      id: string,
      data: {
        title?: string
        subtitle?: string
        description?: string
        is_giftcard?: boolean
        discountable?: boolean
        images?: string[]
        thumbnail?: string
        handle?: string
        type?: { value?: string }
        collection_id?: string
        tags?: { id?: string; value?: string }[]
        options?: { title?: string }[]
        variants?: {
          title?: string
          sku?: string
          ean?: string
          upc?: string
          barcode?: string
          hs_code?: string
          inventory_quantity?: number
          allow_backorder?: boolean
          manage_inventory?: boolean
          weight?: string
          length?: string
          height?: string
          width?: string
          origin_country?: string
          mid_code?: string
          material?: string
          metadata?: object
          prices?: {
            region_id?: string
            currency_code?: string
            amount?: number
            sale_amount?: number
          }[]
          options?: { value?: string }[]
        }[]
        weight?: string
        length?: string
        height?: string
        width?: string
        origin_country?: string
        mid_code?: string
        material?: string
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ product?: Product }, any>({
        path: `/products/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Product Variant.
     *
     * @tags Product
     * @name DeleteProductsProductVariantsVariant
     * @summary Delete a Product Variant
     * @request DELETE:/products/{id}/variants/{variant_id}
     */
    deleteProductsProductVariantsVariant: (
      id: string,
      variantId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/products/${id}/variants/${variantId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Update a Product Variant.
     *
     * @tags Product
     * @name PostProductsProductVariantsVariant
     * @summary Update a Product Variant
     * @request POST:/products/{id}/variants/{variant_id}
     */
    postProductsProductVariantsVariant: (
      id: string,
      variantId: string,
      data: {
        title?: string
        sku?: string
        ean?: string
        upc?: string
        barcode?: string
        hs_code?: string
        inventory_quantity?: number
        allow_backorder?: boolean
        manage_inventory?: boolean
        weight?: string
        length?: string
        height?: string
        width?: string
        origin_country?: string
        mid_code?: string
        material?: string
        metadata?: object
        prices?: {
          region_id?: string
          currency_code?: string
          amount?: number
          sale_amount?: number
        }[]
        options?: { option_id?: string; value?: string }[]
      },
      params: RequestParams = {}
    ) =>
      this.request<{ product?: Product }, any>({
        path: `/products/${id}/variants/${variantId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Product Types.
     *
     * @tags Product
     * @name GetProductsTypes
     * @summary List Product Types
     * @request GET:/products/types
     */
    getProductsTypes: (params: RequestParams = {}) =>
      this.request<{ types?: ProductType[] }, any>({
        path: `/products/types`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Set metadata key/value pair for Product
     *
     * @tags Product
     * @name PostProductsProductMetadata
     * @summary Set Product metadata
     * @request POST:/products/{id}/metadata
     */
    postProductsProductMetadata: (
      id: string,
      data: { key: string; value: string },
      params: RequestParams = {}
    ) =>
      this.request<{ product?: Product }, any>({
        path: `/products/${id}/metadata`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  regions = {
    /**
     * @description Adds a Country to the list of Countries in a Region
     *
     * @tags Region
     * @name PostRegionsRegionCountries
     * @summary Add Country
     * @request POST:/regions/{id}/countries
     */
    postRegionsRegionCountries: (
      id: string,
      data: { country_code: string },
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}/countries`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a Fulfillment Provider to a Region
     *
     * @tags Region
     * @name PostRegionsRegionFulfillmentProviders
     * @summary Add Fulfillment Provider
     * @request POST:/regions/{id}/fulfillment-providers
     */
    postRegionsRegionFulfillmentProviders: (
      id: string,
      data: { provider_id: string },
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}/fulfillment-providers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a Payment Provider to a Region
     *
     * @tags Region
     * @name PostRegionsRegionPaymentProviders
     * @summary Add Payment Provider
     * @request POST:/regions/{id}/payment-providers
     */
    postRegionsRegionPaymentProviders: (
      id: string,
      data: { provider_id: string },
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}/payment-providers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Region
     *
     * @tags Region
     * @name PostRegions
     * @summary Create a Region
     * @request POST:/regions
     */
    postRegions: (
      data: {
        name: string
        currency_code: string
        tax_code?: string
        tax_rate: number
        payment_providers?: string[]
        fulfillment_providers?: string[]
        countries?: string[]
      },
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Regions.
     *
     * @tags Region
     * @name GetRegions
     * @summary List Regions
     * @request GET:/regions
     */
    getRegions: (
      query?: {
        limit?: number
        offset?: number
        created_at?: object
        updated_at?: object
        deleted_at?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ regions?: Region[] }, any>({
        path: `/regions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a metadata key.
     *
     * @tags Region
     * @name DeleteRegionsRegionMetadataKey
     * @summary Delete Metadata
     * @request DELETE:/regions/{id}/metadata/{key}
     */
    deleteRegionsRegionMetadataKey: (
      id: string,
      key: string,
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}/metadata/${key}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Region.
     *
     * @tags Region
     * @name DeleteRegionsRegion
     * @summary Delete a Region
     * @request DELETE:/regions/{id}
     */
    deleteRegionsRegion: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/regions/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Region.
     *
     * @tags Region
     * @name GetRegionsRegion
     * @summary Retrieve a Region
     * @request GET:/regions/{id}
     */
    getRegionsRegion: (id: string, params: RequestParams = {}) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Region
     *
     * @tags Region
     * @name PostRegionsRegion
     * @summary Update a Region
     * @request POST:/regions/{id}
     */
    postRegionsRegion: (
      id: string,
      data: {
        name?: string
        currency_code?: string
        automatic_taxes?: boolean
        gift_cards_taxable?: boolean
        tax_provider_id?: string
        tax_code?: string
        tax_rate?: number
        payment_providers?: string[]
        fulfillment_providers?: string[]
        countries?: string[]
      },
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gathers all the fulfillment options available to in the Region.
     *
     * @tags Region
     * @name GetRegionsRegionFulfillmentOptions
     * @summary List Fulfillment Options available in the Region
     * @request GET:/regions/{id}/fulfillment-options
     */
    getRegionsRegionFulfillmentOptions: (
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<{ fulfillment_options?: object[] }, any>({
        path: `/regions/${id}/fulfillment-options`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Country from the list of Countries in a Region
     *
     * @tags Region
     * @name PostRegionsRegionCountriesCountry
     * @summary Remove Country
     * @request DELETE:/regions/{id}/countries/{country_code}
     */
    postRegionsRegionCountriesCountry: (
      id: string,
      countryCode: string,
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}/countries/${countryCode}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Fulfillment Provider.
     *
     * @tags Region
     * @name PostRegionsRegionFulfillmentProvidersProvider
     * @summary Remove Fulfillment Provider
     * @request DELETE:/regions/{id}/fulfillment-providers/{provider_id}
     */
    postRegionsRegionFulfillmentProvidersProvider: (
      id: string,
      providerId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}/fulfillment-providers/${providerId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Payment Provider.
     *
     * @tags Region
     * @name PostRegionsRegionPaymentProvidersProvider
     * @summary Remove Payment Provider
     * @request DELETE:/regions/{id}/payment-providers/{provider_id}
     */
    postRegionsRegionPaymentProvidersProvider: (
      regionId: string,
      providerId: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}/payment-providers/${providerId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Sets the metadata of a Region
     *
     * @tags Region
     * @name PostRegionsRegionMetadata
     * @summary Set the metadata of a Region
     * @request POST:/regions/{id}/metadata
     */
    postRegionsRegionMetadata: (
      id: string,
      data: { key: string; value: string },
      params: RequestParams = {}
    ) =>
      this.request<{ region?: Region }, any>({
        path: `/regions/${id}/metadata`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  returnReasons = {
    /**
     * @description Creates a Return Reason
     *
     * @tags Return Reason
     * @name PostReturnReasons
     * @summary Create a Return Reason
     * @request POST:/return-reasons
     */
    postReturnReasons: (
      data: {
        label: string
        value: string
        parent_return_reason_id?: string
        description?: string
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ return_reason?: ReturnReason }, any>({
        path: `/return-reasons`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Return Reasons.
     *
     * @tags Return Reason
     * @name GetReturnReasons
     * @summary List Return Reasons
     * @request GET:/return-reasons
     */
    getReturnReasons: (params: RequestParams = {}) =>
      this.request<{ return_reasons?: ReturnReason[] }, any>({
        path: `/return-reasons`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a return reason.
     *
     * @tags Return Reason
     * @name DeleteReturnReason
     * @summary Delete a return reason
     * @request DELETE:/return-reasons/{id}
     */
    deleteReturnReason: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/return-reasons/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Return Reason.
     *
     * @tags Return Reason
     * @name GetReturnReasonsReason
     * @summary Retrieve a Return Reason
     * @request GET:/return-reasons/{id}
     */
    getReturnReasonsReason: (id: string, params: RequestParams = {}) =>
      this.request<{ return_reason?: ReturnReason }, any>({
        path: `/return-reasons/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Return Reason
     *
     * @tags Return Reason
     * @name PostReturnReasonsReason
     * @summary Update a Return Reason
     * @request POST:/return-reasons/{id}
     */
    postReturnReasonsReason: (
      id: string,
      data: { label?: string; description?: string; metadata?: object },
      params: RequestParams = {}
    ) =>
      this.request<{ return_reason?: ReturnReason }, any>({
        path: `/return-reasons/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  returns = {
    /**
     * @description Registers a Return as canceled.
     *
     * @tags Return
     * @name PostReturnsReturnCancel
     * @summary Cancel a Return
     * @request POST:/returns/{id}/cancel
     */
    postReturnsReturnCancel: (id: string, params: RequestParams = {}) =>
      this.request<{ return?: Order }, any>({
        path: `/returns/${id}/cancel`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Returns
     *
     * @tags Return
     * @name GetReturns
     * @summary List Returns
     * @request GET:/returns
     */
    getReturns: (limit: number, offset: number, params: RequestParams = {}) =>
      this.request<{ returns?: Return[] }, any>({
        path: `/returns`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a Return as received. Updates statuses on Orders and Swaps accordingly.
     *
     * @tags Return
     * @name PostReturnsReturnReceive
     * @summary Receive a Return
     * @request POST:/returns/{id}/receive
     */
    postReturnsReturnReceive: (
      id: string,
      data: {
        items: { item_id?: string; quantity?: number }[]
        refund?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<{ return?: Return }, any>({
        path: `/returns/${id}/receive`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  shippingOptions = {
    /**
     * @description Creates a Shipping Option
     *
     * @tags Shipping Option
     * @name PostShippingOptions
     * @summary Create Shipping Option
     * @request POST:/shipping-options
     */
    postShippingOptions: (
      data: {
        name?: string
        region_id?: string
        provider_id?: string
        profile_id?: number
        data?: object
        price_type?: "flat_rate" | "calculated"
        amount?: number
        requirements?: {
          type?: "max_subtotal" | "min_subtotal"
          amount?: number
        }[]
        is_return?: boolean
        admin_only?: boolean
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ shipping_option?: ShippingOption }, any>({
        path: `/shipping-options`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Shipping Options.
     *
     * @tags Shipping Option
     * @name GetShippingOptions
     * @summary List Shipping Options
     * @request GET:/shipping-options
     */
    getShippingOptions: (
      query?: { region_id?: string; is_return?: boolean; admin_only?: boolean },
      params: RequestParams = {}
    ) =>
      this.request<{ shipping_options?: ShippingOption[] }, any>({
        path: `/shipping-options`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Shipping Option.
     *
     * @tags Shipping Option
     * @name DeleteShippingOptionsOption
     * @summary Delete a Shipping Option
     * @request DELETE:/shipping-options/{id}
     */
    deleteShippingOptionsOption: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/shipping-options/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Shipping Option.
     *
     * @tags Shipping Option
     * @name GetShippingOptionsOption
     * @summary Retrieve a Shipping Option
     * @request GET:/shipping-options/{id}
     */
    getShippingOptionsOption: (id: string, params: RequestParams = {}) =>
      this.request<{ shipping_option?: ShippingOption }, any>({
        path: `/shipping-options/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Shipping Option
     *
     * @tags Shipping Option
     * @name PostShippingOptionsOption
     * @summary Update Shipping Option
     * @request POST:/shipping-options/{id}
     */
    postShippingOptionsOption: (
      id: string,
      data: {
        name?: string
        amount?: number
        admin_only?: boolean
        metadata?: object
        requirements?: {
          type?: "max_subtotal" | "min_subtotal"
          amount?: number
        }[]
      },
      params: RequestParams = {}
    ) =>
      this.request<{ shipping_option?: ShippingOption }, any>({
        path: `/shipping-options/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  shippingProfiles = {
    /**
     * @description Creates a Shipping Profile
     *
     * @tags Shipping Profile
     * @name PostShippingProfiles
     * @summary Create a Shipping Profile
     * @request POST:/shipping-profiles
     */
    postShippingProfiles: (
      data: { name: string },
      params: RequestParams = {}
    ) =>
      this.request<{ shipping_profile?: ShippingProfile }, any>({
        path: `/shipping-profiles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Shipping Profile.
     *
     * @tags Shipping Profile
     * @name GetShippingProfiles
     * @summary List Shipping Profiles
     * @request GET:/shipping-profiles
     */
    getShippingProfiles: (params: RequestParams = {}) =>
      this.request<{ shipping_profiles?: ShippingProfile[] }, any>({
        path: `/shipping-profiles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Shipping Profile.
     *
     * @tags Shipping Profile
     * @name DeleteShippingProfilesProfile
     * @summary Delete a Shipping Profile
     * @request DELETE:/shipping-profiles/{id}
     */
    deleteShippingProfilesProfile: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/shipping-profiles/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Shipping Profile.
     *
     * @tags Shipping Profile
     * @name GetShippingProfilesProfile
     * @summary Retrieve a Shipping Profile
     * @request GET:/shipping-profiles/{id}
     */
    getShippingProfilesProfile: (id: string, params: RequestParams = {}) =>
      this.request<{ shipping_profile?: ShippingProfile }, any>({
        path: `/shipping-profiles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Shipping Profile
     *
     * @tags Shipping Profile
     * @name PostShippingProfilesProfile
     * @summary Update a Shipping Profiles
     * @request POST:/shipping-profiles/{id}
     */
    postShippingProfilesProfile: (
      id: string,
      data: { name?: string },
      params: RequestParams = {}
    ) =>
      this.request<{ shipping_profiles?: ShippingProfile }, any>({
        path: `/shipping-profiles/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  store = {
    /**
     * @description Adds a Currency Code to the available currencies.
     *
     * @tags Store
     * @name PostStoreCurrenciesCode
     * @summary Add a Currency Code
     * @request POST:/store/currencies/{code}
     */
    postStoreCurrenciesCode: (code: string, params: RequestParams = {}) =>
      this.request<{ store?: Store }, any>({
        path: `/store/currencies/${code}`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Currency Code from the available currencies.
     *
     * @tags Store
     * @name DeleteStoreCurrenciesCode
     * @summary Remove a Currency Code
     * @request DELETE:/store/currencies/{code}
     */
    deleteStoreCurrenciesCode: (code: string, params: RequestParams = {}) =>
      this.request<{ store?: Store }, any>({
        path: `/store/currencies/${code}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the Store details
     *
     * @tags Store
     * @name GetStore
     * @summary Retrieve Store details.
     * @request GET:/store
     */
    getStore: (params: RequestParams = {}) =>
      this.request<{ store?: Store }, any>({
        path: `/store`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the Store details
     *
     * @tags Store
     * @name PostStore
     * @summary Update Store details.
     * @request POST:/store
     */
    postStore: (
      data: {
        name?: string
        swap_link_template?: string
        payment_link_template?: string
        invite_link_template?: string
        default_currency_code?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<{ store?: Store }, any>({
        path: `/store`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the configured Payment Providers
     *
     * @tags Store
     * @name GetStorePaymentProviders
     * @summary Retrieve configured Payment Providers
     * @request GET:/store/payment-providers
     */
    getStorePaymentProviders: (params: RequestParams = {}) =>
      this.request<{ payment_providers?: Store[] }, any>({
        path: `/store/payment-providers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the configured Tax Providers
     *
     * @tags Store
     * @name GetStoreTaxProviders
     * @summary Retrieve configured Tax Providers
     * @request GET:/store/tax-providers
     */
    getStoreTaxProviders: (params: RequestParams = {}) =>
      this.request<{ tax_providers?: Store[] }, any>({
        path: `/store/tax-providers`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  swaps = {
    /**
     * @description Retrieves a Swap.
     *
     * @tags Swap
     * @name GetSwapsSwap
     * @summary Retrieve a Swap
     * @request GET:/swaps/{id}
     */
    getSwapsSwap: (id: string, params: RequestParams = {}) =>
      this.request<{ swap?: Swap }, any>({
        path: `/swaps/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Swaps.
     *
     * @tags Swap
     * @name GetSwaps
     * @summary List Swaps
     * @request GET:/swaps
     */
    getSwaps: (params: RequestParams = {}) =>
      this.request<{ swaps?: Swap[] }, any>({
        path: `/swaps`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  taxRates = {
    /**
     * @description Associates a Tax Rate with a list of Product Types
     *
     * @tags Tax Rates
     * @name PostTaxRatesTaxRateProductTypes
     * @summary Add Tax Rate to Product Types
     * @request POST:/tax-rates/:id/product-types/batch
     */
    postTaxRatesTaxRateProductTypes: (id: string, params: RequestParams = {}) =>
      this.request<{ tax_rate?: TaxRate[] }, any>({
        path: `/tax-rates/${id}/product-types/batch`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Tax Rate from a list of Product Types
     *
     * @tags Tax Rates
     * @name DeleteTaxRatesTaxRateProductTypes
     * @summary Remove Tax Rate from Product Types
     * @request DELETE:/tax-rates/:id/product-types/batch
     */
    deleteTaxRatesTaxRateProductTypes: (
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<{ tax_rate?: TaxRate[] }, any>({
        path: `/tax-rates/${id}/product-types/batch`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Associates a Tax Rate with a list of Products
     *
     * @tags Tax Rates
     * @name PostTaxRatesTaxRateProducts
     * @summary Add Tax Rate to Products
     * @request POST:/tax-rates/:id/products/batch
     */
    postTaxRatesTaxRateProducts: (id: string, params: RequestParams = {}) =>
      this.request<{ tax_rate?: TaxRate[] }, any>({
        path: `/tax-rates/${id}/products/batch`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Tax Rate from a list of Products
     *
     * @tags Tax Rates
     * @name DeleteTaxRatesTaxRateProducts
     * @summary Removes Tax Rate from Products
     * @request DELETE:/tax-rates/:id/products/batch
     */
    deleteTaxRatesTaxRateProducts: (id: string, params: RequestParams = {}) =>
      this.request<{ tax_rate?: TaxRate[] }, any>({
        path: `/tax-rates/${id}/products/batch`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Associates a Tax Rate with a list of Product Types
     *
     * @tags Tax Rates
     * @name PostTaxRatesTaxRateShippingOptions
     * @summary Add Tax Rate to Product Types
     * @request POST:/tax-rates/:id/shipping-options/batch
     */
    postTaxRatesTaxRateShippingOptions: (
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<{ tax_rate?: TaxRate[] }, any>({
        path: `/tax-rates/${id}/shipping-options/batch`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Tax Rate from a list of Product Types
     *
     * @tags Tax Rates
     * @name DeleteTaxRatesTaxRateShippingOptions
     * @summary Removes a Tax Rate from Product Types
     * @request DELETE:/tax-rates/:id/shipping-options/batch
     */
    deleteTaxRatesTaxRateShippingOptions: (
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<{ tax_rate?: TaxRate[] }, any>({
        path: `/tax-rates/${id}/shipping-options/batch`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Tax Rate
     *
     * @tags Tax Rates
     * @name PostTaxRates
     * @summary Create a Tax Rate
     * @request POST:/tax-rates
     */
    postTaxRates: (params: RequestParams = {}) =>
      this.request<{ tax_rate?: TaxRate[] }, any>({
        path: `/tax-rates`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of TaxRates
     *
     * @tags Order
     * @name GetTaxRates
     * @summary List Tax Rates
     * @request GET:/tax-rates
     */
    getTaxRates: (
      query?: {
        q?: string
        id?: string
        region_id?: string
        code?: string
        rate?: string
        created_at?: object
        updated_at?: object
        offset?: string
        limit?: string
        fields?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<{ orders?: Order[] }, any>({
        path: `/tax-rates`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Tax Rate
     *
     * @tags Tax Rates
     * @name DeleteTaxRatesTaxRate
     * @summary Delete a Tax Rate
     * @request DELETE:/tax-rates/{id}
     */
    deleteTaxRatesTaxRate: (id: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/tax-rates/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a TaxRate
     *
     * @tags Tax Rates
     * @name GetTaxRatesTaxRate
     * @summary Get Tax Rate
     * @request GET:/tax-rates/:id
     */
    getTaxRatesTaxRate: (id: string, params: RequestParams = {}) =>
      this.request<{ tax_rate?: TaxRate[] }, any>({
        path: `/tax-rates/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Tax Rate
     *
     * @tags Tax Rates
     * @name PostTaxRatesTaxRate
     * @summary Update a Tax Rate
     * @request POST:/tax-rates/:id
     */
    postTaxRatesTaxRate: (id: string, params: RequestParams = {}) =>
      this.request<{ tax_rate?: TaxRate[] }, any>({
        path: `/tax-rates/${id}`,
        method: "POST",
        format: "json",
        ...params,
      }),
  }
  users = {
    /**
     * @description Creates a User
     *
     * @tags Users
     * @name PostUsers
     * @summary Create a User
     * @request POST:/users
     */
    postUsers: (
      data: {
        email: string
        first_name?: string
        last_name?: string
        role?: string
        password: string
      },
      params: RequestParams = {}
    ) =>
      this.request<{ user?: User }, any>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves all users.
     *
     * @tags Users
     * @name GetUsers
     * @summary Retrieve all users
     * @request GET:/users
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<{ users?: User[] }, any>({
        path: `/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a User
     *
     * @tags Users
     * @name DeleteUsersUser
     * @summary Delete a User
     * @request DELETE:/users/{user_id}
     */
    deleteUsersUser: (userId: string, params: RequestParams = {}) =>
      this.request<{ id?: string; object?: string; deleted?: boolean }, any>({
        path: `/users/${userId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a User
     *
     * @tags Users
     * @name PostUsersUser
     * @summary Update a User
     * @request POST:/users/{user_id}
     */
    postUsersUser: (
      userId: string,
      data: {
        first_name?: string
        last_name?: string
        role?: string
        api_token?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<{ user?: User }, any>({
        path: `/users/${userId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a User.
     *
     * @tags Users
     * @name GetUsersUser
     * @summary Retrieve a User
     * @request GET:/users/{id}
     */
    getUsersUser: (id: string, params: RequestParams = {}) =>
      this.request<{ user?: User }, any>({
        path: `/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Sets the password for a User given the correct token.
     *
     * @tags Users
     * @name PostUsersUserPassword
     * @summary Set the password for a User.
     * @request POST:/users/password-token
     */
    postUsersUserPassword: (
      data: { email: string; token: string; password: string },
      params: RequestParams = {}
    ) =>
      this.request<{ user?: User }, any>({
        path: `/users/password-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  variants = {
    /**
     * @description Retrieves a list of Product Variants
     *
     * @tags Product Variant
     * @name GetVariants
     * @summary List Product Variants.
     * @request GET:/variants
     */
    getVariants: (
      query?: { q?: string; offset?: string; limit?: string },
      params: RequestParams = {}
    ) =>
      this.request<{ variants?: ProductVariant[] }, any>({
        path: `/variants`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
}
