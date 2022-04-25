/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'

export const getPostOrdersClaimCancelMock = () => ({order: faker.helpers.randomize([{}, undefined])})

export const getClaimMSW = () => [
rest.post('*/admin/orders/:id/claims/:claimid/cancel', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostOrdersClaimCancelMock()),
        )
      }),]
