import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, onAdd, initial}) => {
    const [qty, setQty] = useState(initial)

    const onDecrease = () => {
        const newQty = qty-1
        if(initial <= newQty){
            setQty(newQty)
        }
    }

    const onIncrease = () => {
        const newQty = qty+1
        if (newQty <= stock){
            setQty(newQty)
        }
    }

    return (
        <>
            <form className='item-count'>
                <div>
                    <button type='button' onClick={ onDecrease } className='item-count__qty'>-</button>
                    <input disabled type='number' value={ (stock === 0) ? stock : qty } className='item-count__input'/>
                    <button type='button' onClick={ onIncrease } className='item-count__qty'>+</button>
                </div>
                <div>
                    <button disabled={!stock} onClick={ (e) => {onAdd(e, qty)} } className='item-count__btn'>Comprar</button>
                </div>
            </form>
        </>
    )
}

export default ItemCount;