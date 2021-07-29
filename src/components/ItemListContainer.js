import React from 'react';
import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, ProgressBar, Col } from 'react-materialize';
import Categories from './Categories'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const categoryID = useParams();
    
    const getProducts = async () => {
        const data = await fetch('/items.json');
        let responseData = await data.json();

        if (categoryID.categoryID) {
            responseData = responseData.filter( element => element.category === categoryID.categoryID )
        }
        
        setProducts(responseData)
    }

    useEffect(() => {
        getProducts()
    }, [categoryID])
    
    return (
        <>
            { products.length === 0 
                ? 
                <Row>
                    <Col s={12}>
                        <ProgressBar />
                    </Col>
                </Row>
                : 
                <ItemList products={products} /> 
            }       
        </> 
    )
}

export default ItemListContainer;