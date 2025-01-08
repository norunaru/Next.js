import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  console.log(result);
  return (
    <div className="p-20">
      <h1>글수정</h1>
      <form action={"/api/post/edit"} method="POST">
        <input
          name="title"
          placeholder="글제목"
          required
          defaultValue={result.title}
        />
        <input
          name="content"
          placeholder="내용"
          defaultValue={result.content}
        />
        <input
          style={{ display: "none" }}
          name={"_id"}
          defaultValue={result._id.toString()}
        />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
