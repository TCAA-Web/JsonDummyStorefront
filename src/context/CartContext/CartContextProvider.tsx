import { ReactNode, useEffect, useState } from 'react'
import { Cart } from '../../types/cartTypes'
import { CartContext } from './CartContext'

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartID, setCartID] = useState<number | null>(null)
  const [cart, setCart] = useState<Cart>({
    products: [],
    id: 1,
    total: 0,
    discountedTotal: 0,
    userId: 1,
    totalProducts: 0,
    totalQuantity: 0,
  })

  useEffect(() => {
    console.log('New cart', cart)
  }, [cart])

  return <CartContext.Provider value={{ cartID, setCartID, cart, setCart }}>{children}</CartContext.Provider>
}
