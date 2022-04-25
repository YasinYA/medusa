import * as StoreAPI from "../generated/store"
import * as AdminAPI from "../generated/admin"
import * as qs from "qs"
import { AxiosRequestConfig } from "axios"

const storeClient = new StoreAPI.Api({
  baseURL: "http://localhost:9000/",
  paramsSerializer: (params: any): string => {
    const str = qs.stringify(params, { arrayFormat: "comma" })
    console.log({ str })
    return str
  },
  secure: true,
  securityWorker: (token: string | null): AxiosRequestConfig => {
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  },
})

const adminClient = new AdminAPI.Api({
  baseURL: "http://localhost:9000/admin",
  paramsSerializer: (params: any): string => {
    const str = qs.stringify(params, { arrayFormat: "comma" })
    console.log({ str })
    return str
  },
  secure: true,
  securityWorker: (token: string | null): AxiosRequestConfig => {
    console.log({ token })
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  },
})

adminClient.setSecurityData("a07179bc-7c10-4997-a5da-3f56ae9bef48")

async function createCart(): Promise<StoreAPI.Cart | undefined> {
  const res = await storeClient.carts.postCart({
    region_id: "something",
    items: [
      {
        quantity: 1,
        variant_id: "2",
      },
    ],
  })

  const cart = res.data.cart

  return cart
}

async function createLI(): Promise<StoreAPI.Cart | undefined> {
  const res = await storeClient.carts.postCartsCartLineItems("cart_8937", {
    quantity: 1,
    variant_id: "something",
  })

  const cart = res.data.cart

  return cart
}

async function updateCustomer(): Promise<AdminAPI.Customer | undefined> {
  const res = await adminClient.customers.postCustomersCustomer(
    "cus_01FH5YQ7BRWWSAC36RS89VKGMC",
    {
      email: "sebrindom@tekla.com",
    },
    {
      expand: ["groups", "billing_address"],
    }
  )
  console.log(res.data.customer)
  return res.data.customer
}

updateCustomer().catch((err) => console.log(err))
