import React from 'react';
import { useState } from 'react';

const ItemCount = (props) => {
    console.log(props);

    const [qty, setQty] = useState(1);

    return (
        <>
            <div className='item-count'>
                <div>
                    <button type='button' onClick={()=>{setQty(Math.max(0, qty - 1))}} className='item-count__qty'>-</button>
                    <input type='number' disabled value={(props.stock<qty) ? props.stock : qty } className='item-count__input'/>
                    <button type='button' onClick={()=>{ (qty<props.stock) ? setQty((qty + 1)) : alert(`Hay ${props.stock} unidades disponibles de este producto`) }} className='item-count__qty'>+</button>
                </div>
                <div>
                    <button type='submit' disabled={!props.stock || qty===0} onClick={()=>props.addToCart(qty, props.stock)} className='item-count__btn'>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;