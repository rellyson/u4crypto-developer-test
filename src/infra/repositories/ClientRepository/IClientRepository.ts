import { Client } from '../../../domain/Entities/Client';

export interface IClientRepository {
  save(client: Client): Promise<void>;
  edit(client: Client): Promise<void>;
  findByCpf(cpf: string): Promise<Client>;
}
