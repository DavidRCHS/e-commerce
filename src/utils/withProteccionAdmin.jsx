// Este archivo se usara como un HOC para proyeger un componente
// HOC qes un componente  de orden superior que nos ayuda a compartir
// Reutilizar la logica de un componente ,puede a plicarse en cualquier

import { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function withProteccionAdmin(Component) {
  //Verificamos si tenemos un token si no lo tenemos no  mostramos el componente
  const ProtectedComponent = (props) => {
    const [token] = useState(window.localStorage.getItem('token'))
    const [role] = useState(window.localStorage.getItem('role'))

    return role == 'ADMIN' ? <Component {...props} /> : <Redirect to='/' />
  }
  return ProtectedComponent
}
