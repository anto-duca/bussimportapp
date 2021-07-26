import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail'
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
                let itemElegido = json.filter(element => element.id == id)

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
                
                : item.map((element) => {
                    return (
                        <ItemDetail 
                        key={element.id}
                        item={item}
                        />
                    )})
            }
        </>
    )
    
}

export default ItemDetailContainer;