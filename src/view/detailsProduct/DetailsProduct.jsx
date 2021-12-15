import React from 'react'
import { useProductContext } from '../../context/productContext'
import { useParams } from 'react-router'
import '../detailsProduct/detailsProduct.css'


export default function DetailsProduct() {
  const params = useParams()

  const { id } = params
  console.log(id)
  const context = useProductContext()

  const product = context.DetailsProduct

  const productounico = context.listProducts.filter(
    (producto) => producto._id === id
  )
  console.log(productounico)

  return (
    <div id='detalles'>
      <h3 id='ComponentDetailsProduct'> <strong> PRODUCTS DETAILS </strong> </h3>      {productounico.map((productos) => (
        <>
        <div id='detalleDivIzquierda'>
          <h4> <strong> CATEGORY </strong> </h4>
          <p id='detallescategory'>{productos.category}</p>
          <h4> <strong> DESCRIPTION </strong> </h4>
          <p id='detalledescription'> {productos.description} </p>
          <p id='detalleskun'>{productos.skun}</p>
          <h4> <strong> BRAND </strong> </h4>
          <p id='detallebrand'>{productos.brand}</p>
        </div>
        <div id='detalleDivDerecha'>
          <img id='detallesimg' src={productos.image} alt={productos._id} />
        </div>
      </>
      ))}

      {/* <p>{context.productActual.category}</p>
      <p>{context.productActual.description}</p>
      <p>{context.productActual.skun}</p>
      <p>{context.productActual.brand}</p> */}
    </div>
  )
}
