import React from 'react'
import { useProductContext } from '../../context/productContext'
import { useParams } from 'react-router'

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
      <h3>Component DetailsProduct</h3>
      {productounico.map((productos) => (
        <>
          <p>{productos.category}</p>
          <p>{productos.description}</p>
          <p>{productos.skun}</p>
          <p>{productos.brand}</p>
          <img src={productos.image} alt={productos._id} />
        </>
      ))}

      {/* <p>{context.productActual.category}</p>
      <p>{context.productActual.description}</p>
      <p>{context.productActual.skun}</p>
      <p>{context.productActual.brand}</p> */}
    </div>
  )
}
