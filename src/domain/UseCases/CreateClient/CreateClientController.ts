import * as Hapi from '@hapi/hapi';
import { createClientUseCase } from '.';

export class CreateClientController {
  async handle(request, h: Hapi.ResponseToolkit) {
    const { name, email, address, cpf, cnh } = request.payload;

    if (!name || !email || !address || !cpf || !cnh) {
      return h
        .response({ error: 'request cannot be processed because there are some missing fields' })
        .code(400);
    }

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
