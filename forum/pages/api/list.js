import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("forum");

  let result = await db.collection("post").find().toArray();

  console.log(result);

  return res.status(200).json(result);
}
