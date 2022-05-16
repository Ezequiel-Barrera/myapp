import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext)
const {Provider} = CartContext;

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (product, cant) => {
        if(isInCart(product.id)) {
            const newCart = cart.map(cartProduct => {
                if(cartProduct.id === product.id) {
                    const copyProduct = {...cartProduct}
                    copyProduct.cant += cant
                    return copyProduct
                } else {
                    return cartProduct
                }
            })
            setCart(newCart)
        }
        else {
            const newProduct = {...product, cant}
            setCart([...cart, newProduct])
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart]
        const cartFilter = newCart.filter( product => {
            return product.id !== id
        })
        setCart(cartFilter)
    }

    const clearCart = () => { setCart([]) }

    const isInCart = (id) => {
        return cart.some(productCart => productCart.id == id)
    }

    const getIntemFromCart = (id) => {
        return cart.find(productCart => productCart.id == id)
    }

    const cantInCart = () => {
        const total = 0
        cart.forEach(productCart => { total + productCart.cant})
        return total
    }

    const calcPriceCart = () => {
        const total = 0
        cart.forEach(productCart => { total + productCart.price})
        return total
    }

    return (
        <Provider 
            value={{ 
                cart, 
                addToCart, 
                removeFromCart, 
                clearCart, 
                isInCart, 
                getIntemFromCart,
                cantInCart, 
                calcPriceCart}}>
            {children}
        </Provider>
    )
}

export default useCartContext;