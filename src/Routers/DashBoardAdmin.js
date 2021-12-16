import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomeAdmin from '../components/HomeAdmin'

import Navbar from '../components/NabvarAdmin'
import ProductoAdmin from '../components/ProductoAdmin'
import UserAdmin from '../components/UserAdmin'
import UserCostumer from '../components/UserCustomer'

const DashBoardAdmin = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          {/* <RouteAuthentication>  */}
          <Route exact path='/admin/Home' component={HomeAdmin} />

          <Route exact path='/admin/Producto' component={ProductoAdmin} />
          <Route exact path='/admin/User/Customer' component={UserCostumer} />
          <Route exact path='/admin/User/Administrador' component={UserAdmin} />

          {/* <Route exact path='/Pagos' component={Pagos} /> */}

          {/* <Route exact path='/' /> */}

          {/* <Redirect to='/admin/Home' /> */}
          {/* </RouteAuthentication> */}
        </Switch>
      </div>
    </>
  )
}

export default DashBoardAdmin
