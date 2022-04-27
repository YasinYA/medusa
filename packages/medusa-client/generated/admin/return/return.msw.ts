/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from "msw"
import { faker } from "@faker-js/faker"

export const getPostReturnsReturnCancelMock = () => ({
  return: faker.helpers.randomize([{}, undefined]),
})

export const getGetReturnsMock = () => ({
  returns: faker.helpers.randomize([
    [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({})),
    undefined,
  ]),
})

export const getPostReturnsReturnReceiveMock = () => ({
  return: faker.helpers.randomize([{}, undefined]),
})

export const getReturnMSW = () => [
  rest.post("*/admin/returns/:id/cancel", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostReturnsReturnCancelMock())
    )
  }),
  rest.get("*/admin/returns", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetReturnsMock())
    )
  }),
  rest.post("*/admin/returns/:id/receive", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostReturnsReturnReceiveMock())
    )
  }),
]
