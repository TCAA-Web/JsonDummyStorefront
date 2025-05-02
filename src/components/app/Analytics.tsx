import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import styled from '@emotion/styled'
import { Button } from '../shared/Button'
import { Typography } from '../shared/Typography'
import { Flex } from '../shared/Flex'
import { useCookies } from 'react-cookie'

const Banner = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`
interface CookieValues {
  ga_accept?: boolean
}

export const Analytics = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState<null | boolean>(null)
  const [cookies, setCookie] = useCookies<'ga_accept', CookieValues>(['ga_accept'])

  useEffect(() => {
    console.log('Cookies', cookies)
    if (cookies.ga_accept === undefined) {
      setAnalyticsEnabled(null)
    } else {
      setAnalyticsEnabled(cookies.ga_accept)
    }
    if (analyticsEnabled == true) {
      ReactGA.initialize('G-PSTX25J177')
    }
  }, [analyticsEnabled, cookies])

  const inOneDay = () => {
    const date = new Date()
    date.setDate(date.getDate() + 1)
    return date
  }

  return (
    cookies.ga_accept === undefined && (
      <Banner>
        <Typography sx={{ marginBottom: '32px' }} variant='h4'>
          Denne side bruger cookies
        </Typography>
        <Typography variant='p'>
          Denne side bruger Google Analytics til at forbedre brugeroplevelsen af denne side. Ved at acceptere
          giver du samtykke til at Google må indsamle oplysninger om din færden på denne hjemmeside, din
          lokation, hardware oplysninger og eventuelle andre oplysninger om dig. Du kan til enhver tid afslå
          og slippe for at vi tracker dig.{' '}
        </Typography>
        <Flex dir='row' gap='16px'>
          <Button onClick={() => setCookie('ga_accept', true, { expires: inOneDay() })}>Accepter</Button>
          <Button onClick={() => setCookie('ga_accept', false, { expires: inOneDay() })}>Afslå</Button>
        </Flex>
      </Banner>
    )
  )
}
