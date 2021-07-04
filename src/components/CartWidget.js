import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>  
        </div>
    )
}

export default CartWidget;