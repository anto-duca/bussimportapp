import React, { useContext } from 'react';
import cartContext from '../context/cartContext';
import { Icon } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, removeItem, clear } = useContext(cartContext);

    return (
        <div className='cart'>
            <h4> Carrito de compras </h4>

            { cart.length > 0
            ?
            <div className='cart-container'>
                {cart.length > 0 && cart.map( (e) => {
                    return (
                            <div key={ e.id } className='cart-container__item'>
                                <img src={ e.image } alt={ e.title }/>  
                                <p> { e.title } </p>
                                <p> Unidades: { e.qty }</p>
                                <Icon onClick={() => removeItem(e.id)} className='cart-removeItem'>
                                    clear
                                </Icon>
                            </div>
                    )})
                }
                <div  className='cart-container__price'>
                    <h5>Total</h5>
                    <p> $ </p>
                    <button> FINALIZAR COMPRA </button>
                    <Link to={'/'}>
                        <button> SEGUIR COMPRANDO </button>
                    </Link>
                    <button  onClick={() => clear()} className='cart-removeItem'> Remover todos los items </button>
                </div>
            </div>
            
            :
            <p> Tu carrito está vacío </p>
            }
        </div>
    )
}

export default Cart
