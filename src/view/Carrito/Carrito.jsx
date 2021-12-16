import React from 'react';


const identificador= getParameterByName('identificador')
const cantidad= getParameterByName('cantidad');

const Carrito = () => {
    if(window.localStorage.getItem('carrito') == null){
        var carrito=[];
        carrito.push({"id": identificador, "cantidad": cantidad});
        /*window.localStorage.setItem('carrito',JSON.stringify(carrito))*/
      
    }else{
        var carritoText= window.localStorage.getItem('carrito');
        var carrito = JSON.parse(carritoText);
        let products = {"id": identificador, "cantidad": cantidad}
        
        carrito.push(products);
        window.localStorage.setItem('carrito',JSON.stringify(carrito))
        console.log(carrito);
       
    }
    
 

}


export default Carrito;


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(window.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}