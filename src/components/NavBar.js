import React, { useState, useEffect } from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Icon, Dropdown } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const NavBar = () => {
    const [category, setCategory] = useState([])

    const getCategory = async () => {
        const data = await fetch('/items.json');
        let responseData = await data.json();
        let unique = responseData.map(item => (
            {
            name: item.name, 
            category: item.category
            }));

        let filtered = unique.filter(obj => !unique[obj.name] && (unique[obj.name] = true));

        setCategory(filtered)
    }

    useEffect(() => {
        getCategory()
    }, [])
    
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
                    { category.map ( (category) => {
                        return (
                            <>
                            <NavLink key={category.name} exact to={`/categoria/${category.category}`}>
                                {category.name}
                            </NavLink>
                            </>
                        )
                    })
                }

                </Dropdown>

                <CartWidget/>
            </Navbar>
    )
}

export default NavBar;