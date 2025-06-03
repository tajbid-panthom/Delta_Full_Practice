import React from "react";

const Counter = () => {
  console.log("object");
  const [count, setCount] = React.useState(0);
  const counter = () => {
    setCount((p) => p + 1);
    // setCount((p) => p + 1); when it is depends on previous state, use function form
    // setCount(count + 1); this will not work as expected because it uses stale state
  };
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={counter}>Counter</button>
    </div>
  );
};

export default Counter;
