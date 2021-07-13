import React from 'react';
import ItemCount from './ItemCount';

const Item = (props) => {

    return (
        <>
            <div key={ props.id } className='card'>
                <img src={ props.image } alt={ props.title }/>
                <div className='card__body'>
                    <h3>{ props.title }</h3>
                    <p className='card__body-price'>$ { props.price }</p>
                    <p className='card__body-desc'>{ props.description }</p>
                </div>
                <ItemCount stock={props.stock}/>
            </div> 
        </>
    )
}

export default Item;