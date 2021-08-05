import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { Row, ProgressBar, Col } from 'react-materialize';
import { getFirestore } from '../firebase';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryID} = useParams();

    useEffect(() => {
        const firestore = getFirestore()
        const collection = firestore.collection("products")

        if(!categoryID) { 
            const query = collection.get()
        
            query 
                .then( (querySnapshot) => {
                    const documents = querySnapshot.docs
                    const items = documents.map((doc)=>{
                        return {id: doc.id, ...doc.data()}
                    })
                    setProducts(items)
                })
                .catch((error)=>{
                    console.log(error)
                })

        } else {
            let query = collection.where("categoryID", "==", categoryID)

            query = query.get()
            query
                .then((snapshot)=>{
                    const documents = snapshot.docs
                    const items = documents.map((doc)=>{
                        return {id: doc.id, ...doc.data()}
                    })
                    setProducts(items)
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
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