import React from 'react'
import login from './loginRegis.css'
import Imagen from '../../assets/img/imgLogin.jpg'
import ImagenL from '../../assets/img/login.svg'

const LoginRegis = ({ Component }) => {
  return (
    <>
      <div className='login'>
        <div className='container-login'>
          <img src={ImagenL} className='imgLogin' alt='imagenLogin' />
          <Component />
        </div>
      </div>
    </>
  )
}

export default LoginRegis
