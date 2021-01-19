import { ClientRepository } from '../../../infra/repositories/ClientRepository/ClientRepository';
import { CreateClientController } from './CreateClientController';
import { CreateClientUseCase } from './CreateClientUseCase';

const clientRepository = new ClientRepository();
export const createClientUseCase = new CreateClientUseCase(clientRepository);
export const createClientController = new CreateClientController();
