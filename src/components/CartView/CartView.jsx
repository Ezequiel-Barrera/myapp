import { Link } from 'react-router-dom'
import useCartContext from '../../store/CartContext'

const CartView = () => {

// 1- consumir el CartContext
// 2- mostrar el contenido de CartContext
// 3- mostrar interfaz para eliminar items y/o vaciar el carrito

    const { cart, removeFromCart, clearCart } = useCartContext()
    console.log("CART", cart)

    if (cart.length === 0){
        return <div style={{textAlign: "center"}}>
            <h4>No hay items en el carrito</h4>
            <Link to="/">Volver al catalogo</Link>
        </div>
    } else {
        return <div>
            {cart.map(itemCart => {
            return <div style={{textAlign: "center"}} key={itemCart.id}>
                <h2>{itemCart.title}</h2>
                <h2>{itemCart.cant}</h2>
                <h2>${itemCart.cant * itemCart.price}</h2>
                <button onClick={() => removeFromCart(itemCart.id)} style={{color:"red"}} >X</button>
            </div>
        })}
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    }
}

export default CartView