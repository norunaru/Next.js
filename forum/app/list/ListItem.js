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
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
