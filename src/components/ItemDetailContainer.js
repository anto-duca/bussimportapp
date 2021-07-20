import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    const getItems =  () => {
        fetch('/items.json', {
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        .then((response) => response.json() )
        .then((json) => {
            setTimeout (() => {
                console.log(json);
                console.log(id);
                let itemElegido = json.filter(element => element.id == id)

                setItem(itemElegido)
            }, 2000)
        });
    }

    useEffect (() => {
        getItems()
    },[id])

    return (
        item.map((element) => {
            return (
                <ItemDetail 
                key={element.id}
                title={element.title}
                description={element.description}
                image={element.image}
                price={element.price}
                />
            )
        })
    )
}

export default ItemDetailContainer;