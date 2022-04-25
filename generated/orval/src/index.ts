import MedusaStore from "./resources/store"
import MedusaAdmin from "./resources/admin"
import Client from "./client"

class Medusa extends MedusaStore {
  private client_: Client
  public admin: MedusaAdmin

  constructor(config) {
    super()
    this.client_ = new Client(config)
    this.admin = new MedusaAdmin()
  }
}

export default Medusa
