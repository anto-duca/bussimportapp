import React, { useState, useEffect } from 'react'
import { Provider } from './cartContext'

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState( () => {
        if (localStorage.getItem('local-cart')) {
            return JSON.parse(localStorage.getItem('local-cart'));
        } else {
            return [];
        }
    });

    // const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect ( ()=> {
        localStorage.setItem('local-cart', JSON.stringify(cart));
        getTotalQty();
        updateTotalPrice();
    }, [cart])

    const addToCart = (item, qty) => {
        let duplicate = isInCart(item.id)

        if (duplicate) {
            let cartTmp = cart;
            cartTmp.find(element => element.id === item.id).qty = qty
            setCart(cartTmp);
        } else { 
            setCart([...cart, { ...item, qty } ]);
        }
        updateTotalPrice();
    }

    const getTotalQty = () => {
        let totalQty = 0

        cart.map( (item) => {
            totalQty += item.qty
        })

        return totalQty;
    }

    const updateTotalPrice = () => {
        let total = 0
        cart.map( (item) => {
            total += item.qty * item.price
        })
        setTotalPrice(total);
    }

    const removeItem = (id) => { // Remover un item del cart usando su id
        let cartTmp = cart;
        cartTmp=cart.filter(element => element.id != id);
        setCart([...cartTmp])
    }

    const clear = () => { // Remover todos los items
        setCart([]);
        setTotalPrice(0);
    }

    const isInCart = (id) => { 
        const existe = cart.find(item => item.id === id);

        if(existe===undefined) {
            return false
        } else {
            return true
        }
    }

    return (
        <div>
            <Provider value={{ cart, setCart, addToCart, removeItem, clear, isInCart, getTotalQty, totalPrice }}>
                {children}
            </Provider>
        </div>
    )
}

export default CustomProvider