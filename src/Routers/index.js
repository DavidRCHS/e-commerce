import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../view/login'
import Register from '../view/register'

import Pages from './pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/registro' component={Register} />
        <Route path='/' component={Pages} />
      </Switch>
    </Router>
  )
}

export default Routes
