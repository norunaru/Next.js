import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("forum");

  // MongoDB에서 데이터를 가져오고 _id를 문자열로 변환
  let result = await db.collection("post").find().toArray();
  result = result.map((post) => ({
    ...post,
    _id: post._id.toString(), // ObjectId를 문자열로 변환
  }));

  console.log(result);

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
