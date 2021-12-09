import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLock,
  faUser,
  faCalendarDay,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons'
const FormRegister = () => {
  return (
    <div className='yau-form'>
      <h1>Register</h1>

      <form className='yau-form-flex'>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faUser} />

          <input type='text' name='name' placeholder='First Name' />
        </div>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faUser} />

          <input type='text' name='lastname' placeholder='Last Name' />
        </div>

        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faCalendarDay} />

          <input type='date' name='lastname' />
        </div>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faVenusMars} />

          <select>
            <option disabled selected>
              Seleccione Genero
            </option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faEnvelope} />
          <input type='email' name='email' placeholder='Email' />
        </div>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faLock} />

          <input type='password' name='email' placeholder='password' />
        </div>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faLock} />

          <input
            type='password'
            name='email'
            placeholder='Confirm Password

'
          />
        </div>

        <input type='submit' value='Inicar Sesión' />
      </form>
    </div>
  )
}

export default FormRegister
