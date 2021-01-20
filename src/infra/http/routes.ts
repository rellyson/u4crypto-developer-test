import { createAccidentEventController } from '../../domain/UseCases/CreateAccidentEvent';
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
  {
    method: 'POST',
    path: '/accident',
    options: {
      handler: createAccidentEventController.handle,
    },
  },
];
