import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("forum");

    console.log(req.body);

    let changed = { title: req.body.title, content: req.body.content };

    const reuslt = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: changed });

    res.status(200).redirect(302, "/list");
  }
}
