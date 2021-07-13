import React from 'react';
import ItemCount from './ItemCount';

const Item = (props) => {

    console.log(props);

    const onAdd = (qty, stock) =>{
        (stock === 0) ? alert('No hay stock del producto seleccionado') :
        (qty === 0) ? alert('No podes agregar 0 productos')
                    : alert(`Agregaste ${qty} productos al carrito`)
                
        console.log(stock);
        console.log(qty);            
    }
    
    return (
        <div key={ props.id } className='card'>
            <img src={ props.image } alt={ props.title }/>
            <div className='card__body'>
                <h3>{ props.title }</h3>
                <p className='card__body-price'>$ { props.price }</p>
                <p className='card__body-desc'>{ props.description }</p>
            </div>

            <ItemCount
            stock= { props.stock }   
            addToCart={ onAdd }/>    
        </div>      

    )
}

export default Item;