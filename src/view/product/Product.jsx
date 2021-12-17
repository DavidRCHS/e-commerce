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
    
      <button  id="agregar" className='btn btn-primary' onClick={() => {
          let cantidad=  document.getElementById(id+"cantidad").value;
          let identificador= document.getElementById(id+"producto").value;
          if(window.localStorage.getItem('carrito') == null){
            var carrito=[];
            carrito.push({"id": identificador, "cantidad": cantidad});
            window.localStorage.setItem('carrito',JSON.stringify(carrito))
            alert('Se agrego al carrito')
          
        }else{
            var carritoText= window.localStorage.getItem('carrito');
            var carrito = JSON.parse(carritoText);
            let products = {"id": identificador, "cantidad": cantidad}
            
            carrito.push(products);
            window.localStorage.setItem('carrito',JSON.stringify(carrito))
            console.log(carrito);
            alert('Se agrego al carrito')
        }
         
          ;}}>Agregar</button>
       
      <div>
      <input id={id+'cantidad'}  type="number" name="cantidad"  placeholder=""/>
      <input id={id+'producto'}  type="hidden" name="identificador" value={id} placeholder=""/>
      </div>

      
    </div>
    
  )
}

