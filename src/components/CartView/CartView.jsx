import { Link } from 'react-router-dom'
import useCartContext from '../../store/CartContext'

const CartView = () => {
    const { cart, removeFromCart, clearCart, calcPriceCart, cantInCart} = useCartContext()

    console.log(cantInCart())

    if (cart.length === 0){
        return <div style={{textAlign: "center"}}>
            <h4>No hay items en el carrito</h4>
            <Link to="/">Volver al catalogo</Link>
        </div>
    } else {
        return <>
        <div>
        {cart.map(productCart => {
        return <div style="carrito" key={productCart.id}>
                <h2>{productCart.title}</h2>
                <h2>{productCart.cant}</h2>
                <h2>${productCart.cant * productCart.price}</h2>
                <button onClick={() => removeFromCart(productCart.id)} style={{color:"red"}} >X</button>
                <div>
                    <h4>El precio total es {() => calcPriceCart()}</h4>
                </div>
            </div>
        })}
        <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    </>
    }
}

export default CartView