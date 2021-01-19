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
        name: 'Zé das mandioca',
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
        email: 'zedasmandioca2@gmail.com',
        cpf: '1231312313123',
      }),
    };
    const res = await server.inject(options);
    expect(res.statusCode).toBe(200);
  });
});
