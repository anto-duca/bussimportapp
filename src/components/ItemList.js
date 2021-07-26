import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {
    
    return ( 
        products.map((product) => {
            return (
                    <Item
                    key= {product.id}
                    id= {product.id}
                    image= {product.image}
                    title = {product.title}
                    price = {product.price}     
                    stock= {product.stock}   
                    category= {product.categoria}
                    />
            )
        })
        
    )
}

export default ItemList;