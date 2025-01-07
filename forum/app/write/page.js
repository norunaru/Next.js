export default function Write() {
  return (
    <div>
      <h1>글작성</h1>
      <form action={"/api/test"} method="POST">
        <input name="title"></input>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}

/*
1. 인풋에 작성
2. 포스트 요청시 인풋에 작성한 내용도 같이 전송
*/
