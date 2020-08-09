import { merge } from 'lodash';

const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  env,
  isProd: env === 'production',
  isDev: env === 'development',
  port: 3000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '30d',
  },
};

const envConfig = async () => {
  switch (env) {
    case 'prod':
    case 'production':
      return await import('./prod');
    case 'dev':
    case 'development':
      return await import('./dev');
    default:
      return await import('./dev');
  }
};

export default merge(baseConfig, envConfig);
