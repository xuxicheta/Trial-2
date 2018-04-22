/**
 * main database module
 */
import * as mongoose from 'mongoose';
import dotenv from 'dotenv';
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
mongoose.connect(connectionString);

if (process.env.MONGO_DEBUG) mongoose.set('debug', true);

const db = mongoose.connection;

db.on('error', () => {
  log.error('connection error:');
});
db.once('open', () => {
  log.log('mongo connected');
});

module.exports = db;
