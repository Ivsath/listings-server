import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import morgan from 'morgan';

import config from './config';
import { schema } from './graphql';
// import connect from './utils/db';

const server = new ApolloServer({ schema });
const app = express();

app.disable('x-powered-by');

if (config.isDev) {
  app.use(morgan('dev'));
}

server.applyMiddleware({ app, path: '/api' });

export const start = (): void => {
  try {
    // await connect();
    app.listen(config.port, () => {
      console.log(
        `Server running in ${config.env} mode on http://localhost:${config.port}`,
      );
    });
  } catch (e) {
    console.error(e);
  }
};
