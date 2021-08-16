import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {
    return ( 
        <div className="prod-container">
            {products.map((product) => {
                return (
                    <Item
                    key= {product.id}
                    id= {product.id}
                    image= {product.image}
                    title = {product.title}
                    price = {product.price}     
                    stock= {product.stock}   
                    />
                )
            })}
        </div>
    )
}

export default ItemList;