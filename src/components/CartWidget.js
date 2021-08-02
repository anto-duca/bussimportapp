import React, { useContext } from 'react';
import { Icon } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';
import cartContext from '../context/cartContext';

const CartWidget = () => {
    const { totalQty } = useContext(cartContext)

    console.log(totalQty);

    return (
        <div className= 'nb-link'>
            <Icon>
                shopping_cart
            </Icon>
            <span>{totalQty}</span>
        </div>
    )
}

export default CartWidget;