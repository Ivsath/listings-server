import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import config from './config';
// import connect from './utils/db';
import errorHandler from './middleware/error';
import resources from './routes/resources';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(express.json());

if (config.isDev) {
  app.use(morgan('dev'));
}

app.use('/api/v1/resources', resources);
app.use(errorHandler);

export const start = () => {
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
