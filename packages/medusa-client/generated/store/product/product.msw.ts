/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from "msw"
import { faker } from "@faker-js/faker"

export const getGetProductsProductMock = () => ({
  product: faker.helpers.randomize([{}, undefined]),
})

export const getGetProductsMock = () => ({
  count: faker.helpers.randomize([faker.datatype.number(), undefined]),
  offset: faker.helpers.randomize([faker.datatype.number(), undefined]),
  limit: faker.helpers.randomize([faker.datatype.number(), undefined]),
  products: faker.helpers.randomize([
    [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({})),
    undefined,
  ]),
})

export const getProductMSW = () => [
  rest.get("*/products/:id", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetProductsProductMock())
    )
  }),
  rest.get("*/products", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetProductsMock())
    )
  }),
]
