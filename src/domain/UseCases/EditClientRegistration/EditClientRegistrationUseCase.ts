import { ClientRepository } from '../../../infra/repositories/ClientRepository/ClientRepository';
import { IEditClientRegistrationRequestDTO } from './EditClientRegistrationDTO';

export class EditClientRegistrationUseCase {
  constructor(private clientRepository: ClientRepository) {}
  async execute(data: IEditClientRegistrationRequestDTO) {
    const client = await this.clientRepository.findByCpf(data.cpf);

    if (!client) {
      throw new Error('the client provided was not found in the database');
    }

    const clientToEdit = {
      rg: client.rg,
      cpf: client.cpf,
      cnh: client.cnh,
      name: data.name ? data.name : client.name,
      email: data.email ? data.email : client.email,
      address: data.address ? data.address : client.address,
      city: data.city ? data.city : client.city,
      federalUnit: data.federalUnit ? data.federalUnit : client.federalUnit,
    };

    await this.clientRepository.edit(clientToEdit);
  }
}
