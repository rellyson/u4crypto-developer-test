import { ClientRepository } from '../../../infra/repositories/ClientRepository/ClientRepository';
import { ThirdPartyRepository } from '../../../infra/repositories/ThirdPartyRepository/ThirdPartyRepository';
import { ICreateClientRequestDTO } from './CreateClientDTO';

export class CreateClientUseCase {
  constructor(
    private clientRepository: ClientRepository,
    private thirdPartyRepository: ThirdPartyRepository,
  ) {}
  async execute(client: ICreateClientRequestDTO) {
    const clientExists = await this.clientRepository.findByCpf(client.cpf);

    if (clientExists) {
      throw new Error('client provided already exists on database');
    }

    const isClientThirdParty = await this.thirdPartyRepository.findByCpf(client.cpf);

    if (isClientThirdParty) {
      client.id = isClientThirdParty.id;
      client.cpf = isClientThirdParty.cpf;
      client.cnh = isClientThirdParty.cnh;
      client.accidents = isClientThirdParty.accidents;

      await this.thirdPartyRepository.delete(isClientThirdParty.id);
    }
    
    await this.clientRepository.save(client);
  }
}
