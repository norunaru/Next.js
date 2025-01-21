import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let hash = await bcrypt.hash(req.body.password, 10);
    console.log(hash);
    console.log(req.body);

    req.body.password = hash;

    if (
      req.body.name != "" &&
      req.body.email != "" &&
      req.body.password != ""
    ) {
      let db = (await connectDB).db("forum");

      let target = await db
        .collection("user_cred")
        .findOne({ email: req.body.email });

      if (target) {
        return res.status(500).json("email exists");
      }
      await db.collection("user_cred").insertOne(req.body);

      res.status(200).redirect("/");
    } else {
      res.status(500).json("wrong input");
    }
  }
}
