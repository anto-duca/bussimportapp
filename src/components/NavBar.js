import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nb z-depth-3'>
            <Link to= '/' >
                <p className='nb-logo'>Bussimport</p>
            </Link>
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