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
      method: 'PUT',
      url: '/client',
      payload: JSON.stringify({
        name: 'Zé das couve',
        address: 'rua dos bobos, 0 - Disneyland, PA',
        cnh: '121341243141231',
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
        email: 'zedascouve@gmail.com',
        address: 'rua dos bobos, 0 - Disneyland, PA',
        cpf: '12345678901',
        cnh: '121341243141231',
      }),
    };
    const res = await server.inject(options);
    expect(res.statusCode).toBe(201);
  });
});
