import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../view/login'
import Register from '../view/register'
import ListProducts from '../components/ProductsList'
import Pages from './pages'
import Admin from '../view/admin/Admin'
import DashBoardAdmin from './DashBoardAdmin'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/registro' component={Register} />
        <Route path='/admin' component={DashBoardAdmin} />
        <Route path='/' component={Pages} />
      </Switch>
    </Router>
  )
}

export default Routes
