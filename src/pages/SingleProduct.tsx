import { useLoaderData } from 'react-router-dom'
import { Paper } from '../components/shared/Paper'
import { Typography } from '../components/shared/Typography'
import { Divider } from '../components/shared/Divider'
import { Button } from '../components/shared/Button'
import { Image } from '../components/shared/Image'

export const SingleProduct = () => {
  const data = useLoaderData()

  console.log('SingleProduct:', data)

  return (
    <Paper margin='32px auto' width='75%'>
      <Image width='75%' src={data.images[0]} alt={data.title} />
      <Typography variant='h1'>{data.title}</Typography>
      <Typography variant='p'>{data.description}</Typography>
      <Divider />
      <Typography variant='h6'>Price: ${data.price}</Typography>
      <Button align='start' borderRadius={4} withBorder>
        Add to cart
      </Button>
    </Paper>
  )
}
