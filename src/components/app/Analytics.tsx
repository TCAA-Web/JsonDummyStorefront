import { useEffect } from 'react'
import ReactGA from 'react-ga4'

export const Analytics = () => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-PSTX25J177')
  }, [])

  return (
    <div>
      <p>Google Analytics Test</p>
    </div>
  )
}
