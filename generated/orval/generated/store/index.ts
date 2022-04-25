import * as Auth from "./auth/auth"
import * as Cart from "./cart/cart"
import * as Collection from "./collection/collection"
import * as Customer from "./customer/customer"
import * as GiftCard from "./gift-card/gift-card"
import * as Order from "./order/order"
import * as Product from "./product/product"
import * as ProductVariant from "./product-variant/product-variant"
import * as Region from "./region/region"
import * as Return from "./return/return"
import * as ReturnReason from "./return-reason/return-reason"
import * as ShippingOption from "./shipping-option/shipping-option"
import * as Swap from "./swap/swap"

class MedusaStore {
  public auth: typeof Auth
  public carts: typeof Cart
  public collections: typeof Collection
  public customers: typeof Customer
  public giftCards: typeof GiftCard
  public orders: typeof Order
  public products: typeof Product
  public variants: typeof ProductVariant
  public regions: typeof Region
  public returns: typeof Return
  public returnReasons: typeof ReturnReason
  public shippingOptions: typeof ShippingOption
  public swaps: typeof Swap

  constructor() {
    this.auth = Auth
    this.carts = Cart
    this.collections = Collection
    this.customers = Customer
    this.giftCards = GiftCard
    this.orders = Order
    this.products = Product
    this.variants = ProductVariant
    this.regions = Region
    this.returns = Return
    this.returnReasons = ReturnReason
    this.shippingOptions = ShippingOption
    this.swaps = Swap
  }
}

export default MedusaStore
