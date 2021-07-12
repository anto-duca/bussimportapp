import React from 'react';
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    const onAdd = (qty, stock) =>{
        (stock === 0) ? alert('No hay stock del producto seleccionado') :
        (qty === 0) ? alert('No podes agregar 0 productos')
                    : alert(`Agregaste ${qty} productos al carrito`)
                
        console.log(stock);
        console.log(qty);            
    }

    return (
        <div className='prod-container'>  
            <ItemCount title='Camara Noga'stock={5} onAdd={onAdd} />
        </div>
    ) 
}

export default ItemListContainer;