import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [numberOfItems, setNumberOfItems] = useState(0)
    const [cart, setCart] = useState({})

    return (
        <CartContext.Provider value={{ numberOfItems, setNumberOfItems, cart, setCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider