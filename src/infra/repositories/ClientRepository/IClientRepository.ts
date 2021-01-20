import { Client } from '../../../domain/Entities/Client';

export interface IClientRepository {
  save(client: Client): Promise<Client>;
  edit(client: Client): Promise<void>;
  findByCpf(cpf: string): Promise<Client>;
}
