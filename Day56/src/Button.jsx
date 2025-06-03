import React from "react";
const printHello = (e) => {
  console.log("Hello");
  console.log(e);
};
const Button = () => {
  return (
    <div>
      <button onClick={printHello}>Click Me!</button>
    </div>
  );
};

export default Button;
