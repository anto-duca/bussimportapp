import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, initial}) => {

    const [qty, setQty] = useState(initial);

    const onAdd = (qty, stock) =>{
        alert(`Agregaste ${qty} productos al carrito`)
                
        console.log(stock);
        console.log(qty);            
    }
    
    return (
        <>
            <div className='item-count'>
                <div>
                    <button type='button' onClick={()=>{setQty(Math.max(0, qty - 1))}} className='item-count__qty'>-</button>
                    <input type='number' disabled value={(stock<qty) ? stock : qty} className='item-count__input'/>
                    <button type='button' onClick={()=>{ (qty<stock) ? setQty((qty + 1)) : alert(`Hay ${stock} unidades disponibles de este producto`) }} className='item-count__qty'>+</button>
                </div>
                <div>
                    <button type='submit' disabled={!stock || qty===0} onClick={()=>onAdd(qty, stock)} className='item-count__btn'>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;