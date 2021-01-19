import * as Hapi from '@hapi/hapi';
import { editClientRegistrationUseCase } from '.';
import { IRequest } from '../../../infra/interfaces/Request';

export class EditClientRegistrationController {
  async handle(request: IRequest, h: Hapi.ResponseToolkit) {
    const { name, email, address, cpf } = request.payload;

    if (!cpf) {
      return h
        .response({
          error: `client cpf was not provided`,
        })
        .code(400);
    }

    try {
      await editClientRegistrationUseCase.execute({
        name,
        email,
        address,
        cpf,
      });

      return h
        .response({
          message: `client edited successfully`,
        })
        .code(200);
    } catch (error) {
      return h
        .response({ error: error.message || 'unexpected error' })
        .code(400);
    }
  }
}
