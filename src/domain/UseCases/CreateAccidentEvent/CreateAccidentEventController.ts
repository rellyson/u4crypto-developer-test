import * as Hapi from '@hapi/hapi';
import { createAccidentEventUseCase } from '.';
import { IRequest } from '../../../infra/interfaces/Request';

export class CreateAccidentEventController {
  async handle(request: IRequest, h: Hapi.ResponseToolkit) {
    const { clientCpf, vehicle, thirdParties } = request.payload;

    if (!clientCpf || !vehicle || !thirdParties) {
      return h
        .response({
          error:
            'request cannot be processed because there are some missing fields',
        })
        .code(400);
    }

    try {
      await createAccidentEventUseCase.execute({
        clientCpf,
        vehicle,
        thirdParties,
      });

      return h
        .response({
          message: `accident event created successfully`,
        })
        .code(201);
    } catch (error) {
      return h
        .response({ error: error.message || 'unexpected error' })
        .code(400);
    }
  }
}
