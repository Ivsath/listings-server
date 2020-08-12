import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  env,
  isProd: env === 'production',
  isDev: env === 'development',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/graphql-ts',
};

export default baseConfig;
