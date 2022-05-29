import { Link } from 'react-router-dom'
import { createBuyOrder } from '../../database/firebase'
import useCartContext from '../../store/CartContext'
import swal from 'sweetalert';
import './CartView.css'

const CartView = () => {
    const { cart, removeFromCart, clearCart, cantInCart, calcPriceCart} = useCartContext()
    console.log(cantInCart())

    function handleBuy() {
        const itemsToBuy = cart.map((item) => ({
            title: item.title,
            cant: item.cant,
            price: item.price,
            id: item.id,
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
        
        createBuyOrder(buyOrder);

        swal({
            title: "Confimar Compra",
            text: "Estas seguro que deseas realizar esta compra?",
            icon: "warning",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if(respuesta){
                swal({
                    title: "Listo",
                    text: "La compra se ha realizado con exito",
                    icon: "success",
                    timer:"2000"
                })
            }
        })

        clearCart();
    }

    return (
        <>
            <div className='carrito'>
                {cart.length === 0 && (
                    <>
                        <div className='carrito__vacio'>
                            <p>Tu carrito esta vacio</p>
                            <Link to="/">Volver al catalogo</Link>
                        </div>
                    </>
                )}
                {cart && cart.length !== 0 && (
                    <div className='carrito__productos'>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Accion</th>
                                </tr>
                            </thead>
                            {cart.map((productCart => {
                                return (
                                    <>
                                    <tbody>
                                        <tr>
                                            <th scope="row" key={productCart.id}>{productCart.id}</th>
                                            <td><img className='carrito__img' src={productCart.image} alt="Imagen del producto" /></td>
                                            <td>{productCart.title}</td>
                                            <td>${productCart.cant * productCart.price}</td>
                                            <td>{productCart.cant}</td>
                                            <td><button onClick={() => removeFromCart(productCart.id)} className='carrito__btn eliminar'>Eliminar</button></td>
                                        </tr>
                                    </tbody>
                                    </>
                                )
                                })
                            )}
                        </table>
                        <div>
                            <h3>El precio total es ${calcPriceCart()}</h3>
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