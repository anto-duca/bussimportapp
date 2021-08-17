import { useState, useContext, useEffect } from 'react';
import cartContext from '../context/cartContext';
import { getFirestore } from '../firebase';
import firebase from "firebase/app";
import { Button, Modal } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const Checkout = () => {
    const [ buyer, setBuyer ] = useState({ name: '', lastname: '', phone: '', email: '', email2: '' });
    const [ emailValidation, setEmailValidation ] = useState ('');
    const [ newOrder, setNewOrder ] = useState();
    const { cart, totalPrice, clear } = useContext(cartContext);

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const formValidation = () => {
        if (!buyer.email || !buyer.email2) {
            setEmailValidation('')
        }
        else if (buyer.email === buyer.email2) { 
            setEmailValidation('Los emails conciden')
        } else {
            setEmailValidation('Los emails no conciden')
        }
    }

    useEffect(() => {
        formValidation()
    }, [buyer])

    const createOrder = (e) =>{
        e.preventDefault();

        const firestore = getFirestore();

        let items = cart.map( (obj) => {
                return {
                    id: obj.id,
                    title: obj.title,
                    quantity: obj.qty,
                    price: obj.price,
                };
            })

        const newOrder = {
            buyer: buyer,
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice
        }

        const collection = firestore.collection("orders");
        const query = collection.add(newOrder);

        query
            .then ((result) => {
                setNewOrder(result.id);
                let itemsRef = firestore.collection("products");
                let batch = firestore.batch();

                cart.forEach(
                    (item) => {
                        batch.update(itemsRef.doc(item.id), { stock: item.stock - item.qty});
                    }
                )

                batch.commit().then(() => {
                    clear();
                    setBuyer({name: '', lastname: '', phone: '', email: '', email2: ''});
                });
            }
        )
        .catch(err => {
            console.log(err)
        }) 
    }

    return (
        <div className='checkout-container'>

            <h3> Revisá tu compra </h3>
            {
                cart.map( (e) => {
                    return (
                            <div key={ e.id } className='checkout-container__item'>
                                <p className='cart-item'> { e.title } </p>
                                <p> Unidades: { e.qty }</p>
                                <p> ${ e.price } </p>
                            </div>
                    )})
            }
            <p className='total-price'> Total: ${totalPrice} </p>

            <h3> Detalle de tu compra </h3>
            <div>
                <label htmlFor="name">Nombre<input type="text" name="name" onChange={handleInputChange} id="name" placeholder=" " value={buyer.name}/></label>
                <label htmlFor="lastname">Apellido<input type="text" name="lastname" onChange={handleInputChange} id="lastname" placeholder=" " value={buyer.lastname}/></label>
                <label htmlFor="tel">Teléfono<input type="text" name="phone" onChange={handleInputChange} id="tel" placeholder=" " value={buyer.phone}/></label>
                <label htmlFor="email">Email<input type="email" name="email" onChange={handleInputChange} id="email" placeholder=" " value={buyer.email}/></label>
                <label htmlFor="email2">Confirmá tu email<input type="email" name="email2" onChange={handleInputChange} id="email2" placeholder=" " value={buyer.email2}/></label>
                <span className='email-validation'> {emailValidation} </span>

                <div>
                    {
                        (cart.length > 0 && buyer.name !== '' && buyer.phone !== '' && buyer.email !== '' && buyer.email2 !== '' && buyer.email === buyer.email2)
                        && <Button
                            onClick={createOrder}
                            className="modal-trigger"
                            href="#modal1"
                            node="button"
                        >
                            Confirmar Compra 
                        </Button>
                    }
                    <Modal
                        actions={[
                        <Button flat modal="close" node="button" waves="light">Cerrar</Button>
                        ]}
                        bottomSheet={false}
                        fixedFooter={false}
                        header="Tu orden"
                        id="modal1"
                        open={false}
                        options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                        }}
                    >
                        <p>{newOrder}</p>
                    </Modal>
                    </div>
            </div>
        </div>
    )
}

export default Checkout;