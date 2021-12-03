import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../view/home'

// import Home from '../view/Home'

const Pages = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  )
}

export default Pages
