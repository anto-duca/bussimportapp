import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

const  ItemDetail = ({ item }) => {
    const [itemQty, setItemQty] = useState(0);

    const onAdd = (e, value) =>{
        e.preventDefault();
        setItemQty(value)
    }

    console.log(itemQty);

    return (
            item.map ( (element) => {
                return (
                        <div className='item-detail-container' key={ element.id } >
                            <div className='item-header'> 
                                <img src={ element.image } alt={ item.title }/>  
            
                                    <div>
                                        <h4>{ element.title }</h4>
                                        <p>$ { element.price }</p>

                                        { itemQty === 0
                                        ? <ItemCount
                                        stock= { element.stock } 
                                        initial= { 1 }
                                        onAdd= { onAdd }
                                        />  
            
                                        : <Link to={'/cart'}>
                                            <button className='btn-cta'>Termina tu compra de {itemQty} unidades</button>
                                        </Link>
                                        }
                                    </div>
            
                            </div>
            
                            <p>{ element.description }</p>
                        </div>
                )         
            })
        )
}

export default ItemDetail;