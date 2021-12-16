import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Navbar from '../components/Navbar'
import DetailsProduct from '../view/detailsProduct/DetailsProduct'
import Home from '../view/home'
import Carrito from '../view/Carrito'
// import Home from '../view/Home'

const Pages = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detalleProducto/:id' component={DetailsProduct} />
        <Route exact path='/carritoProduct' component={Carrito} />

        
      </Switch>
    </>
  )
}

export default Pages
