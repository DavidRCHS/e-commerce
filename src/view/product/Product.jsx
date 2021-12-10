import React from "react";
import "./product.css";
export default function Product({
 product_name, description,price,image,
}) {
  return (
    <div className="product-container">
      <div className="product-row">
        <div className="product">
          <img src={image} alt="product" />
          <h3>{product_name}</h3>
          
        </div>
        <div className="product-data">
          <p className="product-price">{price}</p>
          <p className="product-description">{description}</p>

        </div>
      </div>
    </div>
  );
}
