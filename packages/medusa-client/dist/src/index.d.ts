import { Config } from "./client";
import MedusaAdmin from "./resources/admin";
import MedusaStore from "./resources/store";
declare class Medusa extends MedusaStore {
    private client_;
    admin: MedusaAdmin;
    private static instance;
    constructor(config: Config);
    static getInstance(): Medusa;
    handleRequest<T>(config: any): Promise<T>;
}
export default Medusa;
