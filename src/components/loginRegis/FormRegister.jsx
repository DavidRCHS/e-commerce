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
      <form>
        <h1>Register</h1>
        <div>
          <FontAwesomeIcon icon={faUser} />

          <input type='text' name='name' placeholder='First Name' />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />

          <input type='text' name='lastname' placeholder='Last Name' />
        </div>

        <div>
          <FontAwesomeIcon icon={faCalendarDay} />

          <input type='date' name='lastname' />
        </div>
        <div>
          <FontAwesomeIcon icon={faVenusMars} />

          <select>
            <option disabled selected>
              Seleccione Genero
            </option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type='email' name='email' placeholder='Email' />
        </div>
        <div>
          <FontAwesomeIcon icon={faLock} />

          <input type='password' name='email' placeholder='password' />
        </div>

        <input type='submit' value='Inicar Sesión' />
      </form>
    </div>
  )
}

export default FormRegister
