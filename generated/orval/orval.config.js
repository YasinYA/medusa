module.exports = {
  "admin-file-transfomer": {
    output: {
      mode: "tags-split",
      target: "./generated/admin/index.ts",
      schemas: "./generated/admin/model/",
      override: {
        mutator: {
          path: "./src/custom-instance.ts",
          name: "customInstance",
        },
        transformer: "./dist/src/transformer.js",
      },
      mock: true,
    },
    input: {
      target: "../../docs/api/admin-spec3.yaml",
    },
  },
  "store-file-transformer": {
    output: {
      mode: "tags-split",
      target: "./generated/store/index.ts",
      schemas: "./generated/store/model",
      override: {
        mutator: {
          path: "./src/custom-instance.ts",
          name: "customInstance",
        },
      },
      mock: true,
    },
    input: {
      target: "../../docs/api/store-spec3.yaml",
    },
  },
}
