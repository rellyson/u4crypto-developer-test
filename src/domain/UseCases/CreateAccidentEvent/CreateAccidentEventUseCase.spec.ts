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
        clientCpf: '1231312313123',
        vehicle: {
          renavam: '0027831094681',
          brand: 'Fiat',
          model: 'Marea SX 1.6 16V',
          manufactureYear: '2004',
          modelYear: '2005',
        },
      }),
    };
    const res = await server.inject(options);
    expect(res.statusCode).toBe(400);
  });

  test('should create a accident successfully', async () => {
    const options = {
      method: 'POST',
      url: '/accident',
      payload: JSON.stringify({
        clientCpf: '1231312313123',
        vehicle: {
          renavam: '0027831094681',
          brand: 'Fiat',
          model: 'Uno Mille com escada',
          manufactureYear: '1997',
          modelYear: '1998',
        },
        thirdParties: [
          {
            name: 'Zézim da esquina',
            cpf: '15987632158',
            cnh: '423431243214',
          },
          {
            name: 'Dona Maria do supermercado três irmãos',
            cpf: '98678135942',
            cnh: '819871564791',
          },
        ],
      }),
    };
    const res = await server.inject(options);
    expect(res.statusCode).toBe(201);
  });
});
