"use client";

import Link from "next/link";

const ListItem = (props) => {
  return (
    <div>
      {props.result.map((post, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${props.result[i]._id}`}>
              <h4>{props.result[i].title}</h4>
            </Link>
            <Link href={`/edit/${props.result[i]._id}`}>수정</Link>
            <p>{props.result[i].content}</p>
            <span
              onClick={(e) => {
                // fetch(`/api/post/delete`, {
                //   method: "DELETE",
                //   body: props.result[i]._id,
                // })
                fetch(`/api/post/delete/${props.result[i]._id}`, {
                  method: "DELETE",
                })
                  .then((r) => {
                    r.json();
                  })
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
                // fetch(`/api/test?name=kim&age=20`);
                // fetch(`/api/abc/12312`);
              }}
            >
              ❗삭제
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
