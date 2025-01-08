export default function SignUp() {
  return (
    <div className="p-20">
      <h4>회원가입</h4>
      <form action={"/api/signup/signup"} method="POST">
        <input placeholder="ID" required name="id" />
        <input placeholder="PW" required name="password" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
