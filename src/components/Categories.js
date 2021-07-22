import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';

const Categories = () => {

    const [productsCategory, setProductsCategory] = useState([]);

    const {categoryID} = useParams();

    const getCategory = async () => {
        const data = await fetch('/items.json')
        const responseData = await data.json()
        let categorySelected = responseData.filter(element => element.category === categoryID)
        setProductsCategory(categorySelected)
    }

    useEffect(() => {
        getCategory()
    },[categoryID])

    return (        
        <div className='containerCategory'>
            {productsCategory.map(element =>{
                return (
                    <div>
                        <Link to={`/Detalle/${element.id}`} key= {element.id}> 
                            <Item  id={element.id} stock={element.stock} image={element.image} title={element.title} price={element.price}  />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories;