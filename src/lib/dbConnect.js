import mongoose from 'mongoose';


const connection = {};

async function dbConnect() {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    // Attempt to connect to the database
    // const connectionString = `mongodb+srv://admin-rahul:OmMmBHSDSLZS1eiA@ecommerce.vz7ko.mongodb.net/`;
    const connectionString = 'mongodb://127.0.0.1:27017/ecommerce_db';
    const db = await mongoose.connect(connectionString || '', {});

    connection.isConnected = db.connections[0].readyState;

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;