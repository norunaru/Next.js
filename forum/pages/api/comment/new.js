import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method == "POST") {
    req.body = JSON.parse(req.body);
    let data = {
      content: req.body.comment,
      parent: new ObjectId(req.body.id),
      author: session.user.email,
    };

    const client = await connectDB;
    const db = client.db("forum");

    const result = await db.collection("comment").insertOne(data);
    return res.status(200);
  }
}
