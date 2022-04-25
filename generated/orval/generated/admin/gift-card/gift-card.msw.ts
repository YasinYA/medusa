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

export const getPostGiftCardsMock = () => ({gift_card: faker.helpers.randomize([{}, undefined])})

export const getGetGiftCardsMock = () => ({gift_cards: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({})), undefined])})

export const getDeleteGiftCardsGiftCardMock = () => ({id: faker.helpers.randomize([faker.random.word(), undefined]), object: faker.helpers.randomize([faker.random.word(), undefined]), deleted: faker.helpers.randomize([faker.datatype.boolean(), undefined])})

export const getGetGiftCardsGiftCardMock = () => ({gift_card: faker.helpers.randomize([{}, undefined])})

export const getPostGiftCardsGiftCardMock = () => ({gift_card: faker.helpers.randomize([{}, undefined])})

export const getGiftCardMSW = () => [
rest.post('*/gift-cards', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostGiftCardsMock()),
        )
      }),rest.get('*/gift-cards', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetGiftCardsMock()),
        )
      }),rest.delete('*/gift-cards/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getDeleteGiftCardsGiftCardMock()),
        )
      }),rest.get('*/gift-cards/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetGiftCardsGiftCardMock()),
        )
      }),rest.post('*/gift-cards/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostGiftCardsGiftCardMock()),
        )
      }),]
