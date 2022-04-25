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

export const getPostNotesMock = () => ({note: faker.helpers.randomize([{}, undefined])})

export const getGetNotesMock = () => ({notes: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({})), undefined])})

export const getDeleteNotesNoteMock = () => ({id: faker.helpers.randomize([faker.random.word(), undefined]), deleted: faker.helpers.randomize([faker.datatype.boolean(), undefined])})

export const getGetNotesNoteMock = () => ({note: faker.helpers.randomize([{}, undefined])})

export const getPostNotesNoteMock = () => ({note: faker.helpers.randomize([{}, undefined])})

export const getNoteMSW = () => [
rest.post('*/notes', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostNotesMock()),
        )
      }),rest.get('*/notes', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetNotesMock()),
        )
      }),rest.delete('*/notes/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getDeleteNotesNoteMock()),
        )
      }),rest.get('*/notes/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetNotesNoteMock()),
        )
      }),rest.post('*/notes/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostNotesNoteMock()),
        )
      }),]
