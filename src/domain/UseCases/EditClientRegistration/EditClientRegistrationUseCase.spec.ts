import { server } from '../../../infra/http/server';

describe('Edit client registration use case', () => {
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

  test('request should fail due to missing cpf field', async () => {
    const options = {
      method: 'PUT',
      url: '/client',
      payload: JSON.stringify({
        email: 'zedasmandioca@gmail.com',
      }),
    };
    const res = await server.inject(options);
    expect(res.statusCode).toBe(400);
  });

  test('should edit the client registration successfully', async () => {
    const options = {
      method: 'PUT',
      url: '/client',
      payload: JSON.stringify({
        cpf: '12345678901',
        email: 'zedascouve2@gmail.com',
      }),
    };
    const res = await server.inject(options);
    expect(res.statusCode).toBe(200);
  });
});
