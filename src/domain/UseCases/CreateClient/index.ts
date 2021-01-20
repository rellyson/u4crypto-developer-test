import { ClientRepository } from '../../../infra/repositories/ClientRepository/ClientRepository';
import { ThirdPartyRepository } from '../../../infra/repositories/ThirdPartyRepository/ThirdPartyRepository';
import { CreateClientController } from './CreateClientController';
import { CreateClientUseCase } from './CreateClientUseCase';

const clientRepository = new ClientRepository();
const thirdPartyRepository = new ThirdPartyRepository();
export const createClientUseCase = new CreateClientUseCase(
  clientRepository,
  thirdPartyRepository,
);
export const createClientController = new CreateClientController();
