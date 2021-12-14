import { faDailymotion } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import FormRegister from '../../components/loginRegis/FormRegister'
import LoginRegis from '../../components/loginRegis/LoginRegis'
import axios from 'axios'
import { useHistory } from 'react-router'
import {
  comparePassword,
  validMinCharacters,
  validNotEmpty,
  validOnlyLetters,
  validOnlyNumbers,
  validPassword,
} from '../../utils/tools'
import { values } from '../../constants/values'

const Register = () => {
  const history = useHistory()

  const [firstNameError, setFirstNameError] = useState(values.errorDefault)

  const [data, setData] = useState({})
  let datos1 = {
    first_name: data.name,
    last_name: data.lastname,
    birth_date: data.birth_date,
    gender: data.gender,
    email: data.email,
    password: data.password,
  }
  const validation = () => {
    let corrects = 0
    if (validNotEmpty(data.name, setFirstNameError)) {
      if (validOnlyLetters(data.name, setFirstNameError)) {
        setFirstNameError(values.errorDefault)
        corrects++
      }

      return corrects == 2
    }
  }

  const registerUser = (datos) => {
    if (validation) {
      axios
        .post('https://ecomerce-master.herokuapp.com/api/v1/signup', datos1)
        .then((response) => {
          console.log(response.data)
          if (response.status === 200) {
            //activar la notificacion
            //redireccionar al login
            console.log('te registraste')
            history.push('./login')
          } else {
            //notificacion de error
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    //Se hace el post a la API para registrar usuario
  }

  return (
    <LoginRegis
      Component={FormRegister}
      postsesion={registerUser}
      firstNameError={firstNameError}
    />
  )
}

export default Register
