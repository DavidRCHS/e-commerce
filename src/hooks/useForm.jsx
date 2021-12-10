// REGLAS PARA CREAR UN HOOK
// 1. Siempre se deben llamar empezando con use, ejemplo: useLoQueSea
// 2. Siempre son funciones --> REACT FUNCIONAL

import { useState } from 'react'

export default function useForm(callback, datos) {
  const [inputs, setInputs] = useState(datos) //vamos a guardar los valores del formulario
  console.log(inputs)

  const handleInput = (event) => {
    const { name, value } = event.target
    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    callback(inputs)
  }

  return {
    inputs,
    handleInput,
    handleSubmit,
  }
}
