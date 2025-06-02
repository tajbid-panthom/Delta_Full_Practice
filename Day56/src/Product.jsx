import React from "react";
import "./Product.css";
import Price from "./Price";
const Product = ({ title, description, newPrice, oldPrice }) => {
  return (
    <div className="product">
      <h2>{title}</h2>
      <p>{description}</p>
      <Price newPrice={newPrice} oldPrice={oldPrice} />
    </div>
  );
};

export default Product;
