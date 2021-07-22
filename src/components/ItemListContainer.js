import React from 'react';
import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { Row, ProgressBar, Col } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const data = await fetch('/items.json');
        const responseData = await data.json();
        setProducts(responseData)
    }

    useEffect(() => {
        setTimeout(() => getProducts(), 2000)
    }, [products])

    return (
        <>
            { products.length === 0 
                ? <Row>
                    <Col s={12}>
                        <ProgressBar />
                    </Col>
                </Row>
                : 
                <div className='prod-container'>
                    <ItemList products= { products }/>
                </div>
            }        
        </>
    ) 
}

export default ItemListContainer;