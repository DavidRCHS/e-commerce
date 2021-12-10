
import React, {useState, useEffect} from 'react';

import { useProductContext } from '../../context/productContext';
import Product from '../../view/product/Product';
export default function ListProducts() {
    const context = useProductContext();
    
    return (
        <div>
        {context.listProducts.map((product) => (
            //se esta validando de que la imagen que sea mayor a 15 
          <>
          
              {product.image && (
            <Product
              product_name={product.product_name}
              description={product.description}
              image={
                product.image.length > 15
                  ? product.image
                  : 'https://thumbs.dreamstime.com/z/marco-de-la-foto-del-avatar-del-perfil-en-fondo-abstracto-46377623.jpg'
              }
              price={product.price}
              onClick={() => context.setProductActual(product)}
            />
          )}

          </>
        ))}
      </div>
  

    );
}
