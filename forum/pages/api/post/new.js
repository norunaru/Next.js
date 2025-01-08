import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    if (req.body.title == "") {
      return res.status(500).json("no title");
    } else {
      const client = await connectDB;
      const db = client.db("forum");

      const result = await db.collection("post").insertOne(req.body);
      return res.status(200).redirect("/list");
    }
  }
}
