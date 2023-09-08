import { MongoClient, Db } from "mongodb"

const uri = process.env.MONGODB_URI

let client: MongoClient
let clientPromise: Promise<MongoClient>  // Explicitly define the type

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local")
}

client = new MongoClient(uri)
clientPromise = client.connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
