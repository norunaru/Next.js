import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function deletePost(req, res) {
  console.log(req.query.id);
  if (req.method == "DELETE") {
    const db = (await connectDB).db("forum");
    const result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.query.id) });
    console.log("삭제완료");
    res.status(200);
  }
}
