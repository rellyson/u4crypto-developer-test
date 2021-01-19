import { createConnection } from 'typeorm';
import { Client } from '../../../domain/Entities/Client';
import { IClientRepository } from './IClientRepository';

export class ClientRepository implements IClientRepository {
  async save(data: Client): Promise<void> {
    createConnection()
      .then(async (connection) => {
        const client = new Client();
        Object.assign(client, data);
        await connection.manager.save(client).then(() => {
          connection.close();
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  async findByCpf(cpf: string): Promise<Client> {
    let client: Client;
    await createConnection()
      .then(async (connection) => {
        let clientRepository = connection.getRepository(Client);
        client = await clientRepository.findOne({ cpf });
        await connection.close();
      })
      .catch((error) => {
        throw new Error(error);
      });
    return client;
  }
}
