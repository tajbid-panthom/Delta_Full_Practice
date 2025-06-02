import React from "react";
import "./Product.css"; // Assuming you have a CSS file for styling
const Product = () => {
  return (
    <div className="product">
      <h2>Product Name</h2>
      <p>Description of the product goes here.</p>
      <p>Price: $XX.XX</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
