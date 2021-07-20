import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = (props) => {

    console.log(props);

    const onAdd = (qty, stock) =>{
        alert(`Agregaste ${qty} productos al carrito`)
                
        console.log(stock);
        console.log(qty);            
    }
    
    return (
        <div key={ props.id } className='card'>
            <Link to= {`/item/${ props.id }`}>
                <img src={ props.image } alt={ props.title }/>
                <div className='card__body'>
                    <h3>{ props.title }</h3>
                    <p className='card__body-price'>$ { props.price }</p>
                </div>
            </Link>
            <ItemCount
            stock= { props.stock }   
            addToCart={ onAdd }/>    
        </div>      

    )
}

export default Item;