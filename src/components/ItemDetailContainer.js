import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Row, ProgressBar, Col } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    const getItems = () => {
        fetch('/items.json', {
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        .then((response) => response.json() )
        .then((json) => {
            setTimeout (() => {
                let itemElegido = json.find(element => element.id == id)

                setItem(itemElegido)
            }, 2000)
        });
    }

    useEffect (() => {
        getItems()
    },[id])

    return (
        <>
            { item.length === 0 
                ? <Row>
                    <Col s={12}>
                        <ProgressBar />
                    </Col>
                </Row>
                
                : 
                    <ItemDetail 
                    key={item.id}
                    item={item}
                    />
            }
        </>
    )
    
}

export default ItemDetailContainer;