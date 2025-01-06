"use client";
import { useState } from "react";

export default function List() {
  let products = ["tomatoes", "pasta", "coconut"];
  const [cnt, setCnt] = useState([0, 0, 0]);
  return (
    <div>
      <h2>Products</h2>
      <span>{cnt[0]}</span>
      <button
        onClick={() => {
          let copy = [...cnt];
          copy[0]++;
          setCnt(copy);
        }}
      >
        +
      </button>
      <span>{cnt[1]}</span>
      <button>+</button>
      <span>{cnt[2]}</span>
      <button>+</button>

      {products.map((product, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{product}</h4>
            <span> {cnt}</span>
            <button
              onClick={() => {
                setCnt(cnt[idx] + 1);
                console.log("click");
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
