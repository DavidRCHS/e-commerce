import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
const FormLogin = ({ handleInput, handleSubmit }) => {
  return (
    <div className='yau-form'>
      <h1>Login</h1>
      <form className='yau-form-flex' onSubmit={handleSubmit}>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faEnvelope} />

          <input type='email' name='email' onChange={handleInput} />
        </div>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faLock} />

          <input type='password' name='password' onChange={handleInput} />
        </div>

        <input type='submit' value='Inicar Sesión' />
      </form>
    </div>
  )
}

export default FormLogin
