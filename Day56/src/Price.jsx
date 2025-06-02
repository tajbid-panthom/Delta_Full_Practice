import React from "react";

const Price = ({ newPrice, oldPrice }) => {
  return (
    <div>
      <span
        style={{
          textDecorationLine: "line-through",
          marginRight: "10px",
          color: "red",
        }}
      >
        {oldPrice}
      </span>
      <span>{newPrice}</span>
    </div>
  );
};

export default Price;
