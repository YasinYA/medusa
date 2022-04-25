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

export const getPostRegionsRegionCountriesMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getPostRegionsRegionFulfillmentProvidersMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getPostRegionsRegionPaymentProvidersMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getPostRegionsMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getGetRegionsMock = () => ({regions: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({})), undefined])})

export const getDeleteRegionsRegionMetadataKeyMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getDeleteRegionsRegionMock = () => ({id: faker.helpers.randomize([faker.random.word(), undefined]), object: faker.helpers.randomize([faker.random.word(), undefined]), deleted: faker.helpers.randomize([faker.datatype.boolean(), undefined])})

export const getGetRegionsRegionMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getPostRegionsRegionMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getGetRegionsRegionFulfillmentOptionsMock = () => ({fulfillment_options: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({provider_id: faker.helpers.randomize([faker.random.word(), undefined]), options: faker.helpers.randomize([{}, undefined])})), undefined])})

export const getPostRegionsRegionCountriesCountryMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getPostRegionsRegionFulfillmentProvidersProviderMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getPostRegionsRegionPaymentProvidersProviderMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getPostRegionsRegionMetadataMock = () => ({region: faker.helpers.randomize([{}, undefined])})

export const getRegionMSW = () => [
rest.post('*/admin/regions/:id/countries', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostRegionsRegionCountriesMock()),
        )
      }),rest.post('*/admin/regions/:id/fulfillment-providers', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostRegionsRegionFulfillmentProvidersMock()),
        )
      }),rest.post('*/admin/regions/:id/payment-providers', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostRegionsRegionPaymentProvidersMock()),
        )
      }),rest.post('*/admin/regions', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostRegionsMock()),
        )
      }),rest.get('*/admin/regions', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetRegionsMock()),
        )
      }),rest.delete('*/admin/regions/:id/metadata/:key', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getDeleteRegionsRegionMetadataKeyMock()),
        )
      }),rest.delete('*/admin/regions/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getDeleteRegionsRegionMock()),
        )
      }),rest.get('*/admin/regions/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetRegionsRegionMock()),
        )
      }),rest.post('*/admin/regions/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostRegionsRegionMock()),
        )
      }),rest.get('*/admin/regions/:id/fulfillment-options', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetRegionsRegionFulfillmentOptionsMock()),
        )
      }),rest.delete('*/admin/regions/:id/countries/:countrycode', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostRegionsRegionCountriesCountryMock()),
        )
      }),rest.delete('*/admin/regions/:id/fulfillment-providers/:providerid', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostRegionsRegionFulfillmentProvidersProviderMock()),
        )
      }),rest.delete('*/admin/regions/:id/payment-providers/:providerid', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostRegionsRegionPaymentProvidersProviderMock()),
        )
      }),rest.post('*/admin/regions/:id/metadata', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostRegionsRegionMetadataMock()),
        )
      }),]
