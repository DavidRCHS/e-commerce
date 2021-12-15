import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

function ProductProvider(props) {
    const [listProducts, setlistProducts] = useState([]);
    const [productActual, setProductActual] = useState([]);
    
    
    
    useEffect(()=>{
        axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
        .then((response) =>{
            console.log(response.data);
            setlistProducts(response.data);
        } )
        .catch((error) =>{
            console.log(error);
        }
        );
    },[]);

    const value ={
        listProducts, 
        productActual,
        setProductActual

    }
    return <ProductContext.Provider value={value}{...props} />
    

}
const useProductContext=()=>{
    const context= useContext(ProductContext);
    return context;
};

export {
    ProductProvider, useProductContext
};

