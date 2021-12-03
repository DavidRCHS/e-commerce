import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../view/login'

import Pages from './pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route path='/' component={Pages} />
      </Switch>
    </Router>
  )
}

export default Routes
