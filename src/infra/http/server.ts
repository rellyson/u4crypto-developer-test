import { Server } from '@hapi/hapi';
import { routes } from './routes';

export const init = async () => {
  const server: Server = new Server({
    port: process.env.PORT || 4000,
    host: 'localhost',
  });

  server.route(routes);
  await server.start();
  return server;
};

init()
  .then((server: Server) => {
    console.log(`Server is running on ${server.info.uri}`);
  })
  .catch((error) => {
    console.log(error);
  });
