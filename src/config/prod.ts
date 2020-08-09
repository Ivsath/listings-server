import dotenv from 'dotenv';

dotenv.config();

export default {
  secrets: {
    jwt: process.env.JWT_SECRET,
  },
  dbUrl: process.env.DB_URL,
};
