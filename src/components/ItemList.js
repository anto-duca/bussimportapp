import React,  { useEffect, useState } from 'react';
import Item from './Item';

let items = [
    {   
        id: 1,
        stock: 0,
        image: 'images/batidora.jpg',
        title: 'Batidora Daewoo',
        price: 17750,
        description: 'La batidora Daewoo KA2216 cuenta con soporte y bowl integrados que mantienen fijo el producto y facilitan su uso, ya que no es necesario estar pendiente de su funcionamiento. Ahorrá tiempo y ganá en resultados deliciosos. Además incluye batidor de gancho, batidor elíptico, batidor plano, tapa anti salpicaduras.',
    },

    {
        id: 2,
        stock: 2,
        image: 'images/camara.jpg',
        title: 'Cámara Deportiva Noga',
        price: 5699,
        description:'Esta videocámara  N-G4 Full HD negra cuenta con sensor de imagen CMOS, que te permitirá lograr trabajos de excelencia. Este tipo de tecnología digitaliza internamente cada píxel, lo que hace que la máquina procese los fotones a grandes velocidades por segundo. Además, su alta sensibilidad a la luz hará que el equipo soporte condiciones débiles de iluminación.',
    }
]

const ItemList = () => {
    const [products, setProducts] = useState([]);
    
    const getProducts = async () => {
        let promesa = new Promise((resolve, reject)=>{
            setTimeout (()=> {
                resolve(items)
                reject(new Error('Error'))
            }, 2000);    
        }) 

        let data = await promesa;
        setProducts(data)
    }

    useEffect(()=>{
        getProducts()
    }, [products])

    return ( 
        products.map((producto) => {
            return (
                    <Item
                    key={producto.id}
                    image= {producto.image}
                    title = {producto.title}
                    price = {producto.price}     
                    stock= {producto.stock}   
                    />
            )
        })
    )
}

export default ItemList;