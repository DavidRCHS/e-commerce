import React, { useState, useEffect } from 'react'

import { useProductContext } from '../../context/productContext'
import Product from '../../view/product/Product'
export default function ListProducts() {
  const context = useProductContext()

  return (
    <div>
      {context.listProducts.map((product) => (
        <>
          {product.image && (
            <Product
              product_name={product.product_name}
              description={product.description}
              image={product.image}
              price={product.price}
              onClick={() => context.setProductActual(product)}
            />
          )}
        </>
      ))}
    </div>
  )
}
