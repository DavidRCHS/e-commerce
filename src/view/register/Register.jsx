import React, { useState } from 'react'
import FormRegister from '../../components/loginRegis/FormRegister'
import LoginRegis from '../../components/loginRegis/LoginRegis'
import useAxios from '../../hooks/useAxios'

const Register = () => {
  const [data, setData] = useState({})

  console.log(data)
  const { response, error, loading } = useAxios({
    method: 'post',
    url: 'signup',
  })

  return <LoginRegis Component={FormRegister} setData={setData} />
}

export default Register
