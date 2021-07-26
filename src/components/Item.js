import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, image, title, price, categoria }) => {

    return (    
        <Link to= {`/item/${ id }`} key={ id } className='card' >
            <img src={ image } alt={ title }/>
            <div className='card__body'>
                <h3>{ title }</h3>
                <p className='card__body-price'>$ { price }</p>
            </div>
        </Link>    
    )
}

export default Item;