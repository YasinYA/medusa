import Medusa from "."
import { Customer } from "../generated/admin/model/customer"

const client = new Medusa({
  baseUrl: "http://localhost:9000/",
  apiKey: "a07179bc-7c10-4997-a5da-3f56ae9bef48",
  maxRetries: 0,
})

async function updateCustomer(): Promise<Customer | undefined> {
  const res = await client.admin.customers.postCustomersCustomer(
    "cus_01FH5YQ7BRWWSAC36RS89VKGMC",
    {
      email: "sebrindom@tekla.com",
    },
    {
      expand: ["groups", "billing_address"],
    }
  )

  return res.customer
}

updateCustomer().catch((err) => console.log(err))
