
import { useProductContext } from '../../context/productContext'
import Product from '../../view/product/Product'
export default function ListProducts() {
  const context = useProductContext()

  return (
    <div>
      {context.listProducts.map((product, i) => (
        //se esta validando de que la imagen que sea mayor a 15
        <>
          {product.image && (
            <Product
              key={i}
              product_name={product.product_name}
              description={product.description}
              image={
                product._id == '605406b3078d290017f82da0' ||
                product._id == '606655d64220db0017c75ef8' ||
                product._id == '61b52ca5dc6b5500170f3b49'
                  ? 'https://thumbs.dreamstime.com/z/marco-de-la-foto-del-avatar-del-perfil-en-fondo-abstracto-46377623.jpg'
                  : product.image.length > 15
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
  )
}
