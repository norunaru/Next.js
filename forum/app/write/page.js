export default function Write() {
  return (
    <div className="p-20">
      <h1>글작성</h1>
      <form action={"/api/post/new"} method="POST">
        <input name="title" placeholder="글제목" required />
        <input name="content" placeholder="내용" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}

/*
1. 인풋에 작성
2. 포스트 요청시 인풋에 작성한 내용도 같이 전송
*/
