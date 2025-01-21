import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  let body = JSON.parse(req.body);
  body.author = session.user.email;

  if (req.method == "POST") {
    const client = await connectDB;
    const db = client.db("forum");

    const result = await db.collection("comment").insertOne(body);
    return res.status(200);
  }
}
