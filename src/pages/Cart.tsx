import { useContext } from 'react'
import { Paper } from '../components/shared/Paper'
import { Typography } from '../components/shared/Typography'
import { CartContext } from '../context/CartContext/CartContext'
import { CartProduct } from '../types/cartTypes'
import { ListContainer } from '../components/shared/ListContainer'
import { ListItem } from '../components/shared/ListItem'
import { Flex } from '../components/shared/Flex'
import { Divider } from '../components/shared/Divider'
import { Button } from '../components/shared/Button'

export const Cart = () => {
  const { cart } = useContext(CartContext)

  return (
    <Paper margin='32px auto' elevation={1} width='75%'>
      <Typography variant='h1'>Cart</Typography>
      <ListContainer dir='column' align='start'>
        {cart.products.map((product: CartProduct) => (
          <>
            <ListItem textAlign='start' key={product.id}>
              <Flex align='center' dir='row' gap='16px' justify='center'>
                <Typography variant='b'>{product.title}</Typography>
                <Typography variant='p'>Quantity: {product.quantity}</Typography>
                <Typography variant='p'>Price: ${product.price}</Typography>
                <Typography variant='p'>Total: ${product.price * product.quantity}</Typography>
              </Flex>
            </ListItem>
            <Divider />
          </>
        ))}
        {cart.products.length === 0 && <Typography variant='p'>Your cart is empty</Typography>}
      </ListContainer>
      <Typography textAlign='end' variant='h6'>
        Total: ${cart.total}
      </Typography>
      <Button borderRadius={4} width={'15%'} align='end'>
        Go to Checkout
      </Button>
    </Paper>
  )
}
