import React, { useState, useEffect, useContext } from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Icon, Dropdown } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';
import cartContext from '../context/cartContext';
import { getFirestore } from '../firebase';

const NavBar = () => {
    const [category, setCategory] = useState([])
    const { getTotalQty } = useContext (cartContext)

    const totalQty= getTotalQty()
    
    useEffect(() => {
        const firestore = getFirestore()
        const collection = firestore.collection("categories")
        const query = collection.get()
        query 
            .then( (querySnapshot) => {
                const documents = querySnapshot.docs
                const categories = documents.map((doc)=>{
                    return {id: doc.id, ...doc.data()}
                })
                setCategory(categories)
            })
            .catch((error)=>{
                console.log(error)
            })
    }, [])

    return (
            <Navbar
                alignLinks="right"
                brand={<Link to= '/' >
                        <p className='nb-logo'>Busimport</p>
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
                            <li key={category.categoryID}>
                                <NavLink exact to={`/categoria/${category.categoryID}`} className='dropdown-link'>
                                    {category.categoryName}     
                                </NavLink>
                            </li>
                        )
                    })
                }
                
                </Dropdown>
                {
                    totalQty !== 0 && <CartWidget/>
                }
            </Navbar>
    )
}

export default NavBar;