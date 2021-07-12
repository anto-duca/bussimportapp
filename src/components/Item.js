// import React from 'react';
// import ItemCount from './ItemCount';
// import { useState } from 'react';

// const Item = (props) => {
//     const [cart, setCart] = useState([]);
    
//     const onAdd = (form, producto) => {
//         form.preventDefault();
//         console.log(form);
//         console.log(producto);
//     }

//     return (
//         <>
//             <div key={ props.id } className='card'>
//                 <img src={ props.image } alt={ props.title }/>
//                 <div className='card__body'>
//                     <h3>{ props.title }</h3>
//                     <p className='card__body-price'>$ { props.price }</p>
//                     <p className='card__body-desc'>{ props.description }</p>
//                     <ItemCount
//                         key= {props.id}
//                         stock= {props.stock}
//                         image= {props.image}
//                         title = {props.title}
//                         description = {props.description}
//                         price = {props.price}           
//                         addTocart={onAdd}/>
//                 </div>
//             </div> 
//         </>
//     )
// }

// export default Item;