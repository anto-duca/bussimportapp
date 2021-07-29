import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import cartContext from '../context/cartContext';

const  ItemDetail = ({ item }) => {
    const [itemQty, setItemQty] = useState(0);
    const { addToCart } = useContext(cartContext);

    const onAdd = (e, value) =>{
        e.preventDefault();
        setItemQty(value)
    }

    return (
            <div className='item-detail-container' key={ item.id } >
                <div className='item-header'> 
                    <img src={ item.image } alt={ item.title }/>  

                        <div>
                            <h4>{ item.title }</h4>
                            <p>$ { item.price }</p>

                            { itemQty === 0
                            ? <ItemCount
                            stock= { item.stock } 
                            initial= { 1 }
                            onAdd= { onAdd }
                            />  

                            : <Link to={'/cart'}>
                                <button 
                                    className='btn-cta'
                                    onClick={() => addToCart(item, itemQty)}
                                >
                                Termina tu compra de {itemQty} unidades
                                </button>
                            </Link>
                            }
                        </div>

                </div>

                <p>{ item.description }</p>
            </div>
        )
}

export default ItemDetail;