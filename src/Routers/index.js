import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from '../view/login'
import Register from '../view/register'
import ListProducts from '../components/ProductsList'
import Pages from './pages'
import Admin from '../view/admin/Admin'
import DashBoardAdmin from './DashBoardAdmin'
import { useUserContext } from '../context/userContext'

const Logout = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('role')

  const context = useUserContext()
  context.setUsuarioActual()
  return <Redirect to='/' />
}

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/registro' component={Register} />
        <Route path='/admin' component={DashBoardAdmin} />
        <Route path='/' component={Pages} />
        <Route exact path='/logout' component={Logout} />
      </Switch>
    </Router>
  )
}

export default Routes
