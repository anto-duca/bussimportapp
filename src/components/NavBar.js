import React from 'react';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className='nb z-depth-3'>
            <p className='nb-logo'>Bussimport</p>
            <ul>
                <li>
                    <p className='nb-link'>Inicio</p>
                </li>
                <li>
                    <p className='nb-link'>Productos</p>
                </li>
                <li>
                    <p className='nb-link'>Nosotros</p>
                </li>
            </ul>

            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;