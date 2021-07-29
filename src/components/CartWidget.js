import React from 'react';
import { Icon } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const CartWidget = () => {
    return (
        <div className= 'nb-link'>
            <Icon>
                shopping_cart
            </Icon>
        </div>
    )
}

export default CartWidget;