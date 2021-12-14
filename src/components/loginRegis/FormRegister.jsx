import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLock,
  faUser,
  faCalendarDay,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons'

const FormRegister = ({ handleInput, handleSubmit, firstNameError }) => {
  return (
    <div className='yau-form'>
      <h1>Register</h1>

      <form className='yau-form-flex' onSubmit={handleSubmit}>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faUser} />

          <input
            type='text'
            name='name'
            placeholder='First Name'
            onChange={handleInput}
          />
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faUser} />
        </div>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faUser} />

          <input
            type='text'
            name='lastname'
            placeholder='Last Name'
            onChange={handleInput}
          />
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faUser} />
        </div>

        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faCalendarDay} />

          <input type='date' name='birthday' onChange={handleInput} />
        </div>
        <div>
          <FontAwesomeIcon className='FontAwesomeIcon1' icon={faVenusMars} />

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
        </div>

        <input type='submit' value='Inicar Sesión' />
      </form>
    </div>
  )
}

export default FormRegister
