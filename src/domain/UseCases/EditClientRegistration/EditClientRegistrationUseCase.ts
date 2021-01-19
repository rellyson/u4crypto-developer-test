import { ClientRepository } from '../../../infra/repositories/ClientRepository/ClientRepository';
import { IEditClientRegistrationRequestDTO } from './EditClientRegistrationDTO';

export class EditClientRegistrationUseCase {
  constructor(private clientRepository: ClientRepository) {}
  async execute(client: IEditClientRegistrationRequestDTO) {
    const data = await this.clientRepository.findByCpf(client.cpf);

    if (!data) {
      throw new Error('the client provided was not found in the database');
    }

    const dataToEdit = {
      name: client.name ? client.name : data.name,
      email: client.email ? client.email : data.email,
      address: client.address ? client.address : data.address,
      cpf: data.cpf,
      cnh: data.cnh,
    };

    await this.clientRepository.edit(dataToEdit);
  }
}
