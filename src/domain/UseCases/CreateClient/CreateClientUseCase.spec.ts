import { server } from '../../../infra/http/server';

describe('Create client use case test', () => {
  beforeAll((done) => {
    server.events.on('start', () => {
      done();
    });
  });

  afterAll((done) => {
    server.events.on('stop', () => {
      done();
    });
    server.stop();
  });

  test('request should fail due to missing required fields', async () => {
    const options = {
      method: 'POST',
      url: '/client',
      payload: JSON.stringify({
        name: 'Zé das couve',
        cpf: '12345678901',
        cnh: '121341243141231',
        address: 'rua dos bobos, 0 - Disneyland, PA',
      }),
    };
    const res = await server.inject(options);
    expect(res.statusCode).toBe(400);
  });

  test('should create a client successfully', async () => {
    const options = {
      method: 'POST',
      url: '/client',
      payload: JSON.stringify({
        name: 'Zé das couve',
        rg: '3578637864273812',
        cpf: '123456789013',
        cnh: '1213412431412311',
        email: 'zedascouve@gmail.com',
        address: 'rua dos bobos, 0 - Sem bairro',
        city: 'Brumado Velho',
        federalUnit: 'MG',
      }),
    };
    const res = await server.inject(options);
    expect(res.statusCode).toBe(201);
  });
});
