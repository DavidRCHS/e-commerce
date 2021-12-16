import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../view/login'
import Register from '../view/register'
import ListProducts from '../components/ProductsList'
import Navbar from '../components/Navbar';
import home from '../view/home/Home';
import SearchProduct from '../view/SearchProduct';
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
<<<<<<< HEAD
        <Route exact path='/productos' component={ListProducts} />
        <Route exact path='/buscar' component={SearchProduct} />
        <Route exact path="/" component={home} />
=======
        <Route path='/admin' component={DashBoardAdmin} />
>>>>>>> 7aeadf924a23c101afc455523b8527f59a9a6231
        <Route path='/' component={Pages} />
      </Switch>
    </Router>
  )
}

export default Routes
