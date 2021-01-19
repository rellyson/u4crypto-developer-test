import { createClientController } from '../../domain/UseCases/CreateClient';
import { editClientRegistrationController } from '../../domain/UseCases/EditClientRegistration';

export const routes = [
  {
    method: 'POST',
    path: '/client',
    options: {
      handler: createClientController.handle,
    },
  },
  {
    method: 'PUT',
    path: '/client',
    options: {
      handler: editClientRegistrationController.handle,
    },
  },
];
