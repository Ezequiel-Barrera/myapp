import useCartContext from '../../store/CartContext'

const CartView = () => {

// consumir el CartContext
// mostrar el contenido de CartContext
// mostrar interfaz para eliminar items y/o vaciar el carrito

    const { cart } = useContext()
    console.log("CART", cart)
    return (
        <div>CartView</div>
    )
}

export default CartView