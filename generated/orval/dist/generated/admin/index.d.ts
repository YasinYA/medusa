import * as Apps from "./apps/apps";
import * as Auth from "./auth/auth";
import * as Claim from "./claim/claim";
import * as Collection from "./collection/collection";
import * as Customer from "./customer/customer";
import * as CustomerGroup from "./customer-group/customer-group";
declare class MedusaAdmin {
    apps: typeof Apps;
    auth: typeof Auth;
    claims: typeof Claim;
    collections: typeof Collection;
    customers: typeof Customer;
    customerGroups: typeof CustomerGroup;
    constructor();
}
export default MedusaAdmin;
