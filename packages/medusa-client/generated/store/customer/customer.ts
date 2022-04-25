/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostCustomersCustomerAddresses200,
  PostCustomersCustomerAddressesBody,
  PostCustomers200,
  PostCustomersBody,
  DeleteCustomersCustomerAddressesAddress200,
  PostCustomersCustomerAddressesAddress200,
  PostCustomersCustomerAddressesAddressBody,
  GetCustomersCustomer200,
  PostCustomersCustomer200,
  PostCustomersCustomerBody,
  GetCustomersCustomerPaymentMethods200,
  GetCustomersCustomerOrders200,
  GetCustomersCustomerOrdersParams,
  PostCustomersCustomerPasswordTokenBody,
  PostCustomersResetPassword200,
  PostCustomersResetPasswordBody,
} from "../model"
import { getClient } from "../../../src/custom-instance"

/**
 * Adds a Shipping Address to a Customer's saved addresses.
 * @summary Add a Shipping Address
 */
export const postCustomersCustomerAddresses = (
  postCustomersCustomerAddressesBody: PostCustomersCustomerAddressesBody
) => {
  return getClient<PostCustomersCustomerAddresses200>({
    url: `/customers/me/addresses`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postCustomersCustomerAddressesBody,
  })
}
/**
 * Creates a Customer account.
 * @summary Create a Customer
 */
export const postCustomers = (postCustomersBody: PostCustomersBody) => {
  return getClient<PostCustomers200>({
    url: `/customers`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postCustomersBody,
  })
}
/**
 * Removes an Address from the Customer's saved addresse.
 * @summary Delete an Address
 */
export const deleteCustomersCustomerAddressesAddress = (addressId: string) => {
  return getClient<DeleteCustomersCustomerAddressesAddress200>({
    url: `/customers/me/addresses/${addressId}`,
    method: "delete",
  })
}
/**
 * Updates a Customer's saved Shipping Address.
 * @summary Update a Shipping Address
 */
export const postCustomersCustomerAddressesAddress = (
  addressId: string,
  postCustomersCustomerAddressesAddressBody: PostCustomersCustomerAddressesAddressBody
) => {
  return getClient<PostCustomersCustomerAddressesAddress200>({
    url: `/customers/me/addresses/${addressId}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postCustomersCustomerAddressesAddressBody,
  })
}
/**
 * Retrieves a Customer - the Customer must be logged in to retrieve their details.
 * @summary Retrieves a Customer
 */
export const getCustomersCustomer = () => {
  return getClient<GetCustomersCustomer200>({
    url: `/customers/me`,
    method: "get",
  })
}
/**
 * Updates a Customer's saved details.
 * @summary Update Customer details
 */
export const postCustomersCustomer = (
  postCustomersCustomerBody: PostCustomersCustomerBody
) => {
  return getClient<PostCustomersCustomer200>({
    url: `/customers/me`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postCustomersCustomerBody,
  })
}
/**
 * Retrieves a list of a Customer's saved payment methods. Payment methods are saved with Payment Providers and it is their responsibility to fetch saved methods.
 * @summary Retrieve saved payment methods
 */
export const getCustomersCustomerPaymentMethods = () => {
  return getClient<GetCustomersCustomerPaymentMethods200>({
    url: `/customers/me/payment-methods`,
    method: "get",
  })
}
/**
 * Retrieves a list of a Customer's Orders.
 * @summary Retrieve Customer Orders
 */
export const getCustomersCustomerOrders = (
  params?: GetCustomersCustomerOrdersParams
) => {
  return getClient<GetCustomersCustomerOrders200>({
    url: `/customers/me/orders`,
    method: "get",
    params,
  })
}
/**
 * Creates a reset password token to be used in a subsequent /reset-password request. The password token should be sent out of band e.g. via email and will not be returned.
 * @summary Creates a reset password token
 */
export const postCustomersCustomerPasswordToken = (
  postCustomersCustomerPasswordTokenBody: PostCustomersCustomerPasswordTokenBody
) => {
  return getClient<void>({
    url: `/customers/password-token`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postCustomersCustomerPasswordTokenBody,
  })
}
/**
 * Resets a Customer's password using a password token created by a previous /password-token request.
 * @summary Resets Customer password
 */
export const postCustomersResetPassword = (
  postCustomersResetPasswordBody: PostCustomersResetPasswordBody
) => {
  return getClient<PostCustomersResetPassword200>({
    url: `/customers/reset-password`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postCustomersResetPasswordBody,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostCustomersCustomerAddressesResult = NonNullable<
  AsyncReturnType<typeof postCustomersCustomerAddresses>
>
export type PostCustomersResult = NonNullable<
  AsyncReturnType<typeof postCustomers>
>
export type DeleteCustomersCustomerAddressesAddressResult = NonNullable<
  AsyncReturnType<typeof deleteCustomersCustomerAddressesAddress>
>
export type PostCustomersCustomerAddressesAddressResult = NonNullable<
  AsyncReturnType<typeof postCustomersCustomerAddressesAddress>
>
export type GetCustomersCustomerResult = NonNullable<
  AsyncReturnType<typeof getCustomersCustomer>
>
export type PostCustomersCustomerResult = NonNullable<
  AsyncReturnType<typeof postCustomersCustomer>
>
export type GetCustomersCustomerPaymentMethodsResult = NonNullable<
  AsyncReturnType<typeof getCustomersCustomerPaymentMethods>
>
export type GetCustomersCustomerOrdersResult = NonNullable<
  AsyncReturnType<typeof getCustomersCustomerOrders>
>
export type PostCustomersCustomerPasswordTokenResult = NonNullable<
  AsyncReturnType<typeof postCustomersCustomerPasswordToken>
>
export type PostCustomersResetPasswordResult = NonNullable<
  AsyncReturnType<typeof postCustomersResetPassword>
>
