import * as Apps from "./apps/apps"
import * as Auth from "./auth/auth"
import * as Claim from "./claim/claim"
import * as Collection from "./collection/collection"
import * as Customer from "./customer/customer"
import * as CustomerGroup from "./customer-group/customer-group"
import * as Discount from "./discount/discount"
import * as DraftOrder from "./draft-order/draft-order"
import * as Fulfillment from "./fulfillment/fulfillment"
import * as GiftCard from "./gift-card/gift-card"
import * as Invite from "./invites/invites"
import * as Note from "./note/note"
import * as Notification from "./notification/notification"
import * as Order from "./order/order"
import * as Product from "./product/product"
import * as ProductTag from "./product-tag/product-tag"
import * as ProductVariant from "./product-variant/product-variant"
import * as Region from "./region/region"
import * as Return from "./return/return"
import * as ReturnReason from "./return-reason/return-reason"
import * as ShippingOption from "./shipping-option/shipping-option"
import * as ShippingProfile from "./shipping-profile/shipping-profile"
import * as Store from "./store/store"
import * as Swap from "./swap/swap"
import * as TaxRate from "./tax-rates/tax-rates"
import * as Upload from "./uploads/uploads"
import * as User from "./users/users"

class MedusaAdmin {
  public apps: typeof Apps
  public auth: typeof Auth
  public claims: typeof Claim
  public collections: typeof Collection
  public customers: typeof Customer
  public customerGroups: typeof CustomerGroup
  public discounts: typeof Discount
  public draftOrders: typeof DraftOrder
  public fulfillments: typeof Fulfillment
  public giftCards: typeof GiftCard
  public invites: typeof Invite
  public notes: typeof Note
  public notifications: typeof Notification
  public orders: typeof Order
  public products: typeof Product
  public tags: typeof ProductTag
  public variants: typeof ProductVariant
  public regions: typeof Region
  public returns: typeof Return
  public returnReasons: typeof ReturnReason
  public shippingOptions: typeof ShippingOption
  public shippingProfiles: typeof ShippingProfile
  public stores: typeof Store
  public swaps: typeof Swap
  public taxRates: typeof TaxRate
  public uploads: typeof Upload
  public users: typeof User

  constructor() {
    this.apps = Apps
    this.auth = Auth
    this.claims = Claim
    this.collections = Collection
    this.customers = Customer
    this.customerGroups = CustomerGroup
    this.discounts = Discount
    this.draftOrders = DraftOrder
    this.fulfillments = Fulfillment
    this.giftCards = GiftCard
    this.invites = Invite
    this.notes = Note
    this.notifications = Notification
    this.orders = Order
    this.products = Product
    this.tags = ProductTag
    this.variants = ProductVariant
    this.regions = Region
    this.returns = Return
    this.returnReasons = ReturnReason
    this.shippingOptions = ShippingOption
    this.shippingProfiles = ShippingProfile
    this.stores = Store
    this.swaps = Swap
    this.taxRates = TaxRate
    this.uploads = Upload
    this.users = User
  }
}

export default MedusaAdmin
