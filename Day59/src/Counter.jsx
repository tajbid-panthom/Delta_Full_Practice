import React, { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((c) => c + 1);
  };
  let [countx, setCountx] = useState(0);
  const handleCountx = () => {
    setCountx((c) => c + 1);
  };
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  return (
    <div>
      <div>Count = {count}</div>
      <button onClick={handleCount}> +1 </button>
      <div>Count = {countx}</div>
      <button onClick={handleCountx}> +1 </button>
    </div>
  );
};

export default Counter;
