// REGLAS PARA CREAR UN HOOK
// 1. Siempre se deben llamar empezando con use, ejemplo: useLoQueSea
// 2. Siempre son funciones --> REACT FUNCIONAL

import { useState } from 'react'

export default function useForm(callback, data) {
  const [inputs, setInputs] = useState(data) //vamos a guardar los valores del formulario
  console.log(inputs)

  const handleInput = (event) => {
    const { name, value } = event.target
    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit = (event) => {
    const { name, value } = event.target

    event.preventDefault()
    callback(inputs)

    setInputs({ [name]: '' })
  }

  return {
    inputs,
    handleInput,
    handleSubmit,
  }
}
