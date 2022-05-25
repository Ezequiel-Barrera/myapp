import { Link } from 'react-router-dom'
import { createBuyOrder } from '../../database/firebase'
import useCartContext from '../../store/CartContext'
import CartItem from '../CartItem/CartItem'
import swal from 'sweetalert';
import Swal from 'sweetalert2'

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
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className='sm:text-3x1 uppercase text-2x1 font-large title-font mb-8'>
                        Carrito
                    </h1>
                    <hr />
                </div>
                <div className='flex flex-wrap sm:-m-4 -mx-8 -mb-10'>
                    {cart.length === 0 && (
                        <span className='w-2/3 text-center m-auto block py-1 px-2 rounded bg-red-50'>
                            <p>Tu carrito esta vacio</p>
                            <Link to="/">Volver al catalogo</Link>
                        </span>
                    )}
                    {cart && cart.length !== 0 && (
                        <div className='m-auto'>
                            <table className='min-w-full table-auto'>
                                <thead className='justify-between'>
                                    <tr className='bg-gray-800'>
                                        <th className='px-8 py-2'>
                                            <span className='text-white'>Producto</span>
                                        </th>
                                        <th className='px-8 py-2'>
                                            <span className='text-white'>Precio</span>
                                        </th>
                                        <th className='px-8 py-2'>
                                            <span className='text-white'>Cantidad</span>
                                        </th>
                                        <th className='px-8 py-2'>
                                            <span className='text-white'>Total</span>
                                        </th>
                                        <th className='px-8 py-2'>
                                            <span className='text-white'>Acciones</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-gray-200'>
                                    {cart && cart.map((item) => (
                                        <CartItem 
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            cantidad={item.cant}
                                            
                                        />
                                    ))}
                                </tbody>
                            </table>
                            <div className='mt-8'>
                                <button onClick={() => removeFromCart(productCart.id)} style={{color:"red"}}>
                                    <box-icon name='x'></box-icon>
                                </button>
                                <button className='flex mx-auto mt-2 text-white ng-green-500 border-3'>
                                    <Link to="/">Volver al catalogo</Link>
                                </button>
                                <button onClick={handleBuy} className='flex mx-auto mt-2 text-white ng-green-500 border-3'>
                                    <Link to="/">Comprar</Link>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CartView