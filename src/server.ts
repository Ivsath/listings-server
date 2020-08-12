import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import config from './config';
import { connectDatabase } from './database';
import { resolvers, typeDefs } from './graphql';

export const start = async (): Promise<void> => {
  try {
    const db = await connectDatabase();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => ({ db }),
    });
    const app = express();

    app.disable('x-powered-by');

    server.applyMiddleware({ app, path: '/api' });

    app.listen(config.port, () => {
      console.log(
        `Server running in ${config.env} mode on http://localhost:${config.port}`,
      );
    });
  } catch (e) {
    console.error(e);
  }
};
