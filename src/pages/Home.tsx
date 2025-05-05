import { Helmet } from 'react-helmet'
import { Paper } from '../components/shared/Paper'
import { Typography } from '../components/shared/Typography'

export const Home = () => {
  return (
    <Paper margin='32px auto' width='75%' elevation={1}>
      <Helmet>
        <title>Dummy Json Store</title>
        <meta name='description' content='This is a test store made using dummyjson' />

        <meta property='og:url' content='https://dummyjsonstorefront.netlify.app' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Dummy Json Store' />
        <meta property='og:description' content='This is a test store made using dummyjson' />
        <meta
          property='og:image'
          content='https://opengraph.b-cdn.net/production/images/03adcc17-725a-4894-b74d-a412eb941034.jpg?token=FMV1AZFhGla_Zf71loxqVZiI3JjhtfD95PVkq-71fls&height=800&width=1200&expires=33282437018'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='dummyjsonstorefront.netlify.app' />
        <meta property='twitter:url' content='https://dummyjsonstorefront.netlify.app' />
        <meta name='twitter:title' content='Dummy Json Store' />
        <meta name='twitter:description' content='This is a test store made using dummyjson' />
        <meta
          name='twitter:image'
          content='https://opengraph.b-cdn.net/production/images/03adcc17-725a-4894-b74d-a412eb941034.jpg?token=FMV1AZFhGla_Zf71loxqVZiI3JjhtfD95PVkq-71fls&height=800&width=1200&expires=33282437018'
        />
      </Helmet>
      <Typography variant='h1'>Welcome</Typography>
      <Typography variant='p'>This is a demo app</Typography>
      <Typography variant='p'>It is built with React, TypeScript, and Vite</Typography>
      <Typography variant='p'>It uses React Router for routing, and dummyjson for data testing</Typography>
    </Paper>
  )
}
