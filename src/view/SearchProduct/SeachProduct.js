import { useProductContext } from '../../context/productContext'
import Product from '../../view/product/Product'
export default function ListProducts() {

  const context = useProductContext()

  const NombreIem= getParameterByName('item');
  
  return (
    <div className='container-page'>
      <div className='jul_grid-cards'>
        {context.listProducts.map((product, i) => (
          //se esta validando de que la imagen que sea mayor a 15
          product.product_name.includes(NombreIem)  ?<>
          {product.image && (
               <Product
                 key={i}
                 product_name={product.product_name}
                 description={product.description}
                 id={product._id}
                 image={
                    product.image
                 }
                 price={product.price}
                 onClick={() => context.setProductActual(product)}
               />
             )}
           </>:console.log('Diferente')
         
        ))}
      </div>
    </div>
  )
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(window.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}