import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function deletePost(req, res) {
  if (req.method == "DELETE") {
    console.log(req.body);
    let session = getServerSession(req, res, authOptions);
    console.log(session);

    const db = (await connectDB).db("forum");

    let target = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });

    if (target.author == session.user.email) {
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      console.log(result);
      return res.status(200).json("삭제완료");
    } else {
      return res.status(500).json("현재 유저와 작성자 불일치");
    }
  }
}
