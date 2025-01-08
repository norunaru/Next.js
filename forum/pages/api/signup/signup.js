import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("forum");

  const result = await db.collection("post").findOne({ title: req.title });
  console.log(result);

  if (req.body.id == "" || req.body.password == "") {
    res.status(500).json("something is empty");
  } else if (result != null) {
    res.status(500).json("id exists");
  } else {
    await db.collection("post").insertOne(req.body);
  }

  return res.status(200).json("signed up");
}
