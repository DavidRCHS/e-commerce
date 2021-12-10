import React from 'react'
import login from './loginRegis.css'
import Imagen from '../../assets/img/imgLogin.jpg'
import ImagenL from '../../assets/img/login.svg'
import useForm from '../../hooks/useForm'

const LoginRegis = ({ Component, setData }) => {
  const { inputs, handleInput, handleSubmit } = useForm('', {})

  return (
    <>
      <div className='login'>
        <div className='container-login'>
          <img src={ImagenL} className='imgLogin' alt='imagenLogin' />
          <Component
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            inputs={inputs}
          />
        </div>
      </div>
    </>
  )
}

export default LoginRegis
