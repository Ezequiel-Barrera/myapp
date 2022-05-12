import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext)

const {Provider} = CartContext;


export function CartContextProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (item, cant) => {
        if(isInCart()) {
            const newCart = cart.map(cartItem => {
                if(cartItem.id === item.id) {
                    const copyItem = {...cartItem}
                    copyItem.cant += cant
                    return copyItem
                } else {
                    return cartItem
                }
            })
            setCart(newCart)
        }
        else {
            const newItem = {...item, cant}
            setCart([...cart, newItem])
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart]
        const cartFilter = newCart.filter( item => {
            return item.id !== id
        })
        setCart(cartFilter)
    }

    const clearCart = () => { setCart([]) }

    const isInCart = (id) => {
        return cart.some(item => item.id == id)
    }

    return (
        <Provider value={{contextFunction, cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </Provider>
    )
}

export default useCartContext;