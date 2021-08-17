import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import ItemDetail from './ItemDetail';
import { Row, ProgressBar, Col } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';
import { getFirestore } from '../firebase';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const history = useHistory()

    useEffect (() => {
        const firestore = getFirestore()
        const collection = firestore.collection("products")
        let query = collection.doc(id).get()

        query
            .then(doc => {
                if(doc.exists) {
                    setItem({id: doc.id, ...doc.data()})
                }else{
                    history.push('/NotFound')
                }
            })
            .catch(err => {
                console.log(err)
            }) 
    },[id])

    return (
        <>
            { item.length === 0 
                ? <Row>
                    <Col s={12}>
                        <ProgressBar />
                    </Col>
                </Row>
                
                : <ItemDetail item={item}/>
            }
        </>
    )
    
}

export default ItemDetailContainer;