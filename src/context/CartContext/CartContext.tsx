import { createContext } from 'react'
import { Cart } from '../../types/cartTypes'
interface CartInterface {
  cartID: number | null
  setCartID: (cartID: number | null) => void
  cart: Cart
  setCart: (cart: Cart) => void
}

export const CartContext = createContext<CartInterface>({
  cartID: null,
  setCartID: () => {},
  cart: {
    products: [],
    id: 1,
    total: 0,
    discountedTotal: 0,
    userId: 1,
    totalProducts: 0,
    totalQuantity: 0,
  },
  setCart: () => {},
})
