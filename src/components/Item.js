import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ id, stock, image, title, price, categoria }) => {

    return (
            <div key={ id } className='card'>
                <Link to= {`/item/${ id }`} categoria= {categoria}>
                    <img src={ image } alt={ title }/>
                    <div className='card__body'>
                        <h3>{ title }</h3>
                        <p className='card__body-price'>$ { price }</p>
                    </div>
                </Link>
                <ItemCount
                stock= { stock } 
                initial= { 1 }
                />  
            </div>      
    )
}

export default Item;