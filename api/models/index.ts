/**
 * main database module
 */
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { log } from '../lib/Log';

dotenv.config();

const conn = {
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE || 'blog',
  port: process.env.DB_PORT || 27017,
  credentials: '',
};
conn.credentials = conn.username
  ? `${conn.username}:${conn.password}@`
  : '';

const connectionString = `mongodb://${conn.credentials}${conn.host}:${conn.port}/${conn.database}`;

let retry = 10;

async function mongoConnect() {
  try {
    const connection: mongoose.Mongoose = await mongoose.connect(connectionString);
    if (process.env.MONGO_DEBUG) {
      mongoose.set('debug', true);
    }
    log.log('mongo connected');
  } catch (error) {
    log.error('connection error:');
    retry--;
    if (retry > 0) {
      log.log('try again');
      setTimeout(mongoConnect, 1000);
    }
  }
}

mongoConnect();
export default mongoose.connection;
