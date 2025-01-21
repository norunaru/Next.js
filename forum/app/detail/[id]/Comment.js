"use client";

import { useEffect, useState } from "react";

export default function Comment({ id }) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${id}`, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  return (
    <div>
      <hr />
      {data?.map((comment, i) => (
        <div key={i}>{comment.content}</div>
      ))}

      <div>댓글목록</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, id: id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
