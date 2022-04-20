#!/usr/bin/env node

const fs = require("fs")
const OAS = require("oas-normalize")
const swaggerInline = require("swagger-inline")

// Storefront API
swaggerInline(
  ["./packages/medusa/src/models", "./packages/medusa/src/api/routes/store"],
  {
    base: "./docs/api/store-spec3-base.json",
  }
).then((gen) => {
  const oas = new OAS(gen)
  oas
    .validate(true)
    .then(() => {
      fs.writeFileSync("./docs/api/store-spec3.json", gen)
    })
    .catch((err) => {
      console.log("Error in store")
      console.error(err)
    })
})

swaggerInline(
  ["./packages/medusa/src/models", "./packages/medusa/src/api/routes/store"],
  {
    base: "./docs/api/store-spec3-base.json",
    format: "yaml",
  }
).then((gen) => {
  fs.writeFileSync("./docs/api/store-spec3.yaml", gen)
})

// Admin API
swaggerInline(
  ["./packages/medusa/src/models", "./packages/medusa/src/api/routes/admin"],
  {
    base: "./docs/api/admin-spec3-base.json",
  }
).then((gen) => {
  const oas = new OAS(gen)
  oas
    .validate(true)
    .then(() => {
      fs.writeFileSync("./docs/api/admin-spec3.json", gen)
    })
    .catch((err) => {
      console.log("Error in admin")
      console.error(err)
      console.log(err.toString())
    })
})

swaggerInline(
  ["./packages/medusa/src/models", "./packages/medusa/src/api/routes/admin"],
  {
    base: "./docs/api/admin-spec3-base.json",
    format: "yaml",
  }
).then((gen) => {
  fs.writeFileSync("./docs/api/admin-spec3.yaml", gen)
})
