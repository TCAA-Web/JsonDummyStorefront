export const getAllProducts = async () => {
  const response = await fetch('https://dummyjson.com/products')
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json()
  return data.products
}
