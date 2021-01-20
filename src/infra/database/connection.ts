import { createConnection } from 'typeorm';

export const postgresConnection = async () => {
  return await createConnection();
};
