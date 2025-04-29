import { Cart, CartProduct } from '../../types/cartTypes'

export const addToCart = async (productID: number, cart: Cart) => {
  const body = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      merge: true,
      products: [
        ...cart.products.map((item: CartProduct) => ({ id: item.id, quantity: item.quantity })),
        {
          id: productID,
          quantity: 1,
        },
      ],
    }),
  }

  try {
    const res = await fetch(`https://dummyjson.com/carts/50`, body)
    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }
    const data = res.json()
    return data
  } catch (error) {
    console.error('Error adding to cart:', error)
    throw error
  }
}
