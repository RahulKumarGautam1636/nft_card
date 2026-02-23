import { withRemoteDB } from '@/api/api';
import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log(`Already connected to ${withRemoteDB ? 'Remote' : 'Local'} database`);
    return cached.conn;
  }

  if (!cached.promise) {
    const connectionString = withRemoteDB
      ? process.env.REMOTE_DB_CONNECTION_STRING
      : process.env.LOCAL_DB_CONNECTION_STRING;

    cached.promise = mongoose.connect(connectionString || '', {   
      bufferCommands: false,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }).then((mongoose) => {
      console.log(`${withRemoteDB ? 'Remote' : 'Local'} Database connected successfully`);
      return mongoose;
    }).catch((err) => {
      console.error('Database connection failed:', err);
      throw err;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
