import MedusaAdmin from "../generated/admin"
import { Customer } from "../generated/admin/model/customer"

const admin = new MedusaAdmin()

async function updateCustomer(): Promise<Customer | undefined> {
  const res = await admin.customers.postCustomersCustomer(
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
