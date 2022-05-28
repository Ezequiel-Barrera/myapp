import { Link } from 'react-router-dom'
import { createBuyOrder } from '../../database/firebase'
import useCartContext from '../../store/CartContext'
import swal from 'sweetalert';

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
        <section>
            <div>
                <div>
                    <h1>
                        Carrito
                    </h1>
                    <hr />
                </div>
                <div>
                    {cart.length === 0 && (
                        <span>
                            <p>Tu carrito esta vacio</p>
                            <Link to="/">Volver al catalogo</Link>
                        </span>
                    )}
                    {cart && cart.length !== 0 && (

                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>fat</td>
                                <td>Otto</td>
                                <td>mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>twitter</td>
                                <td>Otto</td>
                                <td>Thornton</td>
                                <td>mdo</td>
                            </tr>
                        </tbody>
                        </table>



                    )}
                </div>
            </div>

            <div>
                <button>
                <Link to="/">Volver al catalogo</Link>
                </button>
                <button onClick={handleBuy}>
                <Link to="/">Comprar</Link>
                </button>
            </div>
        </section>
        </>
    )
}

export default CartView

{/*

<div>
    <table>
        <thead>
            <tr>
                <th>
                    <span>Producto</span>
                </th>
                <th>
                    <span>Precio</span>
                </th>
                <th>
                    <span>Cantidad</span>
                </th>
                <th>
                    <span>Total</span>
                </th>
                <th>
                    <span>Acciones</span>
                </th>
            </tr>
        </thead>
            {cart && cart.map((item) => {
                <tbody>
                    return <>
                        <div style="carrito" key={productCart.id}>
                        <h2>{productCart.title}</h2>
                        <h2>{productCart.cant}</h2>
                        <h2>${productCart.cant * productCart.price}</h2>
                        <button onClick={() => removeFromCart(productCart.id)} style={{color:"red"}} >X</button>
                        <div>
                            <h4>El precio total es {() => calcPriceCart()}</h4>
                        </div>
                        </div>
                    </>
                </tbody>
            })}
    </table>
</div>
)}
</div>
</div>

<div>
<button>
<Link to="/">Volver al catalogo</Link>
</button>
<button onClick={handleBuy}>
<Link to="/">Comprar</Link>
</button>
</div>
</section>

*/}