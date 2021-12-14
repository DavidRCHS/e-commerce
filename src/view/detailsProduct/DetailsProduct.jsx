import React from 'react';
import {useProductContext} from '../../context/ProductContext';

export default function DetailsProduct(){
    const context = useProductContext();
    return (
        <div id="detalles">
        <h3>Component DetailsProduct</h3>
        <p>{context.productActual.category}</p>
        <p>{context.productActual.description}</p>
        <p>{context.productActual.skun}</p>
        <p>{context.productActual.brand}</p>
        </div>
    )
}