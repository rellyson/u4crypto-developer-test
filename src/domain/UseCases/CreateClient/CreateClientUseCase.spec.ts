import { server } from '../../../infra/http/server';

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
