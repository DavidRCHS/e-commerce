import React from 'react';
import {useProductContext} from '../../context/ProductContext';

export default function DetailsProduct(){
    const context = useProductContext();
    return (
        <div>
        <h3>Component DetailsProduct</h3>
        <p>{context.productActual.skun}</p>
        <p>{context.productActual.brand}</p>
        
        </div>
    )
}