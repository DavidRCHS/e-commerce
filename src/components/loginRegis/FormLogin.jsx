import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
const FormLogin = () => {
  return (
    <div className='yau-form'>
      <h1>Login</h1>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />

        <input type='email' name='email' />
      </div>
      <div>
        <FontAwesomeIcon icon={faLock} />

        <input type='password' name='password' />
      </div>

      <input type='submit' value='Inicar Sesión' />
    </div>
  )
}

export default FormLogin
