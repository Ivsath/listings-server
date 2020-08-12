import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import config from './config';
import { resolvers, typeDefs } from './graphql';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

app.disable('x-powered-by');

server.applyMiddleware({ app, path: '/api' });

export const start = (): void => {
  try {
    app.listen(config.port, () => {
      console.log(
        `Server running in ${config.env} mode on http://localhost:${config.port}`,
      );
    });
  } catch (e) {
    console.error(e);
  }
};
