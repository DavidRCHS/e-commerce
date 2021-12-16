import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useHistory } from 'react-router-dom'
// import authentication from '../../app/core/components/util/authentication'
import './nav.css'

import {
  faAngleDown,
  faAngleLeft,
  faUsers,
  faImage,
  faUserTie,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Nav = () => {
  let history = useHistory()

  const [, setUpdate] = useState(false)

  // const closeSession = (evt) => {
  //   evt?.preventDefault()
  //   authentication.clearSession()
  //   setUpdate(true)
  //   history.push('/')
  // }

  // let user
  // if (authentication.isAuthenticated()) {
  //   user = authentication.getUser()
  // }

  return (
    <>
      <div className='nav-bar'>
        <div className='wrapper'>
          <div className='sidebar'>
            <h2>Ecommerce</h2>
            <ul>
              <li>
                <Link to='/admin/Home'>
                  <FontAwesomeIcon className='fas' icon={faHome} />
                  Home
                </Link>
              </li>

              <li>
                <Link to='/admin/Producto'> Producto</Link>
              </li>

              <li>
                <a href='#'>
                  <FontAwesomeIcon className='fas' icon={faUsers} />
                  Usuarios
                  <FontAwesomeIcon className='fas' icon={faAngleDown} />
                </a>
                <ul>
                  <li>
                    <Link to='/admin/User/Customer'> Customer</Link>
                  </li>
                  <li>
                    <Link to='/admin/User/Administrador'> Administrador</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='main_content'>
            <div className='Adminheader'>
              <p>hello 333</p>
              {/* {user && (
                <a className='li-link  ' onClick={closeSession}>
                  Cerrar Sesion
                </a>
              )} */}
              <a className='li-link  '>Cerrar Sesion</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
