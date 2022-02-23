const path = require("path")

const setupServer = require("../../../helpers/setup-server")
const { useApi } = require("../../../helpers/use-api")
const { useDb, initDb } = require("../../../helpers/use-db")

const customerSeeder = require("../../helpers/customer-seeder")
const adminSeeder = require("../../helpers/admin-seeder")

jest.setTimeout(30000)

describe("/admin/customer-groups", () => {
  let medusaProcess
  let dbConnection

  beforeAll(async () => {
    const cwd = path.resolve(path.join(__dirname, "..", ".."))
    dbConnection = await initDb({ cwd })
    medusaProcess = await setupServer({ cwd })
  })

  afterAll(async () => {
    const db = useDb()
    await db.shutdown()
    medusaProcess.kill()
  })

  describe("POST /admin/customer-groups", () => {
    beforeEach(async () => {
      try {
        await adminSeeder(dbConnection)
        await customerSeeder(dbConnection)
      } catch (err) {
        console.log(err)
        throw err
      }
    })

    afterEach(async () => {
      const db = useDb()
      await db.teardown()
    })

    it("creates customer group", async () => {
      const api = useApi()

      const payload = {
        name: "test group",
      }

      const response = await api.post("/admin/customer-groups", payload, {
        headers: {
          Authorization: "Bearer test_token",
        },
      })

      expect(response.status).toEqual(200)
      expect(response.data.customerGroup).toEqual(
        expect.objectContaining({
          name: "test group",
        })
      )
    })

    it("Fails to create duplciate customer group", async () => {
      expect.assertions(3)
      const api = useApi()

      const payload = {
        name: "vip-customers",
      }

      await api
        .post("/admin/customer-groups", payload, {
          headers: {
            Authorization: "Bearer test_token",
          },
        })
        .catch((err) => {
          expect(err.response.status).toEqual(402)
          expect(err.response.data.type).toEqual("duplicate_error")
          expect(err.response.data.message).toEqual(
            "Key (name)=(vip-customers) already exists."
          )
        })
    })
  })

  describe("POST /admin/customer-groups/{id}/customers/batch", () => {
    beforeEach(async () => {
      try {
        await adminSeeder(dbConnection)
        await customerSeeder(dbConnection)
      } catch (err) {
        console.log(err)
        throw err
      }
    })

    afterEach(async () => {
      const db = useDb()
      await db.teardown()
    })

    it("adds multiple customers to a group", async () => {
      const api = useApi()

      const payload = {
        customer_ids: [{ id: "test-customer-1" }, { id: "test-customer-2" }],
      }

      const batchAddResponse = await api.post(
        "/admin/customer-groups/customer-group-1/customers/batch",
        payload,
        {
          headers: {
            Authorization: "Bearer test_token",
          },
        }
      )

      expect(batchAddResponse.status).toEqual(200)
      expect(batchAddResponse.data.customer_group).toEqual(
        expect.objectContaining({
          name: "vip-customers",
        })
      )

      const getCustomerResponse = await api.get(
        "/admin/customers?expand=groups",
        {
          headers: { Authorization: "Bearer test_token" },
        }
      )

      expect(getCustomerResponse.data.customers).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: "test-customer-1",
            groups: [
              expect.objectContaining({
                name: "vip-customers",
                id: "customer-group-1",
              }),
            ],
          }),
          expect.objectContaining({
            id: "test-customer-2",
            groups: [
              expect.objectContaining({
                name: "vip-customers",
                id: "customer-group-1",
              }),
            ],
          }),
        ])
      )
    })

    it("presents a descriptive error when presented with a non-existing group", async () => {
      expect.assertions(2)

      const api = useApi()

      const payload = {
        customer_ids: [{ id: "test-customer-1" }, { id: "test-customer-2" }],
      }

      await api
        .post(
          "/admin/customer-groups/non-existing-customer-group-1/customers/batch",
          payload,
          {
            headers: {
              Authorization: "Bearer test_token",
            },
          }
        )
        .catch((err) => {
          expect(err.response.data.type).toEqual("not_found")
          expect(err.response.data.message).toEqual(
            "CustomerGroup with id non-existing-customer-group-1 was not found"
          )
        })
    })

    it("adds customers to a group idempotently", async () => {
      expect.assertions(3)

      const api = useApi()

      // add customer-1 to the customer group
      const payload_1 = {
        customer_ids: [{ id: "test-customer-1" }],
      }

      await api
        .post(
          "/admin/customer-groups/customer-group-1/customers/batch",
          payload_1,
          {
            headers: {
              Authorization: "Bearer test_token",
            },
          }
        )
        .catch((err) => console.log(err))

      // re-adding customer-1 to the customer group along with new addintion:
      // customer-2 and some non-existing customers should cause the request to fail
      const payload_2 = {
        customer_ids: [
          { id: "test-customer-1" },
          { id: "test-customer-27" },
          { id: "test-customer-28" },
          { id: "test-customer-2" },
        ],
      }

      await api
        .post(
          "/admin/customer-groups/customer-group-1/customers/batch",
          payload_2,
          {
            headers: {
              Authorization: "Bearer test_token",
            },
          }
        )
        .catch((err) => {
          console.log(err)
          expect(err.response.data.type).toEqual("not_found")
          expect(err.response.data.message).toEqual(
            'The following customer ids do not exist: "test-customer-27, test-customer-28"'
          )
        })

      // check that customer-1 is only added once and that customer-2 is added correctly
      const getCustomerResponse = await api.get(
        "/admin/customers?expand=groups",
        {
          headers: { Authorization: "Bearer test_token" },
        }
      )

      expect(getCustomerResponse.data.customers).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: "test-customer-1",
            groups: [
              expect.objectContaining({
                name: "vip-customers",
                id: "customer-group-1",
              }),
            ],
          }),
          expect.objectContaining({
            id: "test-customer-2",
            groups: [],
          }),
        ])
      )
    })
  })

  describe("GET /admin/customer-groups", () => {
    beforeEach(async () => {
      try {
        await adminSeeder(dbConnection)
        await customerSeeder(dbConnection)
      } catch (err) {
        console.log(err)
        throw err
      }
    })

    afterEach(async () => {
      const db = useDb()
      await db.teardown()
    })

    it("gets customer group", async () => {
      const api = useApi()

      const id = "customer-group-1"

      const response = await api.get(`/admin/customer-groups/${id}`, {
        headers: {
          Authorization: "Bearer test_token",
        },
      })

      expect(response.status).toEqual(200)
      expect(response.data.customerGroup).toEqual(
        expect.objectContaining({
          id: "customer-group-1",
          name: "vip-customers",
        })
      )
      expect(response.data.customerGroup).not.toHaveProperty("customers")
    })

    it("gets customer group with `customers` prop", async () => {
      const api = useApi()

      const id = "customer-group-1"

      const response = await api.get(
        `/admin/customer-groups/${id}?expand=customers`,
        {
          headers: {
            Authorization: "Bearer test_token",
          },
        }
      )

      expect(response.status).toEqual(200)
      expect(response.data.customerGroup).toEqual(
        expect.objectContaining({
          id: "customer-group-1",
          name: "vip-customers",
        })
      )
      expect(response.data.customerGroup.customers).toEqual([])
    })

    it("throws error when a customer group doesn't exist", async () => {
      const api = useApi()

      const id = "test-group-000"

      await api
        .get(`/admin/customer-groups/${id}`, {
          headers: {
            Authorization: "Bearer test_token",
          },
        })
        .catch((err) => {
          expect(err.response.status).toEqual(404)
          expect(err.response.data.type).toEqual("not_found")
          expect(err.response.data.message).toEqual(
            `CustomerGroup with id ${id} was not found`
          )
        })
    })
  })
})
