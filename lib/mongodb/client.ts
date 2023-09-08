import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(uri);

// Initialize the client and export a module-scoped promise
const clientPromise = client.connect()
  .then(() => {
    console.log("MongoDB connected");
    return client;
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    throw err; // Rethrow the error to signal a failed connection
  });

export default clientPromise;
