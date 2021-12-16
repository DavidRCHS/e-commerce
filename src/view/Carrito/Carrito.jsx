import React from 'react';

import { createHashHistory } from 'history'

const history = createHashHistory()

const identificador= getParameterByName('identificador')
const cantidad= getParameterByName('cantidad');

const Carrito = () => {
    let products = {"id": identificador, "cantidad": cantidad}
    var carrito= [];
    carrito.push(products);
    console.log(carrito);

    this.props.history.push('/products')

}

export default Carrito;
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(window.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}