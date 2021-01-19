import { createClientController } from "../../domain/UseCases/CreateClient";

export const routes = [
  {
    method: 'POST',
    path: '/client',
    options: {
      handler: createClientController.handle
    },
  },
];
