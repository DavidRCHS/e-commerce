import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './Routers'
import { ProductProvider } from './context/productContext'
import { UserProvider } from './context/userContext'

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
