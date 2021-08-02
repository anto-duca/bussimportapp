import React, { useState, useEffect } from 'react'
import { Provider } from '../context/cartContext'

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (item, qty) => { // agregar cierta cantidad de un ítem al carrito
        let duplicate = isInCart(item.id)

        // Lógica que "reemplaza la cantidad, no la suma" si vuelve a agregar productos 
        if (duplicate) { //si el producto ya existe en el carrito, solo modifico cantidad

            let cartTmp = cart;
            cartTmp.find(element => element.id === item.id).qty = qty
            setCart(cartTmp);
        } else { // el producto no existe en el carrito
            setCart([...cart, { ...item, qty } ]);
        }

        // Lógica que aumenta cantidad si vuelve a agregar productos
        // if (duplicate >= 0) { // Si el producto existe aumenta cantidad
        //     const copy = [...cart];
        //     copy[duplicate] = {
        //         ...copy[duplicate],
        //         qty: copy[duplicate].qty + qty
        //     };
        //     setCart(copy);
        // } else { // producto no existe en el carrito
        //     setCart([...cart, { ...item, qty } ]);
        // }
        console.log(cart);
    }

    const updateTotalQty = () => {
        let total = 0
        cart.map( (item) => {
            total += item.qty
        })
        setTotalQty(total);
    }

    const updateTotalPrice = () => {
        let total = 0
        cart.map( (item) => {
            total += item.qty * item.price
        })
        setTotalPrice(total);
    }

    useEffect ( ()=> {
        updateTotalQty();
        updateTotalPrice();
    }, [cart])

    const removeItem = (id) => { // Remover un item del cart usando su id
        let cartTmp = cart;
        cartTmp=cart.filter(element => element.id != id);
        setCart([...cartTmp])
    }

    const clear = () => { // Remover todos los items
        setCart([]);
        setTotalQty(0);
        setTotalPrice(0);
    }

    const isInCart = (id) => { 

        // Lógica con true o false relacionada con la Lógica que "reemplaza la cantidad, no la suma" si vuelve a agregar productos 
        const existe = cart.find(item => item.id === id);

        if(existe===undefined) {
            return false
        } else {
            return true
        }

        // Lógica para actualizar la cantidad
        // const cartLenght = cart.length;
        // if(cartLenght === 0) {
        //     console.log('hola estoy en el false');
        //     return -1;
        // } else {
        //     for (let i = 0; i < cartLenght; i++) {
        //         if (cart[i].id === id) {
        //             return i;
        //         }
        //     }
        // } 
    }

    return (
        <div>
            <Provider value={{ cart, setCart, addToCart, removeItem, clear, isInCart, totalQty, totalPrice }}>
                {children}
            </Provider>
        </div>
    )
}

export default CustomProvider