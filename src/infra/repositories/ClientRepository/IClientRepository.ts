import { Client } from "../../../domain/Entities/Client";

export interface IClientRepository {
    save(client: Client): Promise<void>
}