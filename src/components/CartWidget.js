import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';
import cartContext from '../context/cartContext';

const CartWidget = () => {
    const { getTotalQty } = useContext(cartContext)

    const totalQty= getTotalQty()

    return (
        <Link to="/cart" className= 'nb-link'>
            <Icon>
                shopping_cart
            </Icon>
            <span>{totalQty}</span>
        </Link>
    )
}

export default CartWidget;