import { Helmet } from 'react-helmet'
import { Paper } from '../components/shared/Paper'
import { Typography } from '../components/shared/Typography'

export const Home = () => {
  return (
    <Paper margin='32px auto' width='75%' elevation={1}>
      <Helmet>
        <meta property='og:title' content='Dummy JSON store - Home page' />
        <meta property='og:description' content='A fake store made with react as an excersise' />
        <meta
          property='og:image'
          content='https://dummyimage.com/600x400/73bdff/ffffff&text=Dummy+Json+Store'
        />
      </Helmet>
      <Typography variant='h1'>Welcome</Typography>
      <Typography variant='p'>This is a demo app</Typography>
      <Typography variant='p'>It is built with React, TypeScript, and Vite</Typography>
      <Typography variant='p'>It uses React Router for routing, and dummyjson for data testing</Typography>
    </Paper>
  )
}
