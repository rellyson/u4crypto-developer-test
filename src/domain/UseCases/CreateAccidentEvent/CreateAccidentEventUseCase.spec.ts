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

  test('request should fail due to missing some required fields', async () => {
    const options = {
      method: 'POST',
      url: '/accident',
      payload: JSON.stringify({
        client: {
          cpf: '12345678901',
        },
        vehicle: {
          renavam: '0027831094681',
          brand: 'Fiat',
          model: 'Uno Mille 1.0 com escada',
          manufactureYear: '2007',
          modelYear: '2008',
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
        client: {
          cpf: '12345678901',
        },
        vehicle: {
          renavam: '0027831094681',
          brand: 'Fiat',
          model: 'Marea SX 1.6 16V',
          manufactureYear: '2004',
          modelYear: '2005',
        },
        thirdParties: [
          {
            name: 'Zézim da esquina',
            rg: '18354987',
            cpf: '15987632158',
            cnh: '423431243214',
          },
          {
            name: 'Dona Maria do supermercado três irmãos',
            rg: '293657419',
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
