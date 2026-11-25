import React from "react";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ProductList;
