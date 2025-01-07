import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {result.map((post, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/list/detail/${post._id}`} prefetch={false}>
              <h4>{post.title}</h4>
            </Link>
            <p>{post.content}</p>
            <DetailLink />
          </div>
        );
      })}
    </div>
  );
}
