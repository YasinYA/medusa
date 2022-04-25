const { fixtures } = require("./data/")
const pluralize = require("pluralize")
const { snakeCase } = require("snake-case")

function transformer(options, other) {
  console.log({ options })
  let data
  const [tag] = options.tags
  if (
    options.verb === "get" ||
    options.verb === "post" ||
    options.verb === "put"
  ) {
    const singular = pluralize.singular(tag)
    const resource = snakeCase(singular)
    data = fixtures.get(resource)
  }
  const newOptions = {
    ...options,
    override: {
      mock: {
        properties: () => data,
      },
    },
  }
  return newOptions
}

module.exports = transformer
