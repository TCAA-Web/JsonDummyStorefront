export const getSingleProduct = async (productID: number) => {
  const response = await fetch(`https://dummyjson.com/products/${productID}`)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json()
  return data
}
