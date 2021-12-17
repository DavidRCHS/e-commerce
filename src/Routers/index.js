import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../view/login'
import Register from '../view/register'
import ListProducts from '../components/ProductsList'
import Navbar from '../components/Navbar';
import home from '../view/home/Home';
import SearchProduct from '../view/SearchProduct';
import VerCarrito from '../view/VistaCarrito';
import Pages from './pages'
import Admin from '../view/admin/Admin'
import DashBoardAdmin from './DashBoardAdmin'

const Routes = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/registro' component={Register} />
        <Route exact path='/productos' component={ListProducts} />
        <Route exact path='/buscar' component={SearchProduct} />
        <Route exact path='/carrito' component={VerCarrito} />
        <Route exact path="/" component={home} />
        <Route path='/' component={Pages} />
      </Switch>
    </Router>
  )
}

export default Routes
