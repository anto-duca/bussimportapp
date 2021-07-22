import React from 'react'

const  ItemDetail = ({ title, image, description, price }) => {

    return (
            <div className='item-detail-container'>
                <div className='item-header'> 
                    <img src={ image } alt={ title }/>
                    <div>
                        <h4>{ title }</h4>
                        <p>$ { price }</p>
                    </div>
                </div>

                <p>{ description }</p>
            </div>
    )
}

export default ItemDetail;