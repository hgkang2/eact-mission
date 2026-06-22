import React from "react";
import Card from "./components/Card";

function App() {
  const product = {
    name: "무선 키보드",
    price: 39000,
    brand: "EZTECH",
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>상품 목록</h1>
      {}
      <Card item={product} />
    </div>
  );
}

export default App;
