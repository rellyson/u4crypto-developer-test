import * as Hapi from '@hapi/hapi';
import { createClientUseCase } from '.';
import { IRequest } from '../../../infra/interfaces/Request';

export class CreateClientController {
  async handle(request: IRequest, h: Hapi.ResponseToolkit) {
    const { name, email, address, cpf, cnh } = request.payload;

    try {
      await createClientUseCase.execute({
        name,
        email,
        address,
        cpf,
        cnh,
      });

      return h
        .response({
          message: `client with email ${email} created successfully`,
        })
        .code(201);
    } catch (error) {
      return h
        .response({ error: error.message || 'unexpected error' })
        .code(400);
    }
  }
}
