import * as Hapi from '@hapi/hapi';
import { editClientRegistrationUseCase } from '.';

export class EditClientRegistrationController {
  async handle(request, h: Hapi.ResponseToolkit) {
    const { cpf, name, email, address, city, federalUnit } = request.payload;

    if (!cpf) {
      return h
        .response({
          error: 'client cpf was not provided',
        })
        .code(400);
    }

    try {
      await editClientRegistrationUseCase.execute({
        cpf,
        name,
        email,
        address,
        city,
        federalUnit
      });

      return h
        .response({
          message: 'client edited successfully',
        })
        .code(200);
    } catch (error) {
      return h
        .response({ error: error.message || 'unexpected error' })
        .code(400);
    }
  }
}
