import { useState, useEffect } from 'react'
import { useProductContext } from '../../context/productContext'
import {
  Table,
  Modal,
  Space,
  Input,
  Switch,
  Select,
  Button,
  message,
} from 'antd'
import axios from 'axios'
import useForm from '../../hooks/useForm'
const ProductoAdmin = () => {
  const context = useProductContext()
  const [loading, setloading] = useState()
  // const [listProducts, setlistProducts] = useState(context.listProducts)
  const [listProducts, setlistProducts] = useState([])
  const [error, setError] = useState(false)
  const [activo, setActivo] = useState()
  const [categorias, setCategorias] = useState('')
  const { Option } = Select

  const consultarApi = () => {
    axios
      .get('https://ecomerce-master.herokuapp.com/api/v1/item')
      .then((response) => {
        // console.log(response.data)
        setlistProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setloading(false)
      })
  }

  useEffect(() => {
    setloading(true)
    consultarApi()
  }, [])

  const allCategories = [
    ...new Set(listProducts.map((product) => product.category)),
  ]

  console.log(allCategories)

  function onChangeSw(checked) {
    console.log(`switch to ${checked}`)
    setActivo(checked)
    console.log(activo)
  }
  function handleChangeCat(value) {
    console.log(`selected ${value}`)
    setCategorias(value)
  }

  const token = window.localStorage.getItem('token')

  const [product, setProduct] = useState({})

  // console.log(token)

  const postProduct = (inputs) => {
    console.log(inputs.name)
    if (token) {
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }

      axios
        .post(
          'https://ecomerce-master.herokuapp.com/api/v1/item',
          {
            isActive: activo,
            product_name: inputs.name,
            description: inputs.descripcion,
            price: inputs.precio,
            category: categorias,
            brand: inputs.marca,
            sku: inputs.sku,
            image: inputs.imagen,
          },
          config
        )
        .then((response) => {
          message.success('Nuevo Producto Agregado.')
          handleCancel()
          consultarApi()
          setActivo(true)
          setCategorias('select a')
        })
        .finally(() => {
          setTimeout(() => {}, 5000)
        })
        .catch((ex) => {
          console.log(ex)
        })
    }
  }

  const { inputs, handleInput, handleSubmit } = useForm(postProduct, {})

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleNew = () => {
    setIsModalVisible(false)
    console.log('hola')
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const showModal = () => {
    setIsModalVisible(true)
  }

  const columns = [
    {
      title: 'Producto',
      dataIndex: 'product_name',
      key: '1',
    },
    {
      title: 'Marca',
      dataIndex: 'brand',
      key: '2',
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: '3',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: '4',
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: '5',
    },
    {
      title: 'Imagen',
      dataIndex: 'image',
      key: '6',
      render: (text, record) => (
        <img className='tableImg' src={record.image} alt={text} />
      ),
    },
  ]

  return (
    <div className='info'>
      <h2>Productos</h2>
      <Button type='primary' onClick={showModal}>
        Nuevo Producto
      </Button>

      <Table
        loading={loading}
        columns={columns}
        dataSource={listProducts}
      ></Table>

      <Modal
        title='Nuevo Producto'
        visible={isModalVisible}
        onOk={postProduct}
        onCancel={handleCancel}
        okText='Guardar'
      >
        {error ? (
          <p className='alerta-error'>Todos los campos son obligatorios</p>
        ) : null}

        <form>
          {/* onSubmit={handleSubmit} */}
          <Space direction='vertical' align='center' style={{ width: ' 100%' }}>
            <Switch
              checkedChildren='Activo'
              unCheckedChildren='Desactivo '
              onChange={onChangeSw}
            />
            <Input
              placeholder='nombre del producto'
              name='name'
              style={{ width: 250 }}
              type='text'
              id='name'
              onChange={handleInput}
              value={inputs.name}
            />
            <Input
              placeholder='descripcion'
              style={{ width: 250 }}
              name='descripcion'
              id='descripcion'
              onChange={handleInput}
              value={inputs.descripcion}
            />
            <Input
              placeholder='Precio'
              style={{ width: 250 }}
              name='precio'
              id='precio'
              onChange={handleInput}
              value={inputs.precio}
            />
            <Select
              style={{ width: 250 }}
              onChange={handleChangeCat}
              defaultValue='Selecciona una Categoria'
              value={categorias && 'Selecciona una Categoria'}
            >
              {allCategories.map((especialidad, i) => (
                <Option key={i} value={especialidad}>
                  {especialidad}
                </Option>
              ))}
            </Select>
            <Input
              placeholder='marca'
              name='marca'
              id='marca'
              style={{ width: 250 }}
              value={inputs.marca}
              onChange={handleInput}
            />
            <Input
              placeholder='sku'
              name='sku'
              style={{ width: 250 }}
              id='sku'
              value={inputs.sku}
              onChange={handleInput}
            />
            <Input
              placeholder='Imagen'
              name='imagen'
              style={{ width: 250 }}
              id='imagen'
              value={inputs.imagen}
              onChange={handleInput}
            />
            <Input
              onClick={handleSubmit}
              className='button'
              type='submit'
              value='Crear cuenta'
            />
          </Space>
        </form>
      </Modal>
    </div>
  )
}

export default ProductoAdmin
