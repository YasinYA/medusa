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

  /** The Return Items that will be shipped back to the warehouse. type: array items: $ref:  */
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
      baseURL: axiosConfig.baseURL || "https://api.medusa-commerce.com/store",
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
      //@ts-ignore
      requestParams.headers.common = { Accept: "*/*" }
      //@ts-ignore
      requestParams.headers.post = {}
      //@ts-ignore
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
 * @title Medusa Storefront API
 * @version 1.0.0
 * @license MIT
 * @baseUrl https://api.medusa-commerce.com/store
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * @description Logs a Customer in and authorizes them to view their details. Successful authentication will set a session cookie in the Customer's browser.
     *
     * @tags Auth
     * @name PostAuth
     * @summary Authenticate Customer
     * @request POST:/auth
     */
    postAuth: (
      data: { email: string; password: string },
      params: RequestParams = {}
    ) =>
      this.request<{ customer?: Customer }, any>({
        path: `/auth`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Destroys a Customer's authenticated session.
     *
     * @tags Auth
     * @name DeleteAuth
     * @summary Log out
     * @request DELETE:/auth
     */
    deleteAuth: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Gets the currently logged in Customer.
     *
     * @tags Auth
     * @name GetAuth
     * @summary Get Session
     * @request GET:/auth
     */
    getAuth: (params: RequestParams = {}) =>
      this.request<{ customer?: Customer }, any>({
        path: `/auth`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Checks if a Customer with the given email has signed up.
     *
     * @tags Auth
     * @name GetAuthEmail
     * @summary Check if email has account
     * @request GET:/auth/{email}
     */
    getAuthEmail: (email: string, params: RequestParams = {}) =>
      this.request<{ exists?: boolean }, any>({
        path: `/auth/${email}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  collections = {
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
     * @description Retrieve a list of Product Collection.
     *
     * @tags Collection
     * @name GetCollections
     * @summary List Product Collections
     * @request GET:/collections
     */
    getCollections: (
      query?: { offset?: number; limit?: number },
      params: RequestParams = {}
    ) =>
      this.request<{ collection?: ProductCollection }, any>({
        path: `/collections`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
  customers = {
    /**
     * @description Adds a Shipping Address to a Customer's saved addresses.
     *
     * @tags Customer
     * @name PostCustomersCustomerAddresses
     * @summary Add a Shipping Address
     * @request POST:/customers/me/addresses
     */
    postCustomersCustomerAddresses: (
      data: { address: Address },
      params: RequestParams = {}
    ) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers/me/addresses`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Customer account.
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
        password: string
        phone?: string
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
     * @description Removes an Address from the Customer's saved addresse.
     *
     * @tags Customer
     * @name DeleteCustomersCustomerAddressesAddress
     * @summary Delete an Address
     * @request DELETE:/customers/me/addresses/{address_id}
     */
    deleteCustomersCustomerAddressesAddress: (
      addressId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers/me/addresses/${addressId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Customer's saved Shipping Address.
     *
     * @tags Customer
     * @name PostCustomersCustomerAddressesAddress
     * @summary Update a Shipping Address
     * @request POST:/customers/me/addresses/{address_id}
     */
    postCustomersCustomerAddressesAddress: (
      addressId: string,
      data: { address?: Address },
      params: RequestParams = {}
    ) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers/me/addresses/${addressId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Customer - the Customer must be logged in to retrieve their details.
     *
     * @tags Customer
     * @name GetCustomersCustomer
     * @summary Retrieves a Customer
     * @request GET:/customers/me
     */
    getCustomersCustomer: (params: RequestParams = {}) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers/me`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Customer's saved details.
     *
     * @tags Customer
     * @name PostCustomersCustomer
     * @summary Update Customer details
     * @request POST:/customers/me
     */
    postCustomersCustomer: (
      data: {
        first_name?: string
        last_name?: string
        billing_address?: Address
        password?: string
        phone?: string
        email?: string
        metadata?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers/me`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of a Customer's saved payment methods. Payment methods are saved with Payment Providers and it is their responsibility to fetch saved methods.
     *
     * @tags Customer
     * @name GetCustomersCustomerPaymentMethods
     * @summary Retrieve saved payment methods
     * @request GET:/customers/me/payment-methods
     */
    getCustomersCustomerPaymentMethods: (params: RequestParams = {}) =>
      this.request<
        { payment_methods?: { provider_id?: string; data?: object }[] },
        any
      >({
        path: `/customers/me/payment-methods`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of a Customer's Orders.
     *
     * @tags Customer
     * @name GetCustomersCustomerOrders
     * @summary Retrieve Customer Orders
     * @request GET:/customers/me/orders
     */
    getCustomersCustomerOrders: (
      query?: {
        limit?: number
        offset?: number
        fields?: string
        expand?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<
        { count?: number; offset?: number; limit?: number; orders?: Order[] },
        any
      >({
        path: `/customers/me/orders`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a reset password token to be used in a subsequent /reset-password request. The password token should be sent out of band e.g. via email and will not be returned.
     *
     * @tags Customer
     * @name PostCustomersCustomerPasswordToken
     * @summary Creates a reset password token
     * @request POST:/customers/password-token
     */
    postCustomersCustomerPasswordToken: (
      data: { email: string },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/customers/password-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Resets a Customer's password using a password token created by a previous /password-token request.
     *
     * @tags Customer
     * @name PostCustomersResetPassword
     * @summary Resets Customer password
     * @request POST:/customers/reset-password
     */
    postCustomersResetPassword: (
      data: { email: string; token: string; password: string },
      params: RequestParams = {}
    ) =>
      this.request<{ customer?: Customer }, any>({
        path: `/customers/reset-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  giftCards = {
    /**
     * @description Retrieves a Gift Card by its associated unqiue code.
     *
     * @tags Gift Card
     * @name GetGiftCardsCode
     * @summary Retrieve Gift Card by Code
     * @request GET:/gift-cards/{code}
     */
    getGiftCardsCode: (code: string, params: RequestParams = {}) =>
      this.request<
        { id?: any; code?: any; value?: any; balance?: any; region?: Region },
        any
      >({
        path: `/gift-cards/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  carts = {
    /**
     * @description Adds a Shipping Method to the Cart.
     *
     * @tags Cart
     * @name PostCartsCartShippingMethod
     * @summary Add a Shipping Method
     * @request POST:/carts/{id}/shipping-methods
     */
    postCartsCartShippingMethod: (
      id: string,
      data: { option_id: string; data?: object },
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/shipping-methods`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Calculates taxes for a cart. Depending on the cart's region this may involve making 3rd party API calls to a Tax Provider service.
     *
     * @tags Cart
     * @name PostCartsCartTaxes
     * @summary Calculate Cart Taxes
     * @request POST:/carts/{id}/taxes
     */
    postCartsCartTaxes: (id: string, params: RequestParams = {}) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/taxes`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Completes a cart. The following steps will be performed. Payment authorization is attempted and if more work is required, we simply return the cart for further updates. If payment is authorized and order is not yet created, we make sure to do so. The completion of a cart can be performed idempotently with a provided header `Idempotency-Key`. If not provided, we will generate one for the request.
     *
     * @tags Cart
     * @name PostCartsCartComplete
     * @summary Complete a Cart
     * @request POST:/carts/{id}/complete
     */
    postCartsCartComplete: (id: string, params: RequestParams = {}) =>
      this.request<{ order?: Order } | { cart?: Cart } | { cart?: Swap }, any>({
        path: `/carts/${id}/complete`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a Cart within the given region and with the initial items. If no `region_id` is provided the cart will be associated with the first Region available. If no items are provided the cart will be empty after creation. If a user is logged in the cart's customer id and email will be set.
     *
     * @tags Cart
     * @name PostCart
     * @summary Create a Cart
     * @request POST:/carts
     */
    postCart: (
      data: {
        region_id?: string
        country_code?: string
        items?: { variant_id?: string; quantity?: number }[]
        context?: object
      },
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Generates a Line Item with a given Product Variant and adds it to the Cart
     *
     * @tags Cart
     * @name PostCartsCartLineItems
     * @summary Add a Line Item
     * @request POST:/carts/{id}/line-items
     */
    postCartsCartLineItems: (
      id: string,
      data: { variant_id: string; quantity: number; metadata?: object },
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/line-items`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates Payment Sessions for each of the available Payment Providers in the Cart's Region.
     *
     * @tags Cart
     * @name PostCartsCartPaymentSessions
     * @summary Initialize Payment Sessions
     * @request POST:/carts/{id}/payment-sessions
     */
    postCartsCartPaymentSessions: (id: string, params: RequestParams = {}) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/payment-sessions`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Discount from a Cart.
     *
     * @tags Cart
     * @name DeleteCartsCartDiscountsDiscount
     * @summary Remove Discount from Cart
     * @request DELETE:/carts/{id}/discounts/{code}
     */
    deleteCartsCartDiscountsDiscount: (
      id: string,
      code: string,
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/discounts/${code}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Line Item from a Cart.
     *
     * @tags Cart
     * @name DeleteCartsCartLineItemsItem
     * @summary Delete a Line Item
     * @request DELETE:/carts/{id}/line-items/{line_id}
     */
    deleteCartsCartLineItemsItem: (
      id: string,
      lineId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/line-items/${lineId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Line Item if the desired quantity can be fulfilled.
     *
     * @tags Cart
     * @name PostCartsCartLineItemsItem
     * @summary Update a Line Item
     * @request POST:/carts/{id}/line-items/{line_id}
     */
    postCartsCartLineItemsItem: (
      id: string,
      lineId: string,
      data: { quantity: number },
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/line-items/${lineId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Payment Session on a Cart. May be useful if a payment has failed.
     *
     * @tags Cart
     * @name DeleteCartsCartPaymentSessionsSession
     * @summary Delete a Payment Session
     * @request DELETE:/carts/{id}/payment-sessions/{provider_id}
     */
    deleteCartsCartPaymentSessionsSession: (
      id: string,
      providerId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/payment-sessions/${providerId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Payment Session with additional data.
     *
     * @tags Cart
     * @name PostCartsCartPaymentSessionUpdate
     * @summary Update a Payment Session
     * @request POST:/carts/{id}/payment-sessions/{provider_id}
     */
    postCartsCartPaymentSessionUpdate: (
      id: string,
      providerId: string,
      data: { data: object },
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/payment-sessions/${providerId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Cart.
     *
     * @tags Cart
     * @name GetCartsCart
     * @summary Retrieve a Cart
     * @request GET:/carts/{id}
     */
    getCartsCart: (id: string, params: RequestParams = {}) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Refreshes a Payment Session to ensure that it is in sync with the Cart - this is usually not necessary.
     *
     * @tags Cart
     * @name PostCartsCartPaymentSessionsSession
     * @summary Refresh a Payment Session
     * @request POST:/carts/{id}/payment-sessions/{provider_id}/refresh
     */
    postCartsCartPaymentSessionsSession: (
      id: string,
      providerId: string,
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/payment-sessions/${providerId}/refresh`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Selects a Payment Session as the session intended to be used towards the completion of the Cart.
     *
     * @tags Cart
     * @name PostCartsCartPaymentSession
     * @summary Select a Payment Session
     * @request POST:/carts/{id}/payment-session
     */
    postCartsCartPaymentSession: (
      id: string,
      data: { provider_id: string },
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/carts/${id}/payment-session`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  store = {
    /**
     * @description Updates a Cart.
     *
     * @tags Cart
     * @name PostCartsCartPaymentMethodUpdate
     * @summary Update a Cart"
     * @request POST:/store/carts/{id}
     */
    postCartsCartPaymentMethodUpdate: (
      id: string,
      data: { provider_id: string; data?: object },
      params: RequestParams = {}
    ) =>
      this.request<{ cart?: Cart }, any>({
        path: `/store/carts/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  orders = {
    /**
     * @description Retrieves an Order by the id of the Cart that was used to create the Order.
     *
     * @tags Order
     * @name GetOrdersOrderCartId
     * @summary Retrieves Order by Cart id
     * @request GET:/orders/cart/{cart_id}
     */
    getOrdersOrderCartId: (cartId: string, params: RequestParams = {}) =>
      this.request<{ order?: Order }, any>({
        path: `/orders/cart/${cartId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves an Order
     *
     * @tags Order
     * @name GetOrdersOrder
     * @summary Retrieves an Order
     * @request GET:/orders/{id}
     */
    getOrdersOrder: (id: string, params: RequestParams = {}) =>
      this.request<{ customer?: Customer }, any>({
        path: `/orders/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Looks for an Order with a given `display_id`, `email` pair. The `display_id`, `email` pair must match in order for the Order to be returned.
     *
     * @tags Order
     * @name GetOrders
     * @summary Look Up an Order
     * @request GET:/orders
     */
    getOrders: (
      query: { display_id: number; email: string },
      params: RequestParams = {}
    ) =>
      this.request<{ order?: Order }, any>({
        path: `/orders`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
  products = {
    /**
     * @description Retrieves a Product.
     *
     * @tags Product
     * @name GetProductsProduct
     * @summary Retrieves a Product
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
     * @description Retrieves a list of Products.
     *
     * @tags Product
     * @name GetProducts
     * @summary List Products
     * @request GET:/products
     */
    getProducts: (
      query?: {
        q?: string
        id?: string
        collection_id?: any[]
        tags?: any[]
        title?: string
        description?: string
        handle?: string
        is_giftcard?: string
        type?: string
        created_at?: object
        updated_at?: object
        deleted_at?: object
        offset?: string
        limit?: string
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
  }
  regions = {
    /**
     * @description Retrieves a Region.
     *
     * @tags Region
     * @name GetRegionsRegion
     * @summary Retrieves a Region
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
     * @description Retrieves a list of Regions.
     *
     * @tags Region
     * @name GetRegions
     * @summary List Regions
     * @request GET:/regions
     */
    getRegions: (params: RequestParams = {}) =>
      this.request<
        { count?: number; offset?: number; limit?: number; regions?: Region[] },
        any
      >({
        path: `/regions`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  returnReasons = {
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
  }
  returns = {
    /**
     * @description Creates a Return for an Order.
     *
     * @tags Return
     * @name PostReturns
     * @summary Create Return
     * @request POST:/returns
     */
    postReturns: (
      data: {
        order_id: string
        items: { item_id: string; quantity: number }[]
        return_shipping?: { option_id: string }
      },
      params: RequestParams = {}
    ) =>
      this.request<{ return?: Return }, any>({
        path: `/returns`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  shippingOptions = {
    /**
     * @description Retrieves a list of Shipping Options.
     *
     * @tags Shipping Option
     * @name GetShippingOptions
     * @summary Retrieve Shipping Options
     * @request GET:/shipping-options
     */
    getShippingOptions: (
      query?: { is_return?: boolean; product_ids?: string; region_id?: string },
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
     * @description Retrieves a list of Shipping Options available to a cart.
     *
     * @tags Shipping Option
     * @name GetShippingOptionsCartId
     * @summary Retrieve Shipping Options for Cart
     * @request GET:/shipping-options/{cart_id}
     */
    getShippingOptionsCartId: (cartId: string, params: RequestParams = {}) =>
      this.request<{ shipping_options?: ShippingOption[] }, any>({
        path: `/shipping-options/${cartId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  swaps = {
    /**
     * @description Creates a Swap on an Order by providing some items to return along with some items to send back
     *
     * @tags Swap
     * @name PostSwaps
     * @summary Create a Swap
     * @request POST:/swaps
     */
    postSwaps: (
      data: {
        order_id: string
        return_items: {
          item_id: string
          quantity: number
          reason_id?: string
          note_id?: string
        }[]
        return_shipping_option?: string
        additional_items: { variant_id: string; quantity: number }[]
      },
      params: RequestParams = {}
    ) =>
      this.request<{ swap?: Swap }, any>({
        path: `/swaps`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a Swap by the id of the Cart used to confirm the Swap.
     *
     * @tags Swap
     * @name GetSwapsSwapCartId
     * @summary Retrieve Swap by Cart id
     * @request GET:/swaps/{cart_id}
     */
    getSwapsSwapCartId: (cartId: string, params: RequestParams = {}) =>
      this.request<{ swap?: Swap }, any>({
        path: `/swaps/${cartId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  variants = {
    /**
     * @description Retrieves a Product Variant by id
     *
     * @tags Product Variant
     * @name GetVariantsVariant
     * @summary Retrieve a Product Variant
     * @request GET:/variants/{variant_id}
     */
    getVariantsVariant: (variantId: string, params: RequestParams = {}) =>
      this.request<{ variant?: ProductVariant }, any>({
        path: `/variants/${variantId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Product Variants
     *
     * @tags Product Variant
     * @name GetVariants
     * @summary Retrieve Product Variants
     * @request GET:/variants
     */
    getVariants: (
      query?: {
        ids?: string
        expand?: string
        offset?: number
        limit?: number
      },
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
