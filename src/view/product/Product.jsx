import React from "react";
import '../product/product.css';


export default function Product({

  product_name,price,image

}) {
  return (
   
    <main className="padding">
      <div className="product">
        <div className="div-product">
          <img className="imagen" src={image} alt="Product"></img>
        </div>
        <div className="nombre">
          <h4>{product_name}</h4>
        </div>
        <div className="precio"> $ {price}</div>
        <a href=" ">  Detalles .. </a>
     
        <button className="btn btn-primary" ><h2>Comprar</h2></button>
      </div>
    </main>
  )

  
}
