const page = () => {
  async function handleSubmit(formData) {
    "use server";
    console.log(formData.get("title"));
  }

  return (
    <div>
      <form action={handleSubmit}>
        <input name="title"></input>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
};

export default page;
