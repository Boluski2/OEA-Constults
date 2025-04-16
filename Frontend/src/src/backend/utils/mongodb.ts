
import { MongoClient, ServerApiVersion, Db } from 'mongodb';

const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority";
// Note: Replace the URI with your actual MongoDB connection string

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase(): Promise<Db> {
  try {
    await client.connect();
    return client.db("blog_db");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}

export async function closeDatabaseConnection(): Promise<void> {
  await client.close();
}
