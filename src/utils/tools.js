const regLetters = /^[ A-Za-zñÑ]+$/
const regUpperCase = /^[A-ZÑ]/
const regLowerCase = /^[a-zñ]/
const regNumber = /[0-9]/g
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const checkUpperCase = function (value) {
  return regUpperCase.test(value)
}

const checkEmail = function (value) {
  return regEmail.test(value)
}

const checkLowerCase = function (value) {
  return regLowerCase.test(value)
}
const checkNumber = function (value) {
  return regNumber.test(value)
}
const checkMinCharacters = function (value, min) {
  return value?.length < min
}
const checkOnlyLetter = function (value) {
  return value.match(regLetters) == null
}
export const validPassword = (text = '', setError) => {
  let _flagA_capital_letter = false
  let _flagA_number = false
  let _flagA_lowercase = false
  let letters = text.split('')
  letters.forEach((element) => {
    if (checkUpperCase(element)) {
      _flagA_capital_letter = true
      return
    }
    if (Number.isInteger(parseInt(element))) {
      _flagA_number = true
      return
    }
    if (checkLowerCase(element)) {
      _flagA_lowercase = true
      return
    }
  })
  let baseRule = 'La contraseña debe tener'
  let message = baseRule
  if (text?.length < 5) message += '\n5 carácteres como minimo'
  if (text?.length > 16) message += '\n16 carácteres como máximo'
  //   let baseRule = 'La contraseña debe contener mínimo:'
  //   let message = baseRule
  //   if (text?.length < 8) message += '\n8 carácteres'
  //   if (!_flagA_capital_letter) message += '\n1 mayúscula'
  //   if (!_flagA_lowercase) message += '\n1 minúscula'
  //   if (!_flagA_number) message += '\n1 número'

  if (message.replace(baseRule, '').length > 0) {
    setError({
      message: message,
      icon: true,
    })
    return false
  }
  return true
}

export const validNotEmpty = (text = '', setError) => {
  if (text.trim().length == 0) {
    setError({
      message: '',
      icon: true,
    })
    return false
  }
  return true
}

export const validOnlyEmail = (text = '', setError) => {
  if (checkEmail(text.trim())) {
    return true
  } else {
    setError({
      message: 'Debes ingresar un correo valido',
      icon: true,
    })
  }
  return false
}

export const validOnlyLetters = (text = '', setError) => {
  if (checkOnlyLetter(text.trim())) {
    setError({
      message: 'Debe ingresar solo letras.',
      icon: true,
    })
    return false
  }
  return true
}

export const validMinCharacters = (text = '', minCharacters = 0, setError) => {
  if (checkMinCharacters(text, minCharacters)) {
    setError({
      message: 'Debe ingresar mínimo ' + minCharacters + ' carácteres.',
      icon: true,
    })
    return false
  }
  return true
}

export const validOnlyNumbers = (text = '', setError) => {
  if (!Number.isInteger(parseInt(text.trim()))) {
    setError({
      message: 'Debe ingresar solo números.',
      icon: true,
    })
    return false
  }
  return true
}

export const comparePassword = (text = '', text2 = '', setError) => {
  if (text != text2) {
    setError({
      message: 'Las contraseñas no coinciden.',
      icon: true,
    })
    return false
  }
  return true
}

export const validMinCharactersPhrase = (
  text = '',
  minCharacters = 50,
  setError
) => {
  if (checkMinCharacters(text, minCharacters)) {
    setError({
      message:
        'Debe ingresar mínimo ' +
        minCharacters +
        ' carácteres y 1000 carácteres como máximo.',
      icon: true,
    })
    return false
  }
  return true
}

export const aparecer = (idSelector) => {
  document.querySelector(idSelector).classList.toggle('active')
}
export const desaparecer = (idSelector) => {
  document.querySelector(idSelector).classList.remove('active')
}

export const validExtensions = (allowedExtensions, name, setError) => {
  let fileExtension = name.split('.')[1]
  if (allowedExtensions?.filter((m) => m === fileExtension).length === 0) {
    setError({
      message:
        'Solo puede subir archivos: ' + allowedExtensions?.join(' / ') + '.',
      icon: true,
    })

    return false
  }
  return true
}
