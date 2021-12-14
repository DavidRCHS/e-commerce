import React from 'react'

import {} from '@fortawesome/free-regular-svg-icons'
import { useHistory } from 'react-router-dom'

import LoginRegis from '../../components/loginRegis/LoginRegis'
import FormLogin from '../../components/loginRegis/FormLogin'
import axios from 'axios'
import { useUserContext } from '../../context/userContext'

const Login = () => {
  const context = useUserContext()

  const history = useHistory()

  const registerlogin = (datos) => {
    axios
      .post('https://ecomerce-master.herokuapp.com/api/v1/login', datos)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token)
        const config = {
          headers: {
            Authorization: `JWT ${response.data.token}`,
          },
        }
        axios
          .get('https://ecomerce-master.herokuapp.com/api/v1/user/me', config)
          .then((response) => {
            if (response.status === 200) {
              context.setUsuarioActual(response.data)
              console.log(response.data)
            }
          })
        history.push('/')

        console.log(response.data)
      })
  }

  return (
    <>
      <LoginRegis Component={FormLogin} postsesion={registerlogin} />
    </>
  )
}
export default Login
