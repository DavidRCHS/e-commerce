import React from 'react'
import Imagen from '../../assets/img/imgLogin.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import LoginRegis from '../../components/loginRegis/LoginRegis'
import FormLogin from '../../components/loginRegis/FormLogin'
const Login = () => {
  return (
    <>
      <LoginRegis Component={FormLogin} />
    </>
  )
}
export default Login
