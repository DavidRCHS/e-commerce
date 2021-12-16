import { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Modal, Space, Input, Switch } from 'antd'

const UserAdmin = () => {
  const [loading, setloading] = useState()
  const [user, setUser] = useState([])
  const token = window.localStorage.getItem('token')

  const obenerUsuarios = () => {
    if (token) {
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
      axios
        .get('https://ecomerce-master.herokuapp.com/api/v1/user', config)
        .then((response) => {
          // console.log(response.data)

          const info = response.data
          setUser(info.filter((user) => user.role.includes('ADMIN')))
          console.log('hols')

          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setloading(false)
        })
    }
  }

  useEffect(() => {
    setloading(true)

    obenerUsuarios()
  }, [])
  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: '1',
    },
    {
      title: 'Nombre',
      dataIndex: 'first_name',
      key: '2',
    },
    {
      title: 'Apellidos',
      dataIndex: 'last_name',
      key: '3',
    },
    {
      title: 'Estado',
      dataIndex: 'isActive',
      key: '4',
      render: (text, record) => (
        <p>{record.isActive ? 'Activo' : 'Desactivo'}</p>
      ),
    },
  ]

  return (
    <div className='info'>
      <h2>Admin</h2>
      <Table loading={loading} columns={columns} dataSource={user}></Table>
    </div>
  )
}

export default UserAdmin
