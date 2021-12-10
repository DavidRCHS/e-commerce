import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../view/login'
import Register from '../view/register'
import ListProducts from '../components/ProductsList'
import Pages from './pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/registro' component={Register} />
        <Route exact path ='/listProduct' component={ListProducts} />
        <Route path='/' component={Pages} />
      </Switch>
    </Router>
  )
}

export default Routes
