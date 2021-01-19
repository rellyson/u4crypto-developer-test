import { ClientRepository } from '../../../infra/repositories/ClientRepository/ClientRepository';
import { EditClientRegistrationController } from './EditClientRegistrationController';
import { EditClientRegistrationUseCase } from './EditClientRegistrationUseCase';

const clientRepository = new ClientRepository();
export const editClientRegistrationUseCase = new EditClientRegistrationUseCase(
  clientRepository,
);
export const editClientRegistrationController = new EditClientRegistrationController();
