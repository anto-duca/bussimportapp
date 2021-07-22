import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Icon, Dropdown } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const NavBar = () => {
    return (
            <Navbar
                alignLinks="right"
                brand={<Link to= '/' >
                        <p className='nb-logo'>Bussimport</p>
                        </Link>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
                <Link to='/' className='nb-link'>Inicio</Link>
                <Dropdown
                    id="Dropdown_6"
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        container: null,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<Link to='/' className='nb-link'>Productos<Icon right>arrow_drop_down</Icon></Link>}
                >
                    <NavLink exact to='/productos/categoria/pequenos-electrodomesticos'>Pequeños Electrodomésticos</NavLink>
                    <NavLink exact to='/productos/categoria/cuidado-personal'>Cuidado Personal</NavLink>
                    <NavLink exact to='/productos/categoria/camaras'>Camaras</NavLink>
                </Dropdown>

                <CartWidget/>
            </Navbar>

        // <nav className='nb z-depth-3'>
        //     <Link to= '/' >
        //         <p className='nb-logo'>Bussimport</p>
        //     </Link>
        //     <ul>
        //             <Link to='/' className='nb-link'>Inicio</Link>
        //         <li>
        //             <Link to='/' className='nb-link'>Productos</Link>
        //                 <ul className='menu_DD'>
        //                         <NavLink to='/categoria/pequenos-electrodomesticos' className='nb-link'>Pequeños Electrodomésticos</NavLink>
        //                         <NavLink to='/categoria/cuidado-personal' className='nb-link'>Cuidado Personal</NavLink>
        //                         <NavLink to='/categoria/camaras' className='nb-link'>Camaras</NavLink>
        //                 </ul>
        //         </li>
        //         <Link to='/' className='nb-link'>Nosotros</Link>
        //     </ul>

        //     <div>
        //         <CartWidget/>
        //     </div>
        // </nav>
    )
}

export default NavBar;