import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './Routers'
import {ProductProvider} from  './context/productContext'

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
    <Routes />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
