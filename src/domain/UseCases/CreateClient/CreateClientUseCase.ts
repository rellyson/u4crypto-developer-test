import { ClientRepository } from '../../../infra/repositories/ClientRepository/ClientRepository';
import { ThirdPartyRepository } from '../../../infra/repositories/ThirdPartyRepository/ThirdPartyRepository';
import { ICreateClientRequestDTO } from './CreateClientDTO';

export class CreateClientUseCase {
  constructor(
    private clientRepository: ClientRepository,
    private thirdPartyRepository: ThirdPartyRepository,
  ) {}
  async execute(data: ICreateClientRequestDTO) {
    const clientExists = await this.clientRepository.findByCpf(data.cpf);

    if (clientExists) {
      throw new Error('the client provided already exists on database');
    }

    const isClientThirdParty = await this.thirdPartyRepository.findByCpf(data.cpf);

    if (isClientThirdParty) {
      data.id = isClientThirdParty.id;
      data.cpf = isClientThirdParty.cpf;
      data.cnh = isClientThirdParty.cnh;
      data.accidents = isClientThirdParty.accidents;

      await this.thirdPartyRepository.migrate(isClientThirdParty.id);
    }
    
    await this.clientRepository.save(data);
  }
}
