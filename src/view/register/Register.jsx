import { faDailymotion } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import Imagen from '../../assets/img/imgLogin.jpg'
import ImagenL from '../../assets/img/login.svg'
import axios from 'axios'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input, Select, Alert, Button, Spin, message, Space } from 'antd'
import {
  faEnvelope,
  faLock,
  faUser,
  faCalendarDay,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons'

import { useHistory } from 'react-router'
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
import useForm from '../../hooks/useForm'

const Register = () => {
  const { Option } = Select
  const history = useHistory()
  const [alertSupport, setAlertSupport] = useState({
    message: '',
    type: values.typeAlert.error,
  })
  const [firstNameError, setFirstNameError] = useState(values.errorDefault)
  const [lastNameError, setLastNameError] = useState(values.errorDefault)
  const [fechaError, setFechaError] = useState(values.errorDefault)
  const [emailError, setEmailError] = useState(values.errorDefault)
  const [passwordError, setPasswordError] = useState(values.errorDefault)
  const [rePasswordError, setRePasswordError] = useState(values.errorDefault)
  const [loaded, setLoaded] = useState(true)

  const validation = (inputs) => {
    let corrects = 0
    console.log(inputs)
    if (validNotEmpty(inputs.name, setFirstNameError)) {
      if (validOnlyLetters(inputs.name, setFirstNameError)) {
        setFirstNameError(values.errorDefault)
        corrects++
      }
    }

    if (validNotEmpty(inputs.lastname, setLastNameError)) {
      if (validOnlyLetters(inputs.lastname, setLastNameError)) {
        setLastNameError(values.errorDefault)
        corrects++
      }
    }
    if (validNotEmpty(inputs.birthday, setFechaError)) {
      // if (validOnlyLetters(inputs.birthday, setLastNameError)) {
      setFechaError(values.errorDefault)
      corrects++
      // }
    }
    if (validNotEmpty(inputs.email, setEmailError)) {
      if (validOnlyEmail(inputs.email, setEmailError)) {
        setEmailError(values.errorDefault)
        corrects++
      }
    }
    if (validNotEmpty(inputs.password, setPasswordError)) {
      if (validPassword(inputs.password, setPasswordError)) {
        setPasswordError(values.errorDefault)
        corrects++
      }
    }
    if (validNotEmpty(inputs.ConfirmPassword, setRePasswordError)) {
      if (
        comparePassword(
          inputs.password,
          inputs.ConfirmPassword,
          setRePasswordError
        )
      ) {
        setRePasswordError(values.errorDefault)
        corrects++
      }
    }

    return corrects == 6
  }

  const registerUser = (inputs) => {
    console.log(inputs)
    if (validation(inputs)) {
      setLoaded(false)

      axios
        .post('https://ecomerce-master.herokuapp.com/api/v1/signup', {
          first_name: inputs.name,
          last_name: inputs.lastname,
          birth_date: inputs.birth_date,
          gender: inputs.gender,
          email: inputs.email,
          password: inputs.password,
        })
        .then((response) => {
          setAlertSupport({
            message: 'Registro exitoso!',
            type: values.typeAlert.success,
          })

          console.log(response.data)
          if (response.status === 200) {
            //activar la notificacion
            //redireccionar al login
            console.log('te registraste')
            history.push('./login')
          }
        })
        .finally(() => {
          setLoaded(true)
          setTimeout(() => {
            setAlertSupport({ message: '' })
          }, 5000)
        })

        .catch((ex) => {
          console.log(ex)
          setAlertSupport({
            message: 'el correo electronico ya exite',
            type: values.typeAlert.error,
          })
        })
    }
    //Se hace el post a la API para registrar usuario
  }
  const { inputs, handleInput, handleSubmit } = useForm(registerUser, {})

  const [select, setselect] = useState()

  const handleOnChange = (value, e) => {
    e.preventDefault()
    setselect({ ...select, [e.target.name]: e.target.value })
    console.log(select)
  }
  return (
    <div className='login'>
      <Spin spinning={!loaded} size='default'>
        <div className='container-login'>
          <img src={ImagenL} className='imgLogin' alt='imagenLogin' />
          <div className='yau-form'>
            <h1>Register</h1>

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
                type='text'
                bordered={false}
                name='name'
                id='name'
                placeholder='Nombre'
                onChange={handleInput}
                prefix={
                  <FontAwesomeIcon className='FontAwesomeIcon1' icon={faUser} />
                }
                style={
                  firstNameError.icon
                    ? { borderWidth: 1, borderColor: 'red' }
                    : {}
                }
                addonAfter={
                  firstNameError.icon ? (
                    <ExclamationCircleOutlined className='yauerror' />
                  ) : null
                }
              />
              {firstNameError.message ? (
                <span className='yauerror'>{firstNameError.message}</span>
              ) : null}

              <Input
                size='large'
                className='input'
                type='text'
                bordered={false}
                name='lastname'
                id='lastname'
                placeholder='lastname'
                onChange={handleInput}
                prefix={
                  <FontAwesomeIcon className='FontAwesomeIcon1' icon={faUser} />
                }
                style={
                  lastNameError.icon
                    ? { borderWidth: 1, borderColor: 'red' }
                    : {}
                }
                addonAfter={
                  lastNameError.icon ? (
                    <ExclamationCircleOutlined className='yauerror' />
                  ) : null
                }
              />
              {lastNameError.message ? (
                <span className='yauerror'>{lastNameError.message}</span>
              ) : null}

              <Input
                size='large'
                className='input'
                type='date'
                bordered={false}
                name='birthday'
                id='birthday'
                placeholder='lastname'
                onChange={handleInput}
                prefix={
                  <FontAwesomeIcon
                    className='FontAwesomeIcon1'
                    icon={faCalendarDay}
                  />
                }
                style={
                  fechaError.icon ? { borderWidth: 1, borderColor: 'red' } : {}
                }
                addonAfter={
                  fechaError.icon ? (
                    <ExclamationCircleOutlined className='yauerror' />
                  ) : null
                }
              />

              <select onChange={handleInput} name='gender'>
                <option disabled selected>
                  Seleccione Genero
                </option>
                <option value='M'>Masculino</option>
                <option value='F'>Femenino</option>
              </select>
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
                  emailError.icon ? { borderWidth: 1, borderColor: 'red' } : {}
                }
                addonAfter={
                  emailError.icon ? (
                    <ExclamationCircleOutlined className='yauerror' />
                  ) : null
                }
              />
              {emailError.message ? (
                <span className='yauerror'>{emailError.message}</span>
              ) : null}

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
                  <FontAwesomeIcon className='FontAwesomeIcon1' icon={faLock} />
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
              {passwordError.message ? (
                <span className='yauerror'>{passwordError.message}</span>
              ) : null}

              <Input
                size='large'
                className='input'
                type='password'
                bordered={false}
                name='ConfirmPassword'
                id='ConfirmPassword'
                placeholder='ConfirmPassword'
                onChange={handleInput}
                prefix={
                  <FontAwesomeIcon className='FontAwesomeIcon1' icon={faLock} />
                }
                style={
                  rePasswordError.icon
                    ? { borderWidth: 1, borderColor: 'red' }
                    : {}
                }
                addonAfter={
                  rePasswordError.icon ? (
                    <ExclamationCircleOutlined className='yauerror' />
                  ) : null
                }
              />
              {rePasswordError.message ? (
                <span className='yauerror'>{rePasswordError.message}</span>
              ) : null}

              {/* <div>

              

              <input type='date' name='birthday' onChange={handleInput} />
            </div>
            <div>
              <FontAwesomeIcon
                className='FontAwesomeIcon1'
                icon={faVenusMars}
              />

              <select onChange={handleInput} name='gender'>
                <option disabled selected>
                  Seleccione Genero
                </option>
                <option value='M'>Masculino</option>
                <option value='F'>Femenino</option>
              </select>
            </div>
            <div>
              <FontAwesomeIcon
                className='FontAwesomeIcon1'
                icon={faEnvelope}
                onChange={handleInput}
              />
              <input
                type='email'
                onChange={handleInput}
                name='email'
                placeholder='Email'
              />
            </div>
            <div>
              <FontAwesomeIcon className='FontAwesomeIcon1' icon={faLock} />

              <input
                type='password'
                onChange={handleInput}
                name='password'
                placeholder='password'
              />
            </div>
            <div>
              <FontAwesomeIcon className='FontAwesomeIcon1' icon={faLock} />

              <input
                onChange={handleInput}
                type='password'
                name='ConfirmPassword'
                placeholder='Confirm Password

'
              />
            </div> */}

              <input type='submit' value='Inicar Sesión' />
            </form>
          </div>
        </div>
      </Spin>
    </div>
  )
}

export default Register
