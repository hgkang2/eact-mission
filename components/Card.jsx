import React from "react";

function Card({ item }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <h2>{item.name}</h2>
      <p>가격: {item.price}원</p>
      <p>브랜드: {item.brand}</p>
    </div>
  );
}

export default Card;
