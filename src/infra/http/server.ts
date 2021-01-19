import { Server } from '@hapi/hapi';
import { routes } from './routes';

export const server: Server = new Server({
  port: process.env.PORT || 4000,
  host: 'localhost',
});

server.route(routes);

const init = async () => {
  await server
    .start()
    .then(() => {
      console.log(`Server is running on ${server.info.uri}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

init();
