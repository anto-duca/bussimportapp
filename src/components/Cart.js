import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../context/cartContext';
import { Icon } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const Cart = () => {

    const { cart, removeItem, clear, totalPrice } = useContext(cartContext);

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
                                    <p> ${ e.price } </p>
                                    <Icon onClick={() => removeItem(e.id)} className='cart-remove-item'>
                                        clear
                                    </Icon>
                                </div>
                        )})
                    }
                    <div  className='cart-container__price'>
                        <h5>Total</h5>
                        <p> ${totalPrice} </p>
                        <button> FINALIZAR COMPRA </button>
                        <Link to={'/'}>
                            <button> SEGUIR COMPRANDO </button>
                        </Link>
                        <button onClick={() => clear()} className='cart-removeItem'> Remover todos los items </button>
                    </div>
                </div>
            
            :
                <>
                    <p> Tu carrito está vacío </p>
                    <Link to={'/'}>
                        <button className='btn-empty-cart'> SEGUIR COMPRANDO </button>
                    </Link>
                </>
            }
        </div>
    )
}

export default Cart
