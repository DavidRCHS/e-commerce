import React, { useState } from 'react'

import {} from '@fortawesome/free-regular-svg-icons'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Input, Select, Alert, Button, Spin, message, Space } from 'antd'

import axios from 'axios'
import { useUserContext } from '../../context/userContext'
import useForm from '../../hooks/useForm'
import Imagen from '../../assets/img/imgLogin.jpg'
import ImagenL from '../../assets/img/login.svg'
import './loginRegis.css'
import {
  comparePassword,
  validMinCharacters,
  validNotEmpty,
  validOnlyLetters,
  validOnlyEmail,
  validOnlyNumbers,
  validPassword,
} from '../../utils/tools'
import { values } from '../../constants/values'

const Login = () => {
  const [loaded, setLoaded] = useState(true)

  const context = useUserContext()

  const history = useHistory()
  const [emailError, setEmailError] = useState(values.errorDefault)
  const [passwordError, setPasswordError] = useState(values.errorDefault)

  const [alertSupport, setAlertSupport] = useState({
    message: '',
    type: values.typeAlert.error,
  })
  const onSubmit = (inputs) => {
    let corrects = 0
    if (validNotEmpty(inputs.email, setEmailError)) {
      setEmailError(values.errorDefault)
      corrects++
    }
    if (validNotEmpty(inputs.password, setPasswordError)) {
      setPasswordError(values.errorDefault)
      corrects++
    }

    return corrects == 2
  }
  const login = (datos) => {
    if (onSubmit(datos)) {
      setLoaded(false)

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
        .finally(() => {
          setLoaded(true)
          setTimeout(() => {
            setAlertSupport({ message: '' })
          }, 5000)
        })
        .catch((ex) => {
          setAlertSupport({
            message: ex.message,
            type: values.typeAlert.error,
          })
        })
    }
  }
  const { inputs, handleInput, handleSubmit } = useForm(login, {})

  return (
    <>
      <div className='login'>
        <Spin spinning={!loaded} size='default'>
          <div className='container-login'>
            <img src={ImagenL} className='imgLogin' alt='imagenLogin' />
            <div className='yau-form'>
              <h1>Login</h1>
              <form className='yau-form-flex' onSubmit={handleSubmit}>
                {alertSupport.message ? (
                  <Alert
                    description={alertSupport.message}
                    type={alertSupport.type}
                    showIcon
                  />
                ) : null}
                <Input
                  size='large'
                  className='input'
                  // type='email'
                  bordered={false}
                  name='email'
                  id='email'
                  placeholder='email'
                  onChange={handleInput}
                  prefix={
                    <FontAwesomeIcon
                      className='FontAwesomeIcon1'
                      icon={faEnvelope}
                    />
                  }
                  style={
                    emailError.icon
                      ? { borderWidth: 1, borderColor: 'red' }
                      : {}
                  }
                  addonAfter={
                    emailError.icon ? (
                      <ExclamationCircleOutlined className='yauerror' />
                    ) : null
                  }
                />
                {/* <div>
                <FontAwesomeIcon className='FontAwesomeIcon1' icon={faLock} />

                <input type='password' name='password' onChange={handleInput} />
              </div> */}
                <Input
                  size='large'
                  className='input'
                  type='password'
                  bordered={false}
                  name='password'
                  id='password'
                  placeholder='password'
                  onChange={handleInput}
                  prefix={
                    <FontAwesomeIcon
                      className='FontAwesomeIcon1'
                      icon={faLock}
                    />
                  }
                  style={
                    passwordError.icon
                      ? { borderWidth: 1, borderColor: 'red' }
                      : {}
                  }
                  addonAfter={
                    passwordError.icon ? (
                      <ExclamationCircleOutlined className='yauerror' />
                    ) : null
                  }
                />
                <input type='submit' value='Inicar Sesión' />
              </form>
            </div>
          </div>
        </Spin>
      </div>
    </>
  )
}
export default Login
