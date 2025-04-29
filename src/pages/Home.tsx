import { Paper } from '../components/shared/Paper'
import { Typography } from '../components/shared/Typography'

export const Home = () => {
  return (
    <Paper margin='32px auto' width='75%' elevation={1}>
      <Typography variant='h1'>Welcome</Typography>
      <Typography variant='p'>This is a demo app</Typography>
      <Typography variant='p'>It is built with React, TypeScript, and Vite</Typography>
      <Typography variant='p'>It uses React Router for routing, and dummyjson for data testing</Typography>
    </Paper>
  )
}
