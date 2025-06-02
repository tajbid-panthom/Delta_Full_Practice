import React from "react";
import Product from "./Product";

const ProductTab = () => {
  let products = [
    {
      title: "Product 1",
      description: "Description for Product 1",
      newPrice: "$8",
      oldPrice: "$10",
    },
    {
      title: "Product 2",
      description: "Description for Product 2",
      newPrice: "$18",
      oldPrice: "$20",
    },
    {
      title: "Product 3",
      description: "Description for Product 3",
      newPrice: "$28",
      oldPrice: "$30",
    },
    {
      title: "Product 4",
      description: "Description for Product 4",
      newPrice: "$38",
      oldPrice: "$40",
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          newPrice={product.newPrice}
          oldPrice={product.oldPrice}
        />
      ))}
    </div>
  );
};

export default ProductTab;
