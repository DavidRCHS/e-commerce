import React from 'react'
import '../product/product.css'
import { Link } from 'react-router-dom'


export default function Product({ product_name, price, image, id }) {
  return (
    <div className='jul_flex_product'>
      <div className='div-product'>
        <img className='imagen' src={image} alt='Product' onError={(e)=>{e.target.onerror = null; e.target.src="https://i.pinimg.com/originals/ee/f3/f4/eef3f4858339074c0bba500abfbf6850.jpg"}}></img>
      </div>
      <div className='nombre'>
        <h4 id="nombreProducto">{product_name}</h4>
      </div>
      <div className='precio'> $ {price}</div>
     

      <Link to={`/detalleProducto/${id}`}> Detalles .. </Link>
    <form action="/carritoProduct" method="GET" >
      <input type="submit" id="agregar" className='btn btn-primary' value="Agregar" />
       
      <div>
      <input id="input-product"  type="number" name="cantidad"  placeholder=""/>
      <input id="id-product"  type="hidden" name="identificador" value={id} placeholder=""/>
      </div>
      </form>
    </div>
  )
}
