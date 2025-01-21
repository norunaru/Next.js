import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://nwy98:tnsmd2129!@nextjs.fsyq4.mongodb.net/forum?retryWrites=true&w=majority&appName=nextJS";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
