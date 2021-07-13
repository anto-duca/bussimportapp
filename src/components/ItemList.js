import React from 'react';
import Item from './Item';

const ItemList = () => {

    let items = [
        {   
            id: 1,
            stock: 0,
            image: 'images/batidora.jpg',
            title: 'Batidora Daewoo',
            price: 17750,
            description: 'La batidora Daewoo KA2216 cuenta con soporte y bowl integrados que mantienen fijo el producto y facilitan su uso, ya que no es necesario estar pendiente de su funcionamiento. Ahorrá tiempo y ganá en resultados deliciosos. Además incluye batidor de gancho, batidor elíptico, batidor plano, tapa anti salpicaduras.'
        },
    
        {
            id: 2,
            stock: 1,
            image: 'images/camara.jpg',
            title: 'Cámara Deportiva Noga',
            price: 5699,
            description:'Esta videocámara  N-G4 Full HD negra cuenta con sensor de imagen CMOS, que te permitirá lograr trabajos de excelencia. Este tipo de tecnología digitaliza internamente cada píxel, lo que hace que la máquina procese los fotones a grandes velocidades por segundo. Además, su alta sensibilidad a la luz hará que el equipo soporte condiciones débiles de iluminación.'
        }
    ]

    const onAdd = (qty, stock) =>{
        (stock === 0) ? alert('No hay stock del producto seleccionado') :
        (qty === 0) ? alert('No podes agregar 0 productos')
                    : alert(`Agregaste ${qty} productos al carrito`)
                
        console.log(stock);
        console.log(qty);            
    }

    return (
        items.map((item) => {
            return (
                <Item
                key= {item.id}
                stock= {item.stock}
                image= {item.image}
                title = {item.title}
                description = {item.description}
                price = {item.price}           
                addTocart={onAdd}/>
            )
        })
    )
}

export default ItemList;