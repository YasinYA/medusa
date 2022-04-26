/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostCustomerGroups200,
  PostCustomerGroupsBody,
  DeleteCustomerGroupsCustomerGroup200,
  PostCustomerGroupsGroup200,
  PostCustomerGroupsGroupBody,
  GetCustomerGroupsGroup200,
} from ".././model"
import { getClient } from "../../../src/custom-instance"

/**
 * Creates a CustomerGroup.
 * @summary Create a CustomerGroup
 */
export const postCustomerGroups = (
  postCustomerGroupsBody: PostCustomerGroupsBody
) => {
  return getClient<PostCustomerGroups200>({
    url: `/admin/customer-groups`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postCustomerGroupsBody,
  })
}
/**
 * Deletes a CustomerGroup.
 * @summary Delete a CustomerGroup
 */
export const deleteCustomerGroupsCustomerGroup = (id: string) => {
  return getClient<DeleteCustomerGroupsCustomerGroup200>({
    url: `/admin/customer-groups/${id}`,
    method: "delete",
  })
}
/**
 * Update a CustomerGroup.
 * @summary Update a CustomerGroup
 */
export const postCustomerGroupsGroup = (
  id: string,
  postCustomerGroupsGroupBody: PostCustomerGroupsGroupBody
) => {
  return getClient<PostCustomerGroupsGroup200>({
    url: `/admin/customer-groups/${id}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postCustomerGroupsGroupBody,
  })
}
/**
 * Retrieves a Customer Group.
 * @summary Retrieve a CustomerGroup
 */
export const getCustomerGroupsGroup = (id: string) => {
  return getClient<GetCustomerGroupsGroup200>({
    url: `/admin/customer-group/${id}`,
    method: "get",
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostCustomerGroupsResult = NonNullable<
  AsyncReturnType<typeof postCustomerGroups>
>
export type DeleteCustomerGroupsCustomerGroupResult = NonNullable<
  AsyncReturnType<typeof deleteCustomerGroupsCustomerGroup>
>
export type PostCustomerGroupsGroupResult = NonNullable<
  AsyncReturnType<typeof postCustomerGroupsGroup>
>
export type GetCustomerGroupsGroupResult = NonNullable<
  AsyncReturnType<typeof getCustomerGroupsGroup>
>
