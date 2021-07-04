import React from 'react';

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className='center-align'> 
                {props.greeting}
            </h1>
        </div>
    );
}

export default ItemListContainer;