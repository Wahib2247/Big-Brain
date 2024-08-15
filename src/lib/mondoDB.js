import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// Maintain a cached connection across hot-reloads in development mode
let cachedClient = global.mongooseClient;
let cachedDb = global.mongooseDb;

export async function connectToDatabase() {
  if (cachedClient && cachedClient.connections[0].readyState) {
    return { db: cachedDb, client: cachedClient };
  }

  try {
    const client = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    console.log('Connected to MongoDB');

    cachedClient = client;
    cachedDb = client.connection.db;

    // Assign to global for reuse in subsequent connections
    global.mongooseClient = cachedClient;
    global.mongooseDb = cachedDb;

    return { db: cachedDb, client: cachedClient };
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    throw new Error('Failed to connect to MongoDB');
  }
}