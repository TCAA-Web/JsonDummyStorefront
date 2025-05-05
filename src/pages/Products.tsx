import { Link, useLoaderData } from 'react-router-dom'
import { Flex } from '../components/shared/Flex'
import { Grid } from '../components/shared/Grid'
import { Card } from '../components/shared/Card'
import { CardMedia } from '../components/shared/CardMedia'
import { CardContent } from '../components/shared/CardContent'
import { Typography } from '../components/shared/Typography'
import { ProductElement } from '../types/productTypes'
import { Divider } from '../components/shared/Divider'
import { Button } from '../components/shared/Button'
import { addToCart } from '../data/actions/addToCart'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext/CartContext'
import { Head } from '../components/shared/Head'
import { Helmet } from 'react-helmet'

export const Products = () => {
  const data = useLoaderData()
  const { setCart, cart } = useContext(CartContext)

  const addToCartHandler = async (productID: number) => {
    const updatedCart = await addToCart(productID, cart)
    setCart(updatedCart)
    alert('Product added to cart')
  }

  const pageMetaTags = {
    id: 'products',
    title: 'Products',
    description: 'Products page',
    keywords: 'products, shop, ecommerce',
    author: 'Kasper',
  }

  return (
    <>
      <Head meta={pageMetaTags} />
      <Helmet>
        <meta property='og:title' content='Dummy JSON store' />
        <meta property='og:description' content='A fake store made with react as an excersise' />
        <meta
          property='og:image'
          content='https://dummyimage.com/600x400/73beff/ffffff&text=Dummy+Json+Store'
        />
      </Helmet>
      <Flex margin='32px auto' dir='column' align='center'>
        <Grid columns='3'>
          {data?.map((product: ProductElement) => (
            <Card key={product.id} elevation={1}>
              <Link to={`/products/${product.id}`}>
                <CardMedia src={product.thumbnail} alt={product.title} />
              </Link>
              <CardContent gap='8px'>
                <Typography variant='h6'>{product.title}</Typography>
                <Typography variant='p'>{product.description.substring(0, 70)}...</Typography>
                <Divider />
                <Typography variant='h6'>Price: ${product.price}</Typography>
                <Button align='end' onClick={() => addToCartHandler(product.id)} borderRadius={4} withBorder>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Flex>
    </>
  )
}
