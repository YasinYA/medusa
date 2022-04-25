import { CustomerApi, Customer } from "../generated/index"

const customers = new CustomerApi({
  basePath: "http://localhost:9000/admin",
  apiKey: "a07179bc-7c10-4997-a5da-3f56ae9bef48",
})

async function updateCustomer(): Promise<Customer | undefined> {
  const res = await customers.postCustomersCustomer(
    "cus_01FH5YQ7BRWWSAC36RS89VKGMC",
    {
      email: "sebrindom@tekla.com",
    },
    {
      expand: ["groups", "billing_address"],
    }
  )
  console.log(res.customer)
  return res.customer
}

updateCustomer().catch((err) => console.log(err))
