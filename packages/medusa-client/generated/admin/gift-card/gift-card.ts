/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostGiftCards200,
  PostGiftCardsBody,
  GetGiftCards200,
  DeleteGiftCardsGiftCard200,
  GetGiftCardsGiftCard200,
  PostGiftCardsGiftCard200,
  PostGiftCardsGiftCardBody,
} from ".././model"
import { getClient } from "../../../src/custom-instance"

/**
 * Creates a Gift Card that can redeemed by its unique code. The Gift Card is only valid within 1 region.
 * @summary Create a Gift Card
 */
export const postGiftCards = (postGiftCardsBody: PostGiftCardsBody) => {
  return getClient<PostGiftCards200>({
    url: `/admin/gift-cards`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postGiftCardsBody,
  })
}
/**
 * Retrieves a list of Gift Cards.
 * @summary List Gift Cards
 */
export const getGiftCards = () => {
  return getClient<GetGiftCards200>({ url: `/admin/gift-cards`, method: "get" })
}
/**
 * Deletes a Gift Card
 * @summary Delete a Gift Card
 */
export const deleteGiftCardsGiftCard = (id: string) => {
  return getClient<DeleteGiftCardsGiftCard200>({
    url: `/admin/gift-cards/${id}`,
    method: "delete",
  })
}
/**
 * Retrieves a Gift Card.
 * @summary Retrieve a Gift Card
 */
export const getGiftCardsGiftCard = (id: string) => {
  return getClient<GetGiftCardsGiftCard200>({
    url: `/admin/gift-cards/${id}`,
    method: "get",
  })
}
/**
 * Creates a Gift Card that can redeemed by its unique code. The Gift Card is only valid within 1 region.
 * @summary Create a Gift Card
 */
export const postGiftCardsGiftCard = (
  id: string,
  postGiftCardsGiftCardBody: PostGiftCardsGiftCardBody
) => {
  return getClient<PostGiftCardsGiftCard200>({
    url: `/admin/gift-cards/${id}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postGiftCardsGiftCardBody,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostGiftCardsResult = NonNullable<
  AsyncReturnType<typeof postGiftCards>
>
export type GetGiftCardsResult = NonNullable<
  AsyncReturnType<typeof getGiftCards>
>
export type DeleteGiftCardsGiftCardResult = NonNullable<
  AsyncReturnType<typeof deleteGiftCardsGiftCard>
>
export type GetGiftCardsGiftCardResult = NonNullable<
  AsyncReturnType<typeof getGiftCardsGiftCard>
>
export type PostGiftCardsGiftCardResult = NonNullable<
  AsyncReturnType<typeof postGiftCardsGiftCard>
>
