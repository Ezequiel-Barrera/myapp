import { Link } from 'react-router-dom'
import { createBuyOrder } from '../../database/firebase'
import useCartContext from '../../store/CartContext'
import swal from '@sweetalert/with-react';
import './CartView.css'

const CartView = () => {
    const { cart, removeFromCart, clearCart, calcPriceCart} = useCartContext()

    function handleBuy() {
        const itemsToBuy = cart.map((item) => ({
            title: item.title,
            cant: item.cant,
            price: item.price,
            id: item.id,
            key: item.id
        }))

        const buyOrder = {
            buyer: {
                name: "Ezequiel",
                phone: "123456",
                email: "ezequiel@coderhouse.com",
            },
            items: itemsToBuy,
            total: calcPriceCart(),
        }
        
        clearCart();

        swal({
            title: "Estas seguro que deseas confirmar la compra?",
            text: "A continuacion tendras los datos de la Orden de Compra",
            icon: "warning",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if(respuesta){
                createBuyOrder(buyOrder)
                .then( respuestaID => {
                    swal({
                        icon: "info",
                        buttons: ["No", "Si"],
                        content: (
                            <div>
                                <h1><strong>Orden de Compra: Datos Personales</strong></h1>
                                <p>Nombre: <strong>{buyOrder.buyer.name}</strong></p>
                                <p>Telefono: <strong>{buyOrder.buyer.phone}</strong></p>
                                <p>Email: <strong>{buyOrder.buyer.email}</strong></p>
                                <p>Total a pagar: <strong>${buyOrder.total}</strong></p>
                            </div>
                        )
                    }).then(respuestas => {
                        if(respuestas){
                            swal({
                                title: "ORDEN DE COMPRA COMPLETADA",
                                text: "'Id' de la compra: "+ respuestaID,
                                icon: "success",
                                content: (<div><strong>Muchas gracias!</strong></div>)
                            })
                        } else {
                            swal({
                                content: (
                                    <div>
                                        <h1><strong>OPERACION CANCELADA</strong></h1>
                                        <p>La orden de compra, no se genero, ha sido Cancelada.</p>
                                        <p>Muy bien, volvamos a la pagina de inicio!</p>
                                    </div>
                                ),
                                icon: "error",
                                button: {
                                    text: "OK",
                                    visible: true,
                                },
                            })
                        }
                    })
                })
            } else {
                swal({
                    content: (
                        <div>
                            <h1><strong>OPERACION CANCELADA</strong></h1>
                            <p>La orden de compra, no se genero, ha sido Cancelada.</p>
                            <p>Muy bien, volvamos a la pagina de inicio!</p>
                        </div>
                    ),
                    icon: "error",
                    button: {
                        text: "OK",
                        visible: true,
                    },
                })
            }
        })   
    }

    return (
        <>
            <div className='carrito'>
                {cart.length === 0 && (
                    <>
                        <div className='carrito__vacio'>
                            <p>Tu carrito esta vacio...</p>
                            <Link to="/">Volver al catalogo</Link>
                        </div>
                    </>
                )}
                {cart && cart.length !== 0 && (
                    <div className='carrito__productos'>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#Id</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Accion</th>
                                </tr>
                            </thead>
                            {cart.map((productCart => {
                                return (
                                    <tbody key={productCart.id}>
                                        <tr>
                                            <th scope="row">{productCart.id}</th>
                                            <td><img className='carrito__img' src={productCart.image} alt="Imagen del producto" /></td>
                                            <td>{productCart.title}</td>
                                            <td style={{color:"#08a05c"}}>${productCart.cant * productCart.price}</td>
                                            <td>{productCart.cant}</td>
                                            <td><button onClick={() => removeFromCart(productCart.id)} className='carrito__btn eliminar'>Eliminar</button></td>
                                        </tr>
                                    </tbody>
                                )
                                })
                            )}
                        </table>
                        <div>
                            <h3>El precio total es ${calcPriceCart()}</h3>
                            <div className="carrito__buttom">
                                <button className='carrito__btn eliminar' to="/" onClick={clearCart}>VACIAR EL CARRITO</button>
                            </div>
                        </div>
                        <div className="carrito__buttom">
                                <Link className='carrito__btn' to="/">Volver al Catalogo</Link>
                                <Link onClick={handleBuy} className='carrito__btn' to="/">Comprar</Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default CartView